<script>
  import { stats } from '../../data/landingStat'
</script>

<div class="bg-stat py-10">
  <div class="grid gap-14 grid-cols-1 justify-items-center mb-5 md:grid-cols-3">
    {#each stats as stat}
      <div class="flex flex-col md:flex-row gap-2 md:gap-7 items-center">
        <img src={stat.svg} width="75px" height="75px" alt="" />
        <div class="flex flex-col text-left">
          <p class="text-secondary text-2xl md:text-5xl md:font-bold">{stat.value}</p>
          <p class="text-secondary text-base md:text-2xl">{stat.title}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
