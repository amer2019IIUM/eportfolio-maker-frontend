<template>
  <!--
        ===================
           SKILLS
        ===================
        -->
  <section class="mh-skills" id="mh-skills">
    <div class="container">
      <div class="row section-separator">
        <div class="section-title text-center col-sm-12">
          <!--<h2>Skills</h2>-->
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="mh-skills-inner">
            <div
              class="mh-professional-skill wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <h3>Technical Skills</h3>
              <div
                class="each-skills"
                v-for="(item, index) in userSkill"
                :key="index"
              >
                <div class="candidatos" v-if="item.type == 'technical'">
                  <div class="parcial">
                    <div class="info">
                      <div class="nome">{{ item.title }}</div>
                      <div class="percentagem-num">{{ item.percentage }}%</div>
                    </div>
                    <div class="progressBar">
                      <div
                        class="percentagem"
                        v-bind:style="'width:' + item.percentage + '%'"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div
            class="mh-professional-skills wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.5s"
          >
            <h3>Professional Skills</h3>
            <ul class="mh-professional-progress">
              <span v-for="(item, index) in userSkill" :key="index">
                <li v-if="item.type == 'professional'">
                  <div class="circle-wrap">
                    <div class="circle">
                      <div class="mask full">
                        <div class="fill"></div>
                      </div>

                      <div class="mask half">
                        <div class="fill"></div>
                      </div>

                      <div class="inside-circle">{{ item.percentage }}%</div>
                    </div>
                  </div>
                  <div class="pr-skill-name">{{ item.title }}</div>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // your data
    };
  },
  computed: {
    ...mapGetters({
      userSkill: "Skill/userSkill",
    }),
  },
};
</script>
<style scoped>
.circle-wrap {
  margin: 10px auto;
  width: 150px;
  height: 150px;
  background: #e6e2e7;
  border-radius: 50%;
}
.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}
.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}
.circle-wrap .circle .mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #39d7be;
}
.circle-wrap .circle .mask.full,
.circle-wrap .circle .fill {
  animation: fill ease-in-out 3s;
  /* transform: rotate(300deg); */
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  /* 100% {
    transform: rotate(126deg);
  } */
}
.circle-wrap .inside-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff;
  line-height: 130px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}
</style>
