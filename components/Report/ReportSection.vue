<template>
  <div class="">
    <div v-if="!loading">
      <div class="search-box">
          <form>
              <div class="form-row align-items-center">
                  <div class="col-auto">
                      <input v-model="reportName" type="search" class="form-control mb-2" id="inlineFormInput" placeholder="Search Email Address or Username">
                  </div>
              </div>
          </form>
      </div>
          
      <vuetable ref="vuetable"
          :fields="options"
          :api-mode="false"
          :data="filterAll" class="bg-white">

          <div slot="action" slot-scope="props">
            <nuxt-link :to="'/reports/get-a-report?reportId='+ props.rowData.id" class="btn btn-secondary">
              view    
            </nuxt-link>
          </div>
          <div slot="sn" slot-scope="props">
            <span>{{ props.rowIndex + 1}}</span>
          </div>
          <div slot="name" slot-scope="props">
            <span>{{ props.rowData.users ? props.rowData.users.name : ""}}</span>
          </div>
          <div slot="email" slot-scope="props">
            <span>{{ props.rowData.users ? props.rowData.users.email : "" }}</span>
          </div>
          <div slot="report" slot-scope="props">
            <span><span>{{ props.rowData.complaint ? props.rowData.complaint : "" }}</span></span>
          </div>
          <div slot="image" slot-scope="props">
            <span>{{ props.rowData.image ? "Yes" : "No" }}</span>
          </div>  
          <div slot="created" slot-scope="props">
            <span>{{$moment(props.rowData.created_at).format('lll')}}</span>
          </div>              
      </vuetable>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            reportName : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Full Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Email',frozen:true, name: 'email',width: "", editor: false}, 
                { title: 'Compailts', name: 'report', width: ""}, 
                { title: 'Has Image?', name: 'image', width: ""}, 
                { title: 'Created', name: 'created', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "report/loading",
            reports : "report/reports",
        }),
         filterAll(){
            try{
                return this.reports.filter((report) => {
                if(report.users){
                    return report.users.username.toLowerCase().includes(this.reportName.toLowerCase() || this.reportName.toUpperCase())
                     || 
                     report.users.email.toLowerCase().includes(this.reportName.toLowerCase() || this.reportName.toUpperCase())
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
            getReports: "report/getReports",  
        }),
    },
    mounted(){
        this.getReports()
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