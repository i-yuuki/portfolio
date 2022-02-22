---
title: "Near & NearLib"
dates:
  start: "2021-07-12"
  end: "2022-02-22"
languages:
  - "C++"
recommend: 10000
summary: "DirectX 11 ライブラリと実験集"
banner: "/images/near/banner.png"
video: "/videos/near.webm"
links:
  - text: 概要動画を見る
    href: https://drive.google.com/file/d/1YQZuJY03IfkM3_4sgCjN5mdEexim4JS8/view?usp=sharing
  - text: NearLib の動画を見る
    href: https://drive.google.com/file/d/1sJbjC1YzxAeXXCXgtSmE2hh23iKZwtIJ/view?usp=sharing
  - text: 実行ファイルとプレイ動画を見る
    href: https://drive.google.com/drive/folders/15LGdDp-phcjiOhAyX09JQzAVBz0xfqoh?usp=sharing
  - text: ソースコードを見る
    href: https://github.com/i-yuuki/near/tree/gui
---

## 概要

Near (にあー) と NearLib (にありぶ) は、C++ で DirectX 11 を直接触ったグラフィックの実験集とライブラリです。

このページは書きかけです。明日くらいに何かが増えているかもしれません。

## Near

Near 本体部分は、[Portal 2](https://store.steampowered.com/app/620/Portal_2/) のポータルの再現に挑戦し、のちに見た目を [Manifold Garden](https://manifold.garden/) 風にしたものです。

### ポータル

軽く調べたところ、ポータルの描画は大きく2方式、ポータルの先を描画したテクスチャのポリゴンを配置する方式と、ポータルポリゴンでステンシルマスクをかけてポータルの先を描画していく方式があるようです。

テクスチャ式は特に Unity などのエンジンでカメラとレンダーテクスチャを増やすだけで簡単に作ることができ、検索するとこの方式の動画がたくさん出てきます。

ステンシル式は情報が少ないですが本家 Portal 2 で使われているようで、ステージ全体を1パスで描画します。ポータルごとにテクスチャを作る必要がないためメモリに優しいです。

今回は本家をまねしたかったことや、実装を始めた時点で1パス描画だけ作っていたことから、ステンシル式を採用しました。

```
再帰描画(level):
  不透明オブジェクトを描画

  各ポータルでループ:
    level ++
    ポータル部分のステンシルを level にする
    ステンシル >= level でマスクをかける
    深度をクリア
    カメラをポータルの先に移動
    再帰描画(level)
    ステンシル、ステンシルマスク、深度とカメラを元に戻す
    level --

  透明オブジェクトを描画
```

## NearLib

DirectX の初期化コードを別のプロジェクトに配置していたいたらライブラリみたいになりました。初期化の簡単さを重視した結果、16行でゲームループが出るようになりました。

```cpp
#include <NearLib/near.h>
#pragma comment(linker,"/manifestdependency:\"type='win32' name='Microsoft.Windows.Common-Controls' version='6.0.0.0' processorArchitecture='*' publicKeyToken='6595b64144ccf1df' language='*'\"")
int APIENTRY WinMain(HINSTANCE, HINSTANCE, LPSTR, int){
  Near::InitParams initParams;
  initParams.width = 1280;
  initParams.height = 720;
  initParams.windowTitle = u8"ちょっとした作品";
  Near::init(initParams);
  while(!Near::shouldClose()){
    Near::pollEvents();
    Near::renderer()->clear(Near::Math::Color(0.5f, 0.5f, 0.5f, 1.0f));
    Near::renderer()->present();
  }
  Near::uninit();
  return 0;
}
```

### UI

CSS と [Flutter](https://flutter.dev/) を参考にした flex レイアウトを搭載したUIです。

## やりたかったこと

### NearLib 2

## 参考

- [Valve developers discuss Portal problems](https://www.youtube.com/watch?v=riijspB9DIQ) ― 本家 Portal 2 で使われたステンシル式の解説
- [Coding Adventure: Portals](https://www.youtube.com/watch?v=cWpFZbjtSQg) ― テクスチャ式のポータル描画をUnityで作る動画
