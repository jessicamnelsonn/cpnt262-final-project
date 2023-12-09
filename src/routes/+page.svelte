<script>
  import dayjs from 'dayjs';

  let pageTitle = 'Home';
  let now = dayjs();
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('images/hero-image.jpg');">
  <div class="text-center text-white p-4 sm:p-8 relative top-[-6rem]">
    <h1 class="font-playfairDisplay text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">Cucina Bella</h1>
    <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 bg-black bg-opacity-50 p-2 rounded-md">
      Indulge your senses at Cucina Bella, where culinary excellence meets a cozy ambiance. <br>
      Savor the rich flavors of our carefully crafted Italian-inspired dishes, <br>
      prepared with passion and the finest ingredients.
    </p>
    <a href="/reservations">
      <button class="font-lato px-4 py-3 bg-red-700 text-white hover:bg-red-800 active:bg-red-900">
        Reservations
      </button>
    </a>
    <div class="bg-black bg-opacity-50 p-2 m-2 rounded-md max-w-xs mx-auto">
      <h2 class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-white">Today's date: {now.format("MMM D, YYYY")}</h2>
    </div>
  </div>
</div>