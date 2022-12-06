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
        <div class="row" v-if="giftcards.length > 1 && !loading">
            <div class="col-lg-3 mb-4" v-for="(giftcard, index) in giftcards" :key="index">
                <div class="border-edit">
                    <nuxt-link :to="'/giftcard/get-a-giftcard?giftcardId=' + giftcard.id">
                        <img src="/images/amazon.png" class="img-fluid" alt="">
                        <div class="text-h">
                            {{giftcard.giftcard_name}}
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-else-if="giftcards.length = 0">
            <h1>No giftcard added</h1>
        </div>
        <Loader v-else/>
    </div>
</div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
import Loader from '../Loader.vue'
export default {
  components: { Loader },
   data(){
    return{

    }
   },
   computed: {
    ...mapGetters({
        loading : "giftcard/loading",
        giftcards : "giftcard/giftcards",
    })
   },
   methods : {
    ...mapActions({
            getAllGiftcards: "giftcard/getAllGiftcards",
        }),
   },
   mounted(){
        this.getAllGiftcards()
   }
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
    word-break: break-all;
}
</style>