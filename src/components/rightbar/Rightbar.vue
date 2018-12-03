<template>
  <div id="rightbar" class="col p-0 collapse-div">
    <div class="row">
      <div class="class">
        <i class="material-icons" id="rightbar-icon" v-on:click="slideRight">menu</i>
      </div>
    </div>
    <!-- <div class="row container no-gutters p-0">
      <div class="col rightbar-menu-main"> -->
        <RightbarMeasure/>
        <!-- <br> -->
        <RightbarGender/>
        <!-- <br> -->
        <RightbarSite/>
        <!-- <br> -->
        <RightbarUnits/>
        <!-- <br> -->
        <RightbarAge/>
      </div>
      <!-- <br> -->
    <!-- </div>
  </div> -->
</template>

<script>
import RightbarAge from "./RightbarAge";
import RightbarGender from "./RightbarGender";
import RightbarMeasure from "./RightbarMeasure";
import RightbarSite from "./RightbarSite";
import RightbarUnits from "./RightbarUnits";

export default {
  name: "Rightbar",
  methods: {
    slideRight: function() {
      $("#rightbar").toggleClass("collapse-div");
    }
  },
  components: {
    RightbarAge,
    RightbarGender,
    RightbarMeasure,
    RightbarSite,
    RightbarUnits
  }
};
</script>