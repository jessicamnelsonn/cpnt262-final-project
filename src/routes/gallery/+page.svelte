<script>
  import {gallery} from '../../lib/gallery.js'
  import Gallery from "../../lib/components/Gallery.svelte";
</script>

<main>
  <h1 class="text-4xl text-center">Gallery</h1>
  {#each gallery as gallery}
    <Gallery {...gallery} />
  {/each}
</main>

