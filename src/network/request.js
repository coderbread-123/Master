import axios from "axios"

export function request(config) {

  const instance=axios.create({
   
    baseURL: "http://152.16.185.210:8000/api/www3",
    timeout:5000
  })

  instance.interceptors.request.use(
    config=>{
      return config
    },
    error => {
      console.log(error);
    }
  )
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })

  return instance(config)
}
