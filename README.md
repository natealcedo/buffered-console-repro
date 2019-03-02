# This repo is to replicate a project using winston as its logger

This repo is to replicate how a project works when winston is used for logging and jest at master. I believe this is a regression because jest@24.1.0 works with this setup.

## What I think is happening
It seems that there's a bug in BufferedConsole in `jest-util`. Internally, winston uses `console._stdout.write` when you [log](https://github.com/winstonjs/winston/blob/master/lib/winston/transports/console.js#L79). I don't have enough context on how jest overrides the global console object but I know jest does this so that it can defer logging in `getConsoleOutput`.


## Steps to verify 

With jest@24.1.0
1. Run yarn to install deps
2. Run `yarn test`
3. Verify tests pass

With jest@master
1. Build jest locally
2. cd into `jest/packages/jest-cli` in your local version of jest and run `yarn link`
3. cd back into this project and run `yarn link jest-cli`
4. Run `yarn test`
5. Verify tests fail