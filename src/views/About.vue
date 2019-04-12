<template>
  <div class="about">
    <br>
    
    <h1 style="color:whitesmoke">Where should we focus on today?</h1>
    <h6 style="color:whitesmoke">Click on a preview for more info</h6>
    <div class=container>
      <div class=row>
        <div class=col justify-content-center>
        <div @click="clickMethod">
        <img alt="hand" src="assets/hand.png">
        <img alt="arm" src="assets/arm.png">  
        <img alt="shoulder" src="assets/shoulder.png">
        <img alt="neck" src="assets/head.png">
        </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data() {
    return {

    };
  },
  methods: {
    clickMethod() {
      this.$router.push('All');
    },
  },
};
</script>

<style scoped>
img {
  
}

</style>


