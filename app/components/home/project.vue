<script setup lang="ts">
interface Props {
  title: string;
  href: string;
  description: string;
  techStack: Tech[];
  img: string;
  alt: string;
  format: string;
  page: string;
}

export interface Tech {
  name: string;
  img: string;
}

const props = defineProps<Props>();
</script>

<template>
  <article
    class="relative group overflow-hidden rounded-xl border border-white/10 bg-linear-to-b from-white/5 to-transparent"
  >
    <NuxtImg
      :src="props.img"
      :alt="props.alt"
      fit="fill"
      :format="props.format"
      class="h-full w-full opacity-10 absolute object-cover inset-0 group-hover:opacity-20 transition duration-300"
      loading="lazy"
    />
    <div class="relative p-5 z-50">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-lg font-medium">{{ props.title }}</h3>
        <a
          :href="props.href"
          target="_blank"
          rel="noopener"
          class="text-sm text-blue-300 group-hover:text-blue-200"
          >Visit ↗</a
        >
      </div>
      <p class="mt-2 text-zinc-300">
        {{ props.description }}
      </p>
      <div class="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
        <UBadge
          v-for="tech in techStack"
          :key="tech.name"
          :avatar="{
            src: tech.img,
          }"
          size="md"
          color="neutral"
          variant="outline"
        >
          {{ tech.name }}
        </UBadge>
      </div>
    </div>
  </article>
</template>
