"use strict";
import { getRomajiArray, display } from "./getRomajiArray.js";
// DOMの取得
const warning = document.getElementById("warning");
const result = document.getElementById("result");

let romajiArray = getRomajiArray();
display(romajiArray);
let textCount = 0;
let keydownCount = 0;
let correctCount = 0;
document.addEventListener("keydown", (event) => {
  keydownCount++;
  if (event.key === romajiArray[textCount]) {
    correctCount++;
    // 入力した文字を薄くする
    const text = document.getElementById(`romaji_${textCount}`);
    text.style.color = "#CCCCCC";
    textCount++;
    // 警告コメント更新
    warning.innerHTML = "";
    if (textCount >= romajiArray.length) {
      // 次の問題を読む
      textCount = 0;
      romajiArray = getRomajiArray();
      display(romajiArray);
    }
  } else {
    // 間違えた文字を赤色にする
    const text = document.getElementById(`romaji_${textCount}`);
    text.style.color = "red";
    // 警告コメント更新
    warning.innerHTML = "入力された文字が間違っています。";
  }
  // 正解数更新
  result.innerHTML = `${correctCount}/${keydownCount}(${Math.round(
    (correctCount / keydownCount) * 100
  )}%)`;
});
