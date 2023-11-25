<script>
  export let title;
  export let slug;
  export let image;
  export let alt;
  export let description;
  </script>
  
  <div class="text-white">
      <section>
        <a href= {`menu/${slug}`} class="block">
          <article class="p-4 m-2 rounded-lg shadow-md flex flex-col hover:scale-105 hover:shadow-lg">
            <img src={image} alt={alt} class="mb-2 rounded-md">
            <h2 class="text-3xl flex justify-between font-playfairDisplay"><span>{title}</span></h2>
            <p class="font-lato text-xl pt-4 line-clamp-2">{description}</p>
          </article>
        </a>
      </section>
  </div>


