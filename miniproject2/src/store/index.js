import { createSlice, configureStore } from "@reduxjs/toolkit"
const productState = createSlice({
    name: "listProduc",
    initialState: {
        products: [
            {
                name: "pizza",
                id: 1,
                image: "https://www.silverkris.com/wp-content/uploads/2019/06/4Ps-pizza-Hanoi.jpg",
                price: 5000,
                quantity: 1
            },
            {
                name: "hamburger",
                id: 2,
                image: "https://junger.vn/medias/jungerb/images/t76e-hero.jpg",
                price: 20000,
                quantity: 1
            },
            {
                name: "bread",
                id: 3,
                image: "https://cdn.tasteatlas.com/images/dishes/54fc084ad924460b8bbbe2b437cbef02.jpg?w=600",
                price: 8000,
                quantity: 1
            },
            {
                name: "cake",
                id: 4,
                image: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
                price: 10000,
                quantity: 1
            }
        ],
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            // console.log(action.payload);
            let check = state.cart.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (check == -1) {
                state.cart.push(action.payload)
            } else {
                state.cart[check].quantity += 1
            }
        },
        deleteProduct: (state, action) => {
            console.log(action.payload);
            state.cart.splice(action.payload, 1)

        },
        increase: (state, action) => {
            let checkStock = state.cart.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (state.cart[checkStock] < 1) {
                state.cart[checkStock] = 1
            }
        },
        decrease: (state, action) => {
            let checkStock = state.cart.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (state.cart[checkStock] > 1) {
                state.cart[checkStock] += 1
            }

        }

    }
})

export const { addToCart, deleteProduct, increase, decrease } = productState.actions

const productReducer = productState.reducer

const store = configureStore({
    reducer: {
        productReducer
    }
})
export default store;