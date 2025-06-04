const palindromes = function (sentence) {
    const stripped = sentence.replaceAll(" ", "")
                            .replaceAll(".", "")
                            .replaceAll("!", "")
                            .replaceAll(",", "")
                            .toLowerCase();
    let arr = Array.from(stripped).reverse();
    reversedSentence = arr.join("")

    let isPalDrome = stripped === reversedSentence ? true : false;
    return isPalDrome;
};

// Do not edit below this line
module.exports = palindromes;
