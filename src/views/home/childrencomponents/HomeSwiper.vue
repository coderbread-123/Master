<template>

  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadSwiperImg">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index"

  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    data()
    {
      return{
       banners: [
					{image: "https://s11.mogucdn.com/mlcdn/c45406/200623_1l73ah805l2k471dee8f4jc81b43k_1125x390.jpg_800x9999.v1c7E.81.webp", link: "https://act.mogu.com/huodong/lixingshencai1?acm=3.mce.1_10_1p5cm.140378.0.bbTeVs3gZSWeK.pos_0-m_586639-sd_119-mf_4537_1211936-idx_0-mfs_5-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.1.oWxi3NvY"},
					{image: "https://s17.mogucdn.com/mlcdn/c45406/200619_8cigeha0115g0k857iji0ij2b46ec_1125x390.jpg_800x9999.v1c7E.81.webp", link: "https://act.mogu.com/eggka0619?acm=3.mce.1_10_1p5co.140378.0.yd34ns3h5fAQb.pos_1-m_586640-sd_119-mf_4537_1211936-idx_1-mfs_5-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.2.qyNxZS9Q"},
					{image: "https://s18.mogucdn.com/mlcdn/c45406/200624_65e57l5f29k4a4fb2d8a9iiigi3a6_1125x390.jpg_800x9999.v1c7E.81.webp", link: "https://act.mogu.com/wmrjppr0427?acm=3.mce.1_10_1p5cq.140378.0.yd34ns3h5fAQc.pos_2-m_586641-sd_119-mf_4537_1211936-idx_2-mfs_5-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.3.OnzoabEe"},
					{image: "https://s2.mogucdn.com/mlcdn/c45406/200619_1cl67fj4377kd0l62g68l64e7kc2c_1125x390.jpg_800x9999.v1c7E.81.webp", link: "https://act.mogu.com/tzzc628?acm=3.mce.1_10_1p5cs.140378.0.yd34ns3h5fAQd.pos_3-m_586642-sd_119-mf_4537_1211936-idx_3-mfs_5-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.4.ctqCqPcf"},
				]
      }
    },
    // props:{
    //   banners:{
    //     type:Array
    //   }
    // },
    methods:{
      loadSwiperImg()
      {
        // console.log("Swiper");
        if(!this.SwiperImgFinished)
        {
          this.$emit("loadSwiperImg")
          this.SwiperImgFinished=true
        }

      }
    }

  }
</script>

<style scoped>

</style>
