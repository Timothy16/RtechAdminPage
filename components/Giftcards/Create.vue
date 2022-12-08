<template>
    <div class="  mb-5">
        <!-- form to set rate -->
       <div class="bg-white bg-pad">
            <!-- <div class="header-info">Create Giftcard</div> -->
            <form action="" @submit.prevent>                         
                <div class="form-group">
                    <label for="">Giftcard Name</label>
                    <input v-model="giftcardName" class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                    <p  v-if="field_errors.giftcard_name" class="text-danger"> {{ field_errors.giftcard_name[0]}}</p>
                </div>
                <div class="form-group mt-3">
                    <label for="">Upload Image</label>
                    <div class="trigger-layer" @click="show()">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Select file to upload</span>
                        <!-- <input type="file"  accept="image/*" @change="onFileChange"> -->
                    </div>
                     <p  v-if="field_errors.giftcard_picture" class="text-danger"> {{ field_errors.giftcard_picture[0]}}</p>
                </div>

                <div class="form-group mt-3">
                    <label for="">Is Active?</label>
                    <div class="custom-control custom-switch mb-2" dir="ltr">
                        <input v-model="status" type="checkbox" class="custom-control-input form-control-lg" id="customSwitchActive">
                        <label class="custom-control-label" for="customSwitchActive"></label>
                    </div>
                    
                </div>
                
                <!-- image preview -->
                <div class="form-group mt-3" v-if="showImage">
                    <label for="">Image Preview</label> <br>
                    <img :src="giftcardImg" alt="..." class="img-thumbnail" :key="giftcardImg">
                </div>

                <button type="submit" @click="createGiftcard" :disabled="loading" class="btn-sellgiftcards btn">{{loading ? 'Please wait...' : 'Create Giftcard'}}</button>

            </form>

        <client-only>
            <modal name="profilepicture" :adaptive="true" :height="500">
                <div class="channel-profile-main">
                    <cropper
                    :src="giftcardImg"
                    class="croppersize"
                    ref="cropperPic"
                    
                    :stencil-props="{
                        handlers: {},
                        movable: false,
                        scalable: false,
                        aspectRatio: 5/3,
                    }"
                    image-restriction="stencil"

                    />
                    <!-- <img :src="profileImg" alt="" class="img-fluid" srcset=""> -->
                    <div class="channel-profile-pic">
                        <div class="image-btns1 ">
                            <input ref="fileInputPicture" type="file"  style="display:none" @change="onFileSelectedPicture" accept="image/*">
                            <button class="btn btn-sm btn-secondary" v-on:click="$refs.fileInputPicture.click()" :disabled="loading">Select Image</button> 
                            <button class="btn btn-sm btn-success" v-on:click="change()" :disabled="loading">Save</button> 
                            <button class="btn btn-sm btn-danger" v-on:click="hide()" :disabled="loading">Close</button>
                        </div>
                    </div>
                </div>
            </modal>
        </client-only>
       </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            giftcardName : "",
            giftcardImg : "",
            status : 0,
            imgPreview : null,
            showImage : false,
            giftcardImg2 : ""
        }
    },
    computed: {
        ...mapGetters({
            loading : "giftcard/loading",
        }),
    },
    methods : {
        ...mapActions({
            createNewGiftcard: "giftcard/createNewGiftcard",
        }),
        ...mapMutations({
            SET_LOADING: "giftcard/SET_LOADING",
        }),   
        async createGiftcard(){
            try {
                // let data = {
                //     giftcard_name : this.giftcardName,
                //     giftcard_picture : this.giftcardImg2,
                //     status : this.status ? 1 : 0
                // }
                let formData = new FormData();
                formData.append('giftcard_name', this.giftcardName)
                formData.append('giftcard_picture', this.giftcardImg2)
                formData.append('status', this.status ? 1 : 0)
                
                await this.createNewGiftcard(formData)
                
                this.giftcardName = ""
                this.giftcardImg = ""
                this.status = 0
                this.showImage = false
            } catch (error) {
                this.SET_LOADING(false)
            }
        },
        onFileChange(e) {
            this.giftcardImg2 = e.target.files[0];
            // this.imgPreview = URL.createObjectURL(this.giftcardImg);
        },
        change() {
            const  {canvas}  = this.$refs.cropperPic.getResult();
            this.giftcardImg = canvas.toDataURL()
            this.showImage = true
            this.$modal.hide('profilepicture');

        },
        onFileSelectedPicture(event){
                this.giftcardImg2 = event.target.files[0];
                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.giftcardImg = e.target.result;

                };
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
                }
            },
            show () {
                this.$modal.show('profilepicture');
            },
            hide () {
                this.$modal.hide('profilepicture');
            },
    },
    mounted(){
       
    }
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
    /* font-weight: 600; */
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
  .channel-profile-main{
    position: relative
  }
  .channel-profile-pic{
    bottom: 0;
    left: 0;
    padding: 1rem 30px;
    position: absolute;
    right: 0;
    top: 400px
  }
  .preview {
  	border: dashed 1px rgba(255,255,255, 0.25);
  }
  .croppersize{
    border: solid 1px #EEE;
    height: 500px;
    background: #fff;
    width: 100%;
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