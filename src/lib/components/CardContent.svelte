<script lang="ts">
  import FoundationsModal from './FoundationsModal.svelte'

  export let img: string
  export let title: string
  export let description: string
  let isOpenModal = false

  function openModal() {
    isOpenModal = true
  }

  function closeModal() {
    isOpenModal = false
  }
</script>

<div
  class="rounded overflow-hidden shadow-lg flex flex-col md:flex-row bg-white md:items-center p-4"
>
  <div class="content text-left flex flex-col items-start">
    <p class="text-base text-black-1 md:text-lg md:font-bold pb-4">{title}</p>
    <p class="text-base text-black-1 pb-4 hidden md:block">{description}</p>
    <button class="content-button order-last self-start cursor-pointer" on:click={openModal}
      >Work's image</button
    >
  </div>
  <img class="order-first md:order-last" src={img} />
</div>
<FoundationsModal {isOpenModal} {img} {title} {description} on:closeModal={closeModal} />

<style>
  .content {
    max-width: 452px;
  }
  .content-button {
    width: fit-content;
  }
</style>
