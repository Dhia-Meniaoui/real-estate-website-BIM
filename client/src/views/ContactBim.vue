<template>
  <div class="contact" id="la">
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img class="d-block w-100" src="../assets/2.jpg"  >
          <div class="carousel-caption">
            <h2 class="contact" id="cont" style=" text-align:  center;">Kontakt
            <hr id="hr1" ></h2>
          </div>
        </div>
      </div>
    </div>


    <div class="container-fluid padding" >
      <div class="row padding">

        <div style="padding-left: 100px; padding-top: 50px;"  class="col-lg-6 col-md-6 col-sm-12 col-xs-12">Kontakt:<br><br> E-Mail (1): Immobilien18@gmx.de<br>E-Mail (2): Meniaoui@hichi.de<br>Tel: +(49) 1522 7977890<br><br><br>Überlingerstrasse 13,78224<br>Singen (Hohentwiel)</div>
        <div  class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="padding-top: 50px;"><img class=img-responsive src="../assets/Firmenlogo_BIM.jpg" style="max-width: 100%; max-height: 100%; padding-left:20% ; padding-right:20% ;"> </div>


      </div>
    </div>

    




 
  

    <div id="di4" style="margin-bottom: 60px;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21466.25042660068!2d8.839950645544999!3d47.737196460283215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a62ac6dc47cc5%3A0x277df2d5ecea993a!2s%C3%9Cberlinger%20Str.%2013%2C%2078224%20Singen%20(Hohentwiel)%2C%20Allemagne!5e0!3m2!1sfr!2stn!4v1570036575219!5m2!1sfr!2stn" id="map" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
<EndBim/>
  </div>

</template>

<style>



@media (min-width: 1000px) {
  #über{
  padding-left: 40px;
    }
  }
  @media (max-width: 768px) {
    #mst{
  padding-left:  5%;
    }
  }
  
  
  @media (max-width: 650px) {
  #cont{
   font-size: 40px;
   padding-bottom: 5%;
  }
  #hr1{
   border-top: 4px solid #719fff;width: 50%;text-align: center;
  }
  }
  
  @media (min-width: 650px) {
  #cont{
    font-size: 80px;
   padding-bottom: 18%;
  }
  #hr1{
    border-top: 4px solid #719fff;width: 50%;text-align: center;
  }
  }    
  
  @media (min-width: 880px) {
  #cont{
    font-size: 100px;
   padding-bottom: 25%;
  }
  #hr1{
    border-top: 8px solid #719fff;width: 50%;text-align: center;
  }
  }
  
  @media (min-width: 1200px) {
  #cont{
   font-size: 100px;
   padding-bottom: 25%;
  }
  #hr1{
    border-top: 8px solid #719fff;width: 50%;text-align: center;
  
  }
  }
  
  #map{
  padding-left: 50px;
  padding-right:  50px;
  padding-top: 50px; 
    height: 300px;
    width: 100%;
  }
  
</style>


<script>
import EndBim from "@/components/EndBim.vue";

export default {
  name: "ContactBim",
  components: {
    EndBim
  }
};
</script>