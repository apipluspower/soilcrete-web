<script lang="ts">
  import { onMount } from 'svelte'
  import { projects } from '../data/project'
  import Card from './Card.svelte'
  import Select from './Select.svelte'
  interface data {
    img: string
    name: string
    location: string
    owner: string
    value: string
  }
  let current = '1'
  let selected
  let rows: Array<data> = []
  let page: number = 0
  let totalPages: Array<Array<data>> = []
  let currentPageRows: Array<data> = []
  let itemsPerPage: number = 3

  $: currentPageRows = totalPages.length > 0 ? totalPages[page] : []

  const paginate = items => {
    const pages = Math.ceil(items.length / itemsPerPage)

    const paginatedItems = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage
      return items.slice(start, start + itemsPerPage)
    })
    totalPages = [...paginatedItems]
  }

  onMount(() => {
    rows = projects
    paginate(rows)
  })

  const setPage = (p: number) => {
    if (p >= 0 && p < totalPages.length) {
      page = p
    }
    current = p.toString()
  }
</script>
<div class="mb-4">
<Select
  options={[
    { text: 'All' },
    { text: 'งานระบบป้องกันดินพัง สำหรับงานขุดดิน' },
    { text: 'งานเสริมเสถียรภาพ ริมตลิง/สระ/อ่าง' },
    { text: 'งานเสริมเสถียรภาพเขื่อน' },
    { text: 'งานเสริมเสถียรภาพปล่องอุโมงค์' },
    { text: 'งานลดการทรุดตัวของดิน' },
    { text: 'งานลดการซึมผ่านของน้ำ' },
    { text: 'อื่น ๆ' }
  ]}
  display_func={o => o.text}
  bind:value={selected}
/>
</div>
<div class="flex flex-col items-center content-box">
  {#each currentPageRows as row, i}
    <div class="pb-10">
      <Card
        img={row.img}
        name={row.name}
        location={row.location}
        owner={row.owner}
        value={row.value}
      />
    </div>
  {:else}
    <h5 class="text-center">There is no data to display here.</h5>
  {/each}
  <nav class="pagination">
    <ul>
      <li>
        <button
          type="button"
          class="btn-next-prev flex flex-row items-center"
          on:click={() => setPage(page - 1)}
        >
          <img src="portfolio/arrow_left.svg" class="cursor-pointer mr-4" alt="" />
          Prev
        </button>
      </li>
      {#each totalPages as page, i}
        <li class="px-1">
          <button
            type="button"
            class="btn-page-number rounded border-solid border border-primary {current ===
            i.toString()
              ? 'selected'
              : ''}"
            on:click={() => {
              setPage(i)
            }}
          >
            {i + 1}
          </button>
        </li>
      {/each}

      <li>
        <button
          type="button"
          class="btn-next-prev flex flex-row items-center"
          on:click={() => setPage(page + 1)}
        >
          Next
          <img src="portfolio/arrow_right.svg" class="cursor-pointer ml-4" alt="" />
        </button>
      </li>
    </ul>
  </nav>
</div>

<style>
  nav > ul {
    list-style-type: none;
    display: flex;
  }
  .btn-next-prev,
  .btn-page-number {
    background-color: transparent;
    @apply text-primary;
  }
  .btn-page-number {
    width: 42px;
  }
  .btn-next-prev:hover,
  .btn-page-number:hover {
    border: none;
    background-color: #87a2c7;
    color: #014baa;
  }
  .btn-page-number:focus {
    border: none;
    color: white;
    background-color: #012e68;
  }
  .selected {
    border: none;
    color: white;
    background-color: #012e68;
  }
</style>
