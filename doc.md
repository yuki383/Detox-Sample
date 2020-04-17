# Detox 調査

## 課題

- E2E のテストライブラリ・フレームワークは swift や java, kotlin で書く必要がある

## 要求

- javascript など慣れた言語でテストを書きたい

- Bitrise などで自動化したい

## 良かった点

- テストを javascript で書けるのでドキュメントを少し読めばある程度使えるようになる。

- 同じコードで iOS, Android のテストが実行できるのでコストがかからない

- iOSはBitriseでテストを行うことができる

## 懸念点

- [Detox の android のドキュメント](https://github.com/wix/Detox/blob/master/docs/Introduction.Android.md)通りにやると、`build.gradle`などに少し依存関係を追加することになるので、既存の環境が壊れないか少し心配。

- 要素を取得する方法として[TestID を用いた方法がお勧めされている](https://github.com/wix/Detox/blob/master/docs/APIRef.Matchers.md)。動作的には問題ないが少しコードを汚染するかもしれない。

- [Bitrise のドキュメント](https://devcenter.bitrise.io/jp/testing/running-detox-tests-on-bitrise/)にも書いてあるが、Bitrise では iOS のテストしか対応していない

- Detox に限った話ではないかもしれないが、Android の Espresso, iOS の XCUITest に比べると情報が少なそう？
