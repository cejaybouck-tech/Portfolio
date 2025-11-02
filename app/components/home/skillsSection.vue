<script setup lang="ts">
import { Skills } from "~/data/SkillsData";
</script>

<template>
  <section id="skills" class="mx-auto max-w-7xl px-4 py-12 md:py-16">
    <h2 class="text-xl font-semibold tracking-tight">Core skills</h2>
    <p class="mt-2 text-zinc-300">
      Production experience across the modern JS ecosystem and backend services.
    </p>
    <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      <HomeSkillBadge
        v-for="skill in Skills"
        :key="skill.name"
        :name="skill.name"
        :image="skill.image"
        :alt="skill.alt"
        :format="skill.format"
      />
    </div>
  </section>
</template>
