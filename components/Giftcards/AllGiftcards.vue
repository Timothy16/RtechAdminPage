<template>
<div class="bg-white bg-pad">
    <!-- <div class="header-info">Completed Transactions</div> -->
        <div class="search-box">
            <form>
                <div class="row">
                    <div class="col-lg-12">
                        <MazInput
                            v-model="giftcard"
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
        <div class="row" v-if="giftcards.length > 0 && !loading">
            <div class="col-lg-3 mb-4" v-for="(giftcard, index) in filterAll" :key="index">
                <div class="border-edit">
                    <nuxt-link :to="'/giftcard/get-a-giftcard?giftcardId=' + giftcard.id + '&giftcardName=' +  giftcard.giftcard_name">
                        <img :src="giftcard ? giftcard.giftcard_picture : '/images/v1.png'" class="img-fluid-1 w-100" alt="">
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
        giftcard : ""
    }
   },
   computed: {
    ...mapGetters({
        loading : "giftcard/loading",
        giftcards : "giftcard/giftcards",
    }),
    filterAll(){
            try{
                return this.giftcards.filter((giftcard) => {
                if(giftcard){
                    return giftcard.giftcard_name.toLowerCase().includes(this.giftcard.toLowerCase() || this.giftcard.toUpperCase())
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
            getAllGiftcards: "giftcard/getAllGiftcards",
        }),
   },
   mounted(){
        this.getAllGiftcards()
   }
}
</script>

<style scoped>
.img-fluid-1{
    width: 100%;
    height: 200px;
}
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
    height: auto;
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
    margin-top: 1rem;
    text-align: center;
    word-break: break-all;
}
</style>