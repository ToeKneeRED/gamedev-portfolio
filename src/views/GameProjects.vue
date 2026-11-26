<template>
  <div>
    <h1>Game Projects</h1>

    <div style="margin-bottom: 30px;">
      Games I've built, from Dherth, the horde looter shooter I'm making now, to earlier prototypes in Unreal, Unity, and a custom C++ engine.
    </div>

    <ProjectsList v-bind:projects="projects" base-path="/game-projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
