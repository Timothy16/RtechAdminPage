<template>
    <div class="  mb-5">
        <!-- form to set rate -->
       <div class="bg-white bg-pad">
            <div class="header-info">Sell Giftcard Rate</div>
            <form action="">                         

                <input class="form-control form-control-lg mb-4" type="text" placeholder="Giftcard Name" aria-label=".form-control-lg example">

                <select class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                    <option selected>Select Card Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <input class="form-control form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">

                <div class="btn-sellgiftcards btn">Set Giftcard Rate</div>

            </form>
       </div>
       <!-- Table -->
       <table class="table mt-3 text-center table-responsive-lg table-lg bg-white">
             <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Giftcard Name</th>
                <th scope="col">Card Type</th>
                <th scope="col">Rate</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Amazon [300-500]</td>
                <td>Physical</td>
                <td>N 2000</td>
                <td>
                    <nuxt-link to="/new-orders/get-a-giftcard">
                        <div class="btn btn-secondary">
                            view 
                        </div>
                        <div class="btn btn-delete">
                            Delete 
                        </div>
                    </nuxt-link>
                </td>
              </tr>       
              <tr>
                <th scope="row">1</th>
                <td>Amazon [300-500]</td>
                <td>Physical</td>
                <td>N 2000</td>
                <td>
                    <nuxt-link to="/new-orders/get-a-giftcard">
                        <div class="btn btn-secondary">
                            view 
                        </div>
                        <div class="btn btn-delete">
                            Delete 
                        </div>
                    </nuxt-link>
                </td>
              </tr>       
              <tr>
                <th scope="row">1</th>
                <td>Amazon [300-500]</td>
                <td>Physical</td>
                <td>N 2000</td>
                <td>
                    <nuxt-link to="/new-orders/get-a-giftcard">
                        <div class="btn btn-secondary">
                            view 
                        </div>
                        <div class="btn btn-delete">
                            Delete 
                        </div>
                    </nuxt-link>
                </td>
              </tr>       
              <tr>
                <th scope="row">1</th>
                <td>Amazon [300-500]</td>
                <td>Physical</td>
                <td>N 2000</td>
                <td>
                    <nuxt-link to="/new-orders/get-a-giftcard">
                        <div class="btn btn-secondary">
                            view 
                        </div>
                        <div class="btn btn-delete">
                            Delete 
                        </div>
                    </nuxt-link>
                </td>
              </tr>       
              <tr>
                <th scope="row">1</th>
                <td>Amazon [300-500]</td>
                <td>Physical</td>
                <td>N 2000</td>
                <td>
                    <nuxt-link to="/new-orders/get-a-giftcard">
                        <div class="btn btn-secondary">
                            view 
                        </div>
                        <div class="btn btn-delete">
                            Delete 
                        </div>
                    </nuxt-link>
                </td>
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
.btn-delete{
    /* padding: 20px; */
    background: #F8E2E2;
    /* border-radius: 10px; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #ff0000;
    cursor: pointer;
}
.bg-pad{
    padding: 20px;
}
.header-info{
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
.form-control{
    box-sizing: border-box;
    width: 50%;
    height: 100px;
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.form-card{
    padding: 1.5rem;
    width: 80%;
    /* margin: auto; */
     border-radius: 30px;
}
.btn-sellgiftcards{
    background: #0C64E6;
    border-radius: 5px;
    color: #fff;
    padding: 1rem;
    font-size: 20px;
    font-weight: 600;
}
@media screen and (max-width : 578px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
        font-size: 10px;
    }
   
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
    }
}
</style>