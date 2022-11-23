<template>
<client-only>
   <div class="container-fluid full-height">
      <div class="login-main-left">
          <div class="text-center login-main-left-header">
            <nuxt-link to="/">
              <img src="/images/logo_one.png" class="img-fluid1" height="70" alt="LOGO">
            </nuxt-link>
            <div class="password-text">This page cannot be open on a small screen, please use a screen size of 1120px above </div>
          </div>
      </div>
    </div>
</client-only>
</template>

<script>

export default {
   
}
</script>
<style scoped>
.full-height{
   /* background: #e9ecef; */
   background-color: #0C64E6;
   height: 100vh;
   padding-top: 10rem;
}
.login-main-left{
  margin: auto;
  width: 30%;
  padding:5rem 1rem;
  background: #fff;
}
.password-text{
  font-size: 2rem;
  padding: 1.3rem 0;
  font-weight: 700;
  /* letter-spacing: 5px; */
}
@media screen and (max-width : 578px){
.full-height{
   /* background: #e9ecef; */
   background-color: #0C64E6;
   height: 100vh;
}
.login-main-left{
  margin: auto;
  width: 100%;
  padding-top: 5rem;
}
.password-text{
  font-size: 1.5rem;
  padding: 1rem 0;
  font-weight: 700;
  /* letter-spacing: 5px; */
}
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
.full-height{
   /* background: #e9ecef; */
   background-color: #0C64E6;
   height: 100vh;
}
.login-main-left{
  margin: auto;
  width: 50%;
  padding-top: 5rem;
}
.password-text{
  font-size: 1.5rem;
  padding: 1rem 0;
  font-weight: 700;
  /* letter-spacing: 5px; */
}
}
</style>