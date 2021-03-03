const text = "la casa de Emilio"

function isPalindrome (str) {
    str = str.replace(/\.|\s|\,/g,"")
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join("")

    return lowered == joined

}

const a = isPalindrome(text)
console.log(a)