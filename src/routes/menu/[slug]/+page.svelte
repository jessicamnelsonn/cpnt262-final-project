<script>
  export let data;
</script>

<svelte:head>
  <title>{data.menuItem.title}</title>
</svelte:head>

<div class="text-white bg-black min-h-screen flex items-center justify-center p-4 sm:p-8">
  <section>
    <article class="p-4 rounded-lg shadow-md bg-white text-black mx-auto sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 max-w-screen-xl">
      <img src={data.menuItem.image} alt={data.menuItem.alt} class="mb-4 rounded-lg w-full h-auto">
      <h2 class="text-2xl font-bold mb-2 flex justify-between">
        <span class="font-playfairDisplay text-3xl">{data.menuItem.title}</span>
        <span>{data.menuItem.price}</span>
      </h2>
      <p class="font-lato text-gray-900 mb-4">{data.menuItem.description}</p>
      <p class="text-gray-400">Allergens: {data.menuItem.allergen}</p>
    </article>
  </section>
</div>

