<template>
  <div class="toast">
      <div v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
    name: "Toast",
    // props: {
    //     message: {
    //         type: String,
    //         default: ''

    //     },
    //     show:{
    //         type:Boolean,
    //         default: false
    //     }
    // },
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message="加1",duration=1500) {
            this.show = true,
            this.message = message


            setTimeout(() =>{
                this.isShow = false;
                this.message = ''
            },duration)

        }
    },
}
</script>
<style scoped>
.toast {
   position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    padding: 8px 10px;
    transform: translate(-50%,-50%);

    background-color: rgba(0,0,0,0.2);
    z-index: 999;
   


}
</style>