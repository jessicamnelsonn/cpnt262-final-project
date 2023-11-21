<script>
  import {italianMenu} from '../../lib/data.js'
  import Card from "../../lib/components/Card.svelte";
	const pageTitle = 'The Menu';
</script>
<svelte:head>
		<title>{pageTitle}</title>
</svelte:head>

<main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black">
  {#each italianMenu as card}
    <Card {...card} />
  {/each}
</main>