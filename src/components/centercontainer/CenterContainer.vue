<template>
  <div id="center-container" class="col">
    <div class="row">
      <div class="col div-content">
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import MapChart from "./components/highcharts/MapChart";

export default {
  name: "CenterContainer",
  data () {
    return {
      currentView: 'mapChart'
    }
  },
  components: {
    mapChart: MapChart
  }
};
</script>
