<template>
    <div id="leftbar" class="col">
                <div class="row justify-content-end">
                    <div class="class">
                        <i class="material-icons" id="leftbar-icon" v-on:click="slideLeft">
                            menu
                        </i>
                    </div>
                </div>
    </div>    
</template>

<script>

export default {
    name : "Leftbar",
    methods: {
        slideLeft: function() {
            $("#leftbar").toggleClass("collapse-div");
        }
    }
};
</script>