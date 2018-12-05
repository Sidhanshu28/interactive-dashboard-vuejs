<template>
  <!-- Gender toggle bar start-->
  <!-- <div class="row justify-content-center m-2">
    <div class="class"> -->
      <div class="row justify-content-center p-1 rightbar-menu-main">
        <div class="class rightbar-menu">
            Gender : &ensp;
            <input
              class="btn btn-secondary active"
              v-model="selected"
              type="radio"
              value="Male"
              autocomplete="off"
              checked
            >Male
            <!-- </label> -->
            <input
            class="btn btn-secondary"
              v-model="selected"
              type="radio"
              value="Female"
              autocomplete="off"
            >Female
            <!-- <label class="btn btn-secondary"></label> -->
            <input
                v-model="selected"
                class="btn btn-secondary"
                type="radio"
                value="Both"
                autocomplete="off"
              >Both
            <!-- <label ></label> -->
        </div>
      </div>
      <!-- <div class="row justify-content-center rightbar-menu-collapsed">
        <div class="col">
          <span>{{selected}}</span>
        </div>
      </div> -->
    <!-- </div>
  </div> -->
  <!-- Gender toggle bar end-->
</template>

<script>
export default {
  name: "RightbarGender",
  data() {
    return {
      selected: "Male"
    };
  }
};
</script>