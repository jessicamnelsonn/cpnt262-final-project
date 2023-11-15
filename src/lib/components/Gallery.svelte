<script>
import {gallery} from '../data.js'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each gallery as { title, description, image, url, alt }}
    <section>
      <a href={url} class="block">
        <article class="p-4 rounded-lg shadow-md">
          <h2>{title}</h2>
          <img src={image} alt={alt} class="w-full h-auto object-cover mb-2 rounded-md">
          <p>{description}</p>
        </article>
      </a>
    </section>
  {/each}
</div>

