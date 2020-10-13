<template>
  <div class="home">
    <HelloWorld/>
    <EndBim/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import EndBim from "@/components/EndBim.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    EndBim
  }
};






</script>
