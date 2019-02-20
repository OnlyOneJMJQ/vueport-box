<template>
    <div class="d-flex justify-content-center fixed-bottom mb-3">
      <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="alert"
    >
      <p>{{ message }} </p>
      <b-progress :variant="color" :max="dismissSecs" :value="dismissCountDown" height="4px" />
    </b-alert>
      </div>
</template>

<script>
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      color: '',
      message: ''
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  mounted () {
    this.$root.$on('alert', ({ message, color, countdown }) => {
      console.log("ALERT")
      this.color = color
      this.message = message
      this.dismissCountDown = countdown
    })
  }
}
</script>

<style scoped>
.alert {
  min-width: 300px;
  text-align:center;
}
</style>
