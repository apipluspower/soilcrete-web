<script lang="ts">
  import Card from '../Card.svelte'
  import { projects } from '../../data/project'
  let x: number = 0
  function prev(length: number) {
    x = x - length
  }

  function next(length: number) {
    x = x + length
  }
</script>

<div class="grid grid-cols-1 gap-20 place-items-center text-center text-black-1 m-auto py-10">
  <p class="text-3xl md:text-7xl font-bold">ผลงานเด่น</p>
  <div class="flex flex-row items-center gap-12">
    <div class="hidden md:flex md:gap-12">
      <img
        src="arrow_left.svg"
        class="cursor-pointer"
        width="24px"
        height="24px"
        alt=""
        on:click={() => prev(3)}
      />
      <div class="hidden md:grid md:grid-cols-3 md:gap-8 justify-center">
        {#each { length: 3 } as _, i}
          <Card
            img={projects[(i + x) % projects.length].img}
            name={projects[(i + x) % projects.length].name}
            location={projects[(i + x) % projects.length].location}
            owner={projects[(i + x) % projects.length].owner}
            value={projects[(i + x) % projects.length].value}
          />
        {/each}
      </div>
      <img
        src="arrow_right.svg"
        class="cursor-pointer"
        width="24px"
        height="24px"
        alt=""
        on:click={() => next(3)}
      />
    </div>
    <div class="flex md:hidden gap-12">
      <img
        src="arrow_left.svg"
        class="cursor-pointer"
        width="24px"
        height="24px"
        alt=""
        on:click={() => prev(1)}
      />
      <div class="grid grid-cols-1 md:hidden gap-8 justify-center">
        {#each { length: 1 } as _, i}
          <Card
            img={projects[(i + x) % projects.length].img}
            name={projects[(i + x) % projects.length].name}
            location={projects[(i + x) % projects.length].location}
            owner={projects[(i + x) % projects.length].owner}
            value={projects[(i + x) % projects.length].value}
          />
        {/each}
      </div>
      <img
        src="arrow_right.svg"
        class="cursor-pointer"
        width="24px"
        height="24px"
        alt=""
        on:click={() => next(1)}
      />
    </div>
  </div>
</div>
