<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let isOpenModal: boolean
  export let img: string
  export let name: string
  export let location: string
  export let owner: string
  export let value: string

  function closeModal() {
    isOpenModal = false
    dispatch('closeModal', { isOpenModal })
  }
</script>

<div id="background" style="--display: {isOpenModal ? 'block' : 'none'};" on:click={closeModal} />
<div
  class="modal rounded overflow-hidden"
  id="modal"
  style="--display: {isOpenModal ? 'block' : 'none'};"
>
  <div class="pic" style="--img: url({img})" />
  <div class="px-6 py-4 bg-secondary">
    <div class="font-bold text-3xl mb-2">{name}</div>
    <div class="grid grid-row gap-2">
      <div class="grid grid-row md:grid-cols-3 text-left md:gap-4">
        <p class="text-base font-bold md:font-normal text-black-1 col-span-1">Location</p>
        <p class="text-base text-black-1 col-span-2">
          {location}
        </p>
      </div>
      <div class="grid grid-row md:grid-cols-3 text-left md:gap-4">
        <p class="text-base font-bold md:font-normal text-black-1 col-span-1">Project Owner</p>
        <p class="text-base text-black-1 col-span-2">
          {owner}
        </p>
      </div>
      <div class="grid grid-row md:grid-cols-3 text-left md:gap-4">
        <p class="text-base font-bold md:font-normal text-black-1 col-span-1">Value</p>
        <p class="text-base text-black-1 col-span-2">
          {value}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  #background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.66);
  }

  #modal {
    display: var(--display);
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    filter: drop-shadow(0 0 20px #333);
  }
  .modal {
    width: 70vw;
    height: 75vh;
  }
  .pic {
      background-image: var(--img);
      background-size: cover;
      height: 35vh;
  }
</style>
