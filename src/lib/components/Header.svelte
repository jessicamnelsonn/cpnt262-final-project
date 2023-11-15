<script>
  const navItems = [
		{ name: '', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Menu', href: '/menu' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<header class="flex justify-between p-4">
  <div><a href='/'>CB</a></div>
	<nav>
		<ul class="flex justify-around gap-4 gap-4">
			{#each navItems as { name, href }}
				<li><a {href}>{name}</a></li>
			{/each}
		</ul>
	</nav>
</header>