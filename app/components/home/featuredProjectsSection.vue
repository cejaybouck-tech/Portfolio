<script setup lang="ts">
import { Projects } from "~/data/ProjectsData";
</script>

<template>
  <section id="featured" class="mx-auto max-w-7xl px-4 py-12 md:py-16">
    <div class="flex items-end justify-between gap-4">
      <h2 class="text-xl font-semibold tracking-tight">Featured projects</h2>
      <a href="#repos" class="text-sm text-blue-300 hover:text-blue-200"
        >See more repos ↓</a
      >
    </div>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <HomeProject
        v-for="project in Projects"
        :key="project.title"
        :title="project.title"
        :href="project.href"
        :description="project.description"
        :img="project.img"
        :alt="project.alt"
        :page="project.page"
        :techStack="project.techStack"
      />
    </div>
  </section>
</template>
