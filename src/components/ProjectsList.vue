<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
              @click="showDetails(project)"
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">
            <video
              v-if="isVideo(project.iconUrl)"
              class="project-item-image"
              :src="project.iconUrl"
              autoplay muted loop playsinline>
            </video>
            <div v-else class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
            </div>
            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  {{ project.name }}
                </div>
              </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="closeDetails"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData";

// Three ways to open a project:
// - basePath set (e.g. "/game-projects"): each project gets its own URL, basePath/<id>, which opens its details
// - links set (id -> path): clicking a card goes to that path instead (used for the featured cards on the home page)
// - neither: the details open in place
export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array,
    basePath: String,
    links: Object
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  watch: {
    "$route.params.projectId": {
      immediate: true,
      handler: function (id: string | undefined) {
        if (!this.basePath) {
          return;
        }
        if (!id) {
          this.showPopup = false;
          return;
        }
        const project = (this.projects as ProjectData[]).find(p => p.id === id);
        if (project) {
          this.openPopup(project);
        } else {
          // unknown project id: drop it from the URL
          this.$router.replace(this.basePath);
        }
      }
    }
  },
  methods: {
    isVideo: function (url: string) {
      return /\.(mp4|webm)$/i.test(url);
    },
    openPopup: function (item: ProjectData) {
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
    },
    showDetails: function (item: ProjectData) {
      const links = this.links as Record<string, string> | undefined;
      if (links && links[item.id]) {
        this.$router.push(links[item.id]);
      } else if (this.basePath) {
        this.$router.push(this.basePath + "/" + item.id);
      } else {
        this.openPopup(item);
      }
    },
    closeDetails: function () {
      if (this.basePath && this.$route.params.projectId) {
        this.$router.push(this.basePath);
      } else {
        this.showPopup = false;
      }
    },
  },
});
</script>

<style scoped>

.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  display: block;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}
.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-item:hover {
filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}



</style>