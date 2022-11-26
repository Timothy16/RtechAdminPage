<template>
  <div class="bg-white bg-pad">
    <!-- <div class="header-info">Completed Transactions</div> -->
        <div class="search-box">
            <form>
                <div class="row">
                    <div class="col-lg-12">
                        <MazInput
                            
                            
                            left-icon-name="search"
                            
                            :clearable='true'
                            type="text"
                            placeholder="Enter Giftcard Name"
                            size="lg"
                        />
                    </div>
                </div>
                <!-- <div class="mt-1">
                        <button type="submit" class="btn btn-secondary mb-2">Search</button>
                </div> -->
            </form>
        </div>
    <div class="mt-4">
        <div class="row">
            <div class="col-lg-3">
                <div class="border-edit">
                    <nuxt-link to="/giftcard/get-a-giftcard">
                        <img src="/images/amazon.png" class="img-fluid" alt="">
                        <div class="text-h">
                            Amazon
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="border-edit">
                     <img src="/images/american_express.png" class="img-fluid" alt="">
                     <div class="text-h">
                        Amazon
                     </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="border-edit">
                     <img src="/images/mays.png" class="img-fluid card-left" alt="">
                     <div class="text-h">
                        Amazon
                     </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="border-edit">
                     <img src="/images/eth.png" class="img-fluid card-left" alt="">
                     <div class="text-h">
                        Amazon
                     </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-3">
                <div class="border-edit">
                     <img src="/images/amazon.png" class="img-fluid" alt="">
                     <div class="text-h">
                        Amazon
                     </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="border-edit">
                     <img src="/images/american_express.png" class="img-fluid" alt="">
                     <div class="text-h">
                        Amazon
                     </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="border-edit">
                     <img src="/images/mays.png" class="img-fluid card-left" alt="">
                     <div class="text-h">
                        Amazon
                     </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="border-edit">
                     <img src="/images/eth.png" class="img-fluid card-left" alt="">
                     <div class="text-h">
                        Amazon
                     </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.header-info{
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    /* padding: 20px; */
}
.search-box{
    width: 40%;
    margin: auto;
    padding-bottom: 1rem;
}
.border-edit{
    width: 258px;
    height: 234px;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: .4rem;
}
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
    font-weight: 500;
    font-size: 16px;
    /* line-height: 19px; */
    color: rgba(0, 0, 0, 0.7);
    margin-top: 1.3rem;
}
.text-h{
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-top: 3rem;
    text-align: center;
}
</style>