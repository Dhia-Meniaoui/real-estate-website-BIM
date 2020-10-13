<template>
  <div class="hello">
   

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/6.jpg"  alt="First slide">
        </div>
 
      </div>


    </div>







    <div id="news" >
      <h1 style="text-align: center; color: #777;">Nachrichten</h1>
      <hr style="border-top: 2px solid #719fff;width: 55%;">
    </div>
 




    <div id="info" style="margin-bottom: 40px;">
	    <h1 style="text-align: center; color: #777;">Informationen</h1>
      <hr style="border-top: 2px solid #719fff;width: 55%; margin-bottom: 100px;">
    </div>
 



	
			

          
           
    <div  style=" overflow: hidden;">
      <router-link v-scroll-to="'#carouselExampleControls'" tag="a" to="/ContactBim">
			<a style="text-decoration : none; overflow: hidden;"  >
        <div   id="contact1"  class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ig1 ">
				  <h1 id="contact">Kontakt</h1> 
				  <hr style="border-top: 4px solid #719fff;width: 50%;">
        </div>
      </a>
      </router-link>

      <router-link v-scroll-to="'#carouselExampleControls'" tag="a" to="/serviceBim">
      <a style="text-decoration : none;" >
        <div id="services1" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ig2">
          <h1 id="services">Dienstleistungen</h1> 
          <hr style="border-top: 4px solid #719fff;width: 50%;">
        </div>
      </a>
      </router-link>

      <router-link v-scroll-to="'#carouselExampleControls'" tag="a" to="/OffreBim">
      <a style="text-decoration : none;" >
        <div id="offre1" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ig4">
          <h1 id="offre">Angebot anfordern</h1>
          <hr style="border-top: 4px solid #719fff;width: 50%;">
        </div>
      </a> 
      </router-link>

    </div>  







    <div id="imp"  style="margin-top: 40px; "  >
	    <h1 style="text-align: center; color: #777;">impressum</h1>
      <hr style="border-top: 2px solid #719fff;width: 55%;">
    </div>





    <br><br><br>



  <div class="container">
    <iframe src="AGB.pdf" width="100%" height="500px">
    </iframe>
  </div>



    <br><br><br><br>



  </div>
</template>












<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
#di4{
  height: 400px;
}
#news{
	height: 300px;
	position: relative;
	margin-top: 20px;
}
#info{
	height: 80px;
  background-color: white;
	position: relative;
}


                 /*****NAVBAR****/


*:focus {outline:none !important}



.navbar{
  padding: 18px;
}
.navbar-toggle {
  position: relative;

  margin-right: 15px;
  padding: 9px 10px;
  margin-top: 28px;
  margin-bottom: 28px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}


     /*********************************************************/
@media (max-width: 576px) {
 .ig1{
    height: 225px;
  }
}
@media (max-width: 576px) {
.ig2{
    height: 225px;
  }
}
@media (max-width: 576px) {
.ig4{
    height: 225px;
  }
}
     /*********************************************************/
@media (min-width: 576px) {
 .ig1{
    height: 325px;
  }
}
@media (min-width: 576px) {
.ig2{
    height: 325px;
        float: left;
  }
}
@media (min-width: 576px) {
.ig4{
    height: 325px;
        float: left;
  }
}
     /*********************************************************/

@media (min-width: 768px) {
 .ig1{
    height: 325px;
    float: left;
  }
}
@media (min-width: 768px) {
.ig2{
    height: 325px;
    float: left;
  }
}
@media (min-width: 768px) {
.ig4{
    height: 325px;
    float: left;
  }
}

     /*********************************************************/

@media (min-width: 1200px) {
.ig1{

    height: 325px;
    float: left;
  }
}
@media (min-width: 1200px) {
.ig2{

    height: 325px;
    float: left;
  }
}
@media (min-width: 1200px) {
.ig4{

    height: 325px;
    float: left;
  }
}
     /*********************************************************/
.ig1{
  background-image: url('../assets/i1.jpg') ;    
  background-position: center center;
  background-size: cover;
    background-repeat: no-repeat; 
    transition: transform .5s ease;
overflow: hidden;
}
.ig2{
  background-image: url('../assets/3.png') ;    
  background-position: center center;
  background-size: cover;
    background-repeat: no-repeat; 
        transition: transform .5s ease;
overflow: hidden;
}
.ig4{
  background-image: url('../assets/i3.jpg') ;   
  background-position: center center;
  background-size: cover;
    background-repeat: no-repeat; 
        transition: transform .5s ease;
overflow: hidden;
}

.ig1:hover{
transform: scale(1.1);
overflow: hidden;

}
.ig2:hover{
transform: scale(1.1);
}
.ig4:hover{
transform: scale(1.1);
}












     /*********************************************************/
     @media (max-width: 576px) {
      #contact{
        text-align: center;
        padding-top: 80px;
        color: white;
      
        font-size: 45px;
      }
      #services{
        text-align: center;
        padding-top: 80px;
        color: white;
          font-size: 45px;
      }
      #offre{
        text-align: center;
        padding-top: 80px;
        color: white;
          font-size: 45px;
      }
     }

          /*********************************************************/
     @media (min-width: 576px) {
      #contact{
        text-align: center;
        padding-top: 80px;
        color: white;
  
        font-size: 35px;
      }
      #services{
        text-align: center;
        padding-top: 80px;
        color: white;
          font-size: 35px;
      }
      #offre{
        text-align: center;
        padding-top: 80px;
        color: white;
          font-size: 35px;
      }
     }



     /*********************************************************/
     @media (min-width: 1162px) {
      #contact{
        text-align: center;
        padding-top: 80px;
        color: white;
      
        font-size: 55px;
      }
      #services{
        text-align: center;
        padding-top: 80px;
        color: white;
          font-size: 55px;
      }
      #offre{
        text-align: center;
        padding-top: 80px;
        color: white;
          font-size: 55px;
      }
     }



 

</style>







<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};


</script>