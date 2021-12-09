<template>
  <!--
        ===================
            HOME 
        ===================
        -->
  <section class="mh-home app" id="mh-home">
    <div class="home-ovimg">
      <div class="container">
        <div
          class="row xs-column-reverse section-separator vertical-middle-content home-padding"
        >
          <div class="col-sm-6">
            <div class="mh-header-info">
              <div
                class="mh-promo wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                <span>Hello I'm</span>
              </div>

              <h2
                class="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                {{ profile.first_name }} {{ " " }} {{ profile.last_name }}
              </h2>
              <h4
                class="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                {{ profile.headline }}
              </h4>

              <ul>
                <li
                  class="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <i class="fa fa-envelope"></i
                  ><a href="mailto:">{{ userDetails.email }}</a>
                </li>
                <li
                  class="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <i class="fa fa-phone"></i
                  ><a href="callto:">{{ userDetails.phone_no }}</a>
                </li>
                <li
                  class="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.6s"
                >
                  <i class="fa fa-map-marker"></i>
                  <address>37, Pollsatnd, New York, United State</address>
                </li>
              </ul>

              <ul
                class="social-icon wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.7s"
              >
                <li>
                  <a :href="userDetails.facebook"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a :href="userDetails.twitter"
                    ><i class="fa fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a :href="userDetails.linkedin"
                    ><i class="fa fa-linkedin"></i
                  ></a>
                </li>
                <li>
                  <a :href="userDetails.github"><i class="fa fa-github"></i></a>
                </li>
                <li>
                  <a :href="userDetails.github"
                    ><i class="fa fa-dribbble"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div
              class="hero-img wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.6s"
            >
              <div class="img-border">
                <img
                  :src="profile.attachments[0].link"
                  alt=""
                  class="img-fluid"
                  height="425px"
                  width="425px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SimpleImg from "../../assets/images/hero.png";
import { mapGetters } from "vuex";
export default {
  data() {
    return { SimpleImg };
  },
  computed: {
    ...mapGetters({
      profile: "Profile/userProfile",
      userDetails: "User/userDetails",
    }),
  },
};
</script>
