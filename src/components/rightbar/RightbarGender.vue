<template>
  <!-- Gender toggle bar start-->
  <div class="row justify-content-start ml-1">
    <div class="class">
      <div class="btn-group btn-group-toggle gender-toggle" data-toggle="buttons">
        Gender : &ensp;
        <label class="btn btn-secondary active">
          <input type="radio" name="male" id="male" autocomplete="off" checked> Male
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="female" id="female" autocomplete="off"> Female
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="male-female" id="male-female" autocomplete="off"> Both
        </label>
      </div>
    </div>
  </div>
  <!-- Gender toggle bar end-->
</template>
<script>
    export default {
        name : "RightbarGender",
    };

</script>