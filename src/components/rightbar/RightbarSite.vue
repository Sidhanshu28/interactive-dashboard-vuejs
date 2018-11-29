<template>
  <!-- Site toggle bar start-->
  <div class="row justify-content-start ml-1">
    <div class="class">
      <div class="btn-group btn-group-toggle site-toggle" data-toggle="buttons">
        Site : &ensp; &ensp; &ensp;
        <label class="btn btn-secondary active">
          <input type="radio" name="urban" id="urban" autocomplete="off" checked> Urban
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="rural" id="rural" autocomplete="off"> Rural
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="urban-rural" id="urban-rural" autocomplete="off"> Both
        </label>
      </div>
    </div>
  </div>
  <!-- Site toggle bar end-->
</template>
<script>
    export default {
        name : "RightbarSite",
    };

</script>
