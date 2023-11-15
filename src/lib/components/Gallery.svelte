<script>
import {gallery} from '../data.js'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each gallery as { title, description, price, image, url, alt }}
    <section>
      <a href={url} class="block">
        <article class="p-4 rounded-lg shadow-md">
          <img src={image} alt={alt} class="w-full h-auto object-cover mb-2 rounded-md">
          <h2 class="text-4xl flex justify-between"><span>{title}</span><span>{price}</span></h2>
          <p>{description}</p>
        </article>
      </a>
    </section>
  {/each}
</div>


