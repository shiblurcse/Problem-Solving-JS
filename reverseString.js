function reverseString(str){
    var reverse = ''
    for (i = 0; i < str.length; i ++){
        var char = str[i]
        reverse = char + reverse
    }
    return reverse
}
console.log(reverseString('My name is Lipu'))