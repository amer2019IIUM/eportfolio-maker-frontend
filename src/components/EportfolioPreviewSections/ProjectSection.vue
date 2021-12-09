<template>
  <div>
    <!--
        ===================
           Projects
        ===================
        -->
    <section class="mh-portfolio" id="mh-portfolio">
      <div class="container">
        <div class="row section-separator">
          <div
            class="section-title col-sm-12 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.1s"
          >
            <h3>Recent Projects</h3>
          </div>
          <div class="part col-sm-12">
            <div
              class="mh-project-gallery col-sm-12 wow fadeInUp"
              id="project-gallery"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <div class="portfolioContainer row">
                <div
                  class="grid-item col-md-4 col-sm-6 col-xs-12 user-interface"
                  v-for="(item, pIndex) in toBeShown"
                  :key="pIndex"
                >
                  <b-modal :id="item.id" size="xl" :hide-footer="true">
                    <div id="mh">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-7">
                            <div>
                              <b-carousel
                                id="carousel-1"
                                v-model="slide"
                                :interval="4000"
                                controls
                                indicators
                                background="#ababab"
                                img-width="1024"
                                img-height="480"
                                style="text-shadow: 1px 1px 2px #333"
                                @sliding-start="onSlideStart"
                                @sliding-end="onSlideEnd"
                              >
                                <!-- Text slides with image -->
                                <b-carousel-slide
                                  img-src="https://picsum.photos/1024/480/?image=52"
                                >
                                </b-carousel-slide>

                                <!-- Slides with custom text -->
                                <b-carousel-slide
                                  img-src="https://picsum.photos/1024/480/?image=54"
                                >
                                </b-carousel-slide>

                                <!-- Slides with image only -->
                                <b-carousel-slide
                                  img-src="https://picsum.photos/1024/480/?image=58"
                                ></b-carousel-slide>

                                <!-- Slides with img slot -->
                                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                                <b-carousel-slide>
                                  <template #img>
                                    <img
                                      class="d-block img-fluid w-100"
                                      width="1024"
                                      height="480"
                                      src="https://picsum.photos/1024/480/?image=55"
                                      alt="image slot"
                                    />
                                  </template>
                                </b-carousel-slide>

                                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                                <b-carousel-slide
                                  img-blank
                                  img-alt="Blank image"
                                >
                                </b-carousel-slide>
                              </b-carousel>
                            </div>
                          </div>
                          <div class="col-sm-5">
                            <h2>{{ item.title }}</h2>
                            <p>
                              {{ item.desc }}
                            </p>

                            <div class="mh-about-tag">
                              <ul>
                                <li
                                  v-for="(tech, index) in item.technologies"
                                  :key="index"
                                >
                                  <span>{{ tech.title }}</span>
                                </li>
                              </ul>
                            </div>
                            <a
                              :href="item.source_code"
                              class="btn btn-fill mr-1"
                              >Source</a
                            >
                            <a href="" class="btn btn-fill">Live Demo</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-modal>
                  <figure>
                    <img :src="Img1" alt="img04" />
                    <figcaption class="fig-caption">
                      <i class="fa fa-search"></i>
                      <h5 class="title">{{ item.title }}</h5>
                      <span class="sub-title"> {{ item.desc }}</span>
                      <a data-fancybox data-src="#mh" v-b-modal="item.id"></a>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div>
                <button
                  @click="nextPage"
                  class="btn btn-fill btn-block"
                  :disabled="currentPage == totalPages"
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Img1 from "../../assets/images/portfolio/g1.jpg";
import { mapGetters } from "vuex";

export default {
  data() {
    return { slide: 0, sliding: null, Img1, currentPage: 1 };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      this.currentPage = this.currentPage - 1 || 1;
    },
  },
  computed: {
    ...mapGetters({
      userProject: "Project/userProject",
    }),
    toBeShown() {
      return this.userProject.slice(0, this.currentPage * 4);
    },
    totalPages() {
      return Math.ceil(this.userProject.length / 4);
    },
  },
};
</script>

<style scoped></style>
