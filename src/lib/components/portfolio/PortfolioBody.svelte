<script lang="ts">
  import Portfolio from '../Portfolio.svelte'
  import PortPagination from '../PortPagination.svelte'
</script>

<div
  class="grid grid-cols-1 md:gap-20 gap-5 place-items-center text-center text-black-1 m-auto py-10"
>
  <p class="hidden md:block text-3xl md:text-7xl font-bold">ผลงาน</p>
  <div class="hidden md:block">
    <Portfolio />
  </div>
  <div class="block md:hidden lg:hidden">
    <PortPagination />
  </div>
</div>
