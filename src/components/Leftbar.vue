<template>
  <div id="leftbar" class="col">
    <div class="row justify-content-end">
      <div class="class">
        <i class="material-icons" id="leftbar-icon" v-on:click="slideLeft">menu</i>
        
      </div>
      
    </div>
    <div id="orgUnitTree">
          <ul></ul>
        </div>
  </div>
</template>

<script>
import oulib from "../assets/js/ouwt";
// Object.defineProperty(Vue.prototype, '$ouwt', { value: oulib });
export default {
  name: "Leftbar",
  methods: {
    slideLeft: function() {
      $("#leftbar").toggleClass("collapse-div");
    }
  }
};
</script>