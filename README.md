# Detox Sample

## Setup 
1. Gettin Startedのstep1で依存関係をインストールする
https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md

2. テストを走らせるデバイスを設定する
package.jsonを編集  
ios: `detox.configurations.ios.sim.debug.device.type`を任意のiOSシミュレータに変更  
android: `detox.configurations.android.emu.debug.device.avdName`を任意のAndroidエミュレータに変更

3. ビルドして走らせる  
  configいは`ios.sim.debug`とか`android.emu.debug`とか
  ```bash
  # build
  $ detox build -c [config]

  # run test
  $ detox test -c [config]
  ```  

## Document
DetoxのDocumentを参照
https://github.com/wix/Detox/blob/master/docs/README.md
