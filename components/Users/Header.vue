<template>
  <div class="upper-nav">
      <div class="">
        <span class="header-t">Regstered Users</span>
      </div>
  </div>
</template>

<script>
export default {
  methods : {
      
  }
}
</script>

<style scoped>
.header-t{
    color: #000;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
}
.upper-nav{
    height: 100px;
    /* background: #fff; */
    background: #E1E6ED;
    display: flex;
    align-items: center;
    position: fixed;
    width: calc(100% - 240px);
    left: 240px;
    z-index: 100;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    transition: all 0.5s ease;
}
.img-head{
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.display-v{
  display: none;
}
@media screen and (max-width : 578px){
  .display-v{
    display: block;
  }
}
@media only screen and (min-width : 768px) and (max-width : 1240px){
  .display-v{
    display: block;
  }
}
</style>