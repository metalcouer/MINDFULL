<template>
<div class="container">
    <h1>{{stretch.name}}</h1>

    <h1>{{stretch.description}}</h1>
    <img :src="'assets/' + stretch.img">

                <!-- <br>
                {{stretch.img}}
                <br>
                {{stretch.description}}
      <div class=col1>
        <div class="group-view">
          <div class="card-list">
              <h2>TEST</h2> 
           
                <h2>
                
                
                </div>
        </div>
      </div> -->
</div>
</template>

<script>
import IndividualStretchCard from "../components/IndividualStretchCard.vue";
export default {
    props: ["stretches"],
    name: 'stretchRec',
    computed: {
        stretch: function () {
           console.log("hello")
            let stretches = this.stretches.filter(stretch => {
                let stretchId = +this.$route.params.id;
                return stretchId === stretch.id;
            })[0];
            console.log(stretches)
            return stretches
        }
    },
    mounted() {
        console.log('test', this.stretch)
    },
    components: {
        IndividualStretchCard,
    
    }
}
</script>

<style>
/* .container {
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 background-color: #320E3B;
 min-height: 100vh;
} */
</style>
