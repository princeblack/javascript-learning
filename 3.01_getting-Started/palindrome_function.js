
function checkIfPalindrome(phrase) {
    // We make it lowerCase or UpperCase
    let lowerPhrase = transformToLowerCase(phrase);
    console.log(lowerPhrase);

    // we produce the reversed string
    let reversedPhrase = reversePhrase(phrase);
    // console.log(reversedPhrase)

    // we check if original and reverse strings are identical
    let res= comparePhrase (lowerPhrase, reversedPhrase)
    console.log(`The word ${phrase} is a palindrome : ${res}`)


}

function transformToLowerCase(str){
//    console.log(`I am indide the Upper or lowercase`)
   let lc = str.toLowerCase()
   return lc;
}
function reversePhrase(sent){
    let res = "";
    let l = sent.length -1

    for (let i = l; i >= 0; i--){
        res = res + sent[i]
    } 
    return res   
}

function comparePhrase(low, rev) {
        if (low == rev) {
            return true            
        }else{
            return false
        };
}
checkIfPalindrome(`level`) // Return True
checkIfPalindrome(`mAdaM`) // Return True, but send message that complains about the input
checkIfPalindrome(`babylon`) // Return False
checkIfPalindrome(`i level madam level i`) // Return false