<template>
  <div class="min-h-screen">
    <header class=" flex justify-between w-full bg-slate-50 p-4">
      <router-link to="/">
        <div class="logo flex gap-4">
          <h1 class="font-semibold text-2xl">Sweet <span>Dish</span></h1>
          <i class="fas fa-pizza-slice w-8 h-8 text-orange-600 text-2xl"></i>
        </div>
      </router-link>

      <div class="cart-login flex mr-4 gap-4">
        <router-link to="/card">
          <i
            class="fa-solid fa-cart-shopping mr-2 text-[1.4rem] mt-1 text-blue-700 hover:text-blue-800"
          ><sup class="text-[0.7rem] text-black absolute top-5">{{ count }}</sup></i>
        </router-link>

        <router-link to="/login" class="text-[1.15rem]">
          <button class="text-orange-500 bg-transparent mt-1 rounded-md transform scale-100 hover:scale-105 hover:text-orange-600">Login</button>
        </router-link>
        <router-link to="/register" class="text-[1.15rem]">
          <button class="bg-orange-600 text-white px-6 py-1 rounded-md transform scale-100 hover:scale-105 hover:text-orange-600 hover:bg-white">Sign up</button>
        </router-link>
      </div>
    </header>
  <div class="content px-4 w-full h-full">
  
    <div class="container w -full h-[50vh] mt-20 ">
      <div class="top">
        <h1 class="font-semibold text-2xl">Top rated</h1>
      <section class="mt-6 top-rated flex justify-evenly flex-wrap">
        <div @click="foodDetails(items)" v-for="items in topRated" :key="items.id"  class="border-2 border-slate-100 rounded-md hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]   transform scale-100 hover:scale-105 transition-transform duration-3000 ease-in-out p-4 cursor-pointer flex flex-col gap-8 text-center">
          <img :src="items.url" alt="dish" class="w-52 h-48">
          <p class="text-xl mt-2">{{ items.name }}</p>
          <button class="bg-orange-500 text-white rounded-md px-8 py-2 hover:bg-orange-600">GO DETAILS</button>
        </div>
      </section>
      </div>
    <div class="all mt-24 ">
      <h1 class="font-semibold text-2xl">May be interest</h1>
      <section class="flex-wrap mt-6 all-categories flex justify-evenly">
        <div  @click="foodDetails(items)" v-for="items in allCategories" :key="items.id" class="p-4 border-2 border-slate-100 rounded-md hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]   transform scale-100 hover:scale-105 transition-transform duration-3000 ease-in-out cursor-pointer flex flex-col gap-8 text-center">
          <img :src="items.url" alt="dish" class="w-52 h-48">
          <p class="text-xl mt-2">{{ items.name }}</p>
          <button class="bg-orange-500 text-white rounded-md px-8 py-2 hover:bg-orange-600">GO DETAILS</button>

        </div>
      </section>

    </div>
      <div class="near mt-12 ">
        <h1 class="font-semibold text-2xl">Dishes near you</h1>

        <section class="flex-wrap mt-6 near-dishes flex justify-evenly">
          <div @click="foodDetails(items)" v-for="items in dishesNearYou" :key="items.id"  class="border-2 border-slate-100 rounded-md hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]   transform scale-100 hover:scale-105 transition-transform duration-3000 ease-in-out p-4 cursor-pointer flex flex-col gap-8 text-center">
          <img :src="items.url" alt="dish" class="w-52 h-48">
          <p class="text-xl mt-2">{{ items.name }}</p>
          <button class="bg-orange-500 text-white rounded-md px-8 py-2 hover:bg-orange-600">GO DETAILS</button>

        </div>
        </section>

      </div>
    </div>
 


  </div>
  <!-- <HeaderSection></HeaderSection> -->

  </div>
   
</template>

<script>
// import HeaderSection from '@/components/HeaderSection.vue';
export default {
  data() {
    return{

    };
  },
  computed:{
    count(){
return this.$store.state.cartItemCount;
    },
topRated(){
  return this.$store.state.topRated
},
dishesNearYou(){
  return this.$store.state.dishesNearYou
},
allCategories()
{
  return this.$store.state.allCategories

}
  },
  methods:
  {
    foodDetails(item) {
      this.$router.push({ path: `/detail/${item.id}` }); // Pass the item ID as a route parameter

    // this.$router.push({ path: '/detail', params: item });
  },
  }
};

</script>
