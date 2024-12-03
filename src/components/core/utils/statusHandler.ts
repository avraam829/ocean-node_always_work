import os from 'os';
import {
  LOG_LEVELS_STR,
  GENERIC_EMOJIS
} from '../../../utils/logging/Logger.js';
import {
  OceanNodeStatus,
  OceanNodeProvider,
  OceanNodeIndexer,
  StorageTypes,
  OceanNodeConfig
} from '../../../@types/OceanNode.js';
import {
  existsEnvironmentVariable,
  getConfiguration
} from '../../../utils/index.js';
import { ENVIRONMENT_VARIABLES } from '../../../utils/constants.js';
import { CORE_LOGGER } from '../../../utils/logging/common.js';
import { OceanNode } from '../../../OceanNode.js';
import { isAddress } from 'ethers';
import { typesenseSchemas } from '../../database/TypesenseSchemas.js';
import { SupportedNetwork } from '../../../@types/blockchain.js';

// Получение валидных ETH-адресов администраторов
function getAdminAddresses(config: OceanNodeConfig): string[] {
  const validAddresses: string[] = [];
  if (config.allowedAdmins && config.allowedAdmins.length > 0) {
    for (const admin of config.allowedAdmins) {
      if (isAddress(admin)) {
        validAddresses.push(admin);
      } else {
        CORE_LOGGER.log(
          LOG_LEVELS_STR.LEVEL_ERROR,
          `Invalid ETH address format: ${admin}`
        );
      }
    }
  }
  return validAddresses;
}

// Поддерживаемые типы хранилища
const supportedStorageTypes: StorageTypes = {
  url: true,
  arwave: existsEnvironmentVariable(ENVIRONMENT_VARIABLES.ARWEAVE_GATEWAY),
  ipfs: existsEnvironmentVariable(ENVIRONMENT_VARIABLES.IPFS_GATEWAY)
};

// Информация о платформе
const platformInfo = {
  cpus: os.cpus().length,
  freemem: os.freemem(),
  totalmem: os.totalmem(),
  loadavg: os.loadavg(),
  arch: os.arch(),
  machine: os.machine?.() || 'unknown',
  platform: os.platform(),
  osType: os.type(),
  node: process.version
};

// Информация о провайдерах
function getProviderInfo(config: OceanNodeConfig): OceanNodeProvider[] {
  const providers: OceanNodeProvider[] = [];
  for (const [key, supportedNetwork] of Object.entries(
    config.supportedNetworks
  )) {
    const provider: OceanNodeProvider = {
      chainId: key,
      network: supportedNetwork.network
    };
    providers.push(provider);
  }
  return providers;
}

// Информация об индексаторах
async function getIndexerInfo(
  oceanNode: OceanNode,
  config: OceanNodeConfig
): Promise<OceanNodeIndexer[]> {
  const indexerNetworks: OceanNodeIndexer[] = [];
  if (config.indexingNetworks) {
    for (const [key, indexedNetwork] of Object.entries(config.indexingNetworks)) {
      if (config.hasIndexer) {
        const blockNr = await getIndexerBlockInfo(oceanNode, indexedNetwork);
        const indexer: OceanNodeIndexer = {
          chainId: key,
          network: indexedNetwork.network,
          block: blockNr
        };
        indexerNetworks.push(indexer);
      }
    }
  }
  return indexerNetworks;
}

// Получение информации о последнем блоке
async function getIndexerBlockInfo(
  oceanNode: OceanNode,
  supportedNetwork: SupportedNetwork
): Promise<string> {
  let blockNr = '0';
  try {
    const { indexer: indexerDatabase } = oceanNode.getDatabase();
    const { lastIndexedBlock } = await indexerDatabase.retrieve(
      supportedNetwork.chainId
    );
    blockNr = lastIndexedBlock.toString();
  } catch (error) {
    CORE_LOGGER.log(
      LOG_LEVELS_STR.LEVEL_ERROR,
      `Error fetching last indexed block for network ${supportedNetwork.network}: ${(error as Error).message}`
    );
  }
  return blockNr;
}

// Глобальное кэширование статуса
let nodeStatus: OceanNodeStatus | null = null;

// Функция обработки команды "status"
export async function status(
  oceanNode: OceanNode,
  nodeId?: string,
  detailed: boolean = false
): Promise<OceanNodeStatus | null> {
  CORE_LOGGER.logMessage('Command status started execution...', true);
  if (!oceanNode) {
    CORE_LOGGER.logMessageWithEmoji(
      'Node object not found. Cannot proceed with status command.',
      true,
      GENERIC_EMOJIS.EMOJI_CROSS_MARK,
      LOG_LEVELS_STR.LEVEL_ERROR
    );
    return null;
  }

  const config = await getConfiguration();

  // Если нет кэшированного статуса, создаем новый
  if (!nodeStatus) {
    nodeStatus = {
      id: nodeId && nodeId !== undefined ? nodeId : config.keys.peerId.toString(),
      publicKey: Buffer.from(config.keys.publicKey).toString('hex'),
      address: config.keys.ethAddress,
      version: process.env.npm_package_version || 'unknown',
      http: config.hasHttp,
      p2p: config.hasP2P,
      provider: [],
      indexer: [],
      supportedStorage: supportedStorageTypes,
      platform: { ...platformInfo },
      codeHash: config.codeHash,
      allowedAdmins: getAdminAddresses(config),
      uptime: 0 // Заполним позже
    };
  }

  // Обновляем информацию о провайдерах и индексаторах
  if (config.supportedNetworks) {
    nodeStatus.provider = getProviderInfo(config);
    nodeStatus.indexer = await getIndexerInfo(oceanNode, config);
  }

  // Обновляем динамические данные
  nodeStatus.platform.freemem = os.freemem();
  nodeStatus.platform.loadavg = os.loadavg();
  nodeStatus.uptime = process.uptime();

  // Дополнительная информация для "detailed" запроса
  if (detailed) {
    nodeStatus.c2dClusters = config.c2dClusters || [];
    nodeStatus.supportedSchemas = typesenseSchemas.ddoSchemas || [];
  }

  return nodeStatus;
}
