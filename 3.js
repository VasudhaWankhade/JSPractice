// array ==> use to store more than one value

// length ==> property

let arr = [12, 3, 2, 43, 43, 4]
console.log(arr.length)

// 1) push() ==> to add element at the end of the array
//        ==> returns new length

let a = [12, 2, 3, 3, 4, 4]
let push = a.push(100)
console.log(push)
console.log(a)

// 2) pop() ==> to remove last element of array
//      ==> returns same elemment

let b = [12, 1, 2, 3, 23, 43, 4]
let pop = b.pop()
console.log(pop)
console.log(b)

// 3) shift() ==> to remove first element of array
//            ==> returns same element

let c = [1, 2, 3, 3, 34, 3, 34]
let shift = c.shift()
console.log(shift)
console.log(c)

// 4) unshift() ==> to add element at the starting of the array
//              ==> returns new length

let d = [1, 21, 3, 3, 343, 43, 43, 54]
let unshift = d.unshift(1000)
console.log(unshift)
console.log(d)