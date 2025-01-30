function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
}

function checkPalindrome() {
    let inputText = document.getElementById("wordInput").value;
    let resultText = document.getElementById("result");

    if (inputText.trim() === "") {
        resultText.style.color = "red";
        resultText.textContent = "entrer un mot ou une phrase.";
        return;
    }

    if (isPalindrome(inputText)) {
        resultText.style.color = "green";
        resultText.textContent = "le mot est un palindrome";
    } else {
        resultText.style.color = "red";
        resultText.textContent = "le mot n'est pas un palindrome";
    }
}
