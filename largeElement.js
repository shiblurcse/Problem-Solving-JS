var marks = [30, 50, 60, 77, 66, 80, 98, 95]
var max = marks[0]
for (i = 0; i < marks.length; i++){
    var element = marks[i]
    if (element > max){
        max = element
    }
}
console.log('Highest mark is :', max)