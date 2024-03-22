export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

// o con TypeUtilities (Pick, Omit, etc...)
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
//     quantity: number
// }

// Interfaces
// export interface Guitar {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number
// }

// export interface CartItem extends Guitar {
//     quantity: number
// }