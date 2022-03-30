<script>
  import { datas } from '../../data/aboutBody'
</script>

<div class="py-20">
  <p class="text-black-1 text-center font-bold text-3xl md:text-7xl md:mb-20 mb-5">
    บริษัทซอยล์กรีต เทค จํากัด
  </p>
  <div class="description m-auto md:mb-20 mb-10 px-10">
    <p class="text-black-1 text-center text-xl">
      เดิมชื่อ บริษัทซอยล์กรีต เทคโนโลยี จํากัด จัดตั้งขึ้น ตั้งแต่ปี พ.ศ. 2535 ต่อมา เมื่อวันที่ 16
      ตุลาคม 2558 ได้แยกส่วนงานเสาเข็มดินซีเมนต์ ดำเนินธุรกิจ ภายใต้ชื่อ บริษัท ซอยล์กรีต เทค จำกัด
      เพื่อรองรับงานเสาเข็มดินซีเมนต์ เต็มรูปแบบ ปัจจุบันบริษัทมีทุนจดทะเบียน 73 ล้านบาท
    </p>
  </div>
  <p class="text-black-1 text-center font-bold text-3xl md:text-7xl md:mb-20 mb-5">WHAT WE DO</p>
  <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 px-20">
    {#each datas as data}
      <div class="about-data flex flex-col gap-2 justify-between">
        <p class="text-black-1 font-bold text-center text-4xl mb-2">{data.title}</p>
        <p class="text-black-1 text-center text-xl mb-4">{data.desc}</p>
        <img class={data.class} src={data.pic} alt="" />
      </div>
    {/each}
  </div>
</div>

<style>
  .description {
    max-width: 543px;
  }
  .about-data {
    max-width: 556px;
  }
</style>
