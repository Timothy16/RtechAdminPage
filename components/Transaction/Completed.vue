<template>
  <div class="">
    <div class="bg-white">
        <div class="header-info">Completed Transactions</div>
        <div class="search-box pt-3">
            <form>
                <div class="row">
                    <div class="col-lg-6">
                        <MazPicker
                        v-model="pickerRangeValues"
                        placeholder="Select period"
                        range
                        double
                        position="bottom right"
                        locale="en"
                        format="DD-MM-YYYY"
                        formatted="LL"
                        size="lg"
                        @formatted="pickerRangeValuesFormatted = $event">
                        <i slot="icon-left" class="material-icons" > date_range </i>
                        </MazPicker>
                    </div>
                    <div class="col-lg-6">
                        <MazInput
                            v-model="email"
                            @change="searchMore"
                            left-icon-name="search"
                            :loading="loading"
                            :clearable='true'
                            type="text"
                            placeholder="Enter Name"
                            size="lg"
                        />
                    </div>
                </div>
                <div class="mt-1">
                        <button type="submit" class="btn btn-secondary mb-2">Search</button>
                    </div>
            </form>
        </div>
    </div>
        
        <table class="table mt-3 text-center table-responsive-lg table-lg bg-white">
             <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Card Name</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
             <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
               <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
               <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Bitcoin</td>
                <td>7th Nov</td>
                <td>$1,400</td>
                <td><span class="completed">Completed</span></td>
                <td><span class="btn btn-secondary btn-sm">view</span></td>
              </tr>

              
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pickerRangeValues: null,
            pickerRangeValuesFormatted: null,
            email : "",
            loading : false
        }
    },
    methods : {
        searchMore(){

        }
    }
}
</script>

<style scoped>
.completed{
  color: #107C10;
  background: rgba(16, 124, 16, 0.2);
  border-radius: 40px;
  padding: .5rem .7rem;
  font-size: 14px;
}
.header-info{
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    padding: 20px;
}
.search-box{
    width: 50%;
    margin: auto;
    padding-bottom: 1rem;
}
a{
    text-decoration: none;
    color: #fff;
}
/* .form-control{
    height: 60px;
    width: 350px;
    border-radius: 15px;
    
} */
</style>