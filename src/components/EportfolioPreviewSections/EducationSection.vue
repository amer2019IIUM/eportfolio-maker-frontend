<template>
  <div>
    <section class="mh-experince" id="mh-experience">
      <div class="bolor-overlay">
        <div>
          <div>
            <div class="container">
              <div class="row section-separator">
                <div
                  class="section-title col-sm-12 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  <h3>Education</h3>
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
                        class="grid-item col-lg-4 col-md-4 col-sm-6 col-xs-12 colorItem"
                        v-for="(product, pIndex) in toBeShown"
                        :key="pIndex"
                      >
                        <figure>
                          <div class="mh-education-deatils">
                            <!-- Education Institutes-->
                            <div class="mh-education-item">
                              <h4>
                                Art & Multimedia From
                                <a href="">Oxford University</a>
                              </h4>
                              <div class="mh-eduyear">2005-2008</div>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum
                              </p>
                            </div>
                          </div>
                        </figure>
                        <div class="vl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="mh-portfolio-modal" id="mh">
              <div class="container">
                <div class="row mh-portfolio-modal-inner">
                  <div class="col-sm-5">
                    <h2>Wrap - A campanion plugin</h2>
                    <p>
                      Wrap is a clean and elegant Multipurpose Landing Page
                      Template. It will fit perfectly for Startup, Web App or
                      any type of Web Services. It has 4 background styles with
                      6 homepage styles. 6 pre-defined color scheme. All
                      variations are organized separately so you can use /
                      customize the template very easily.
                    </p>

                    <p>
                      It is a clean and elegant Multipurpose Landing Page
                      Template. It will fit perfectly for Startup, Web App or
                      any type of Web Services. It has 4 background styles with
                      6 homepage styles. 6 pre-defined color scheme. All
                      variations are organized separately so you can use /
                      customize the template very easily.
                    </p>
                    <div class="mh-about-tag">
                      <ul>
                        <li><span>php</span></li>
                        <li><span>html</span></li>
                        <li><span>css</span></li>
                        <li><span>php</span></li>
                        <li><span>wordpress</span></li>
                        <li><span>React</span></li>
                        <li><span>Javascript</span></li>
                      </ul>
                    </div>
                    <a href="" class="btn btn-fill">Live Demo</a>
                  </div>
                  <div class="col-sm-7">
                    <div class="mh-portfolio-modal-img">
                      <img
                        src="assets/images/pr-0.jif"
                        alt=""
                        class="img-fluid"
                      />
                      <p>
                        All variations are organized separately so you can use /
                        customize the template very easily.
                      </p>
                      <img
                        src="assets/images/pr-1.jif"
                        alt=""
                        class="img-fluid"
                      />
                      <p>
                        All variations are organized separately so you can use /
                        customize the template very easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Img1 from "../../assets/images/portfolio/g1.jpg";

export default {
  data() {
    return {
      Img1,
      products: [
        {
          name: "a",
          category: "a",
          price: "82.75",
        },
        {
          name: "b",
          category: "a",
          price: "82.75",
        },
        {
          name: "c",
          category: "a",
          price: "82.75",
        },
        {
          name: "d",
          category: "a",
          price: "82.75",
        },
        {
          name: "e",
          category: "a",
          price: "82.75",
        },
        {
          name: "f",
          category: "a",
          price: "82.75",
        },
        {
          name: "g",
          category: "a",
          price: "82.75",
        },
        {
          name: "h",
          category: "a",
          price: "82.75",
        },
        {
          name: "i",
          category: "a",
          price: "82.75",
        },
        {
          name: "j",
          category: "a",
          price: "82.75",
        },
        {
          name: "k",
          category: "a",
          price: "82.75",
        },
        {
          name: "l",
          category: "a",
          price: "82.75",
        },
        {
          name: "m",
          category: "a",
          price: "82.75",
        },
        {
          name: "n",
          category: "a",
          price: "82.75",
        },
        {
          name: "o",
          category: "a",
          price: "82.75",
        },
        {
          name: "p",
          category: "a",
          price: "82.75",
        },
      ],
      currentPage: 1,
    };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      this.currentPage = this.currentPage - 1 || 1;
    },
  },
  computed: {
    toBeShown() {
      return this.products.slice(0, this.currentPage * 4);
    },
    totalPages() {
      return Math.ceil(this.products.length / 4);
    },
  },
};
</script>

<style scoped>
.colorItem {
  width: 100%;
  background-color: rgb(240, 240, 240);
}
.vl {
  border-left: 6px solid #39d7be;
  height: 15px;
}
</style>
