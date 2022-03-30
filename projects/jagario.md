---
title: "Jagario"
dates:
  start: "2022-01-14"
  end: "2022-01-17"
languages:
  - "C++"
recommend: 1000
summary: "DirectX 11 オンラインゲーム"
banner: "/images/jagario/banner.png"
links:
  - text: 実行ファイルをダウンロード (Coming Soon)
    href: https://example.com/
  - text: ソースコードを見る
    href: https://github.com/i-yuuki/jagario/
  - text: ソースコードを見る (サーバー)
    href: https://github.com/i-yuuki/jagario-server/
---

## 概要

昔どこかで見た気がするオンラインゲームです。ネットワーク基礎の授業の「UDPで何か作る」課題で作りました。

## やったこと

### NearLib の使用

[Near](/projects/near)プロジェクトで作ったライブラリ NearLib を使いました。ちゃんとライブラリとして Near 以外の作品にも使えて幸せです。

## やらなかったこと

### エラーチェック

データが届かなくても壊れても自動で直してはくれないUDPですが、直す課題ではなかったので直していません。

### クライアントとサーバーの一体化

クライアントとサーバーが別のプログラムなので、誰か1人が両方同時に動かす必要があります。1つに詰め込んで「ゲームを作成」的なボタンをつけたらそれっぽいなと思っていたりしました。
