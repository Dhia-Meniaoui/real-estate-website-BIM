<template>
  <div id="app">
  <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top" style="background-color: white;border-color: rgb(0, 0, 0);box-shadow:8px 10px 20px 1px rgba(19, 19, 19,0.5); padding-top: 8px;padding-bottom: 8px;padding-left:  18px;padding-right:18px;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" v-scroll-to="'#carouselExampleControls'"><img src="./assets/Firmenlogo_BIM.jpg" width="155" height="95"></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarresponsive" id='button'>
        <span class="navbar-toggler-icon"></span> 
      </button>
      <div class="collapse navbar-collapse" id="navbarresponsive">
        <ul class="navbar-nav ml-auto" id="mst">
          <li class="nav-item active">
            <router-link class="nav-link" to="/" v-scroll-to="'#carouselExampleControls'" style="text-align: center; font-size: 22px;padding-right: 22px;color:#82b1ff">Zuhause</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/" v-scroll-to="'#news'" style="text-align: center; font-size: 22px;padding-right: 22px;">Nachrichten</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/" v-scroll-to="'#info'" style="text-align: center; font-size: 22px;padding-right: 17px;">Informationen</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/" v-scroll-to="'#imp'" style="text-align: center; font-size: 22px;padding-right: 17px;">impressum</router-link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    <router-view/>
  </div>
</template>





<style>




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

#button:active{
   outline: none;
}
#button:focus {
   outline: none;
}





</style>
