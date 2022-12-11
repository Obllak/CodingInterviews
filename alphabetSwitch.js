const abeceda = "abcdefghijklmnopqrstuvwxyz";
// const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < abeceda.length; i++) {
  // console.log(abeceda.charAt(i));
}

function switchLetter(char) {  
  return String.fromCharCode(char.charCodeAt(0) + 1)
}

function switchAbeceda(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += switchLetter(string[i]);
    }
   return result;
}

console.log(switchAbeceda("nika"));