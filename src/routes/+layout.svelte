<script>
  import "../app.css";
  import Header from '../lib/components/Header.svelte';

</script>
<Header />

<slot />

<footer class="bg-gray-800 text-white p-4 mt-auto sticky bottom-0">
  <!-- Your footer content goes here -->
  <p>&copy; 2023 Your Company</p>
</footer>


