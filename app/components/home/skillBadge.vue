<script setup lang="ts">
interface Props {
  name: string;
  image: string;
  alt: string;
  format: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex justify-center items-center text-lg gap-x-2 rounded-lg border border-white/10 bg-white/5 p-3 text-center text-nowrap"
  >
    <NuxtImg
      :src="props.image"
      :alt="props.alt"
      width="25"
      height="25"
      :format="props.format"
    />
    {{ props.name }}
  </div>
</template>
