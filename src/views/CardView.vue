
<style>

.empty-cart
{
   position: absolute;
   top:50%;
   left:50%;
    transform: translate(-50%,-50%);
    }</style>


    <template>
    
        <section class="empty-cart" v-if="calculateTotalPrice === 0">
    <div class="empty flex flex-col gap-4 text-[1.2rem]  items-center">
  
<i class="fa-solid fa-cart-shopping text-blue-600 text-5xl  ">  
           </i>
     <h1 class="text-orange-600 font-semibold">Your cart is empty</h1>
        <router-link to="/">
            <p class="text-blue-900 underline">You can go to home page to view more food items. </p>
        </router-link>
    </div>
   </section>
   <section v-else>
          <h1 class="text-2xl">Shopping Cart</h1>
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <div class="flex justify-between items-center">
              <h2 class="font-semibold">{{ item.name }}</h2>
              <button @click="removeItem(item)">Remove</button>
            </div>
            <p>Price: {{ item.price * item.quantity }}</p>
            <div>
              <button @click="decrementQuantity(item)">-</button>
              {{ item.quantity }}
              <button @click="incrementQuantity(item)">+</button>
            </div>
          </div>
          <p>Total Price: {{ calculateTotalPrice }}</p>
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
      