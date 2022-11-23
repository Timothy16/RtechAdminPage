<template>
  <div class="upper-nav">
      <div class="">
        <span class="header-t">Rate</span>
      </div>
      <div class="links">
        <ul>
          <li>
            <nuxt-link to="/rate/giftcard" :class="{'u-active' : checkUrl == '/rate/giftcard'}">
              Giftcard 
            </nuxt-link>
          </li>
          <li class="ml-3">
            <nuxt-link to="/rate/crypto" :class="{'u-active' : checkUrl == '/rate/crypto'}">
              Crypto 
            </nuxt-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  computed : {
    checkUrl(){
      return this.$route.path
    }
  },
  methods : {
        
  }
}
</script>

<style scoped>
.links{
  margin-top: 4rem;
}
ul li{
  list-style-type: none;
  display: inline-flex;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #0C64E6;
}
.u-active{
  border-bottom: 3px solid #0C64E6;
}
a{
  text-decoration: none;
}
ul{
  padding: 0;
  margin: 0;
}
.header-t{
    color: #000;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
}
.upper-nav{
    height: auto;
    /* background: #fff; */
    background: #E1E6ED;
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