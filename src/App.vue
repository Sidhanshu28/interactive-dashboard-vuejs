<template>
  <div class="container-fluid no-gutters main">
    <Header/>
    <div class="row" style="display: flex">
      <Leftbar/>
      <CenterContainer/>
      <Rightbar/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import CenterContainer from "./components/CenterContainer";

export default {
  name: "App",
  components: {
    Header,
    Leftbar,
    Rightbar,
    CenterContainer
  }
};
</script>
<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>