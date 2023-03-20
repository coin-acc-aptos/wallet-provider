# Common types of `@coin-acc-aptos/wallet-provider`

This is a separate package because it is used for [`@coin-acc-aptos/use-wallet`](https://www.npmjs.com/package/@coin-acc-aptos/use-wallet), [`@coin-acc-aptos/wallet-controller`](https://www.npmjs.com/package/@coin-acc-aptos/wallet-controller), and [`@coin-acc-aptos/wallet-provider`](https://www.npmjs.com/package/@coin-acc-aptos/wallet-provider).

You don't have to use this separately.

It is re-exported from them.

# APIs

- Types
  - `enum WalletStatus`
  - `enum ConnectType`
  - `type WalletInfo`
  - `type WalletStates`
  - `type NetworkInfo`
  - `type TxResult extends CreateTxOptions`
  - `type SignResult extends CreateTxOptions`
  - `type SignBytesResult`
- Error types
  - `class UserDenied extends Error`
  - `class CreateTxFailed extends Error`
  - `class TxFailed extends Error`
  - `class Timeout extends Error`
  - `class TxUnspecifiedError extends Error`
