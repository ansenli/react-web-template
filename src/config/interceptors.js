import axios from 'axios';

// 拦截请求
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("拦截请求....",config)
    return config;
  },(error)=>{
    // 对请求错误做些什么
    console.log("请求错误....",error)
    return Promise.reject(error)
  })

// 拦截响应
axios.interceptors.response.use((response)=>{
    // 对响应数据做点什么
    console.log("拦截响应....",response)
    return response 
  },(error)=>{
    // 对响应错误做点什么
    console.log("请求错误....",error)
    return Promise.reject(error)
  })
