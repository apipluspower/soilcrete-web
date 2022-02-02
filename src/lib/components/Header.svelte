<script lang="ts">
    export let img: string;
    export let title: string;
</script>

<header style="--image: url({img});">
  <div class="box bg-primary w-screen md:h-2/4">
    <div class="title flex flex-col-reverse items-end pt-52 pr-7 md:pt-40 md:pr-16">
      <p class="text-3xl md:text-7xl font-bold text-right text-white mb-8 mr-8 md:mb-20 md:mr-32">{title}</p>
    </div>
  </div>
</header>

<style>
  .box {
    position: absolute;
    height: 618px;
    background: linear-gradient(to bottom right, transparent 65%, #014baa 50%);
  }
  header {
    background-image: var(--image);
    height: 618px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title {
    bottom: 0;
    right: 0;
    position: absolute;
  }
  @media (max-width: 768px) {
    .box {
      height: 424px;
      background: linear-gradient(to bottom right, transparent 70%, #014baa 25%);
    }
    header {
      background-image: var(--image);
      height: 424px;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
