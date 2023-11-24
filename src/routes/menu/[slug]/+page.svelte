<script>
  export let data;
</script>


<svelte:head>
  <title>{data.menuItem.title}</title>
</svelte:head>

<div class="text-white bg-black">
  <section>
    <article class="p-4 rounded-lg shadow-md" style="width: 300px;">
      <img src={data.menuItem.image} alt={data.menuItem.alt} class="mb-2 rounded-md" style="width: 100%; height: auto;">
      <h2 class="text-4xl flex justify-between font-playfairDisplay"><span>{data.menuItem.title}</span><span>{data.menuItem.price}</span></h2>
      <p class="font-lato mt-4">{data.menuItem.description}</p>
      <p>Allergens: {data.menuItem.allergen}</p>
    </article>
  </section>
</div>
