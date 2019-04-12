<template>
  <div class="home">
    <br>
    <img alt="Vue logo" src="assets/logo.png">
    <br>
    <br>
    <br>
    <HelloWorld style="color: #DEFFFC" msg="Just Breathe."/>
    <div id="log">
    <br>
    <h4 style="color:#DEFFFC">Log In</h4><br>
    <div class=container>
      <div class=row>
        <div class=col justify-content-center>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group style="color:whitesmoke"
                    width= "50px"
                    id="usernameGroup"
                    label=""
                    label-for="exampleInput1">
        <b-form-input id="username"
                      type="text"
                      v-model="form.userName"
                      required
                      placeholder="Enter username">
        </b-form-input>
      <br>
      <b-form-group id="passwordGroup"
                    label=""
                    label-for="exampleInput2">
        <b-form-input id="password"
                      type="text"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      </b-form-group>
        </b-form><br>
        
            <b-button class="mr-3" type="reset" variant="outline-light">Create Profile</b-button>
           
        <router-link :to="{path: '/About'}">
        <b-button class="ml-3" type="submit" variant="outline-light">Submit</b-button>
         </router-link>
    </b-form>
      </div>
    </div>
    </div>
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },


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
.container{
  display:flex;
  justify-content: center
}
b-button{
  padding:30px
}
</style>
