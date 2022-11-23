<template>
<client-only>
   <div class="container-fluid full-height">
      <div class="login-main-left">
          <div class="text-center login-main-left-header">
            <nuxt-link to="/">
              <img src="/images/logo_one.png" class="img-fluid1" height="70" alt="LOGO">
            </nuxt-link>
            <div class="password-text">Welcome Admin</div>
          </div>
         <form action="/" v-on:submit.prevent>
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="Enter email address">
                <!-- <p  v-if="field_errors.email" class="text-danger"> {{ field_errors.email[0]}}</p> -->
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Enter password">
                <!-- <p  v-if="field_errors.email" class="text-danger"> {{ field_errors.email[0]}}</p> -->
            </div>

            <div class="mt-4">
                <div class="row">
                  <div class="col-12">
                      <button type="submit" class="btn btn-primary btn-block btn-lg"  v-on:click="loginUser()">Submit </button>
                  </div>
                </div>
            </div>
          </form>
          <!-- <div class="text-center mt-5">
            <p class="light-gray">Already have an account? <nuxt-link to="/login">Sign In</nuxt-link></p>
          </div> -->
      </div>
      <!-- <notifications position="bottom left" group="all" /> -->
    </div>
</client-only>
</template>

<script>
import {mapActions, mapMutations , mapGetters} from 'vuex'

export default {
  layout: 'password',
  
  head () {
      return {
        title: "Login / RtechBiz" ,

      }
  },
   data(){
    return{
      email: null,
      password: null,
    }
  },
  computed:{
    ...mapGetters({
        
    }),
  },
  methods:{
      ...mapMutations({
       
      }),

      ...mapActions({
       
      }),

      async loginUser(){
        this.$router.push('/')
      }
  }
   
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