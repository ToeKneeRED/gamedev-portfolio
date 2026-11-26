<template>
  <div>
    <h1>Game Features</h1>

    <div style="margin-bottom: 30px;">
      Individual systems and tools I've built, from the Project Aether mod tools to gameplay systems like loot rarity and XP.
    </div>
    <ProjectsList v-bind:projects="projects" base-path="/game-features" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameFeaturesData from "@/data/GameFeaturesData";

export default Vue.extend({
  name: "GameFeatures",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameFeaturesData,
    };
  },
});
</script>
