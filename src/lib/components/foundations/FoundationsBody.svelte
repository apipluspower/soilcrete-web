<script lang="ts">
  import { datas } from '../../data/foundationsPics'
  let x: number = 0
  function prev(length: number) {
    x = x - length
  }

  function next(length: number) {
    x = x + length
  }
</script>

<div class="py-10 md:py-20">
  <div class="m-auto">
    <p class="text-black-1 text-center font-bold text-3xl md:text-7xl md:mb-6 mb-6">
      เสาเข็มดินซีเมนต์ ก่อสร้างด้วยระบบ JET GROUTING
    </p>
    <p class="text-black-1 text-center text-base m-auto md:mb-20 mb-10 px-20">
      Jet Grouting Technique เป็นวิธีการปรับปรุงคุณภาพดิน เพื่อให้เหมาะสมกับการก่อสร้างวิธีหนึ่ง
      เพื่อเป็นการเพิ่ม Strength ของดินเดิม ซึ่งโดยทั่วไป สภาพดินในตอนกลางของประเทศไทยโดยส่วนใหญ่
      เป็นดินเหนี่ยวอ่อน ไม่เหมาะกับการก่อสร้าง เนื่องจากจะทำให้เกิดการไหล หรือ เคลื่อนตัวของดินสูง
      อีกทั้งจะเกิดการทรุดตัวได้สูงกว่าดินชนิดอื่นๆ
    </p>
    <div class="presentation flex flex-col mx-4">
      <p class="text-black-1 text-3xl md:text-5xl font-bold text-center mb-2 md:mb-20 md:order-1">
        วิธีการทำงานทั่วไป
      </p>
      <div class="pics order-first md:order-2">
        <img class="m-auto mb-4" src="/foundations/body_foundations.png" alt="" />
        <div class="hidden md:flex md:gap-4 md:justify-center">
          <img
            src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/arrow_left.svg"
            class="cursor-pointer"
            width="16px"
            height="16px"
            alt=""
            on:click={() => prev(5)}
          />
          <div class="hidden mb-4 justify-center md:grid md:grid-cols-5 md:gap-4">
            {#each { length: 5 } as _, i}
              <img src={datas[(i + x) % datas.length].pic} />
            {/each}
          </div>
          <img
            src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/arrow_right.svg"
            class="cursor-pointer"
            width="16px"
            height="16px"
            alt=""
            on:click={() => next(5)}
          />
        </div>
        <div class="flex md:hidden gap-4 justify-center mb-4">
          <img
            src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/arrow_left.svg"
            class="cursor-pointer"
            width="24px"
            height="24px"
            alt=""
            on:click={() => prev(2)}
          />
          <div class="grid grid-cols-2 md:hidden gap-4 justify-center">
            {#each { length: 2 } as _, i}
              <img src={datas[(i + x) % datas.length].pic} />
            {/each}
          </div>
          <img
            src="https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/arrow_right.svg"
            class="cursor-pointer"
            width="24px"
            height="24px"
            alt=""
            on:click={() => next(2)}
          />
        </div>
      </div>
      <p class="text-black-1 text-center text-base m-auto px-20 md:order-3">
        เจาะฉีดน้ำด้วยแรงดันสูงเพื่อเป็นการทำลายอนุภาคของดินให้แตกตัวโดยละเอียด
        ก่อนที่จะฉีดน้ำผสมซีเมนต์ด้วยแรงดันสูง ประมาณ 200 – 400 บาร์ ผ่านทางหัวฉีด ( Nozzle )
        ซึ่งมีขนาดประมาณ 1.4 – 2.0 ม.ม. เรียงตัวอยู่ในหัวเจาะ จำนวน 1 – 6 หัวฉีด ในขณะที่ฉีดน้ำปูน (
        Cement Slurry ) ด้วยแรงดันสูงนั้นก้านเจาะจะหมุนด้วยอัตราความเร็วรอบ ประมาณ 6 – 12 รอบต่อนาที
        พร้อมทั้งยกดึงก้านเจาะขึ้นเป็นจังหวะ ประมาณ 6 – 12 ซ.ม.
        ขณะเดียวกันจะทำการอัดฉีดน้ำปูนซีเมนต์ความดันสูง แหวกทะลุ ทะลวง
        ตัดย่อยดินให้ผสมรวมเป็นเนื้อเดียวกัน
        การทำงานจะควบคุมด้วยระบบควบคุมอัตโนมัติอย่างต่อเนื่องตั้งแต่ระดับความลึกที่ต้องการ
        จนถึงด้านบนของ Column วัสดุผสม ดิน – ซีเมนต์ จะก่อรูปเป็นทรงกระบอกในลักษณะเหมือนเสาเข็ม
        ซึ่งเรียกว่า Cement Column
      </p>
    </div>
  </div>
</div>

<style>
  .description {
    min-width: 343px;
  }
  .contact-name {
    min-width: 343px;
  }
</style>
