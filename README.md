# Detox Sample
テストコードは`e2e/firstTest.spec.js`


## Setup

1. Gettin Started の step1 で依存関係をインストールする
   https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md

2. テストを走らせるデバイスを設定する
   package.json を編集  
   ios: `detox.configurations.ios.sim.debug.device.type`を任意の iOS シミュレータに変更  
   android: `detox.configurations.android.emu.debug.device.avdName`を任意の Android エミュレータに変更

3. ビルドして走らせる  
   config は`ios.sim.debug`とか`android.emu.debug`とか

```bash
# build
$ detox build -c [config]

# run test
$ detox test -c [config]
```

## Document

Detox の Document を参照
https://github.com/wix/Detox/blob/master/docs/README.md
