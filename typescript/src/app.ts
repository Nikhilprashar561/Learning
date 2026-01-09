// Here Write My Current write code and my learning code. 👇

// Objects in Typesript with type

type items = {name: String, class: String}
type adress = {state: String , country: String, pincode: number}

type user = {
    id: String,
    item: items[],
    location : adress[]
}

type chaiH = {
    name?: String,
    price: String,
    quantity: String
}

const deliveryChai = (update: Partial<chaiH>) => {
    console.log(`yeh hai apki Chai ${update.name}`)
}
deliveryChai({name: "Masala"})

const req = (r: Required<chaiH>) => {
    console.log(`Yeh Value to must hai ${r.price}`)
}
req({price: "25", quantity: "3", name: "Adarak"})

type p = Pick<chaiH, "name" | "price">

const pick = (p: p) => {
    console.log(`Yeh Hai Picked Value ${p.price}`)
}

pick({name: "420", price: "86"})
