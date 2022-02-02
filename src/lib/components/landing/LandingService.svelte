<script>
  import { services } from '../../data/service'
</script>

<div class="bg-primary py-10">
  <p class="text-secondary text-center font-bold text-3xl md:text-7xl md:mb-20 mb-5">งานบริการ</p>
  <div class="grid gap-14 grid-cols-1 justify-items-center mb-5 md:grid-cols-2">
    {#each services as service}
      <div class="flex flex-col items-center">
        <img src={service.svg} width="160px" height="160px" />
        <p class="text-secondary text-center font-bold md:text-3xl">{service.title}</p>
        <p class="text-secondary">{service.description}</p>
      </div>
    {/each}
  </div>
</div>
