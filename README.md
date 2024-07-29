### Feedback about Dash and this tutorial

All of the following are just ideas.  I'm not even sure I want them all.  I also know the blog post isn't meant to be a living document, but they may improve it for your readers / our testers.

1. Add a line for `echo "### Feedback about Dash and this tutorial "> README.md

2. Add something about uploading feedback to GitHub?

3. Update from `npm i dash@4.0.0-dev.16` to `npm i dash@4.0.0-rc.2` or higher

4. Update this tutorial to use:
  ```sh
    npm pkg set \ 
    'scripts.createWallet=node --no-warnings createWallet.js' \
    ...
  ```
like the "Dashmate First Look" tutorial does, but it's okay either way.

5. Change 
> "using Dash’s testnet faucet" 
to 
> "using a Dash testnet faucet, such as [Dash Core Group's](http://faucet.testnet.networks.dash.org) (sometimes buggy) or [CrowdNode's](http://faucet.test.dash.crowdnode.io/)"

6. Update this 
> console.log(`  - Balance: ${identity.balance}`)

to 

> console.log(`  - Balance: ${identity.balance}` credits)

7. Note: Even after refreshing https://platform-explorer.com/identity/7JhZcKKwEpydRBFm1HJHspANvrpqazKzMoS298xPqKUT it shows "Balance	1000000000 Credits", which doesn't match the output from the terminal:
  ```sh
  Identity ID: 7JhZcKKwEpydRBFm1HJHspANvrpqazKzMoS298xPqKUT
  - Balance: 883461360
  ```
I think PE might just be a bit slower than expected to update, because it later caught up.

8. `TopUpIdentities` didn't appear to do anything at first, because the balance didn't update:
  ```
  rionpublic@Rachaels-iMac first-look-dash % npm run retrieveIdentities

  > first-look-dash@1.0.0 retrieveIdentities
  > node --env-file=.env --no-warnings scripts/retrieveIdentities

  warn: Running on a NodeJS env without any specified adapter. Data will not persist.
  Retrieved Identity IDs:
  [
  "7JhZcKKwEpydRBFm1HJHspANvrpqazKzMoS298xPqKUT"
  ]
  Identity ID: 7JhZcKKwEpydRBFm1HJHspANvrpqazKzMoS298xPqKUT
  - Balance: 883461360
  rionpublic@Rachaels-iMac first-look-dash % echo > scripts/topUpIdentities.js
  rionpublic@Rachaels-iMac first-look-dash % npm run topUpIdentities

  > first-look-dash@1.0.0 topUpIdentities
  > node --env-file=.env --no-warnings scripts/topUpIdentities

  warn: Running on a NodeJS env without any specified adapter. Data will not persist.
  IDENTITY_CREDIT_BALANCE for ID 7JhZcKKwEpydRBFm1HJHspANvrpqazKzMoS298xPqKUT: 883461360
  rionpublic@Rachaels-iMac first-look-dash % 
  ```
...but then I ran the script 2 more times and it updated then:
  ```
  warn: Running on a NodeJS env without any specified adapter. Data will not persist.
  IDENTITY_CREDIT_BALANCE for ID 7JhZcKKwEpydRBFm1HJHspANvrpqazKzMoS298xPqKUT: 200868376300
  rionpublic@Rachaels-iMac first-look-dash % npm run topUpIdentities

  > first-look-dash@1.0.0 topUpIdentities
  > node --env-file=.env --no-warnings scripts/topUpIdentities

  warn: Running on a NodeJS env without any specified adapter. Data will not persist.
  IDENTITY_CREDIT_BALANCE for ID 7JhZcKKwEpydRBFm1HJHspANvrpqazKzMoS298xPqKUT: 300860960220
  ```

9. Had trouble registering a name:
```
  rionpublic@Rachaels-iMac first-look-dash % npm run registerName

  > first-look-dash@1.0.0 registerName
  > node --env-file=.env --no-warnings scripts/registerName

  warn: Running on a NodeJS env without any specified adapter. Data will not persist.
  warn: [Wallet: 40331ae54d] [TransactionsSyncWorker] Block height changed handler is already set.
  warn: [Wallet: 40331ae54d] [TransactionsSyncWorker] Block height changed handler is already set.
  Something went wrong:
   [StateTransitionBroadcastError: JsonSchemaError: Additional properties are not allowed ('dashUniqueIdentityId' was unexpected), path: /records] {
  code: 10101,
  cause: JsonSchemaError { __wbg_ptr: 6448832 }
  }
  rionpublic@Rachaels-iMac first-look-dash % npm run registerName

  > first-look-dash@1.0.0 registerName
  > node --env-file=.env --no-warnings scripts/registerName
  
  warn: Running on a NodeJS env without any specified adapter. Data will not persist.
  Something went wrong:
   [StateTransitionBroadcastError: JsonSchemaError: Additional properties are not allowed ('dashUniqueIdentityId' was unexpected), path: /records] {
  code: 10101,
  cause: JsonSchemaError { __wbg_ptr: 6448976 }
  }
  rionpublic@Rachaels-iMac first-look-dash % npm run registerName
 
  > first-look-dash@1.0.0 registerName
  > node --env-file=.env --no-warnings scripts/registerName

  warn: Running on a NodeJS env without any specified adapter. Data will not persist.
  warn: [Wallet: 40331ae54d] [TransactionsSyncWorker] Block height changed handler is already set.
  warn: [Wallet: 40331ae54d] [TransactionsSyncWorker] Block height changed handler is already set.
  Something went wrong:
   [StateTransitionBroadcastError: JsonSchemaError: Additional properties are not allowed ('dashUniqueIdentityId' was unexpected), path: /records] {
  code: 10101,
  cause: JsonSchemaError { __wbg_ptr: 6444672 }
  }
```

10. I'm guessing the above is related to this: https://discord.com/channels/670271785974890526/670599939528851476/1265748386435567626 and this: https://github.com/dashpay/platform/issues/1999

11. Issue running `registerContract`:
```
  rionpublic@Rachaels-iMac first-look-dash % npm run registerContract

  > first-look-dash@1.0.0 registerContract
  > node --env-file=.env --no-warnings scripts/registerContract

  warn: Running on a NodeJS env without any specified adapter. Data will not persist.

  CONTRACT_ID="HPwufGMmdyyM3SvSGu3Dpsah6pLDChagdssuvhd9GuZu"
  node:events:498
      throw er; // Unhandled 'error' event
      ^
  
  SPVError: Chain contains orphan chunks
    at SpvChain.validate (/Users/rionpublic/code/dash/first-look-dash/node_modules/@dashevo/dash-spv/lib/spvchain.js:115:13)
    at BlockHeadersProvider.historicalDataObtainedHandler (/Users/rionpublic/code/dash/first-look-dash/node_modules/@dashevo/dapi-client/lib/BlockHeadersProvider/BlockHeadersProvider.js:229:21)
    at Object.onceWrapper (node:events:634:28)
    at BlockHeadersReader.emit (node:events:520:28)
    at ClientReadableStreamImpl.endHandler (/Users/rionpublic/code/dash/first-look-dash/node_modules/@dashevo/dapi-client/lib/BlockHeadersProvider/BlockHeadersReader.js:273:16)
    at ClientReadableStreamImpl.emit (node:events:520:28)
    at endReadableNT (node:internal/streams/readable:1696:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
  Emitted 'error' event on DAPIClient instance at:
    at BlockHeadersProvider.<anonymous> (/Users/rionpublic/code/dash/first-look-dash/node_modules/@dashevo/dapi-client/lib/DAPIClient.js:84:12)
    at BlockHeadersProvider.emit (node:events:532:35)
    at BlockHeadersProvider.errorHandler (/Users/rionpublic/code/dash/first-look-dash/node_modules/@dashevo/dapi-client/lib/BlockHeadersProvider/BlockHeadersProvider.js:194:10)
    at BlockHeadersProvider.historicalDataObtainedHandler (/Users/rionpublic/code/dash/first-look-dash/node_modules/@dashevo/dapi-client/lib/BlockHeadersProvider/BlockHeadersProvider.js:233:12)
    at Object.onceWrapper (node:events:634:28)
    [... lines matching original stack trace ...]
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
```

12. Update client in "Register and Retrieve Identity" step (and subsequent steps so the copy/paste doesn't overwrite it) to this instead:
```js
    import Dash from "dash"

    const {NETWORK,MNEMONIC} = process.env

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
    })
```
(doing this and uncommenting the `dapiClient` line fixed the issue from item 11 above)

13. Move the `CONTRACT_ID="HPwufg..."` output line down after the contract json output so that it doesn't give a false success signal in the output.  Having it lower makes it more obvious that we need to paste that in the `.env` file after we get it.

14. Move the `DOCUMENT_ID="421B5E..."` output line down after the document json output (similar to above), and make it clear to paste it into the `.env` file.

15. Might make more sense to number the script files so they are ordered in the editor/IDE sequentially (since this is a tutorial) instead of alphabetically.

16. Replace "YOUR-NAME-HERE" with "LABEL" or "Your-LABEL-here" in the following:
> Open localhost:3001/name/YOUR-NAME-HERE or send a GET request with curl.
> Terminal window
> `curl "http://localhost:3001/name/YOUR-NAME-HERE" -s | json_pp`
17. Remove/change `dashUniqueIdentityId` as shown in my updated `registerName.js` file (for `dash` v1.0.0-rc.2 and up).
