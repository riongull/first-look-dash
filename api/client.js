import Dash from "dash"

const {NETWORK, MNEMONIC, CONTRACT_ID} = process.env

export const client = new Dash.Client({
  network: NETWORK,
  // picking a known good ip address can sometimes help reliablility
  dapiAddresses: ["44.227.137.77:1443"],
  wallet: {
    mnemonic: MNEMONIC,
    unsafeOptions: {
      skipSynchronizationBeforeHeight: 990000,
    },
  },
  apps: {
    tutorialContract: {
      contractId: CONTRACT_ID,
    },
  },
})