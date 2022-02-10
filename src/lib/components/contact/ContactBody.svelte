<script lang="ts">
  import MyMap from '../MyMap.svelte'
</script>

<div class="py-20 flex flex-col items-center">
  <div class="m-auto">
    <p class="text-black-1 text-center font-bold text-3xl md:text-7xl md:mb-6 mb-6">
      บริษัทซอยล์กรีต เทค จํากัด
    </p>
    <div class="description m-auto md:mb-20 mb-10 px-20">
      <p class="text-black-1 text-center text-base">เลขประจำตัวผู้เสียภาษี 0115558020538</p>
      <p class="text-black-1 text-center text-base">
        112/5 หมู่ 9 ตำบลบางปลา อำเภอบางพลี จังหวัดสมุทรปราการ 10540
      </p>
      <p class="text-black-1 text-center text-base">02-706-4575, 02-315-4212</p>
      <p class="text-black-1 text-center text-base">02-706-4576</p>
      <p class="text-black-1 text-center text-base">info@soilcrete.co.th</p>
    </div>
  </div>
  <div>
    <p class="text-black-1 text-center font-bold text-3xl md:text-7xl md:mb-6 mb-6">ติดต่อสอบถาม</p>
    <div class="contact-name m-auto md:mb-4 mb-4 px-20">
      <p class="text-black-1 text-center text-base">คุณสุชาติ สุริยวิจิตรเศรณี</p>
      <p class="text-black-1 text-center text-base">081-623-3402</p>
      <p class="text-black-1 text-center text-base">suchart@soilcrete.co.th</p>
    </div>
    <div class="contact-name m-auto md:mb-20 mb-4 px-20">
      <p class="text-black-1 text-center text-base">คุณศิริชัย เพชรมะลิ</p>
      <p class="text-black-1 text-center text-base">081-306-3165</p>
      <p class="text-black-1 text-center text-base">sirichai@soilcrete.co.th</p>
    </div>
  </div>
  <div class="map">
    <MyMap />
  </div>
</div>

<style>
  .description {
    min-width: 343px;
  }
  .contact-name {
    min-width: 343px;
  }
  .map {
    height: 400px;
    width: 1200px;
    @apply px-12;
  }
  @media (max-width: 768px) {
    .map {
      height: 400px;
      width: 100vw;
      @apply px-12;
    }
  }
</style>
