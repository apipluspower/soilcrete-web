<script lang="ts">
  import { onMount } from 'svelte'
  import CardContent from './CardContent.svelte'
  import { datas } from './../data/foundationsContents'
  interface data {
    pic: string
    title: string
    desc: string
  }
  let rows: Array<data> = []
  let page: number = 0
  let totalPages: Array<Array<data>> = []
  let currentPageRows: Array<data> = []
  let itemsPerPage: number = 4
  let loading: boolean = true

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
    rows = datas
    paginate(rows)
  })

  const setPage = p => {
    if (p >= 0 && p < totalPages.length) {
      page = p
    }
  }
</script>

<div class="flex flex-col items-center content-box">
  {#each currentPageRows as row, i}
    <div class="pb-10">
      <CardContent img={row.pic} title={row.title} description={row.desc} />
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
          <img src="foundations/arrow_left.svg" class="cursor-pointer mr-4" alt="" />
          Prev
        </button>
      </li>
      {#each totalPages as page, i}
        <li class="px-1">
          <button
            type="button"
            class="btn-page-number rounded border-solid border border-white "
            on:click={() => setPage(i)}
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
          <img src="foundations/arrow_right.svg" class="cursor-pointer ml-4" alt="" />
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
  .btn-page-number {
    width: 42px;
  }
  .btn-page-number:hover {
    border: none;
    background-color: #87a2c7;
    color: #014baa;
  }
  .btn-page-number:focus {
    border: none;
    background-color: #012e68;
  }
</style>
