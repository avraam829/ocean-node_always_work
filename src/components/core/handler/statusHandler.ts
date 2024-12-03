import os from 'os';
import { CORE_LOGGER } from '../../../utils/logging/common.js';
import { OceanNodeStatus } from '../../../@types/OceanNode.js';
import { OceanNode } from '../../../OceanNode.js';

// Переменная для хранения кэшированного статуса узла
let cachedNodeStatus: OceanNodeStatus | null = null;

export async function status(
  oceanNode: OceanNode,
  nodeId?: string,
  detailed: boolean = false
): Promise<OceanNodeStatus> {
  try {
    // Если статус уже сохранён, возвращаем кэшированные данные
    if (cachedNodeStatus) {
      return cachedNodeStatus;
    }

    CORE_LOGGER.logMessage('Command status started execution...', true);

    if (!oceanNode) {
      CORE_LOGGER.logMessageWithEmoji(
        'Node object not found. Cannot proceed with status command.',
        true,
        '❌',
        'error'
      );
      throw new Error('Node object not found');
    }

    // Сбор данных о состоянии узла
    const nodeStatus: OceanNodeStatus = {
      id: nodeId || 'default-id',
      publicKey: 'default-public-key',
      version: process.env.npm_package_version || 'unknown-version',
      uptime: process.uptime(),
      platform: {
        freemem: os.freemem(),
        loadavg: os.loadavg(),
      },
      provider: [],
      indexer: [],
    };

    // Если требуется, добавляем детальную информацию
    if (detailed) {
      nodeStatus.detailedInfo = {
        additional: 'Detailed data here',
      };
    }

    // Сохраняем кэшированные данные
    cachedNodeStatus = nodeStatus;

    return nodeStatus;
  } catch (error) {
    CORE_LOGGER.logMessageWithEmoji(
      `Error in status handler: ${error.message}`,
      true,
      '❌',
      'error'
    );

    // Возвращаем кэшированные данные или дефолтное значение
    return cachedNodeStatus || {
      id: 'default-id',
      publicKey: 'default-public-key',
      version: 'unknown-version',
      uptime: 0,
      platform: {
        freemem: 0,
        loadavg: [0, 0, 0],
      },
      provider: [],
      indexer: [],
    };
  }
}
