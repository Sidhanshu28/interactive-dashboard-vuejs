<template>
  <!-- Measure toggle bar start-->
  <!-- <div class="row justify-content-center m-2">
    <div class="class"> -->
      <div class="row justify-content-center m-2 rightbar-menu">
        <div class="class"> 
            Measure : &ensp;
              <input
                v-model="selected"
                type="radio"
                name="measure"
                autocomplete="off"
                value="YLL"
                checked
              > YLL
              <input
                v-model="selected"
                type="radio"
                name="measure"
                autocomplete="off"
                value="YLD"
              > YLD
              <input
                v-model="selected"
                type="radio"
                name="measure"
                autocomplete="off"
                value="DALY"
              > DALY
          
        </div>
      </div>
      <!-- <div class="row justify-content-center rightbar-menu-collapsed">
        <div class="col">
          <span>{{selected}}</span>
        </div>
      </div> -->
    <!-- </div>
  </div> -->

  <!-- Measure toggle bar end-->
</template>

<script>
export default {
  name: "RightbarMeasure",
  data(){
    return{
      selected : "YLL"
    };
  }
};
</script>
