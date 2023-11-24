<script>
  const navItems = [
		{ name: '', href: '/' },
		{ name: 'Menu', href: '/menu' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'About', href: '/about' },
    { name: 'Reservations', href: '/reservations' }
	];
</script>

<header class="flex justify-between p-4 bg-black text-white">
  <div><a class="font-playfairDisplay text-4xl" href='/'>CB</a></div>
	<nav>
		<ul class="flex justify-around gap-12 font-lato">
			{#each navItems as { name, href }}
				<li><a {href}>{name}</a></li>
			{/each}
		</ul>
	</nav>
</header>

