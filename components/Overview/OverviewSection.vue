<template>
  <div>
    <div v-if="analytic && !loading">
      <div class="row">
        <div class="col-lg-4 col-sm-12 col-md-6">
          <div class="col-inner-style ">
              <div class="class-f">
                <img src="/images/people.png" alt="" srcset="">
                <div>
                  <div class="text-up">Total Users</div>
                  <div class="number-up">{{analytic.giftcardOrder ? analytic.users : 0}}</div>
                </div>
              </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
          <div class="col-inner-style ">
              <div class="class-f">
                <img src="/images/lamp.png" alt="" srcset="">
                <div>
                  <div class="text-up">Total Reports</div>
                  <div class="number-up">{{analytic.giftcardOrder ? analytic.reports : 0}}</div>
                </div>
              </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
          <div class="col-inner-style ">
              <div class="class-f">
                <img src="/images/activity.png" alt="" srcset="">
                <div>
                  <div class="text-up">All Transactions</div>
                  <div class="number-up">{{analytic.giftcardOrder ? analytic.transactions : 0}}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-sm-12 col-md-6">
          <div class="card-s" style="background : rgba(184, 210, 250, 0.5);">
              <img src="/images/chart.png" class="img-fluid img-edit" alt="" srcset="">
              <div>
                <div class="text-up-1">Giftcard Orders</div>
                <div class="number-up-1">{{analytic.giftcardOrder ? analytic.giftcardOrder : 0}}</div>
              </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
          <div class="card-s" style="background : rgba(182, 119, 3, 0.2);">
              <img src="/images/chart_1.png" class="img-fluid img-edit" alt="" srcset="">
              <div>
                <div class="text-up-1">Crypto Orders</div>
                <div class="number-up-1">{{analytic.cryptoOrder ? analytic.cryptoOrder : 0}}</div>
              </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
          <div class="card-s" style="background :  rgba(72, 223, 72, 0.2);">
              <img src="/images/chart_success.png" class="img-fluid img-edit" alt="" srcset="">
              <div>
                <div class="text-up-1">Completed Transaction</div>
                <div class="number-up-1">{{analytic.acceptedTransaction ? analytic.acceptedTransaction : 0}}</div>
              </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4 mb-4">
          <div class="card-s" style="background :  #FDF1DB">
              <img src="/images/timer.png" class="img-fluid img-edit" alt="" srcset="">
              <div>
                <div class="text-up-1">Pending Transaction</div>
                <div class="number-up-1">{{analytic.pendingTransaction ? analytic.pendingTransaction : 0}}</div>
              </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4 mb-4 col-sm-12 col-md-6">
          <div class="card-s" style="background : #FCCDCD">
              <img src="/images/chart_fail.png" class="img-fluid img-edit" alt="" srcset="">
              <div>
                <div class="text-up-1">Rejected Transaction</div>
                <div class="number-up-1">{{analytic.rejectedTransaction ? analytic.rejectedTransaction : 0}}</div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
        }
    },
    computed: {
        ...mapGetters({
            loading : "loading",
            analytic : 'analytic'
        }),
    },
    methods : {
        ...mapActions({
            getAnalytics: "getAnalytics",             
        }),
    },
    mounted(){
        this.getAnalytics()
    }
}
</script>

<style scoped>
.card-s{
  border-radius: 10px;
  padding: 4rem 2rem;
  /* width: 442px; */
  height: 215px;
  cursor: pointer;
  transition: transform .2s;
}
.card-s:hover{
  /* transform: scale(1.1); */
}
.img-edit{
  float: right;
}
.col-inner-style{
  /* width: 442px; */
  height: 225px;
  background: #FFFFFF;
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
  cursor: pointer;
   transition: transform .2s;
}
.col-inner-style:hover{
  transform: scale(1.1);
}
.class-f{
  display: flex;
  justify-content: space-between;
  padding: 5rem;
}
.text-up{
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.5);
}
.number-up{
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #000000;
}
.text-up-1{
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color:#000000;
}
.number-up-1{
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #000000;
  margin-top: 2rem;
}
</style>