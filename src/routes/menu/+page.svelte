<script>
  import {italianMenu} from '../../lib/data.js'
  import Card from "../../lib/components/Card.svelte";
	const pageTitle = 'The Menu';
</script>
<svelte:head>
		<title>{pageTitle}</title>
</svelte:head>
<main>
	<h1 class="text-4xl text-center">Our Menu</h1>
  {#each italianMenu as card}
    <Card {...card} />
  {/each}
</main>