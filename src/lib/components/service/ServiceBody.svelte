<script>
  import { services } from '../../data/serviceBody'
</script>

<div class="py-10">
  <p class="text-black-1 text-center font-bold text-3xl md:text-7xl md:mb-20 mb-5">
    งานบริการของเรา
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-top">
    {#each services as service}
      <div class="flex flex-col items-center px-4 md:px-36">
        <img class="mb-10" src={service.svg} width="100px" height="100px" alt="" />
        <p class="text-xl text-black-1 text-center mb-4">{service.title}</p>
        <p class="text-black-1 text-base text-center">{service.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
