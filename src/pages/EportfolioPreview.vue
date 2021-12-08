<template>
  <div>
    <div v-if="loadingQueries"></div>
    <div v-else>
      <div class="white-vertion black-bg">
        <home-section />
        <about-section />
        <skill-section />
        <education-section />
        <experience-section />
        <project-section />
        <extra-section />
      </div>
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
import UserPortfolio from "../graphql/queries/single_query/allUserDetails.gql";
import { mapActions } from "vuex";
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
  data() {
    return {
      loadingQueries: 0,
    };
  },
  methods: {
    ...mapActions({
      UserProfile: "Profile/getUserProfile",
      UserProject: "Project/getUserProject",
      UserInterest: "Interest/getUserInterest",
      UserExperience: "Experience/getUserExperience",
      UserEducation: "Education/getUserEducation",
      UserSkill: "Skill/getUserSkill",
      UserDetails: "User/getUserDetails",
      // ProjectTechnology: "Technology/getProjectTechnology",
    }),
  },
  apollo: {
    allUserDetails: {
      query: UserPortfolio,
      loadingKey: "loadingQueries",

      update(data) {
        if (data.user.profiles.data == null) {
          return this.UserProfile(null);
        }
        this.UserProfile(data.user.profiles.data[0]);
        this.UserProject(data.user.projects.data);
        this.UserInterest(data.user.interests.data);
        this.UserExperience(data.user.experiences.data);
        this.UserEducation(data.user.educations.data);
        this.UserSkill(data.user.skills.data);
        this.UserDetails(data.user);
        return data;
      },
    },
  },
};
</script>
