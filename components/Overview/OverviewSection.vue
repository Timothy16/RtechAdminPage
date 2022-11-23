<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <div class="col-inner-style ">
            <div class="class-f">
              <img src="/images/people.png" alt="" srcset="">
              <div>
                <div class="text-up">Total Users</div>
                <div class="number-up">800</div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="col-inner-style ">
            <div class="class-f">
              <img src="/images/lamp.png" alt="" srcset="">
              <div>
                <div class="text-up">Total Reports</div>
                <div class="number-up">123</div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="col-inner-style ">
            <div class="class-f">
              <img src="/images/activity.png" alt="" srcset="">
              <div>
                <div class="text-up">All Transactions</div>
                <div class="number-up">1500</div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-4">
        <div class="card-s" style="background : rgba(184, 210, 250, 0.5);">
            <img src="/images/chart.png" class="img-fluid img-edit" alt="" srcset="">
            <div>
              <div class="text-up-1">Giftcard Orders</div>
              <div class="number-up-1">800</div>
            </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-s" style="background : rgba(182, 119, 3, 0.2);">
            <img src="/images/chart_1.png" class="img-fluid img-edit" alt="" srcset="">
            <div>
              <div class="text-up-1">Crypto Orders</div>
              <div class="number-up-1">200</div>
            </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-s" style="background :  rgba(72, 223, 72, 0.2);">
            <img src="/images/chart_success.png" class="img-fluid img-edit" alt="" srcset="">
            <div>
              <div class="text-up-1">Completed Transaction</div>
              <div class="number-up-1">500</div>
            </div>
        </div>
      </div>
      <div class="col-lg-4 mt-4 mb-4">
        <div class="card-s" style="background :  #FDF1DB">
            <img src="/images/timer.png" class="img-fluid img-edit" alt="" srcset="">
            <div>
              <div class="text-up-1">Pending Transaction</div>
              <div class="number-up-1">50</div>
            </div>
        </div>
      </div>
      <div class="col-lg-4 mt-4 mb-4">
        <div class="card-s" style="background : #FCCDCD">
            <img src="/images/chart_fail.png" class="img-fluid img-edit" alt="" srcset="">
            <div>
              <div class="text-up-1">Rejected Transaction</div>
              <div class="number-up-1">100</div>
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