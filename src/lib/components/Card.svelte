<script>
  export let title;
  export let slug;
  export let image;
  export let alt;
  </script>
  
  <div class="text-white">
      <section>
        <a href= {`menu/${slug}`} class="block">
          <article class="p-4 rounded-lg shadow-md">
            <img src={image} alt={alt} class="mb-2 rounded-md">
            <h2 class="text-4xl flex justify-between font-playfairDisplay"><span>{title}</span>
          </article>
        </a>
      </section>
  </div>


