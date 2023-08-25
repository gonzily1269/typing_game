export default function generateRandomText(textLength) {
  // 生成する文字列に含める文字セット
  let text = "abcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < textLength; i++) {
    result += text[Math.floor(Math.random() * text.length)];
  }
  return result;
}
