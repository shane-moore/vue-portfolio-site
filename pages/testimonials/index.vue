<template>
  <div>
    <section class="testimonials">
      <article class="testimonial">
        <div></div>
        <h1>Testimonials</h1>
        <p>
          I have 2 years of development experience creating full stack apps to
          enable our internal marketing and sales personnel to find products
          rapidly and am gaining experience integrating with CRMs and campaign
          platforms.
        </p>
      </article>
    </section>
    <Testimonial01 />
    <Testimonial02 />
    <Testimonial03 />
  </div>
</template>

<script>
import Testimonial01 from './testimonial01/index'
import Testimonial02 from './testimonial02/index'
import Testimonial03 from './testimonial03/index'

export default {
  name: 'Testimonials',
  components: {
    Testimonial01,
    Testimonial02,
    Testimonial03,
  },
}
</script>

<style scoped>
.testimonials {
  display: flex;
  flex-flow: column wrap;
}
.testimonial {
  box-sizing: border-box;
  width: 600px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #eee;
}
</style>
