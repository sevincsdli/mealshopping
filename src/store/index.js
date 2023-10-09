import { createStore } from "vuex";
import cakes from "../assets/cake.jpg.webp";
import fries from "../assets/fries.jpg";
import macroni from "../assets/macroni.jpg";
import noodle from "../assets/noodle.webp";
import pizza from "../assets/pizza.jpg";
import salad from "../assets/salad.jpg";
import samosa from "../assets/samosa.jpg";
import soup from "../assets/soup.jpg";
import tacos from "../assets/tacos.jpg";

export default createStore({
  state: {
    topRated: [
      {
        id: 1,
        name: "Cake",
        price: 100,
        url: cakes,
        desc: "Tasty and fresh cake!",
        rate: 4.5,
      },
      {
        id: 2,
        name: "Noodles",
        price: 150,
        url: noodle,
        desc: "Tasty noodle!",
        rate: 4.6,
      },
      {
        id: 3,
        name: "Fries",
        price: 50,
        url:fries,
        desc: "Crunchy fries!",
        rate: 4.7,
      },
      {
        id: 4,
        name: "Cake",
        price: 100,
        url: cakes,
        desc: "Tasty and fresh cake!",
        rate: 4.5,
      },
    ],
   dishesNearYou: [
      {
        id: 9,
        name: "Macroni",
        price: 80,
        url: macroni,
        desc: "Tasty macronies!",
        rate: 4.4,
      },
      {
        id: 10,
        name: "Pizza",
        price: 150,
        url: pizza,
        desc: "Tasty pizza!",
        rate: 4.6,
      },
      {
        id: 11,
        name: "Samosa",
        price: 100,
        url: samosa,
        desc: "Tasty and fresh samosa!",
        rate: 4.0,
      },
      {
      id: 12,
      name: "Pizza",
      price: 150,
      url: pizza,
      desc: "Tasty pizza!",
      rate: 4.6,
    }
    ],
   allCategories: [
      {
        id: 5,
        name: "Soup",
        price: 100,
        url: soup,
        desc: "Tasty and fresh soup!",
        rate: 4.2,
      },
      {
        id: 6,
        name: "Tacos",
        price: 100,
        url: tacos,
        desc: "Tasty tacos!",
        rate: 3.9,
      },
      {
        id: 7,
        name: "Salad",
        price: 100,
        url: salad,
      desc: "Salad time!",
        rate: 4.1,
      },
      {
        id: 8,
        name: "Soup",
        price: 100,
        url: soup,
        desc: "Tasty and fresh soup!",
        rate: 4.2,
      },
    ],
    cartItemCount:0,
    cartItems:[]
  },
  getters: {},
  mutations: {
    addToCart(state,payload){
      let item=payload;
      item=
      {...item,quantity:1}
      if(state.cartItems.length>0)
      {
        let bool=state.cartItems.some(i=>i.id===item.id)
        if(bool){
          let itemIndex=state.cartItems.findIndex(el=>el.id===item.id)
          state.cartItems[itemIndex]["quantity"]+=1;
        }
        else
        {
          state.cartItems.push(item)
        }
      }
      else{
        state.cartItems.push(item)
      }
      state.cartItemCount++
    },
    removeItem(state,payload){
      let item=payload;
      item=
      {...item,quantity:1}
      if(state.cartItems.length>0)
      {
        let bool=state.cartItems.some(i=>i.id===item.id)
        if(bool){
          let itemIndex=state.cartItems.findIndex(el=>el.id===item.id)

          if(state.cartItems[itemIndex]["quantity"]!==0){
            state.cartItems[itemIndex]["quantity"]-=1;
            state.cartItemCount--
          }
      
        }
       
      }
     
    }, incrementQuantity(state, payload) {
      const item = state.cartItems.find((i) => i.id === payload.id);
      if (item) {
        item.quantity++;
        state.cartItemCount++;
      }
    },
    decrementQuantity(state, payload) {
      const item = state.cartItems.find((i) => i.id === payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.cartItemCount--;
      }
    },
    // removeItem(state, payload) {
    //   let item = payload;
    //   item = { ...item, quantity: 1 };
  
    //   if (state.cartItems.length > 0) {
    //     const itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
  
    //     if (itemIndex !== -1) {
    //       if (state.cartItems[itemIndex].quantity > 1) {
    //         state.cartItems[itemIndex].quantity -= 1;
    //       } else {
    //         state.cartItems.splice(itemIndex, 1); // Remove the item from the cart if the quantity is 1
    //       }
  
    //       state.cartItemCount -= 1;
    //     }
      
    //   }}
      
  },
  actions: {
    addToCart(context,payload){
context.commit("addToCart",payload)
     },
   removeItem(context,payload){
      context.commit("removeItem",payload)
           },
           incrementQuantity(context, payload) {
            context.commit("incrementQuantity", payload);
          },
          decrementQuantity(context, payload) {
            context.commit("decrementQuantity", payload);
          },
     
  },
  modules: {},
});
