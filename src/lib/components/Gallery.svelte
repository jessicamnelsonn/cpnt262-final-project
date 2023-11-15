<script>
import {gallery} from '../data.js'
</script>

{#each gallery as {title, description, image, url, alt}}
<section>
<a href={url}>
  <article>
    <h2>{title}</h2>
    <img src={image} alt={alt}>
    <p>{description}</p>
  </article>
</a>
</section>
{/each}