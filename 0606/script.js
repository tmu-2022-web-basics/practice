function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "ボタンが押されました！";
  document.body.appendChild(para);
}

const button = document.querySelector("button");
button.addEventListener("click", createParagraph);