<script lang="ts">
  export let img: string
  export let name: string
  export let location: string
  export let owner: string
  export let value: string
  import ProjectModal from '../components/ProjectModal.svelte'

  let isOpenModal = false

  function openModal() {
    isOpenModal = true
  }

  function closeModal() {
    isOpenModal = false
  }
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" on:click={openModal}>
  <img class="w-full" src={img} alt="" />
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
<ProjectModal isOpenModal={isOpenModal} img={img} name={name} location={location} owner={owner} value={value} on:closeModal={closeModal} />
