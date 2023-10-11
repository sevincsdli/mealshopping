

    <template>
      



        <section class="empty-cart " v-if="calculateTotalPrice === 0">
    <div class="empty flex flex-col gap-4 lg:text-[1.2rem] md:text-md  items-center">
  
<i class="fa-solid fa-cart-shopping text-blue-600 text-5xl  ">  
           </i>
     <h1 class="text-orange-600 font-semibold">Your cart is empty</h1>
        <router-link to="/">
            <p class="text-blue-900 underline text-center">You can go to home page to view more food items. </p>
        </router-link>
    </div>
   </section>
   <section v-else class="card-content empty flex flex-col gap-4 md:text-[1rem] sm:text-[0.9rem] lg:text-[1.2rem] items-center">
    <div class=" bg-slate-50 p-12 ">

      <h1 class="lg:text-2xl md:text-md">Shopping Cart</h1>
          <div v-for="(item, index) in cartItems" :key="index" class=" mt-4">
            <div class="flex gap-2">
              <h2 class="font-semibold">{{ item.name }}</h2>
              <button @click="decrementQuantity(item)" class="text-white bg-orange-600 px-2 rounded-sm hover:bg-orange-700">-</button>
              {{ item.quantity }}
              <button @click="incrementQuantity(item)" class="text-white bg-orange-600 px-2 rounded-sm hover:bg-orange-700">+</button>
              <p>Price: {{ item.price * item.quantity }}</p>

              <button @click="removeItem(item)" class="text-white bg-red-600 px-4 rounded-md hover:bg-red-700">Remove</button>
           
            </div>
          
       
          </div>
          <p class="text-right mt-4"> <span class="font-semibold">Total Price:</span> {{ calculateTotalPrice }}</p>
    </div>
         
          <router-link to="/">
            <p class="text-blue-900 underline">You can go to home page to add more food items. </p>
        </router-link>
        </section>

       
      </template>
      
      <script>
      export default {
        computed: {
          cartItems() {
            return this.$store.state.cartItems;
          },
          calculateTotalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
          },
        },
        methods: {
          removeItem(item) {
            this.$store.dispatch("removeItem", item);
          },
          incrementQuantity(item) {
            this.$store.dispatch("incrementQuantity", item);
          },
          decrementQuantity(item) {
            this.$store.dispatch("decrementQuantity", item);
          },
        },
      };
      </script>
      <style>
      .empty-cart
{
   position: absolute;
   top:50%;
   left:50%;
    transform: translate(-50%,-50%);
    }
    .card-content
    {
      position: absolute;
   top:50%;
   left:50%;
    transform: translate(-50%,-50%);
    }</style>