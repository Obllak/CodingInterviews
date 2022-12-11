const checkPalindrome = word => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return `The word ${word} is not a palindrome`
      }
    }
    return `The word ${word} is a palindrome`;
  };
  
  const checkPalindromeHalf = word => {
    for (let i = 0; i < Math.ceil(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return `The word ${word} is not a palindrome`
      }
    }
    return `The word ${word} is a palindrome`;
  }
  
  console.log(checkPalindrome('boob'));
  console.log(checkPalindromeHalf('boob'));
  