export default {
//mutations唯一的目的是为了修改state的状态
//每个方法完成的人物尽量单一
  addCounter(state,oldProduct){
    oldProduct.count++
  }
  ,
  addCart(state,newProduct){
    newProduct.checked = true
    state.cartList.push(newProduct)
  }

}
