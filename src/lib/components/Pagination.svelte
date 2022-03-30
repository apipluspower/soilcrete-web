<script lang="ts">
  import CardContent from './CardContent.svelte'
  import { datas } from './../data/foundationsContents'
</script>

<div class="flex flex-col items-center content-box">
  {#each datas as data}
    <div class="pb-10">
      <CardContent img={data.pic} title={data.title} description={data.desc} />
    </div>
  {:else}
    <h5 class="text-center">There is no data to display here.</h5>
  {/each}
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
