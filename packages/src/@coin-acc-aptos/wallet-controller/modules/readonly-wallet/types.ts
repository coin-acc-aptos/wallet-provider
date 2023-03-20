import { NetworkInfo } from '@coin-acc-aptos/wallet-types';

export interface ReadonlyWalletSession {
  network: NetworkInfo;
  terraAddress: string;
}
