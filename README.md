## rn2dts

Generate TypeScript ambient declarations from react-native’s Flow source.

This is a work-in-progress. Current results can be found [here](./workbench).

## Usage

```bash
git clone https://github.com/alloy/rn2dts.git
cd rn2dts
yarn install
yarn start
```

## TODO

* Support platform file extensions, at first just by assuming iOS.
* Feed tsc file contents from memory, instead of having to persist to disk first.
* Make warnings from jscodeshift & flow-to-ts show up.
* Comments do not take inserted import typeof lines of code into account, see e.g. [this file](./workbench/Libraries/Components/TextInput/InputAccessoryView.d.ts).