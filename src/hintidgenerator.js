export default function hintIdGenerator(hintCharacters) {
  let counter = 0;
  let len = hintCharacters.length;

  return () => {
    let num = counter;
    let iter = 0;
    let text = '';
    let n;
    while (num >= 0) {
      n = num;
      num -= len ** (1 + iter);
      iter++;
    }
    for (let i = 0; i < iter; i++) {
      text = hintCharacters[n % len] + text;
      n = Math.floor(n / len);
    }
    counter++;
    return text;
  };
}
