var name = [3, 5, 7, 3, 2, 4, 8, 2, 5, 10]
var uniqueName = []
for (i = 0; i < name.length; i++){
    var element = name[i]
    var index = uniqueName.indexOf(element)
    if (index == -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName)