const text =
  "A mamá Roma le ,aviva el amor ,a papá y a papá Roma le !aviva el amor a mamá";

function isPalindrome(str) {
  str = str.replace(/\.|\s|\!|\,/g, "");
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const lowered = str.toLowerCase();
  const splitted = lowered.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join("");

  return lowered == joined;
}

const a = isPalindrome(text);
console.log(a);
