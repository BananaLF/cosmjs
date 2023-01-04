import { isMultisigThresholdPubkey, isSinglePubkey } from "./pubkeys";

describe("pubkeys", () => {
  const pubkeyEd25519 = {
    type: "tendermint/PubKeyEd25519",
    value: "YZHlYxP5R6olj3Tj3f7VgkQE5VaOvv9G0jKATqdQsqI=",
  };
  const pubkeySecp256k1 = {
    type: "ethermint.crypto.v1.ethsecp256k1.PubKey",
    value: "AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP",
  };
  const pubkeyMultisigThreshold = {
    type: "tendermint/PubKeyMultisigThreshold",
    value: {
      threshold: "3",
      pubkeys: [
        {
          type: "ethermint.crypto.v1.ethsecp256k1.PubKey",
          value: "A4KZH7VSRwW/6RTExROivRYKsQP63LnGcBlXFo+eKGpQ",
        },
        {
          type: "ethermint.crypto.v1.ethsecp256k1.PubKey",
          value: "A8/Cq4VigOnDgl6RSdcx97fjrdCo/qwAX6C34n7ZDZLs",
        },
        {
          type: "ethermint.crypto.v1.ethsecp256k1.PubKey",
          value: "ApKgZuwy03xgdRnXqG6yEHATomsWDOPacy7nbpsuUCSS",
        },
        {
          type: "ethermint.crypto.v1.ethsecp256k1.PubKey",
          value: "Aptm8E3WSSFS0RTAIUW+bLi/slYnTEE+h4qPTG28CHfq",
        },
      ],
    },
  };

  describe("isSinglePubkey", () => {
    it("works", () => {
      expect(isSinglePubkey(pubkeyEd25519)).toEqual(true);
      expect(isSinglePubkey(pubkeySecp256k1)).toEqual(true);
      expect(isSinglePubkey(pubkeyMultisigThreshold)).toEqual(false);
    });
  });

  describe("isMultisigThresholdPubkey", () => {
    it("works", () => {
      expect(isMultisigThresholdPubkey(pubkeyEd25519)).toEqual(false);
      expect(isMultisigThresholdPubkey(pubkeySecp256k1)).toEqual(false);
      expect(isMultisigThresholdPubkey(pubkeyMultisigThreshold)).toEqual(true);
    });
  });
});
