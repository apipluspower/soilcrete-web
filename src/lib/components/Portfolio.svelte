<script lang="ts">
import {projects} from '../data/project';
import Card from './Card.svelte';
let current = '1';
</script>
<div class="flex flex-col items-center px-8">
<div class="flex flex-row gap-8 items-center text-center mb-10">
    <div class="menu-bar {current === '1' ? 'selected' : ''}"
    on:click="{() => current = '1'}">
        <p class="text-base">งานระบบป้องกันดินพัง</p>
        <p class="text-base">สำหรับงานขุดดิน</p>
    </div>
    <div class="menu-bar {current === '2' ? 'selected' : ''}"
    on:click="{() => current = '2'}">
        <p class="text-base">งานเสริมเสถียรภาพ</p>
        <p class="text-base">ริมตลิง/สระ/อ่าง</p>
    </div>
    <div class="menu-bar {current === '3' ? 'selected' : ''}"
    on:click="{() => current = '3'}">
        <p class="text-base m-auto">งานเสริมเสถียรภาพเขื่อน</p>
    </div>
    <div class="menu-bar {current === '4' ? 'selected' : ''}"
    on:click="{() => current = '4'}">
        <p class="text-base">งานเสริมเสถียรภาพ</p>
        <p class="text-base">ปล่องอุโมงค์</p>
    </div>
    <div class="menu-bar {current === '5' ? 'selected' : ''}"
    on:click="{() => current = '5'}">
        <p class="text-base m-auto">งานลดการทรุดตัวของดิน</p>
    </div>
    <div class="menu-bar {current === '6' ? 'selected' : ''}"
    on:click="{() => current = '6'}">
        <p class="text-base m-auto">งานลดการซึมผ่านของน้ำ</p>
    </div>
    <div class="menu-bar {current === '7' ? 'selected' : ''}"
    on:click="{() => current = '7'}">
        <p class="text-base m-auto">อื่น ๆ</p>
    </div>
</div>
<div class="grid grid-cols-3 gap-8 justify-center px-20">
    {#each projects as project}
      <Card
        img={project.img}
        name={project.name}
        location={project.location}
        owner={project.owner}
        value={project.value}
      />
    {/each}
  </div>
</div>

<style>
    .menu-bar{
        @apply flex flex-col border-0 hover:border-b-2 hover:border-tricondary cursor-pointer h-xxl items-stretch;
    }
    .selected {
        @apply border-b-2 border-tricondary;
    }
</style>