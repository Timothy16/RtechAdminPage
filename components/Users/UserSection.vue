<template>
  <div class="">
    <div class="search-box">
        <form>
            <div class="form-row align-items-center">
                <div class="col-auto">
                    <input type="number" class="form-control mb-2" id="inlineFormInput" placeholder="Search User Email Address">
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-2">Search</button>
                </div>
            </div>
        </form>
    </div>
        
        <table class="table  text-center table-responsive-lg table-lg bg-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Is Active?</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td>
                    <nuxt-link to="/users/single-user">
                        <div class="btn btn-secondary">View</div>
                    </nuxt-link>
                </td>
                
              </tr>
             <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Favour Ori</td>
                <td>user@gmail.com</td>
                <td>+2340922200111</td>
                <td>Yes</td>
                <td><div class="btn btn-secondary">View</div></td>
              </tr>
              
            </tbody>
          </table>
  </div>
</template>

<script>
export default {

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