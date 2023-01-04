export const faucet = {
  mnemonic:
    "economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone",
  pubkey: {
    type: "ethermint.crypto.v1.ethsecp256k1.PubKey",
    value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ",
  },
  address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
};

export function ledgerEnabled(): boolean {
  return !!process.env.LEDGER_ENABLED;
}

export function pendingWithoutLedger(): void {
  if (!ledgerEnabled()) {
    return pending("Set LEDGER_ENABLED to enable Ledger-based tests");
  }
}

export function simappEnabled(): boolean {
  return !!process.env.SIMAPP42_ENABLED || !!process.env.SIMAPP44_ENABLED;
}

export function pendingWithoutSimapp(): void {
  if (!simappEnabled()) {
    return pending("Set SIMAPP42_ENABLED or SIMAPP44_ENABLED to enable Simapp-based tests");
  }
}

export const simapp = {
  endpoint: "ws://localhost:26658",
  chainId: "simd-testing",
};
