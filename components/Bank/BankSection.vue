<template>
  <div class="">
    <div v-if="banks.length > 0 && !loading">
      <div class="search-box">
            <form>
                <div class="row">
                    <div class="col-lg-12">
                        <!-- <input type="number" class="form-control mb-2" id="inlineFormInput" placeholder="Search Account Number"> -->
                      <MazInput
                          v-model="bankName"
                          left-icon-name="search"
                          :loading="loading"
                          :clearable='true'
                          type="text"
                          placeholder="Enter bank name or account name"
                          size="lg"
                      />
                    </div>
                    <!-- <div class="col-lg-6 pt-3">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div> -->
                </div>
             </form>
      </div>
      <vuetable ref="vuetable"
              :fields="options"
              :api-mode="false"
              :data="filterAll" class="bg-white">

              <div slot="action" slot-scope="props">
                <nuxt-link :to="'/bank/single-bank?bankId='+ props.rowData.id" class="btn btn-secondary">
                  view    
                </nuxt-link>
              </div>
              <div slot="sn" slot-scope="props">
                      <span>{{ props.rowIndex + 1}}</span>
                    </div>
              <div slot="name" slot-scope="props">
                  <span>{{ props.rowData.account_name }}</span>
              </div>

              <div slot="bank_name" slot-scope="props">
                  <span><span>{{ props.rowData.bank_name }}</span></span>
              </div>

              <div slot="number" slot-scope="props">
                <span>{{ props.rowData.account_number }}</span>
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
            bankName : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Account Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Bank Name', name: 'bank_name', width: ""}, 
                { title: 'Account Number', name: 'number', width: ""}, 
                // { title: 'Email', name: 'email', width: ""},
                // { title: 'Is suspended?', name: 'active', width: ""}, 
                // { title: 'Joined', name: 'joined', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "loading",
            banks : "banks",
        }),
         filterAll(){
            try{
                return this.banks.filter((bank) => {
                if(bank){
                    return bank.bank_name.toLowerCase().includes(this.bankName.toLowerCase() || this.bankName.toUpperCase())
                     || bank.account_name.toLowerCase().includes(this.bankName.toLowerCase() || this.bankName.toUpperCase())
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
            getBankDetails: "getBankDetails",  
        }),
    },
    mounted(){
        this.getBankDetails()
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