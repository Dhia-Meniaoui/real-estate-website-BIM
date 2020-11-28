<template>
  <div class="DashBoard" >



        <form id="contact-form"  action="post" data-netlify="true" style="padding : 30px;">  

        <div class="row" >
            <div class="col-md-6" >
                <label for="name" style="color:#82b1ff;">Art <span class="blue">*</span> </label>
                <input required type="text" name="type" id="type" class="form-control" placeholder="Art" v-model="type">
            </div>

            <div class="col-md-6">
                <label for="firstname" style="color:#82b1ff;">Adresse <span class="blue">*</span> </label>
                <input required type="text" name="adresse" id="adresse" class="form-control" placeholder="adresse" value="" v-model="adresse">
            </div>


            <div class="col-md-12" >
                <label for="phone" style="color:#82b1ff;">Einzelheiten <span class="blue">*</span> </label>
                <textarea required type="text" name="details" id="details" class="form-control" placeholder="Einzelheiten" rows="4" value="" v-model="details"></textarea>
            </div>




        <div class="col-md-12" style="margin-top: 18px;">
            <button type="submit" class="button1" value="senden" v-on:click="CreatePost">senden</button>
        </div>


        </div>
    
        </form>


<div style="height : 100px;"></div>


 
    <div style="background :#ccc; margin: 60px; padding :20px 20px; border-color: black;box-shadow:8px 10px 20px 1px rgba(19, 19, 19,0.5);" v-for="(post,index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post._id" >
      <p style="text-align: center; font-size: 22px;padding-right: 22px;">Art: {{post.type}}</p>
      <p style="text-align: center; font-size: 22px;padding-right: 22px;">Adresse: {{post.adresse}}</p>
      <p style="text-align: center; font-size: 22px;padding-right: 22px;">Einzelheiten: {{post.details}}</p>
      <button class="button2" v-on:click="deletePost(post._id)"> delete </button>
    </div>



<EndBim/>

  </div>
</template>





<style>
body{
  width:100%;font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
 font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px;
}
h3 {
 font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
 font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 15.4px; 
} 
p {
 font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
 font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; 
}
blockquote {
 font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
 font-size: 21px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 30px; 
}
pre { 
  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
 font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 18.5714px; 
}
  .row{
    margin-top: 15px;
    }
    
    
    @media (max-width: 576px) {
    #parti_mail{
      height: 1000px;
       }
    }
    @media (min-width: 576px) {
    #parti_mail{ 
      height: 1000px;
       }
    }
    @media (min-width: 768px) {
    #parti_mail{
      height: 700px;
       }
    }
    @media (min-width: 1200px) {
    #parti_mail{
      height: 700px;
       }
    }
    #parti_mail{
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat; 
      transition: transform .5s ease;
      overflow: hidden;
    }
    
    .button1{
      border: 1px solid #82b1ff;
      background: #82b1ff;
      color: #fff;
      width: 100%;
      font-weight: bold;
      text-transform: uppercase;
      padding: 15px;
      border-radius: 5px;
      transition: all 0.3s ease-in 0s ;
    }
    .button2{
      padding: 15px;
      border-radius: 5px;
      transition: all 0.3s ease-in 0s ;
    }



</style>





<script>
import EndBim from "@/components/EndBim.vue";
import Service from "@/PostService.js";
import axios from 'axios';
export default {
  name: "DashBoard",
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
 axios.get('https://bimporject.herokuapp.com//DashBoard')
    .then((response) => {
      this.posts = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
    
  },


  methods: {
    async CreatePost(){
      await Service.createposts(this.type, this.adresse, this.details);
    },
    async deletePost(id){
      await Service.deleteposts(id);
    }
  }


}




</script>