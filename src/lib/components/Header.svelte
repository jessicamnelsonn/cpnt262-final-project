<script>
  const navItems = [
		{ name: '', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Menu', href: '/menu' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<header>
	<nav>
		<ul class="flex justify-end gap-4 flex-end p-4">
			{#each navItems as { name, href }}
				<li><a {href}>{name}</a></li>
			{/each}
		</ul>
	</nav>
</header>