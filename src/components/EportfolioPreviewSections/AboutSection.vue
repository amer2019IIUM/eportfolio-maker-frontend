<template>
  <div>
    <!--
        ==================
            ABOUT
        =================
        -->
    <section class="mh-about" id="mh-about">
      <div class="container">
        <div class="row section-separator">
          <div class="col-sm-12 col-md-6">
            <div
              class="mh-about-img shadow-2 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              <img :src="SimpleImg" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="mh-about-inner">
              <h2
                class="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                About Me
              </h2>
              <p
                class="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                {{ profile.summary }}
              </p>
              <div
                class="mh-about-tag wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <ul v-for="(item, index) in userSkill" :key="index">
                  <li>
                    <span>{{ item.title }}</span>
                  </li>
                </ul>
              </div>
              <a href="" class="btn btn-fill wow fadeInUp">
                Downlaod CV
                <i class="fa fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--
        ===================
           SERVICE
        ===================
        -->
    <!-- <section class="mh-service">
      <div class="container">
        <div class="row section-separator">
          <div
            class="col-sm-12 text-center section-title wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <h2>What I do</h2>
          </div>
          <div class="col-sm-4">
            <div
              class="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <i class="fa fa-bullseye purple-color"></i>
              <h3>UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div
              class="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <i class="fa fa-code iron-color"></i>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div
              class="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.7s"
            >
              <i class="fa fa-object-ungroup sky-color"></i>
              <h3>App Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SimpleImg from "../../assets/images/ab-img.png";
export default {
  data() {
    return { SimpleImg };
  },
  computed: {
    ...mapGetters({
      profile: "Profile/userProfile",
      userSkill: "Skill/userSkill",
    }),
  },
};
</script>
