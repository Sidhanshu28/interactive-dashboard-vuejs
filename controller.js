var app = new Vue({
  el: '#header',
  data: {
    heading: "Interactive Dashboard"
  }
})

var handlerightbar = new Vue(
  {
    el: "#rightbar-icon",
    methods: {
      slideRight: function () {
        $("#rightbar").toggleClass("collapse-div");
      }
    }
  }
)

var handleleftbar = new Vue(
  {
    el: "#leftbar-icon",
    methods: {
      slideLeft: function () {
        $("#leftbar").toggleClass("collapse-div");
      }
    }
  }
)

var handleAgeDropDown = new Vue({
  el: "#age-dropdown",
  data: {
    agegroups: [
      { "text": "All ages" },
      { "text": "0-4" },
      { "text": "5-14" },
      { "text": "15-29" },
      { "text": "30-49" },
      { "text": "50-59" },
      { "text": "60-69" },
      { "text": "70-79" },
      { "text": "80 and above" },
    ]
  }
})