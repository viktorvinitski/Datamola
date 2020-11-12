
const add = (arg1, arg2) => {
    if (!arg2) {
        const add1 = (a) => { return a + arg1 }
        return add1
    }
    return arg1 + arg2
}

const sub = (arg1, arg2) => {
    if (!arg2) {
        const sub1 = (a) => { return a - arg1 }
        return sub1
    }
    return arg1 - arg2
}

const mul = (arg1, arg2) => {
    if (!arg2) {
        const mul1 = (a) => { return a * arg1 }
        return mul1
    }
    return arg1 * arg2
}

const div = (arg1, arg2) => {
    if (!arg2) {
        const div1 = (a) => { return a / arg1 }
        return div1
    }
    return arg1 / arg2
}

let a = add(1, 2)
let b = mul(a, 10)

let sub1 = sub(1)
let c = sub1(b)
let d = mul(sub(a, 1))(c)

console.log(d);
console.log(b)
console.log(c)
