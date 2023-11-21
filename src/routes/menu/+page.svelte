<script>
  import {galleryInfo} from '../../lib/menu.js'
  import Card from "../../lib/components/Card.svelte";
	const pageTitle = 'The Menu';
</script>
<svelte:head>
		<title>{pageTitle}</title>
</svelte:head>
<main>
	<h1 class="text-4xl text-center">Our Menu</h1>
  {#each galleryInfo as card}
    <Card {...card} />
  {/each}
</main>