<template>
  <div class="OffreBim"  style='background-color:#F3F5F8;'>
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" >
                <img class="d-block w-100" src="../assets/4.png"  >
                <div class="carousel-caption">
                    <h2 class="contact" id="cont" style=" text-align:  center;">
                        Angebot anfordern
                    <hr id="hr1" ></h2>
                </div>
            </div>
        </div>
    </div>


    <div style="height: 25px;"></div>

    


    <div  id="parti_mail"> 
    <div class="container" >


    <div class="row">
    <div class="col-lg-12 " style="margin-top: 85px; margin-bottom: 20pox; ">
        <form id="contact-form"  action="post" data-netlify="true">  

        <div class="row" >
            <div class="col-md-6" >
                <label for="name" style="color:#82b1ff;">Name <span class="blue">*</span> </label>
                <input required type="text"  id="name" class="form-control" placeholder="name" v-model="name">
                <p class="comments"></p>
            </div>

            <div class="col-md-6">
                <label for="firstname" style="color:#82b1ff;">Vorname <span class="blue">*</span> </label>
                <input required type="text" name="firstname" id="firstname" class="form-control" placeholder="firstname" value="" v-model="firstname">
                <p class="comments"></p>
            </div>

            <div class="col-md-6">
                <label for="Email" style="color:#82b1ff;">Email <span class="blue">*</span> </label>
                <input required type="email" name="Email" id="Email" class="form-control" placeholder="Email" value="" v-model="email">
                <p class="comments"></p>
            </div>

            <div class="col-md-6">
                <label for="phone" style="color:#82b1ff;">Telefon <span class="blue">*</span> </label>
                <input required type="tel" name="phone" id="phone" class="form-control" placeholder="phone" value="" v-model="phone">
                <p class="comments"></p>
            </div>
            <div class="col-md-12">
                <label for="phone" style="color:#82b1ff;">Botschaft <span class="blue">*</span> </label>
                <textarea required type="text" name="Message" id="Message" class="form-control" placeholder="your message" rows="4" value="" v-model="Message"></textarea>
                <p class="comments"></p>
            </div>
        
        <div data-netlify-recaptcha="true"></div>

        <div class="col-md-12" style="margin-top: 18px;">
            <button type="submit" class="button1" value="senden" v-on:click="CreatePost">senden</button>
        </div>


        </div>
    
        </form>
    </div>
    </div>
    

    </div>
    </div>
<EndBim/>
  </div>
</template>











<style>
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



</style>




<script>
import EndBim from "@/components/EndBim.vue";
import Service from "@/PostService.js";
export default {
  name: "OffreBim",
  components: {
    EndBim
  }, 
  data(){
    return{
      name:'',
      firstname: '',
      email : '',
      phone: '',
      Message: ''
    }
  },

  methods: {
    async CreatePost(){
      await Service.Postinsert(this.name, this.firstname, this.email, this.phone, this.Message);
      console.log(this.name);
    }
  }
}



</script>