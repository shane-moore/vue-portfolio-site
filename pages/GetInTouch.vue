<template>
  <div class="page-wrapper">
    <div class="title-container">
      <h1>Get In Touch</h1>
      <h3>
        Send me a message about an opportunity, and be sure that I will reply as
        soon as possible. Cheers : )
      </h3>
    </div>
    <div class="form-wrapper">
      <h4>Tell Me More</h4>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="e.g. Alan Turing"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Email:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            required
            placeholder="e.g. skm1790@gmail.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Your Site:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.yourSite"
            required
            placeholder="e.g. shanekmoore.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="interested"
              >I am interested in hiring Shane</b-form-checkbox
            >
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetInTouch',
  data() {
      return {
        form: {
          email: '',
          name: '',
          yourSite: '',
          checked: []
        },
        show: true
      }
    },
    mounted() {
      this.$nextTick(() => {
        $('h1').hide().show()
      })
    },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      // perform ajax call to server to send the mail
      const formData = new FormData();
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.yourSite = ''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = []
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
