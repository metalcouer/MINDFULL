<template>
  <!-- <li v-on:click='showInfoToggle'> -->
    <div>
       <h2>{{stretch.name}}</h2>
        <img :src="'assets/' + stretch.img">
        <br>
          <!-- <li>{{this.stretchRecommendation.description}} </li> -->
           <br>
           <router-link class="link" v-bind:to="{ path: `/stretchRec/${stretch.id}` }">
            <b-button class="ml-3" type="submit" variant="outline-light">See Stretch Info</b-button>
           </router-link>
            <stretchRec v-for="stretch in stretches" :key="'stretchRec' + stretch.id"
            :stretch="stretch"/>
          <!-- <p>{{this.stretch.description}}</p> -->
        </div>
    
</template>

// <script>
import stretchRec from "../components/stretchRec.vue"
export default {
  // data() {
  //       return {
  //         stretchRecommendation: null,
  //         stretch: null,
  //       }
  //   },
    name: 'IndividualStretchCard',
    props: ["stretch"]
           

    
};
</script>

<style scoped>
div {
 margin: 20px 20px 20px 0;
 padding: 10px;
 background-color: #320E3B;
 color: whitesmoke;
 border-radius: 5px;
 width: 20vw;
}
img {
 max-width: 19vw;
 max-height: 30vh;
} 
.link {
 text-decoration: none;
}
  
</style>
