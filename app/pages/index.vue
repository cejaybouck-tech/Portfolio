<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useHead } from "#imports";

useHead({
  title: "Developer Portfolio — cejaybouck-tech",
  meta: [
    {
      name: "description",
      content:
        "Full‑stack developer skilled in TypeScript, JavaScript, React, Vue, Next.js, Nuxt.js, Tailwind CSS, CSS, Vite, MongoDB, and Go (Golang).",
    },
  ],
  link: [
    {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%220.9em%22 font-size=%2290%22>💻</text></svg>",
    },
  ],
});

const year = new Date().getFullYear();

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }
});

// GitHub repos
interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

const repos = ref<Repo[]>([]);
const loadingRepos = ref(false);
const GITHUB_USER = "cejaybouck-tech";

const recentRepos = computed(() => repos.value.slice(0, 9));

onMounted(async () => {
  loadingRepos.value = true;
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`
    );

    if (!res.ok) throw new Error("Failed to fetch repos");
    const data: Repo[] = await res.json();
    repos.value = data
      .filter((r) => (r as any).fork === false)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
  } catch (e) {
    console.error(e);
  } finally {
    loadingRepos.value = false;
  }
});
</script>

<template>
  <div>
    <div class="noise" />
    <!-- nav bar -->
    <header
      class="sticky top-0 z-40 backdrop-blur supports-backdrop-filter:bg-zinc-950/50"
    >
      <div
        class="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between"
      >
        <a href="#home" class="font-semibold tracking-tight text-zinc-100"
          >Cejay Bouck</a
        >
        <nav class="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a class="hover:text-white" href="#skills">Skills</a>
          <a class="hover:text-white" href="#featured">Featured</a>
          <a class="hover:text-white" href="#oss">Open Source</a>
          <a class="hover:text-white" href="#repos">Repos</a>
          <a class="hover:text-white" href="#contact">Contact</a>
        </nav>
        <a
          href="https://github.com/cejaybouck-tech"
          target="_blank"
          rel="noopener"
          class="md:hidden inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1 text-sm text-zinc-300 hover:bg-white/5"
          >GitHub ↗</a
        >
      </div>
    </header>

    <main id="home" class="relative overflow-hidden">
      <!-- Hero Section -->
      <section class="grad">
        <div class="mx-auto max-w-7xl px-4 pt-16 pb-10 md:pt-24 md:pb-16">
          <div class="max-w-3xl">
            <p
              class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              Available for freelance · Remote OK
            </p>
            <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
              Full‑stack developer shipping real‑world apps with TypeScript,
              React/Vue, Next/Nuxt, Tailwind, MongoDB, and Go.
            </h1>
            <p class="mt-4 text-lg text-zinc-300">
              I design, build, and deploy performant web apps end‑to‑end—from
              API integrations and data models to modern, accessible UIs.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a
                href="#featured"
                class="rounded-md bg-blue-600 px-4 py-2 font-medium shadow hover:bg-blue-500"
                >View work</a
              >
              <a
                href="https://github.com/cejaybouck-tech"
                target="_blank"
                rel="noopener"
                class="rounded-md border border-white/10 px-4 py-2 font-medium hover:bg-white/5"
                >GitHub ↗</a
              >
            </div>
          </div>
        </div>
      </section>

      <HomeSkillsSection />
      <HomeFeaturedProjectsSection />

      <!-- Open Source projects -->
      <section id="oss" class="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 class="text-xl font-semibold tracking-tight">
          Open source highlights
        </h2>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            class="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            href="https://github.com/cejaybouck-tech/sudoku"
            target="_blank"
            rel="noopener"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-medium">Sudoku</h3>
              <span class="text-xs text-zinc-400">React + TS + Vite</span>
            </div>
            <p class="mt-2 text-sm text-zinc-300">
              Playable Sudoku with notes, mistakes, and generator. Tailwind UI.
            </p>
          </a>
          <a
            class="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            href="https://github.com/cejaybouck-tech/chat-box-go-server"
            target="_blank"
            rel="noopener"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-medium">Chat Box Go Server</h3>
              <span class="text-xs text-zinc-400">Go + WebSockets</span>
            </div>
            <p class="mt-2 text-sm text-zinc-300">
              Minimal real‑time chat server with goroutines and in‑memory state.
            </p>
          </a>
          <a
            class="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            href="https://github.com/cejaybouck-tech/chat-box-client-react"
            target="_blank"
            rel="noopener"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-medium">Chat Client (React)</h3>
              <span class="text-xs text-zinc-400">React + Vite + TS</span>
            </div>
            <p class="mt-2 text-sm text-zinc-300">
              Auth, live messaging, presence; Tailwind UI.
            </p>
          </a>
          <a
            class="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            href="https://github.com/cejaybouck-tech/chat-box-client-vue"
            target="_blank"
            rel="noopener"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-medium">Chat Client (Vue)</h3>
              <span class="text-xs text-zinc-400">Vue 3 + Vite</span>
            </div>
            <p class="mt-2 text-sm text-zinc-300">
              WebSocket chat UI to pair with the Go server.
            </p>
          </a>
        </div>
      </section>

      <!-- Recent Repositories -->
      <section id="repos" class="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div class="flex items-end justify-between gap-4">
          <h2 class="text-xl font-semibold tracking-tight">
            Recent repositories
          </h2>
          <a
            class="text-sm text-blue-300 hover:text-blue-200"
            href="https://github.com/cejaybouck-tech?tab=repositories"
            target="_blank"
            rel="noopener"
            >All on GitHub ↗</a
          >
        </div>
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <template v-if="recentRepos.length">
            <a
              v-for="r in recentRepos"
              :key="r.html_url"
              :href="r.html_url"
              target="_blank"
              rel="noopener"
              class="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              <div class="flex items-center justify-between gap-3">
                <h3 class="truncate font-medium">{{ r.name }}</h3>
                <span class="whitespace-nowrap text-xs text-zinc-400">{{
                  new Date(r.updated_at).toLocaleDateString()
                }}</span>
              </div>
              <p class="mt-2 line-clamp-3 text-sm text-zinc-300">
                {{ r.description || "No description" }}
              </p>
              <div
                class="mt-3 flex items-center justify-between text-xs text-zinc-400"
              >
                <span>{{ r.language || "" }}</span>
                <span>★ {{ r.stargazers_count }}</span>
              </div>
            </a>
          </template>
          <p
            v-else
            class="text-sm text-zinc-400"
            :class="{ 'animate-pulse': loadingRepos }"
          >
            {{ loadingRepos ? "Loading…" : "No repositories found." }}
          </p>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div
          class="rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-6 md:p-8"
        >
          <h2 class="text-xl font-semibold tracking-tight">Get in touch</h2>
          <p class="mt-2 text-zinc-300">
            Like what you see? I’m open to freelance, contract, and
            collaboration opportunities.
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/cejaybouck-tech"
              target="_blank"
              rel="noopener"
              class="rounded-md border border-white/10 px-4 py-2 hover:bg-white/5"
              >GitHub ↗</a
            >
            <a
              href="#"
              class="rounded-md border border-white/10 px-4 py-2 text-zinc-500 cursor-not-allowed"
              title="Email not provided"
              >Email</a
            >
          </div>
        </div>
      </section>
    </main>

    <footer class="mx-auto max-w-7xl px-4 py-8 text-sm text-zinc-500">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <p>© {{ year }} cejaybouck-tech</p>
        <div class="flex items-center gap-3">
          <a href="#home" class="hover:text-zinc-300">Top ↑</a>
          <a
            href="https://github.com/cejaybouck-tech"
            target="_blank"
            rel="noopener"
            class="hover:text-zinc-300"
            >GitHub</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.035;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.6"/></svg>');
  mix-blend-mode: overlay;
}
.grad {
  background:
    radial-gradient(
      1200px 600px at 80% -10%,
      rgba(45, 93, 255, 0.25),
      rgba(45, 93, 255, 0)
    ),
    radial-gradient(
      800px 400px at -10% 20%,
      rgba(123, 97, 255, 0.18),
      rgba(123, 97, 255, 0)
    );
}
</style>
