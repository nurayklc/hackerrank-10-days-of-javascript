function vowelsAndConsonants(s) {
  let vowel = "";
  let consonant = "";
  for (let i = 0; i <= s.length; i++) {
    if (/[aeiou]/.exec(s.charAt(i))) {
      vowel += s.charAt(i) + "\n";
    }
    if (/[^aeiou]/.exec(s.charAt(i))) {
      consonant += s.charAt(i) + "\n";
    }
  }
  console.log(vowel + consonant);
}
