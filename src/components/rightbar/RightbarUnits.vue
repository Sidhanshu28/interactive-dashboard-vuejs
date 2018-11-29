<template>
    <!-- Units toggle bar start-->
                <div class="row justify-content-start ml-1">
                    <div class="class">
                        <div class="btn-group btn-group-toggle unit-toggle" data-toggle="buttons">
                            Unit : &ensp; &ensp;
                            <label class="btn btn-secondary ">
                                <input type="radio" name="count" id="count" autocomplete="off" checked> Count
                            </label>
                            <label class="btn btn-secondary active">
                                <input type="radio" name="rate" id="rate" autocomplete="off"> Rate
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="percentage" id="percentage" autocomplete="off"> Percentage
                            </label>
                        </div>
                    </div>
                </div>
    <!-- Units toggle bar end-->
</template>
<script>
    export default {
        name : "RightbarUnits",
    };

</script>