import { Transfer as TransferEvent } from '../generated/USDC/USDC'
import { Transfer, TransferStats } from '../generated/schema'
import { BigInt } from '@graphprotocol/graph-ts'

const TRACKED_ADDRESS = "0xYourAddressHere".toLowerCase()

export function handleTransfer(event: TransferEvent): void {
  if (event.params.to.toHexString().toLowerCase() != TRACKED_ADDRESS) {
    return
  }

  const transferId = event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  
  let transfer = new Transfer(transferId)
  transfer.from = event.params.from.toHexString()
  transfer.to = event.params.to.toHexString()
  transfer.value = event.params.value
  transfer.timestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash.toHexString()
  transfer.blockNumber = event.block.number
  transfer.save()

  let stats = TransferStats.load("1")
  if (stats == null) {
    stats = new TransferStats("1")
    stats.totalTransfers = BigInt.fromI32(0)
    stats.totalValue = BigInt.fromI32(0)
  }
  stats.totalTransfers = stats.totalTransfers.plus(BigInt.fromI32(1))
  stats.totalValue = stats.totalValue.plus(event.params.value)
  stats.lastUpdateTime = event.block.timestamp
  stats.save()
}