# 30 天 Javascript 從入門到進階

[![Build Status](https://travis-ci.org/tigercosmos/master-js-in-30-days.svg?branch=master)](https://travis-ci.org/tigercosmos/master-js-in-30-days)

這是一本給初學者的 Javascript 教學書，落實閱讀與練習持續 30 天，進入 JavaScript 的世界！

## 作者

[劉安齊](http://tigercosmos.xyz/)：軟體工程師，以 [＠tigercosmos](https://github.com/tigercosmos) 活躍於網路世界。喜歡分享程式開發知識，著有多篇技術文，並經營有「[微中子](https://www.facebook.com/CodingNeutrino/)」科技分享臉書粉專。

## 簡介

Javascript 是目前世界上最重要且廣泛使用的程式語言之一，他可以用來寫網頁、開發 APP，甚至寫後端程式。基本上任何服務都可以透過它來完成，並且因為他非常容易學習與開發，非常受開發者喜愛。本書寫給完全沒有程式設計經驗的初學者，以及有一些程式經驗想要更精進的開發者。本書將透過 Javascript 從最基本的程式設計概念、電腦運作原理開始介紹，並逐步提到如何用 Javascript 開發網站、寫 APP、製作網路爬蟲、開發後端伺服器等等進階概念。希望透過深入淺出的方式，帶領初學者一起享受學習 Javascript 的樂趣！

## 此書連結

- [網頁版連結](http://tigercosmos.xyz/master-js-in-30-days/)
- （待補）電子版下載

## 授權

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/tw/"><img alt="創用 CC 授權條款" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/3.0/tw/88x31.png" /></a><br />本著作係採用<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/tw/">創用 CC 姓名標示-非商業性-禁止改作 3.0 台灣 授權條款</a>授權.

## 貢獻

歡迎任何 issue 與 pull request，任何建議與改進對本書都是一大助益。你可以在[這邊](https://github.com/tigercosmos/master-js-in-30-days)找到此書的 Github Repo。

## 開發

此書採用 Gitbook 進行開發。請確定有 NodeJS 7 以上和 npm 環境。

```sh
# 安裝全域套件
npm install -g gitbook-cli
# 取得專案（或是將連結換成你 fork 的 repo）
git clone https://github.com/tigercosmos/master-js-in-30-days.git
# 進入專案
cd master-js-in-30-days
# 替此專案安裝套件
gitbook install
# 建立靜態網頁
gitbook build
# 使用本地伺服器開發
gitbook serve
```

此專案的 master 為此書的文字稿，當貢獻進入 master 之後，CI 服務會自動將文字稿編譯成網頁，同步更新到此書的網路版頁面。
