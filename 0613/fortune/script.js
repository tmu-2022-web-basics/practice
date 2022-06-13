// 結果の文字列の配列
const results = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];

// ボタン要素を取得
const button = document.querySelector('#fortune');

// ボタンのクリックイベントで実行されるイベントハンドラ関数を登録
// ↓ button.addEventLisner("click", function () {... と書いてもよい。
button.onclick = function () {

  // 結果表示のdiv要素を取得
  const div = document.querySelector('#result');

  // 結果をresults配列からランダムに取得
  const result = results[Math.floor(Math.random() * results.length)];

  // div要素の内容に結果を表示
  div.textContent = "きょうのあなたの運勢は、" + result + "です！";

  // div要素のスタイルの変更
  div.style.opacity = 1;
  div.style.fontWeight = "bold";

  // ボタンを無効化
  button.disabled = true;
  button.textContent = "1回だけよ！";
};