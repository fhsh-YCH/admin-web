<script setup>
defineProps(["modelInfo", "submit_process", "model_off_process"]);
</script>

<template>
  <form
    @submit.prevent="submit_process"
    class="flex flex-col items-center justify-center gap-4 bg-[#FAF7EF] p-8"
  >
    <h2 class="">{{ modelInfo.modelTitle }}</h2>
    <label for="name">
      <input
        placeholder="名稱"
        type="text"
        class="w-full rounded-md border border-black py-1 px-24 text-center"
        id="name"
        v-model="modelInfo.name"
      />
    </label>
    <label for="link">
      <input
        placeholder="連結"
        type="text"
        class="w-full rounded-md border border-black py-1 px-24 text-center"
        id="link"
        v-model="modelInfo.link"
      />
    </label>
    <label for="substance">
      <input
        placeholder="連結內容"
        type="text"
        class="w-full rounded-md border border-black py-1 px-24 text-center"
        id="link"
        v-model="modelInfo.substance"
      />
    </label>
    <label for="group">
      <input
        placeholder="群組"
        type="text"
        class="w-full rounded-md border border-black py-1 px-24 text-center"
        id="link"
        v-model="modelInfo.group"
      />
    </label>
    <div class="flex gap-2">
      <label for="opentime">
        <input
          placeholder="開放時間"
          type="text"
          class="rounded-md border border-black py-1 text-center"
          id="link"
          v-model="modelInfo.opentime"
        />
      </label>
      <label for="endtime">
        <input
          placeholder="結束時間"
          type="text"
          class="rounded-md border border-black py-1 text-center"
          id="link"
          v-model="modelInfo.endtime"
        />
      </label>
    </div>
    <div class="flex">
      <input type="submit" value="新增資料" class="cursor-pointer pr-6" />
      <input
        type="button"
        value="取消"
        @click="model_off_process"
        class="cursor-pointer rounded-md bg-[#34559D] p-2 text-white"
      />
    </div>
  </form>
</template>
