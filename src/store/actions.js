export default {
  addCart(context,product)
  {
    //查找之前数组是否有该商品

    let oldProduct=null
    for (let item of context.state.cartList){
      if(item.iid==product.iid)
        oldProduct=item
    }

   console.log(context.state.cartList);
//判断oldproduct
    if ( oldProduct!=null )
    {
      // console.log("存在");
      context.commit("addCounter",oldProduct)
    }
    else
    {
      // console.log("没有");
      product.count = 1
      context.commit("addCart",product)
    }
  }

}
