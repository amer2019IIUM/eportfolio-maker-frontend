<template>
  <div>
    <div class="white-vertion black-bg">
      <!-- Start Loader -->
      <!-- <div class="section-loader">
        <div class="loader">
          <div></div>
          <div></div>
        </div>
      </div> -->
      <!-- End Loader -->

      <!--
        ===================
           NAVIGATION
        ===================
        -->

      <home-section />
      <about-section />
      <skill-section />

      <section class="mh-experince" id="mh-experience">
        <div class="bolor-overlay">
          <div class="container">
            <div class="row section-separator">
              <education-section />
              <experience-section />
            </div>
          </div>
        </div>
      </section>

      <project-section />
      <extra-section />
    </div>
  </div>
</template>

<script>
import AboutSection from "../components/EportfolioPreviewSections/AboutSection.vue";
import EducationSection from "../components/EportfolioPreviewSections/EducationSection.vue";
import ExperienceSection from "../components/EportfolioPreviewSections/ExperienceSection.vue";
import ExtraSection from "../components/EportfolioPreviewSections/ExtraSection.vue";
import HomeSection from "../components/EportfolioPreviewSections/HomeSection.vue";
import ProjectSection from "../components/EportfolioPreviewSections/ProjectSection.vue";
import SkillSection from "../components/EportfolioPreviewSections/SkillSection.vue";
export default {
  components: {
    HomeSection,
    AboutSection,
    SkillSection,
    EducationSection,
    ExperienceSection,
    ProjectSection,
    ExtraSection,
  },
};
</script>
