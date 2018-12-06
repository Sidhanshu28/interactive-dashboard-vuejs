<template>
  <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
</template>


<script>
import axios from "axios";
import variables from "../../config.js";
import Highcharts from "highcharts";
import { EventBus } from "../../event-bus";

export default {
  name: "Chart",
  mounted() {
    EventBus.$on("ou-created", this.getApiData);
    EventBus.$on("ou-changed", this.getApiData);
    EventBus.$on("param", this.getApiData);
  },
  methods: {
    getApiData: function(params) {
      $("#loader").show();
      if (params.ou != "") this.ou = params.ou;
      else params.ou = this.ou;
      var defaultIndiaApi =
        "../../analytics.json?dimension=pe:2015&dimension=ou:" +
        variables.allouIDs +
        "&dimension=dx:" +
        variables.yll +
        "&displayProperty=NAME&outputIdScheme=UID";
      var indiaApi =
        "../../analytics.json?dimension=pe:2015&dimension=" +
        variables.gender_id +
        ":" +
        variables.gender_main_var +
        "&dimension=" +
        variables.age_id +
        ":" +
        variables.age_main_var +
        "&dimension=" +
        variables.site_id +
        ":" +
        variables.site_main_var +
        "&dimension=ou:" +
        params.ou +
        "&dimension=dx:" +
        variables.yll +
        "&displayProperty=NAME&outputIdScheme=UID";
      var statesApi =
        "../../analytics.json?dimension=pe:2015&dimension=" +
        variables.gender_id +
        ":" +
        variables.gender_main_var +
        "&dimension=" +
        variables.age_id +
        ":" +
        variables.age_main_var +
        "&dimension=ou:" +
        params.ou +
        "&dimension=dx:" +
        variables.yll +
        "&displayProperty=NAME&outputIdScheme=UID";
      axios
        .get(params.ou == variables.indiaOuId ? ( params.type== "location" ? defaultIndiaApi : indiaApi) : statesApi)
        .then(response => {
          $(".bottom-options").removeClass("selected-option");
          if (params.ou == variables.indiaOuId) {
            $("#btnSite").show();
            $("#btnLocation").show();
          } else {
            $("#btnSite").hide();
            $("#btnLocation").hide();
          }
          this.chartOptions.series = [];
          var dataloop = response.data.rows;
          if (dataloop.length == 0) {
            this.chartOptions.series = [];
            return;
          }
          
          if (params.type == "gender")
            this.sortDataByGender(dataloop, params.ou);
          else if (params.type == "age")
            this.sortDataByAge(dataloop, params.ou);
          else if (params.type == "location")
            this.sortDataByLoc(dataloop, params.ou);
          else {
            this.sortDataBySite(dataloop, params.ou);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    sortDataByGender: function(dataloop, ou) {
      $("#btnGender").addClass("selected-option");
      let temp = JSON.parse(JSON.stringify(variables.diseases));
      for (let i = 0, len = dataloop.length; i < len; i++) {
        var disease_id = dataloop[i][0];
        var value = ou == variables.indiaOuId ? dataloop[i][6] : dataloop[i][5];
        if (dataloop[i][2] == variables.gender_male_id) {
          temp[0][disease_id].data[0] === undefined
            ? (temp[0][disease_id].data[0] = parseFloat(value))
            : (temp[0][disease_id].data[0] += parseFloat(value));
        } else if (dataloop[i][2] == variables.gender_female_id) {
          temp[0][disease_id].data[1] === undefined
            ? (temp[0][disease_id].data[1] = parseFloat(value))
            : (temp[0][disease_id].data[1] += parseFloat(value));
        } else {
        }
        temp[0][disease_id].data[2] === undefined
          ? (temp[0][disease_id].data[2] = parseFloat(value))
          : (temp[0][disease_id].data[2] += parseFloat(value));

        if (i == len - 1) {
          var vm = this;
          setTimeout(function() {
            vm.chartOptions.series = [...Object.values(temp[0])];
            vm.chartOptions.xAxis.categories = [...variables.gender_categories];
            $("#loader").hide();
          }, 2000);
        }
      }
    },
    sortDataByAge: function(dataloop, ou) {
      $("#btnAge").addClass("selected-option");
      let temp = JSON.parse(JSON.stringify(variables.diseases));
      for (let i = 0, len = dataloop.length; i < len; i++) {
        var disease_id = dataloop[i][0];
        var value = ou == variables.indiaOuId ? dataloop[i][6] : dataloop[i][5];
        if (dataloop[i][3] == variables.age_0_4_id) {
          temp[0][disease_id].data[0] === undefined
            ? (temp[0][disease_id].data[0] = parseFloat(value))
            : (temp[0][disease_id].data[0] += parseFloat(value));
        } else if (dataloop[i][3] == variables.age_5_14_id) {
          temp[0][disease_id].data[1] === undefined
            ? (temp[0][disease_id].data[1] = parseFloat(value))
            : (temp[0][disease_id].data[1] += parseFloat(value));
        } else if (dataloop[i][3] == variables.age_15_29_id) {
          temp[0][disease_id].data[2] === undefined
            ? (temp[0][disease_id].data[2] = parseFloat(value))
            : (temp[0][disease_id].data[2] += parseFloat(value));
        } else if (dataloop[i][3] == variables.age_30_49_id) {
          temp[0][disease_id].data[3] === undefined
            ? (temp[0][disease_id].data[3] = parseFloat(value))
            : (temp[0][disease_id].data[3] += parseFloat(value));
        } else if (dataloop[i][3] == variables.age_50_59_id) {
          temp[0][disease_id].data[4] === undefined
            ? (temp[0][disease_id].data[4] = parseFloat(value))
            : (temp[0][disease_id].data[4] += parseFloat(value));
        } else if (dataloop[i][3] == variables.age_60_69_id) {
          temp[0][disease_id].data[5] === undefined
            ? (temp[0][disease_id].data[5] = parseFloat(value))
            : (temp[0][disease_id].data[5] += parseFloat(value));
        } else if (dataloop[i][3] == variables.age_70_79_id) {
          temp[0][disease_id].data[6] === undefined
            ? (temp[0][disease_id].data[6] = parseFloat(value))
            : (temp[0][disease_id].data[6] += parseFloat(value));
        } else if (dataloop[i][3] == variables.age_above80_id) {
          temp[0][disease_id].data[7] === undefined
            ? (temp[0][disease_id].data[7] = parseFloat(value))
            : (temp[0][disease_id].data[7] += parseFloat(value));
        } else {
        }

        if (i == len - 1) {
          var vm = this;
          setTimeout(function() {
            vm.chartOptions.series = [...Object.values(temp[0])];
            vm.chartOptions.xAxis.categories = [...variables.age_categories];
            $("#loader").hide();
          }, 2000);
        }
      }
    },
    sortDataBySite: function(dataloop, ou) {
      console.log(dataloop);
      $("#btnSite").addClass("selected-option");
      let temp = JSON.parse(JSON.stringify(variables.diseases));
      for (let i = 0, len = dataloop.length; i < len; i++) {
        var disease_id = dataloop[i][0];
        var value = ou == variables.indiaOuId ? dataloop[i][6] : dataloop[i][5];
        if (dataloop[i][4] == variables.site_urban_id) {
          temp[0][disease_id].data[0] === undefined
            ? (temp[0][disease_id].data[0] = parseFloat(value))
            : (temp[0][disease_id].data[0] += parseFloat(value));
        } else if (dataloop[i][4] == variables.site_rural_id) {
          temp[0][disease_id].data[1] === undefined
            ? (temp[0][disease_id].data[1] = parseFloat(value))
            : (temp[0][disease_id].data[1] += parseFloat(value));
        } else {
        }
        temp[0][disease_id].data[2] === undefined
          ? (temp[0][disease_id].data[2] = parseFloat(value))
          : (temp[0][disease_id].data[2] += parseFloat(value));

        if (i == len - 1) {
          var vm = this;
          setTimeout(function() {
            vm.chartOptions.series = [...Object.values(temp[0])];
            vm.chartOptions.xAxis.categories = [...variables.site_categories];
            $("#loader").hide();
          }, 2000);
        }
      }
    },
    sortDataByLoc: function(dataloop, ou) {
      $("#btnLocation").addClass("selected-option");
      let temp = JSON.parse(JSON.stringify(variables.diseases));
      for (let i = 0, len = dataloop.length; i < len; i++) {
        var disease_id = dataloop[i][0];
        var value = dataloop[i][3];
        for (let j = 0; j < Object.keys(variables.stateNames[0]).length; j++) {
          console.log(Object.keys(variables.stateNames[0])[j]);
          if (dataloop[i][2] == Object.keys(variables.stateNames[0])[j]) {
            temp[0][disease_id].data[j] === undefined
              ? (temp[0][disease_id].data[j] = parseFloat(value))
              : (temp[0][disease_id].data[j] += parseFloat(value));
          } else {
             temp[0][disease_id].data[j] === undefined
              ? (temp[0][disease_id].data[j] = 0)
              : (temp[0][disease_id].data[j] += 0);
          }
        }

        if (i == len - 1) {
          var vm = this;
          setTimeout(function() {
            vm.chartOptions.series = [...Object.values(temp[0])];
            vm.chartOptions.xAxis.categories = [
              ...Object.values(variables.stateNames[0])
            ];
            $("#loader").hide();
          }, 2000);
        }
      }
    }
  },
  data() {
    return {
      ou: "",
      updateArgs: [true, true, { duration: 1000 }],
      chartOptions: {
        chart: {
          type: "column"
        },
        title: {
          text: "Stacked column chart"
        },
        xAxis: {
          categories: []
        },
        yAxis: {
          min: 0,
          title: {
            text: "YLL counts"
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color: "gray"
            }
          }
        },
        legend: {
          align: "left",
          x: 0,
          verticalAlign: "top",
          y: 25,
          floating: true,
          backgroundColor: "white",
          borderColor: "#CCC",
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          headerFormat: "<b>{point.x}</b><br/>",
          pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
        },
        plotOptions: {
          column: {
            stacking: "normal",
            borderWidth: 0,
            dataLabels: {
              enabled: false,
              color: "white"
            }
          }
        },
        series: []
      }
    };
  },
  beforeDestroy() {
    EventBus.$off("ou-created", this.getApiData);
    EventBus.$off("ou-changed", this.getApiData);
    EventBus.$off("param", this.getApiData);
  }
};
</script>
<style scoped>
.stock {
  width: 70%;
  margin: 0 auto;
}
</style>
