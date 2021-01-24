var minister = 1050
var business = 950
var shocib = 1150
// solution 1
var max = Math.max(minister, business, shocib)
console.log(max)

// solution 2
if (minister > business){
    if (minister > shocib){
        console.log('Minister is bigger')
    } else{
        console.log('Shocib is bigger')
    }
} else{
    if (business > minister) {
        console.log('Business is bigger')
    } else {
        console.log('Shocib is bigger')
    }
}