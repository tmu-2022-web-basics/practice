let targetDate = new Date(document.querySelector("#target-date").value + " 00:00:00");
let targetName = document.querySelector("#target-name").value;

// updateClock関数
function updateClock() {
  // id="clock"のdiv要素を取得
  const div = document.querySelector('#clock');
  // 現在時刻を取得
  const now = new Date();
  // div要素のコンテンツに現在時刻を代入
  div.textContent = now.toLocaleString("ja-JP");
}
// 500ミリ秒ごとにupdateClock関数を実行
setInterval(updateClock, 500);

// updateCountdown関数
function updateCountdown() {
  // const targetName = "2023年のお正月";
  // const targetDate = new Date('2023-01-01 00:00:00');
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime() + 1000;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const div = document.querySelector('#countdown');

  div.innerHTML = targetName + "<br>(" +
    targetDate.toLocaleDateString("ja-JP") + ")まであと<br>" +
    String(days).padStart(2, "0") + "日" +
    String(hours).padStart(2, "0") + "時間" +
    String(minutes).padStart(2, "0") + "分" +
    String(seconds).padStart(2, "0") + "秒!";
}
// 500ミリ秒ごとにupdateCountdown関数を実行
setInterval(updateCountdown, 500);

document.querySelector("#target-date").oninput = function (event) {
  targetDate = new Date(event.target.value + " 00:00:00");
}
document.querySelector("#target-name").oninput = function (event) {
  targetName = event.target.value;
}