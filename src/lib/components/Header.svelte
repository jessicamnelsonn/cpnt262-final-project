<script>
  const navItems = [
    { name: '', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Reservations', href: '/reservations' }
  ];
</script>

<header class="flex flex-col sm:flex-row items-center justify-between p-6 bg-black text-white text-center text-xl">
  <div class="mb-4 sm:mb-0">
    <a class="font-playfairDisplay text-4xl hover:text-red-700 hover:underline transition-colors duration-300" href='/'>CB</a>
  </div>
  <nav>
    <ul class="flex flex-col sm:flex-row justify-center sm:justify-end gap-2 sm:gap-12 font-lato">
      {#each navItems as { name, href }}
        <li>
          <a {href} class="hover:text-red-700 hover:underline transition-colors duration-300">{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
