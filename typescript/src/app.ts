// Here Write My Current write code and my learning code. 👇


// Interface & Generics

interface shop {
    readonly id: number,
    area: String
}

const shopD: shop = {id: 28,area:"PTK"}
shopD.area = "5"

interface DisCount {
    (price : number) : number
}
const checkDis: DisCount = (p) => p * 0.5
checkDis(5)

interface method {
    start() : void
    stop() : void
}
const TeaMachine: method = {
    start() {
        console.log(`Yeh Chal Pada hai`)
    },
    stop() {
        console.log(`Yaha Stop krna hai`)
    },
}

interface multiVal {
    [flavour: string]: number
}
const checkMulti : multiVal = {
    "masala": 2,
    "chai":5
}
console.log((checkMulti))

interface Oye{
    name: string
}
interface Oye{
    age: number
}
const OyeUser:Oye = {name: "Nikhil", age:87}

interface A { a:string }
interface B { b:number }
interface C extends A , B { c: boolean }

const ABC: C = {a: "A", b:51, c: false}

// Generics in TS 👇

function meet<T>(items: T): T[]{
    return [items]
}
meet("Hello")
meet(5)
meet(true)

function AB<A, B>(a: A, b: B): [A, B]{
    return [a , b]
}
AB("Hello",44)
AB(55, {name:"Nope"})

interface Box<T>{
    value: T
}
let BoxT: Box<number> = {value:52}
let BoxP: Box<string> = {value:"Hi"}