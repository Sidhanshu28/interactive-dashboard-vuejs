<template>
  <!-- Measure toggle bar start-->
  <div class="row justify-content-start ml-1">
    <div class="class">
      <div class="btn-group btn-group-toggle measure-toggle" data-toggle="buttons">
        Measure : &ensp;
        <label class="btn btn-secondary active">
          <input type="radio" name="yll" id="yll" autocomplete="off" checked> YLL
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="yld" id="yld" autocomplete="off"> YLD
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="daly" id="daly" autocomplete="off"> DALY
        </label>
      </div>
    </div>
  </div>
  <!-- Measure toggle bar end-->
</template>
<script>
    export default {
        name : "RightbarMeasure",
    };

</script>
