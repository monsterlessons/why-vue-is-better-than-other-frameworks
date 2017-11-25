new Vue({
  el: '.login-form',
  data: {
    email: '',
    password: ''
  },
  methods: {
    onSubmit () {
      console.log('onSubmit', this.email, this.password)
    }
  }
})
