<template>
    <div class="  mb-5">
        <!-- form to set rate -->
       <div class="bg-white bg-pad">
            <!-- <div class="header-info">Create Giftcard</div> -->
            <form action="">                         
                <div class="form-group">
                    <label for="">Giftcard Name</label>
                    <input class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                </div>
                <div class="form-group mt-3">
                    <label for="">Upload Image</label>
                    <div class="trigger-layer">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Select file to upload</span>
                        <input type="file"  accept="video/*">
                    </div>
                </div>

                <div class="form-group mt-3">
                    <label for="">Is Active?</label>
                    <div class="custom-control custom-switch mb-2" dir="ltr">
                        <input type="checkbox" class="custom-control-input form-control-lg" id="customSwitchActive">
                        <label class="custom-control-label" for="customSwitchActive"></label>
                    </div>
                </div>
                

                <div class="btn-sellgiftcards btn">Create Giftcard</div>

            </form>
       </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.trigger-layer {
        position: relative;
        width: 50%;
        font-weight: 600;
        height: 100px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        margin: 10px;
        padding-top: 8px;
        padding-right: 16px;
        padding-bottom: 8px;
        padding-left: 16px;
        background: rgba(12, 100, 230, 0.06);
        border: 1px solid rgba(12, 100, 230, 0.7);
        border-radius: 10px;
        color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        line-height: 1.2;
        cursor : pointer
}
input[type="file"] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
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
    background: rgba(12, 100, 230, 0.06);
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
    padding: .4rem .6rem;
    font-size: 16px;
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