function merge2String(s1, s2) {
  const shortString = s1.length < s2.length ? s1 : s2;
  const longString = s1.length < s2.length ? s2 : s1;
  const limit = shortString.length;
  let result = "";

  let currentChar = 0;
  while (currentChar < limit) {
    result += s1.charAt(currentChar);
    result += s2.charAt(currentChar);
    currentChar++;
  }

  result += longString.substring(shortString.length, longString.length);
  return result;
}
