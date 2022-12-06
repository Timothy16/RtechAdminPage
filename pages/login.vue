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
           <!-- <p v-if="errors" class="text-danger"> {{ errors}}</p> -->
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="Enter email address">
                <p  v-if="field_errors.email" class="text-danger"> {{ field_errors.email[0]}}</p>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Enter password">
                <p v-if="field_errors.password" class="text-danger"> {{ field_errors.password[0]}}</p>
            </div>

            <div class="mt-4">
                <div class="row">
                  <div class="col-12">
                      <button type="submit" class="btn btn-primary btn-block btn-lg"  v-on:click="loginUser()"> {{ logining ? "Signing In..." : "Sign In" }} </button>
                  </div>
                </div>
            </div>
          </form>
      </div>
      <notifications position="top right" group="all" />
    </div>
</client-only>
</template>

<script>
import {mapActions, mapMutations , mapGetters} from 'vuex'

export default {
  // layout: 'password',
  
  head () {
      return {
        title: "Login / RtechBiz" ,

      }
  },
   data(){
    return{
      email: null,
      password: null,
      errors : null
    }
  },
  computed:{
    ...mapGetters({
        logining: "logining",
    }),
  },
  methods:{
      ...mapMutations({
            SET_LOGGING_IN: "SET_LOGGING_IN",
        }),

      async loginUser() {
            this.SET_LOGGING_IN(true);
           
            const data = {
                email: this.email,
                password: this.password,
            };
            // console.log("data-v", data)
            await this.$auth
                .loginWith('local', {data})
                .then((response) => {
                    this.SET_LOGGING_IN(false);

                    let redirect = this.$route.query.redirect ? this.$route.query.redirect : "/";
                   
                   this.$router.push(redirect);
                   
                })
                .catch(({ response }) => {
                    this.SET_LOGGING_IN(false);
                    this.errors = response.data.message;
                    // console.log("error", this.errors)
                    let vthis = this
                  if (response.status === 400) {
                     vthis.$notify({
                        group: "all",
                        title: "Message",
                        text: response.data.message,
                        //  text: "Sorry! We are not operating in your location yet",
                        type: "error",
                        duration: 10000,
                    });  
                }
                });
        },
  },
   mounted(){
        let redirect = this.$route.query.redirect ? this.$route.query.redirect : "/";
        if (this.$auth.loggedIn) {

        if (this.$auth.$storage.getUniversal('redirect')) {
          this.$router.replace(this.$auth.$storage.getUniversal('redirect'))
          this.$auth.$storage.removeUniversal('redirect')
          return;
        }

        this.$router.replace(redirect)
        return
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