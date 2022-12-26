<template>
<client-only>
    <div :class="['row', pclass1 ]">
        <div :class="['col-lg-12', pclass2]">
            <div class="form-group">
                <div class="channel-profile1 text-center center-div">
                    <img class="img-thumbnail" alt="" :width="400" :src="imageUrl" :data-holder-rendered="true" v-on:click="show()" v-if="imageUrl">
                    <MazBtn size="mini" color="black" left-icon-name="camera" v-on:click="show()" fab>
                    </MazBtn>
                </div>
            </div>
        </div>

        <modal name="profilepicture" style="z-index : 9001" :adaptive="true" :height="500">
            <div class="channel-profile-main" >
                <cropper
                    :src="profileImg"
                    class="croppersize"
                    ref="cropperPic"
                    :stencil-props="{
                        handlers: {},
                        movable: false,
                        scalable: false,
                        aspectRatio: 5/3,
                    }"
                    image-restriction="stencil" />
                <div class="channel-profile-pic">
                    
                    <div class="image-btns1 ">
                        <input ref="fileInputPicture" type="file"  style="display:none" @change="onFileSelectedPicture" accept="image/*">
                        <button class="btn btn-sm btn-primary" v-on:click="$refs.fileInputPicture.click()" :disabled="uploading">Change</button> 
                        <button class="btn btn-sm btn-secondary" v-on:click="sendPicToServer()" :disabled="uploading">{{uploading ? "Uploaing" : "Save for Upload"}}</button> 
                        <button class="btn btn-sm btn-success" v-on:click="hide()" :disabled="uploading">Close</button>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</client-only>
</template>

<script>
    import { mapMutations, mapGetters, mapActions} from 'vuex'
    export default {
        props: ['pclass1', 'pclass2'],
        data(){
            return{
                showModal: true,
                uploading: false,
                profileImg: null,
                newImage: null,
            }
        },
        computed:{
            ...mapGetters({
                'giftcardData':  'giftcard/giftcardData',
            }),
            imageUrl(){
                if(this.newImage){
                    return this.newImage
                }
                else if(this.giftcardData){
                    return this.giftcardData.giftcard_picture ? this.giftcardData.giftcard_picture : null
                }
                return '/images/amazon.png'
            },
        },
        methods:{
             
            ...mapMutations({
                'SET_GIFTCARD_DATA' : 'giftcard/SET_GIFTCARD_DATA',
            }),
            async sendPicToServer(){
                const { canvas } = this.$refs.cropperPic.getResult();

                if (canvas) {
                    // const form = new FormData();
                    this.newImage = canvas.toDataURL()
                    
                    await  canvas.toBlob(blob => {
                        
                        let item = 'giftcard_picture'
                        let value = blob
                        this.SET_GIFTCARD_DATA({item, value })
                        this.hide()

                      
                    }, 'image/jpeg');
                }
            },
            onFileSelectedPicture(event){
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
                    this.profileImg = e.target.result;
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
        
    }
</script>

<style scoped>
  .channel-profile-main{
    position: relative
  }
  .channel-profile-pic{
    bottom: 0;
    left: 0;
    padding: 1rem 30px;
    position: absolute;
    right: 0;
    top: 340px;
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

  .center-div {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 200px; */
    
  }

  .iconclass{
    /* left: 0;
    right: 0; */
    width:25px;
    height:25px;
    font-size: 13px;
    cursor: pointer;
    color: #e9ecef;
    border: 1px solid #fff;
    padding: 1px;
    background: #000000;
    border-radius: 50px;
  }
</style>