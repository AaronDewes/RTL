export interface BoltzServiceInfo {
  fees?: {percentage?: number; miner: {normal?: number; reverse?: number;}};
  limits?: {minimal?: number; maximal?: number;};
}

export interface BoltzSwap {
  id?: string;
  status?: string;
  privateKey?: string;
  preimage?: string;
  redeemScript?: string;
  invoice?: string;
  lockupAddress?: string;
  expectedAmount?: string;
  timeoutBlockHeight?: number;
  lockupTransactionId?: string;
  refundTransactionId?: string;
}

export interface ChannelCreationInfo {
  swapId?: string;
  status?: string;
  inboundLiquidity?: number;
  private?: boolean;
  fundingTransactionId?: string;
  fundingTransactionVout?: number;
}

export interface BoltzChannelCreation {
  swap?: BoltzSwap;
  channelCreation?: ChannelCreationInfo;
}

export interface BoltzReverseSwap {
  id?: string;
  status?: string;
  privateKey?: string;
  preimage?: string;
  redeemScript?: string;
  invoice?: string;
  claimAddress?: string;
  onchainAmount?: string;
  timeoutBlockHeight?: number;
  lockupTransactionId?: string;
  claimTransactionId?: string;
}

export interface BoltzListSwaps {
  swaps?: BoltzSwap[];
  channelCreations?: BoltzChannelCreation[];
  reverseSwaps?: BoltzReverseSwap[];
}