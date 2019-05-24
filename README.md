# Utils
機能 + テストの標準を示したものです。
テストには[JEST](`https://jestjs.io/en/`)を使用しています。

## 利用ツール
- node.js ^11.6
- jest: ^24.8.0

## 構築手順
npm管理です。
1. `yarn install`

## ドキュメント構造
- utilsディレクトリ直下
  - utils群
- __tests__ディレクトリ下
  - test群

※webpackやbabelを使っていないため es5の import/exportではなく、nodeのrequire/module.exportsを使用。

## テストの仕方
今回は`package.json`にscriptを記述してあるため、`yarn test`でテストが実行される。
もしscriptを書かない場合は`yarn jest`とコマンドを打つ。
オプションをつけることで様々なことができる。詳しくは[JEST](`https://jestjs.io/en/`)を見てください。

## プロジェクトに導入する場合
**＜しないといけないこと＞**
- 関数を細かく分ける
- 関数はアウトプットを持つような形にする
- 関数をexportする

**＜プロジェクトにおけるドキュメント構造＞**
- JSファイルにおいてはどこにおいても良い
- __tests__ディレクトリはトップディレクトリ直下に置く
- __tests__の下のファイルは基本的に`.test.js`の拡張子をつける

尚、トランスパイラを使う場合はそれに従った記述が好ましい!
