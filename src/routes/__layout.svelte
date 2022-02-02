<script lang="ts">
  import '../global.postcss'
  import { onMount } from 'svelte'
  import Navbar from '$lib/components/NavBar.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<body>
  <Navbar />
  <slot />
  <Footer />
</body>

<style>
  body {
    background-image: url('./bg.png');
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1; /* Or flex-grow: 1;*/
  }
</style>
