<template>
  <div class="goods-item" @click="itemClick" >

    <img v-if="isShowIndexImg" :src="goodItem.show.img" alt="" @load="loadImgFinished">

    <img v-else :src="goodItem.image" alt="" @load="loadImgFinished">

    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="collect"> {{goodItem.cfav}}</span>
      <div class="btn-box">点击购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodItem",
    props:{
      goodItem:{
        type:Object
      }
    },
    computed:{
      isShowIndexImg(){
        if(this.goodItem.show)
          return true
        else
          return false
      }
    },
    methods:{
      itemClick()
      {//返回不同商品数据
        this.$router.push("/detail/"+this.goodItem.iid)
      },
      loadImgFinished()
      {
        // console.log("loadImgFinished");
        this.$bus.$emit("loadGoodItem")
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

 .goods-info {
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    color: rgb(255, 87, 119);
  }

  .goods-info .price {
    color: rgb(83, 80, 80);
    margin-right: 90px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
	.goods-info .btn-box{
	    width: 100%;
	    height: 1.5rem;
	    line-height: 1.5rem;
	    border-radius: 4px;
	    font-size: 14px;
	    text-align: center;
	    margin-top: .04rem;
	    margin-bottom: .04rem;
			color: rgb(255, 255, 255);
			background-color: rgb(255, 87, 119);
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
</style>
