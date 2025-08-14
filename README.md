# PoeAggregator

Installation

Go to https://github.com/cpieprzak/PoeAggregator/releases
Download the PoeAggregator.Setup.<version number>exe

Once installed, click the "Settings" button.

poesessionid must be set in order to run live searches.

## Building from source

To create a distributable build, run the following commands in the `app` directory:

```
npm install
npm run rebuild
npm run dist
```

Running `npm run rebuild` (powered by [`electron-rebuild`](https://github.com/electron/rebuild)) ensures native modules are rebuilt before packaging with `npm run dist`. 
