<template>
  <!-- Site toggle bar start-->
  <!-- <div class="row justify-content-center m-2">
    <div class="class"> -->
      <div class="row justify-content-center p-1 rightbar-menu-main">
        <div class="class rightbar-menu">
            Site : &ensp; &ensp; &ensp;
             <input
                v-model="selected"
                type="radio"
                name="site"
                autocomplete="off"
                value="Urban"
                checked
              > Urban
              <input
                v-model="selected"
                type="radio"
                name="site"
                autocomplete="off"
                value="Rural"
              > Rural
              <input
                v-model="selected"
                type="radio"
                name="site"
                autocomplete="off"
                value="Both"
              > Both
        </div>
      </div>
      <!-- <div class="row justify-content-center rightbar-menu-collapsed">
        <div class="col">
          <span>{{selected}}</span>
        </div>
      </div> -->
    <!-- </div>
  </div> -->
  <!-- Site toggle bar end-->
</template>
<script>
export default {
  name: "RightbarSite",
  data() {
    return {
      selected: "Urban"
    };
  }
};
</script>
