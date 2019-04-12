<template>
  <div class="about">
    <br>
    <h1 style="color:whitesmoke">Not sure where to start?</h1>
    
    <div>
    <div class=container>
      <div class=col1>
        <div class="group-view">
          <div class="card-list"> 
          <IndividualStretchCard v-for="stretch in stretches" :key="'stretch' + stretch.id"
          :stretch="stretch"/>
          
          </div>
        </div>
      </div>
    </div>
        
         
    </div>
  </div>
</template>

<script>
import IndividualStretchCard from '../components/IndividualStretchCard';
import stretchRec from '../components/stretchRec';

export default {
    components: {
      IndividualStretchCard,
      stretchRec
    },
    name: 'All',
    props: ["stretches"],

  //   mounted() {
  //   let apiURL = 'http://localhost:3005/stretches/id';
  //   fetch(apiURL)
  //     .then(response => response.json())
  //     .then(result => {
  //       let answer = result.result.map(stretches => stretches.id);
  //       this.stretches = answer
  //     });
  // },

};
</script>

<style scoped>
/* .container{
  display:flex;
  justify-content: center
}
b-button{
  padding:30px
} */
/* .container {
 display: grid;
 grid-template-columns: repeat(4, 1fr);
} */
/* .col1 {
   grid-column: span 12;
 } */
 /* .group-view {
 width: 100vw;
 display: flex;
 flex-flow: column-reverse;
 align-items: center;
 justify-content: left;
} */
.card-list {

 height: 100%;
 display: flex;
 flex-flow: row wrap;
 justify-content: center;
}

</style>