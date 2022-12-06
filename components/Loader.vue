<template>
      <div class="loader-item"  v-if="with_out_base">
        <div class="loader"> </div>
          Please Wait...

      </div>

    <div class="loader-base" v-else>
      <div class="loader-item">
        <div class="loader"> </div>
          Please Wait...

      </div>

    </div>
</template>
<script>
export default {
  props: ['with_out_base']
}
</script>
<style scoped>
  
    .loader-base{
    height: 50vh;
    position: relative;
    }
    .loader-item{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 46%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    }
    .loader {
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #0C64E6;
    width: 80px;
    height: 80px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    
    }

    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

</style>