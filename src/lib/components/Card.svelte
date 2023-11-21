<script>
  export let title;
  export let image;
  export let description;
  export let price;
  export let url;
  export let alt;
  </script>
  
  <div class="text-white">
      <section>
        <a href={url} class="block">
          <article class="p-4 rounded-lg shadow-md">
            <img src={image} alt={alt} class="mb-2 rounded-md">
            <h2 class="text-4xl flex justify-between font-playfairDisplay"><span>{title}</span><span>{price}</span></h2>
            <p class="font-lato mt-4">{description}</p>
          </article>
        </a>
      </section>
  </div>


