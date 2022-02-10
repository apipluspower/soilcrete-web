<script lang="ts">
  import { datas } from '../../data/landingBody'
</script>

<div
  class="grid grid-cols-1 md:gap-20 gap-5 place-items-center text-center text-black-1 m-auto py-10"
>
  <p class="text-3xl md:text-7xl font-bold">ปัญหาดินทรุด นึกถึงซอยล์กรีต</p>
  {#each datas as data}
    <div class={data.responsive}>
      <img src="body_Icon.svg" alt="" />
      <p class="hidden md:flex md:text-4xl md:font-bold">
        {data.desktop_des}
      </p>
      <p class="text-md font-bold md:hidden">{data.tablet_des}</p>
    </div>
  {/each}
</div>
