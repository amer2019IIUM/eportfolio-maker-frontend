<!--
        ===================
           EXPERIENCES
        ===================
        -->
<template>
  <span>
    <div
      class="section-title col-sm-12 wow fadeInUp"
      data-wow-duration="0.8s"
      data-wow-delay="0.1s"
    >
      <h3>Experiences</h3>
    </div>
    <div class="container">
      <div class="timeline">
        <ul>
          <li v-for="(item, index) in userExperience" :key="index">
            <div class="timeline-content">
              <h3 class="date">{{ item.to }}</h3>
              <div
                class="mh-project-gallery"
                id="project-gallery"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s"
              >
                <div class="grid-item user-interface">
                  <figure>
                    <h1>{{ item.job_title }}</h1>
                    <p>
                      {{ item.further_details }}
                    </p>
                    <figcaption class="fig-caption">
                      <i class="fa fa-search"></i>
                      <h5 class="title">Title here</h5>

                      <span class="sub-title">20th may, 2010</span>
                      <a
                        data-fancybox
                        data-src="#mh"
                        v-b-modal="`modal-${1}`"
                      ></a>
                    </figcaption>
                  </figure>

                  <div>
                    <b-modal :id="`modal-${1}`" size="lg" title="Large Modal">
                      Hello Large Modal!
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </span>
</template>
<script>
import Img1 from "../../assets/images/portfolio/g1.jpg";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      Img1,
    };
  },
  computed: {
    ...mapGetters({
      userExperience: "Experience/userExperience",
    }),
  },
};
</script>
<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background-color: rgb(240, 240, 240);
}
.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline ul {
  list-style: none;
}
.timeline ul li {
  padding: 20px;
  background-color: #ffffff;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
}
.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
  .timeline-content .date {
    position: absolute;
    top: -30px;
  }
  .timeline ul li:hover::before {
    background-color: aqua;
  }
}
</style>
