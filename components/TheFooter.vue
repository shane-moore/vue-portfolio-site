<template>
  <div>
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <a class="navbar-brand" href="#">Fixed bottom</a>
      <div class="footer-container">
        <div class="description-container">
          <img src="" />
          <div class="description">
            I am a Front-end Developer with 12 years commercial experience,
            author of CSS3 Foundations, and graduate of Internet Technology. I
            create successful websites that are fast, easy to use, and built
            with best practices.
          </div>
        </div>
        <div class="title-container">
          <p>Full Stack Developer - Front End Specialist</p>
          <nuxt-link to="/GetInTouch">
            AVAILABLE JANUARY 2020. Hire Shane
            <font-awesome-icon :icon="['fas', 'chevron-right']"
          /></nuxt-link>
        </div>
        <div class="connect-container">
          <div class="contact-links-container">
            <div class="linkedin-container">
              <a href="https://www.linkedin.com/in/shanekmoore/" target="_blank"
                ><font-awesome-icon :icon="['fab', 'linkedin']" />LINKEDIN</a
              >
              <div class="contact-me-description">Let's connect</div>
            </div>
            <div class="github-container">
              <a href="https://github.com/shane-moore" target="_blank"
                ><font-awesome-icon :icon="['fab', 'github']" />GITHUB</a
              >
              <div class="contact-me-description">
                See some of the tools I've been adding to my belt
              </div>
            </div>
          </div>
          <div class="routes-container">
            <div class="route-container">
              <div class="route">
                <nuxt-link to="/About">About</nuxt-link>
              </div>
              <p class="route__label">About</p>
            </div>
            <div class="route-container">
              <div class="route">
                <nuxt-link to="/Articles/index">Articles</nuxt-link>
              </div>
              <p class="route__label">Articles</p>
            </div>
            <div class="route-container">
              <div class="route">
                <nuxt-link to="/GetInTouch.vue">Get In Touch</nuxt-link>
              </div>
              <p class="route__label">Get In Touch</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

  <!-- Right aligned nav items -->
  <!-- <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav> -->

  <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

  <!-- <b-nav-item-dropdown right> -->
  <!-- Using 'button-content' slot -->
  <!-- <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
  <!-- </b-navbar-nav>
       </b-collapse> -->
  <!-- </b-navbar> -->
</template>

<script>
export default {
  components: true,
}
</script>
