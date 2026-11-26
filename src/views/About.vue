<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Anthony Seymour</strong>, a Gameplay Programmer.<br/>
        I like to spend my time working on game features, mods for games, and playing games!
      </div>

      <div style="margin-top: 20px;">I've worked on some
        <router-link to="/game-projects">game projects</router-link> and
        <router-link to="/game-features">features</router-link></div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> 
        as a Gameplay-related Programmer. You can reach me at 
        <a href="mailto:toekneephone@gmail.com">toekneephone@gmail.com</a> 
        or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="/img/avatar.png" alt="Avatar" /> 
    </div>

    <div style="clear:both"></div>

    <div class="featured">
      <h2>Featured work</h2>
      <ProjectsList v-bind:projects="featured" v-bind:links="featuredLinks" />
      <div class="see-all">
        See all <router-link to="/game-projects">game projects</router-link>
        and <router-link to="/game-features">game features</router-link>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectData from "@/data/ProjectData";
import gameProjectsData from "@/data/GameProjectsData";
import gameFeaturesData from "@/data/GameFeaturesData";

// featured cards link to the project's own page: [section, project id]
const featuredIds: Array<[string, string]> = [
  ["/game-features", "aether-mod-tools"],
  ["/game-projects", "dherth"],
  ["/game-projects", "robo-riot-ruckus"],
];

const allProjects: ProjectData[] = [...gameProjectsData, ...gameFeaturesData];

export default Vue.extend({
  name: "About",
  components: {
    ProjectsList,
  },
  data: function () {
    const featured: ProjectData[] = [];
    const featuredLinks: Record<string, string> = {};
    for (const [section, id] of featuredIds) {
      const project = allProjects.find(p => p.id === id);
      if (project) {
        // copy so the home page cards stay one row high regardless of their grid size elsewhere
        featured.push(Object.assign(Object.create(Object.getPrototypeOf(project)), project, { isHigh: false, isWide: false }));
        featuredLinks[id] = section + "/" + id;
      }
    }
    return { featured, featuredLinks };
  },
});
</script>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.featured {
  margin-top: 60px;
}

.featured h2 {
  font-weight: 100;
  font-size: 1.8em;
  margin-bottom: 30px;
}

.see-all {
  margin-top: 20px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>