import {
  createLCDClient,
  WalletLCDClientConfig,
} from '@coin-acc-aptos/wallet-types';
import { LCDClient } from '@terra-money/terra.js';
import { useMemo } from 'react';
import { useWallet } from './useWallet';

export function useLCDClient(
  lcdClientConfig?: WalletLCDClientConfig,
): LCDClient {
  const { network } = useWallet();

  return useMemo<LCDClient>(() => {
    return createLCDClient({ lcdClientConfig, network });
  }, [lcdClientConfig, network]);
}
