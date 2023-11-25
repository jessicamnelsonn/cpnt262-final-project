<script>
  const navItems = [
		{ name: '', href: '/' },
		{ name: 'Menu', href: '/menu' },
		{ name: 'About', href: '/about' },
    { name: 'Reservations', href: '/reservations' }
	];
</script>

<header class="flex justify-between p-4 bg-black text-white">
  <div><a class="font-playfairDisplay text-4xl hover:text-red-700 hover:underline transition-colors duration-300" href='/'>CB</a></div>
  <nav>
    <ul class="flex justify-around gap-12 font-lato">
      {#each navItems as { name, href }}
        <li>
          <a {href} class="hover:text-red-700 hover:underline transition-colors duration-300">{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

