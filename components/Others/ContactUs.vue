<template>
  <div class="">
    <div v-if="!loading">
        <h5>List of visitors/user enquiring</h5>
      <vuetable ref="vuetable"
              :fields="options"
              :api-mode="false"
              :data="contacts" class="bg-white">

                <div slot="action" slot-scope="props">
                    <button @click="openDelete(props.rowData.id)"  class="btn btn-danger">
                        <i class="fa fa-trash"></i>    
                    </button>
                </div>
                <div slot="sn" slot-scope="props">
                      <span>{{ props.rowIndex + 1}}</span>
                </div>
                 <div slot="phone" slot-scope="props">
                    <span>{{ props.rowData.telephone ? props.rowData.telephone : ""}}</span>
                </div>
                <div slot="name" slot-scope="props">
                    <span>{{ props.rowData.name }}</span>
                </div>

                <div slot="email" slot-scope="props">
                    <span><span>{{ props.rowData.email }}</span></span>
                </div>
                <div slot="created" slot-scope="props">
                    <span><span>{{ $moment(props.rowData.created_at).format('lll') }}</span></span>
                </div>

                <div slot="message" slot-scope="props">
                    <span>{{ props.rowData.message }}</span>
                </div>              
      </vuetable>
    </div>
    <Loader v-else/> 
    <MazDialog v-model="openDeleteModal" danger :width="500" title="Delete Enquire" @confirm="deleteThisData()">
      Are you sure you want to delete this Enquire?
    </MazDialog>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            openDeleteModal : false,
            contactId : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Full Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Email', name: 'email', width: ""},
                { title: 'Phone Number', name: 'phone', width: ""}, 
                { title: 'Message', name: 'message', width: ""}, 
                { title: 'Date/Time', name: 'created', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "loading",
            contacts : "contacts",
        }),
    },
    methods : {
        ...mapActions({
            getContactUs: "getContactUs",  
            deleteContactUs : "deleteContactUs"
        }),
         ...mapMutations({
            SET_SAVING: "SET_SAVING",
        }),
        openDelete(value){
            this.openDeleteModal = true
            this.contactId = value
        },
        async deleteThisData(){
            try {
                await this.deleteContactUs(this.contactId)
                 this.openDeleteModal = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
    },
    mounted(){
        this.getContactUs()
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
    /* height: 60px;
    width: 350px;
    border-radius: 15px; */
    
}
</style>