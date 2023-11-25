<script>
  const navItems = [
    { name: '', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Reservations', href: '/reservations' }
  ];
</script>

  <footer class="bg-gray-800 text-white p-4 mt-auto">
    <div><a class="font-playfairDisplay text-4xl" href='/'>CB</a></div>
    <nav class="mt-4">
      <ul class="flex justify-center gap-8 font-lato">
        {#each navItems as { name, href }}
          <li><a href={href} class="hover:text-gray-400">{name}</a></li>
        {/each}
      </ul>
    </nav>
    <p class="flex justify-center text-sm mt-4">&copy; 2023 Cucina Bella</p>
  </footer>


