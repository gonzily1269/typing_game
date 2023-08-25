import generateRandomText from "./generateRandomText.js";

export function getRomajiArray() {
  let inputText = generateRandomText(5);
  let romajiArray = inputText.split("");
  return romajiArray;
}

export function display(romajiArray) {
  const question = document.getElementById("question");
  // 初期化
  question.innerHTML = "";
  // 一文字ずつ表示
  for (let i = 0; i < romajiArray.length; i++) {
    question.innerHTML += `<span id="romaji_${i}">${romajiArray[i]}</span>`;
  }
}
