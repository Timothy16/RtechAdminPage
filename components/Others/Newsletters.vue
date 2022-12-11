<template>
  <div class="">
    <div v-if="!loading">
        <h5>List of Newsletters Subscribers</h5>
      <vuetable ref="vuetable"
              :fields="options"
              :api-mode="false"
              :data="newsletters" class="bg-white">
               
                <div slot="sn" slot-scope="props">
                      <span>{{ props.rowIndex + 1}}</span>
                </div>
                <div slot="email" slot-scope="props">
                    <span><span>{{ props.rowData.email }}</span></span>
                </div>
                <div slot="created" slot-scope="props">
                    <span><span>{{ $moment(props.rowData.created_at).format('lll') }}</span></span>
                </div>          
      </vuetable>
    </div>
    <Loader v-else/> 
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {

            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Email', name: 'email', width: ""},
                { title: 'Date/Time', name: 'created', width: ""}, 

            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "loading",
            newsletters : "newsletters",
        }),
    },
    methods : {
        ...mapActions({
            getNewsLetters: "getNewsLetters",  
        }),
         ...mapMutations({
            SET_SAVING: "SET_SAVING",
        }),
    },
    mounted(){
        this.getNewsLetters()
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