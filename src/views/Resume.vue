<template>
  <div>
    <h1>Resume</h1>

    <div style="margin-top:20px; margin-bottom:20px;">
      <a class="download-link" href="/d/resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>PDF</a>
      <div style="clear:both"></div>
    </div>

    <div class="paragraph">
      I'm <strong>Anthony Seymour</strong>, a warehouse worker that loves programming in C++ and C#!
      <br />As a gameplay programmer, my curiosity fuels everything I do. I'm constantly seeking new challenges that push me to grow, adapt, and craft experiences that stay with players.
      <br />While much of my experience has been solo, I value and look forward to opportunities to collaborate with others.
      <br />Adaptability drives my work as a gameplay programmer. I'm quick to learn, experiment, and solve problems.
      <br />Currently I have enjoyed working on a new toy project called ProjectKratos and learning about reverse engineering.
      <br />I love both creating and playing video games! They're a core part of what I do and who I am.

    </div>
    <div class="photo">
      <img src="/img/resume-photo.png" alt="" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <div>
        <h2>Professional Summary</h2>
      </div>
      <br /><div>Gameplay Programmer with hands-on experience developing gameplay systems, AI behaviors, and interactive mechanics in Unreal
        Engine and Unity. Skilled in C++ and C#, brings strong problem-solving abilities, adaptability, and a focus on creating polished,
        engaging player experiences. Passionate about pushing gameplay innovation and contributing to collaborative, fast-paced
        development teams.
      </div>
      
      <div>
        <h2>Technical Skills</h2>
      </div>
      <div>
        <ul>
        <br /><strong><em>Programming Languages</em></strong>: C++, C#, Python, Lua
        <br /><strong><em>Game Engines & Tools</em></strong>: Unreal Engine 4/5, Unity, Blender, Flecs, Gateware
        <br /><strong><em>Version Control</em></strong>: Git, Perforce
        <br /><strong><em>Development Practices</em></strong>: Agile, Scrum, collaborative workflows
        <br /><strong><em>Optimization & Debugging</em></strong>: Performance/memory optimization, debugging with Unreal and Unity toolsets
        </ul>
      </div>

      <div>
        <h2>Skills</h2>
      </div>
      <br />
      <div class="skill-set">
        <SkillRate name="Problem-Solving" :rate="5" />
        <SkillRate name="Adaptability" :rate="5" />
        <SkillRate name="Time Management" :rate="4" />
        <SkillRate name="Collaboration" :rate="4" />
        <SkillRate name="Iteration" :rate="4" />
        <SkillRate name="Prioritization" :rate="4" />
        <SkillRate name="Independence" :rate="5" />
        <SkillRate name="Feedback Integration" :rate="4" />
        <SkillRate name="Quality Focus" :rate="5" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>
      <h3>Full Sail University (2024)</h3>
      <h4>Bachelor's Degree in Game Development</h4>
      <h3>Colonie Central High School (2018)</h3>
      <h4>High school Diploma</h4>

      <h2>Other Info</h2>
      <div>
        <h3>Top 3 Games</h3>
        <div>Subnautica, Skyrim, and Stardew Valley</div>

        <h3>Reverse Engineering</h3>
        <div>I find it very interesting how games work under the hood and started learning more about reverse engineering.</div>

        <h3>Soft Peppermint Candy</h3>
        <div>I can't ever eat just one.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
  font-size: 2em;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>