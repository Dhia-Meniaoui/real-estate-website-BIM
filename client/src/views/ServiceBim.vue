<template>
  <div class="ServiceBim">


    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" >
                <img class="d-block w-100" src="../assets/3.png"  >
                <div class="carousel-caption">
                    <h2 class="contact" id="cont" style=" text-align:  center;">Dienstleistungen
                    <hr id="hr1" ></h2>
                </div>
            </div>
        </div>
    </div>



<div style="height : 100px;"></div>


<div>
    <div style="background-color: withe; margin: 40px; padding :10px 20px; border-color: black;box-shadow:5px 5px 5px 5px rgba(1, 1, 1,0.5);" v-for="(post,index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post._id" v-on:dblclick="deletePost(post._id)">
      <span >Art:</span><p id='des'> {{post.type}}</p>
      <span >Adresse:</span><p id='des'> {{post.adresse}}</p>
      <span >Einzelheiten:</span><p id='des'> {{post.details}}</p>
    </div>
</div>

<EndBim/>

  </div>
</template>


<style>
span{
  text-align: left;
  font-size: 22px;
  padding-right: 22px;
  color:#ADADAD;
}
#des{
  text-align: left;
  font-size: 22px;
  padding-right: 22px;
}


</style>





<script>
import EndBim from "@/components/EndBim.vue";

import axios from 'axios';
export default {
  name: "ServiceBim",
  components: {
    EndBim
  }, 
  data(){
    return{
      posts:[],
      type:'',
      adresse: '',
      details : '',
      error : ''
    }
  },
 
  mounted() {
 axios.get('http://localhost:3000/DashBoard')
    .then((response) => {
      this.posts = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
    
  }


}
</script>