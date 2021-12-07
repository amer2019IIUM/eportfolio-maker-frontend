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
              <div class="each-skills">
                <div class="candidatos">
                  <div class="parcial">
                    <div class="info">
                      <div class="nome">Javascript</div>
                      <div class="percentagem-num">86%</div>
                    </div>
                    <div class="progressBar">
                      <div class="percentagem" style="width: 86%"></div>
                    </div>
                  </div>
                </div>
                <div class="candidatos">
                  <div class="parcial">
                    <div class="info">
                      <div class="nome">Java</div>
                      <div class="percentagem-num">46%</div>
                    </div>
                    <div class="progressBar">
                      <div class="percentagem" style="width: 46%"></div>
                    </div>
                  </div>
                </div>
                <div class="candidatos">
                  <div class="parcial">
                    <div class="info">
                      <div class="nome">Python</div>
                      <div class="percentagem-num">38%</div>
                    </div>
                    <div class="progressBar">
                      <div class="percentagem" style="width: 38%"></div>
                    </div>
                  </div>
                </div>
                <div class="candidatos">
                  <div class="parcial">
                    <div class="info">
                      <div class="nome">PHP</div>
                      <div class="percentagem-num">17%</div>
                    </div>
                    <div class="progressBar">
                      <div class="percentagem" style="width: 17%"></div>
                    </div>
                  </div>
                </div>
                <div class="candidatos">
                  <div class="parcial">
                    <div class="info">
                      <div class="nome">PHP</div>
                      <div class="percentagem-num">17%</div>
                    </div>
                    <div class="progressBar">
                      <div class="percentagem" style="width: 17%"></div>
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
              <li>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill" style="transform: rotate(300deg)"></div>
                    </div>

                    <div class="mask half">
                      <div class="fill"></div>
                    </div>

                    <div class="inside-circle">70%</div>
                  </div>
                </div>
                <div class="pr-skill-name">Communication</div>
              </li>
              <li>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill" style="transform: rotate(250deg)"></div>
                    </div>

                    <div class="mask half">
                      <div class="fill"></div>
                    </div>

                    <div class="inside-circle">30%</div>
                  </div>
                </div>
                <div class="pr-skill-name">Team Work</div>
              </li>
              <li>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill" style="transform: rotate(150deg)"></div>
                    </div>

                    <div class="mask half">
                      <div class="fill"></div>
                    </div>

                    <div class="inside-circle">20%</div>
                  </div>
                </div>
                <div class="pr-skill-name">Project Management</div>
              </li>
              <li>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill" style="transform: rotate(126deg)"></div>
                    </div>

                    <div class="mask half">
                      <div class="fill"></div>
                    </div>

                    <div class="inside-circle">60%</div>
                  </div>
                </div>
                <div class="pr-skill-name">Creativity</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
  background-color: #61dfcb;
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
