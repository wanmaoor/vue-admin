<script lang="ts" setup>
import { NButton } from "naive-ui";
import { useGlobalStore } from "@/store/global";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();
const { count } = storeToRefs(globalStore);
const { increment } = globalStore;
const mutate = () => globalStore.$patch({ count: 666 });
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <n-button type="primary" @click="increment">count is {{ count }}</n-button>
    <n-button type="info" @click="globalStore.$reset()">重置</n-button>
    <n-button type="success" @click="mutate">更改数据</n-button>
  </div>
</template>
