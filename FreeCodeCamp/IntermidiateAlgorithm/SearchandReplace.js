function myReplace(str, before, after) {
  let index = str.indexOf(before);
  if (str[index] == str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
