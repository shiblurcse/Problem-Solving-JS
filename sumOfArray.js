function getSumAraay(numbers){
    var sum = 0
    for (var i = 0; i < numbers.length; i++){
        var element = numbers[i]
        var sum = sum + element
    }
    return sum
}
var total = getSumAraay([10, 20, 30, 40, 50, 60])
console.log(total)