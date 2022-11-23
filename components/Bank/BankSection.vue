<template>
  <div class="">
        <div class="search-box">
            <form>
                <div class="row">
                    <div class="col-lg-6">
                        <!-- <input type="number" class="form-control mb-2" id="inlineFormInput" placeholder="Search Account Number"> -->
                      <MazInput
                        v-model="email"
                        @change="searchMore"
                        left-icon-name="search"
                        :loading="loading"
                        :clearable='true'
                        type="number"
                        placeholder="Enter Name"
                        size="lg"
                    />
                    </div>
                    <div class="col-lg-6 pt-3">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div>
                </div>
             </form>
        </div>
        <table class="table  text-center table-responsive-lg table-lg bg-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Account Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>    
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>Ploris Bank</td>
                <td>2340922200111</td>
                <td>
                    <div class="btn btn-danger">Delete</div>
                </td>
                
              </tr>         
            </tbody>
          </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email : ""
    }
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