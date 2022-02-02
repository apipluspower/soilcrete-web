<script>
  export let options = []
  export let display_func = a => a
  export let index = 0
  export let value

  $: {
    value = options[index]
  }
</script>

<select bind:value={index}>
  {#each options as option, i}
    <option value={i}>{display_func(option)}</option>
  {/each}
</select>

<style>
    select {
        @apply text-primary p-1 border border-primary rounded w-full bg-transparent;
    }
</style>