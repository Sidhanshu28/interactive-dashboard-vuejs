<template>
  <!-- Age Dropdown start-->
  <div class="row justify-content-start ml-1">
    <div class="class">
      <div class="dropdown" id="age-dropdown">
        Age : &ensp; &ensp;
        <button
          class="btn btn-secondary dropdown-toggle age-button"
          type="button"
          id="dropdown-age"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Select age group</button>
        <div class="dropdown-menu" aria-labelledby="dropdown-age">
          <a
            class="dropdown-item"
            href="#"
            v-for="age in agegroups"
            :value="age.text"
            :key="age.text"
          >{{age.text}}</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Age Dropdown end-->
</template>

<script>
export default {
  name: "RightbarAge",
  data() {
    return {
      agegroups: [
        { text: "All ages" },
        { text: "0-4" },
        { text: "5-14" },
        { text: "15-29" },
        { text: "30-49" },
        { text: "50-59" },
        { text: "60-69" },
        { text: "70-79" },
        { text: "80 and above" }
      ]
    };
  }
};
</script>
