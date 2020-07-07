<template>
  <div class="feature">
   
     <div class="feature-item" v-for="(item, index) in features">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    data() {
    return {
      features: [
        	{image: "https://s10.mogucdn.com/mlcdn/c45406/190801_0i79263c99a12e5eejbffj04d89l0_248x248.png", title: "限时快枪", link: "https://act.mogu.com/fastbuy/indexh5?topType=2&newBizTag=17&topId=1qax30&eventTime=1593406800&acm=3.mce.1_4_1mofh0u.122995.0-68824-68974.f6XxVs3hbYWD7.sd_119_122_117-nbt_17-t_f6XxVs3hbYWD7-oc_9-pos_0-mc_122996-kq_22089698-sci_441-kqRId_129-mf_71971_1211978-idx_0-mfs_4-dm1_5000&ptp=32._mf1_1239_71971.0.0.FPmBvRtv"},
					{image: "https://s10.mogucdn.com/mlcdn/c45406/190203_2bdhlkh0l7il4hlc2jfb98kg2232k_165x165.jpg", title: "热销榜单", link: "https://act.mogu.com/paihangbang?acm=3.mce.1_10_1muj0.122995.0.yd34ns3hdVlvx.sd_119-pos_1-m_532970-mc_122993-mf_71971_1211978-idx_1-mfs_4-dm1_5000&ptp=32._mf1_1239_71971.0.0.1RTfs0Vi"},
					{image: "https://s10.mogucdn.com/mlcdn/c45406/190909_1i9ig5c4f0idfb2l83ejbfac9d4ke_248x248.jpg", title: "好货精选", link: "https://m.mogu.com/wall/s?q=包包&ptp=32._mf1_1239_71971.0.0.8sS8o0ow&acm=3.mce.1_10_1mtig.132827.0-84057.9m17Es3hdbZHI.sd_119_115-mid_132827-pos_7-m_532312-lc_201-mf_71971_1211979-idx_7-mfs_15-dm1_5000"},
					{image: "https://s10.mogucdn.com/mlcdn/c45406/190719_1il40eb6a097bd5947accg3h45fcc_165x165.gif", title: "新品快枪", link: "https://act.mogu.com/fashionnew?acm=3.mce.1_10_1mtas.122995.0-78699.r9fL8s3hcZ9YV.sd_119_115-mid_122998-pos_3-m_532174-mc_122998-lc_201-mf_71971_1211978-idx_3-mfs_4-dm1_5000&ptp=32._mf1_1239_71971.0.0.Uqmmo1vm"},
      ]
    }
  }
  }
  
</script>

<style scoped>
  .feature {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .feature-item {
    flex: 1;
    text-align: center;
  }

  .feature img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    border-radius:50%;
  }
</style>
