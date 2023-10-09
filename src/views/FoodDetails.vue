<template>
  <header class="flex justify-between w-full bg-slate-50 p-4">
    <router-link to="/">
      <div class="logo flex gap-4">
        <h1 class="font-semibold text-2xl">Sweet <span>Dish</span></h1>
        <i class="fas fa-pizza-slice w-8 h-8 text-orange-600 text-2xl"></i>
      </div>
    </router-link>

    <div class="cart-login flex mr-4 gap-4">
      <router-link to="/card">
        <i
          class="fa-solid fa-cart-shopping text-[1.4rem] mt-1 mr-2  text-blue-700 hover:text-blue-800"
          ><sup class="text-[0.7rem] text-black absolute top-5">{{
            count
          }}</sup></i
        >
      </router-link>

      <router-link to="/" class="text-[1.15rem]">
        <p>Login</p>
      </router-link>
      <router-link to="/" class="text-[1.15rem]">
        <p>Sign up</p>
      </router-link>
    </div>
  </header>
  <div class="context p-4 flex flex-col items-center">
    <h1 class="text-2xl">Add Meal to cart</h1>
    <img :src="details.url" alt="dish" class="w-56 h-56" />
    <div class="description text-[1.2rem]">
      <p><span class="font-semibold">Name:</span> {{ details.name }}</p>
      <p><span class="font-semibold">Price:</span> {{ details.price }}</p>
      <p><span class="font-semibold">Description:</span> {{ details.desc }}</p>
      <p>
        <span class="font-semibold">Rating:</span>
        {{ details.rate }}
      </p>
    </div>

    <div class="buttons flex gap-2 mt-8">
      <button
        class="bg-orange-500 text-white rounded-md px-8 py-2 hover:bg-orange-600"
        @click="goToCart()"
      >
        Go to cart
      </button>
      <button @click="addToCart()"
        class="bg-lime-500 text-white rounded-md px-8 py-2 hover:bg-lime-600"
      >
        Add to cart
      </button>
      <button  @click="removeItem()"
        class="bg-red-500 text-white rounded-md px-8 py-2 hover:bg-red -600"
      >
        Remove from cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: null,
    };
  },
  computed:{
    count(){
return this.$store.state.cartItemCount;
    }
  },
  created() {
    const itemId = this.$route.params.id;
    this.details = this.getItemDetails(itemId);
  },

  methods: {
    getItemDetails(itemId) {
      const allItems = [
        ...this.$store.state.topRated,
        ...this.$store.state.allCategories,
        ...this.$store.state.dishesNearYou,
      ];

      const item = allItems.find((item) => item.id === parseInt(itemId));

      if (!item) {
        console.error(`Item with ID ${itemId} not found`);
        this.$router.push("/");
      }

      return item;
    },

    goToCart() {
      this.$router.push("/card");
    },
    
   addToCart() {
      this.$store.dispatch("addToCart",this.details);
    },
          removeItem() {
      this.$store.dispatch("removeItem",this.details);
    },
  },
};
</script>
