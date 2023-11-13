import { parentPort, workerData } from 'worker_threads'
import {
  getDeployedContractBlock,
  getLastIndexedBlock,
  getNetworkHeight,
  processBlocks
} from './utils.js'
import { Blockchain } from '../../utils/blockchain.js'

const { network } = workerData
const blockchain = new Blockchain(JSON.parse(process.env.RPCS))
const provider = blockchain.getProvider(network)
console.log('worker for network', network)

async function proccesNetworkData(): Promise<void> {
  const lastIndexedBlock = await getLastIndexedBlock(provider)

  const networkHeight = await getNetworkHeight(provider)

  const deployedBlock = await getDeployedContractBlock(network)

  let startBlock =
    lastIndexedBlock && lastIndexedBlock > deployedBlock
      ? lastIndexedBlock
      : deployedBlock

  if (networkHeight > startBlock) {
    let chunkSize = 100
    let remainingBlocks = networkHeight - lastIndexedBlock

    while (remainingBlocks > 0) {
      const blocksToProcess = Math.min(chunkSize, remainingBlocks)

      const processedBlocks = await processBlocks(provider, startBlock, blocksToProcess)

      startBlock += processedBlocks

      parentPort.postMessage({ processedBlocks })

      if (processedBlocks !== blocksToProcess) {
        chunkSize = Math.floor(chunkSize / 2)
      }

      remainingBlocks -= processedBlocks
    }
  }

  parentPort.postMessage({ event: 'metadata-created' })
}

parentPort.on('message', (message) => {
  console.log('message --', message)
  if (message.method === 'start-crawling') {
    console.log('start-crawling', message.method)
    proccesNetworkData()
  }
})
