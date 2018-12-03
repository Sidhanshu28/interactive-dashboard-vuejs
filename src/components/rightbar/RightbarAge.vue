<template>
  <!-- Age Dropdown start-->
  <!-- <div class="row justify-content-center m-2">
    <div class="class"> -->
      <div class="row justify-content-center m-2 rightbar-menu">
        <div class="class">
            Age : &ensp; &ensp;
            <select
              class="age-button"
              id="dropdown-age"
              v-model="selected"
            >Select age group
              <option
                class="dropdown-item"
                v-for="age in agegroups"
                :value="age.text"
                :key="age.text"
              >{{age.text}}</option>
            </select>  
        </div>
      </div>
      <!-- <div class="row justify-content-center rightbar-menu-collapsed">
        <div class="col">
          <span>{{selected}}</span>
        </div>
      </div> -->
    <!-- </div>
  </div> -->

  <!-- Age Dropdown end-->
</template>

<script>
export default {
  name: "RightbarAge",
  data() {
    return {
      agegroups: [
        { text: "Select Age" },
        { text: "Select All" },
        { text: "All ages" },
        { text: "0-4" },
        { text: "5-14" },
        { text: "15-29" },
        { text: "30-49" },
        { text: "50-59" },
        { text: "60-69" },
        { text: "70-79" },
        { text: "80 and above" }
      ],
      selected: "Select Age"
    };
  }
};
</script>
