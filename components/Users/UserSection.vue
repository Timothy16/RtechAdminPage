<template>
  <div class="">
    <div v-if="filterAll.length > 0 && !loading">
      <div class="search-box">
          <form>
              <div class="form-row align-items-center">
                  <div class="col-auto">
                      <input type="search" v-model="userEmail" class="form-control mb-2" id="inlineFormInput" placeholder="Search User by Email or Name">
                  </div>
                  <!-- <div class="col-auto">
                      <button type="submit" class="btn btn-primary mb-2">Search</button>
                  </div> -->
              </div>
          </form>
      </div>
      <!-- Table -->
      <vuetable ref="vuetable"
              :fields="options"
              :api-mode="false"
              :data="filterAll" class="bg-white">
              <div slot="action" slot-scope="props">

                  <nuxt-link :to="'/users/single-user?userId='+ props.rowData.id" class="btn btn-secondary">
                      view    
                  </nuxt-link>
                  <div class="btn btn-danger" @click="openDelete(props.rowData.id)">
                      Delete 
                  </div>
              </div>
              <div slot="sn" slot-scope="props">
                      <span>{{ props.rowIndex + 1}}</span>
                    </div>
              <div slot="name" slot-scope="props">
                  <span>{{ props.rowData.name }}</span>
              </div>

              <div slot="phone" slot-scope="props">
                  <span><span>{{ props.rowData.phone }}</span></span>
              </div>

              <div slot="email" slot-scope="props">
                <span>{{ props.rowData.email }}</span>
              </div>

              <div slot="username" slot-scope="props">
                <span>{{ props.rowData.username }}</span>
              </div>

              <div slot="active" slot-scope="props">
                <span>{{parseInt(props.rowData.status) ? 'Yes' : 'No'}}</span>
              </div>

              <div slot="joined" slot-scope="props">
                <span>{{ $moment(props.rowData.created_at).format('lll')}}</span>
              </div>
              
      </vuetable>
    </div>
    <Loader v-else/>
    <MazDialog v-model="openDeleteModal" danger :width="500" title="Delete User" @confirm="deleteThisUser()">
      Are you sure you want to delete this Faq?
    </MazDialog>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            title : "",
            description : "",
            hasDialogOpen : false,
            openDeleteModal : false,
            userEmail : "",
            userId : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Full Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Username', name: 'username', width: ""}, 
                { title: 'Phone Number', name: 'phone', width: ""}, 
                { title: 'Email', name: 'email', width: ""},
                { title: 'Is suspended?', name: 'active', width: ""}, 
                { title: 'Joined', name: 'joined', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "loading",
            registeredUsers : "registeredUsers",
        }),
         filterAll(){
            try{
                return this.registeredUsers.filter((user) => {
                if(user){
                    return user.email.toLowerCase().includes(this.userEmail.toLowerCase() || this.userEmail.toUpperCase())
                     || user.name.toLowerCase().includes(this.userEmail.toLowerCase() || this.userEmail.toUpperCase())
                    }
                })
                }
            catch (error) {
                console.log(error);
            }
        }, 
    },
    methods : {
        ...mapActions({
            getRegisteredUsers: "getRegisteredUsers",  
            deleteUserData : "deleteUserData"
        }),
        ...mapMutations({
            SET_LOADING: "SET_LOADING",
            SET_SAVING: "SET_SAVING",
        }),
        async deleteThisUser(){
            try {
                let user_id = this.userId
                await this.deleteUserData(user_id)
                 this.openDeleteModal = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        openDelete(value){
            this.openDeleteModal = true
            this.userId = value
        },
        async createNewFaq(){
            // console.log("click")
            try {
                let data = {
                    title : this.title,
                    description : this.description
                }
                await this.addNewFaq(data)
                await this.getFaqs()
                this.title = ""
                this.description = ""
            } catch (error) {
                this.SET_LOADING(false)
            }
        }
    },
    mounted(){
        this.getRegisteredUsers()
    }
}
</script>

<style scoped>
.search-box{
    width: 40%;
    margin: auto;
    padding-bottom: 1rem;
}
.form-control{
    height: 60px;
    width: 350px;
    border-radius: 15px;
    
}
</style>