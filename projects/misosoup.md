---
title: "Miso Soup"
dates:
  start: "2022-01-27"
  end: "2022-01-27"
languages:
  - "HTML"
  - "CSS"
  - "JavaScript"
recommend: 2000
summary: "Vue.js 未来創造展の作品を見やすく一覧表示するサイト"
banner: "/images/misosoup/banner.png"
links:
  - text: サイトを見る
    href: https://misosoup.vercel.app/
  - text: ソースコードを見る
    href: https://github.com/i-yuuki/misosoup/
---

## 概要

Miso Soup (みそすーぷ) はHAL生が卒業制作を出展する[未来創造展](https://miraisozoten.com/)の作品を一覧表示するサイトです。作品を鑑賞する課題が学校で出た際、本家サイトの周回がつらかったため作品データを抜き取って作りました。

### ただの作品一覧としてのこだわり

100近い作品が出ている会場を1日で見て回るというのは結構大変なので、作品探しを少しでも楽にできないかと考え、作品一覧のみを目的にしたページを作ることにしました。

* **軽い** ― 本家サイトにある謎に`<canvas>`な作品表示とやたら多い3Dパーティクルを省き、本当にただの一覧にしました。ちなみに、これにより本家のトップページではできない「リンクを新しいタブで開く」ができるようになりました (もともと Miso Soup を作ったのは新しいタブで開きたかったからです) 。
* **高密度グリッド配置** ― 一応本家にも作品一覧的なページを発見したのですが、作品一つ一つが大きくスクロールが大変 (しかも丁度いいことにスクロールバーがありません！) なので、小さめに配置しました。
* **豊富な表示オプション (new!)** ― 2022年版を作るにあたり表示オプションを追加しました。課題では4年生と2年制それぞれの作品のレポートを書く必要があったため、特定の学科のみ表示できる絞り込みを作りました。ついでに作品のシャッフルと名古屋校・大阪校の作品表示もできるようになりました。

## 画像

<figure>
  <img src="/images/misosoup/cpu.png" />
  <figcaption>Chromeがとても軽い</figcaption>
</figure>

<figure>
  <img src="/images/misosoup/comparison.png" />
  <figcaption>左: 本家 (1画面に2作品映る) / 右: Miso Soup (1画面に10作品映る)</figcaption>
</figure>

<figure>
  <img src="/images/misosoup/options.png" />
  <figcaption>表示オプション (詳細設定ON)</figcaption>
</figure>
