<template>
    <div class="row">
            <div id="header" class="col text-center p-2 m-0">
                {{heading}}
            </div>
        </div>
</template>

<script>
export default {
  name:"Header",
  data() {
    return{
    heading: "Interactive Dashboard"
    }
  }
};
</script>