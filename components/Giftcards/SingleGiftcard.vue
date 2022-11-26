<template>
<div>
  <div class="bg-white bg-pad">
    <div class="d-flex justify-content-between">
        <nuxt-link to="/giftcard/all-giftcards">
            <i class="fa fa-angle-left angle-edit"></i>
        </nuxt-link>
        <div class="btn btn-warning"><i class='bx bx-pencil' ></i> Update Giftcard</div>
    </div>
    
    <div class="mt-4">
        <!-- <div class="personal-info">Crypto Order</div> -->
        <div class="headers">Giftcard Name</div>
        <div class="text-h">Amazon</div>

        <div class="headers">Card Image</div>
        <div class="text-h"><img src="/images/btc_img.png" alt="" srcset=""></div> 

         <div class="headers">Is Active?</div>
        <div class="text-h">Yes</div> 
    </div>
  </div>
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
                        <div class="btn btn-danger">
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
                        <div class="btn btn-danger">
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
                        <div class="btn btn-danger">
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
.bg-pad{
    padding: 2rem !important;
}
.angle-edit{
    font-size: 2rem;
}
.personal-info{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
.headers{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* line-height: 19px; */
    color: rgba(0, 0, 0, 0.7);
    margin-top: 1.3rem;
}
.text-h{
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    /* line-height: 28px; */
    color: #000000;
    margin-top: .4rem;
}
</style>