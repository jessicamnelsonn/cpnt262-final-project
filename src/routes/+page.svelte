<script>
import dayjs from 'dayjs'

let now = dayjs();
console.log(now.format("MMM D, YYYY"));
</script>

<div class="relative">
  <img class="brightness-75" src="images/hero-image.jpg" alt="">
  <section class="absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white">
    <h1 class="font-playfairDisplay text-8xl text-white">Cucina Bella</h1>
    <p>Indulge your senses at Cucina Bella, where culinary excellence meets a cozy ambiance. Savor the rich flavors of our carefully crafted Italian-inspired dishes, prepared with passion and the finest ingredients.</p>
    <a href="/reservations">
      <button class="font-lato m-4 px-4 py-2 bg-red-700 text-white hover:bg-red-800 active:bg-red-900">
        Reservations
      </button>
    </a>

    <h2 class="text-xl">Today's date: {now.format("MMM D, YYYY")}</h2>
    
    
  </section>
</div>

