<script lang="ts">
  import Pagination from '../Pagination.svelte'
  import { datas } from '../../data/foundationsContents'
  import CardContent from '../CardContent.svelte'
  let x: number = 0
  function prev(length: number) {
    x = x - length
  }

  function next(length: number) {
    x = x + length
  }
</script>

<div class="bg-primary py-10">
  <p
    class="md:pb-10 text-secondary text-center font-bold text-3xl md:text-7xl md:mb-20 mb-5 px-16 md:px-64"
  >
    การประยุกต์ใช้ประโยชน์จาก CEMENT COLUMN
  </p>
  <div class="md:flex md:flex-row-reverse gap-10 hidden">
    <img
      alt=""
      class="pic"
      src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/foundations/content.png"
    />
    <Pagination />
  </div>
  <div class="text-base text-white md:hidden flex flex-col items-center">
    <p class="pb-10">Cement Column สามารถใช้งานได้หลากหลายรูปแบบ ดังตัวอย่างต่อไปนี้</p>
    <div class="flex flex-row md:hidden gap-12 sm-content">
      <img
        src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/foundations/arrow_left.svg"
        class="cursor-pointer"
        width="24px"
        height="24px"
        alt=""
        on:click={() => prev(1)}
      />
      <div class="grid grid-cols-1 md:hidden gap-8 justify-center">
        {#each { length: 1 } as _, i}
          <CardContent
            img={datas[(i + x) % datas.length].pic}
            title={datas[(i + x) % datas.length].title}
            description={datas[(i + x) % datas.length].desc}
          />
        {/each}
      </div>
      <img
        src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/foundations/arrow_right.svg"
        class="cursor-pointer"
        width="24px"
        height="24px"
        alt=""
        on:click={() => next(1)}
      />
    </div>
  </div>
</div>

<style>
  .pic {
    mix-blend-mode: screen;
  }

  .sm-content {
    width: 390px;
  }
</style>
