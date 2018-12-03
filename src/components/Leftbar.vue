<template>
  <!-- import { watch } from 'fs'; -->
  <div id="leftbar" class="col collapse-div">
    <div class="row justify-content-end">
      <div class="class">
        <i class="material-icons" id="leftbar-icon" v-on:click="slideLeft">menu</i>
      </div>
    </div>
    <div class="row justify-content-center p-1 leftbar-menu-main">
      <div class="class selectedou">{{selectedOuName}}</div>
    </div>
    <div class="row justify-content-center p-1 leftbar-menu-main">
      <div class="class outree">
        <div id="orgUnitTree" v-on:click="handleClicks">
          <ul></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Leftbar",
  methods: {
    slideLeft: function() {
      $("#leftbar").toggleClass("collapse-div");
    },
    getOU: function() {
      selection.load();
      this.$data.selectedOu = selection.getSelected();
      this.$data.selectedOuName = this.getOuName(this.$data.selectedOu);
    },
    handleClicks: function(event) {
      // console.log(event);
      var tagid = event.path[1].id;
      this.$data.selectedOu = tagid.split("orgUnit")[1];
      if (this.$data.selectedOu !== undefined) {
        this.$data.selectedOuName = this.getOuName(this.$data.selectedOu);
        $("#" + tagid).toggleClass("selected-org-unit");
        if (this.$data.previousou != "")
          $("#" + this.$data.previousou).toggleClass("selected-org-unit");
        this.$data.previousou = tagid;
      }
    },
    getOuName: function(ou) {
      axios
        .get("../../organisationUnits/" + ou + ".json?fields=displayName,id")
        .then(response => {
          this.selectedOuName = response.data.displayName;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  created() {
    this.getOU();
  },
  data() {
    return {
      selectedOu: "",
      selectedOuName: "",
      previousou: ""
    };
  }
};
</script>