<template>
  <div id="log">
    <h1 style="color:whitesmoke">Log In</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group style="color:whitesmoke"
                    id="usernameGroup"
                    label="Username:"
                    label-for="exampleInput1">
        <b-form-input id="username"
                      type="text"
                      v-model="form.userName"
                      required
                      placeholder="Enter username">
        </b-form-input>
       <br>
      <b-form-group id="passwordGroup"
                    label="Password:"
                    label-for="exampleInput2">
        <b-form-input id="password"
                      type="text"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      </b-form-group>
      <b-button type="submit" variant="outline-light">Submit</b-button>
      <b-button type="reset" variant="outline-light">Reset</b-button>
      <br>
      <br>
       <b-button variant="light">Create Profile</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        password: ''
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      let userName = this.form.userName;
      let password = this.form.password;
      // this.form.userName = '';
      // this.form.password = '';
      let apiURL = 'http://localhost:3005/users/' + userName + '/' + password;
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
          if (result.result.length < 1) {
            alert('Incorrect information');
          } else {
            this.$router.push('users/:' + userName);
          }
        });
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.username = '';
      this.form.password = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>

</style>