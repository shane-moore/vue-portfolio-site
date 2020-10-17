<template>
  <div>
    <section class="testimonial-container">
      <article class="testimonial">
        <p>
          SquirrelsWorking with Shane was better than expected and we had really
          high expectations. He is an incredibly talented developer but what
          really makes him stand out is his work ethic and steady approach. Time
          after time, and without us asking, he added enhancements and
          improvements that resulted in a better end product for us and our
          clients.
        </p>
      </article>
      <img src="/logos/avanade.png" width="200" height="100" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Testimonial01',
}
</script>

<style scoped>
.testimonial-container {
  box-sizing: border-box;
  width: 1500px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #eee;
  display: flex;
  flex-flow: row wrap;
}
.testimonial {
  flex: 1 0 auto;
}

img {
  height: 200px;
  width: 200px;
}
</style>
