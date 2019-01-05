import axios from 'axios'
/* paams传参格式
params: {
  method: 'POST',
  query: {
    mobile: this.phone
  }
} */
const unifyRequest = async (params = {}, url) => {
  // tip.loading()
  let data = params.query || {}
  let header = params.header || {
    'Content-Type': 'application/json',
    'X-FMC-CLIENT': 'miniapp_1.0.0'
  }
  // 加cookie
  // if (url.indexOf("/user/login") == -1 && accessToken) {
  //   header = { ...header,
  //     'Authorization': 'Bearer ' + accessToken
  //   }
  // }
  header = { ...header,
    'Authorization': 'Bearer ' + accessToken
  }
  const res = await axios({
    method: params.method || 'GET', // `method` 是创建请求时使用的方法 默认是 get
    url: url, // `url` 是用于请求的服务器 URL
    data: data, // // `data` 是作为请求主体被发送的数据
    header: header, // // `headers` 是即将被发送的自定义请求头
    timeout: 1000, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    withCredentials: false, // 表示跨域请求时是否需要使用凭证
    responseType: 'json', // 默认的  `responseType` 表示服务器响应的数据类型
  })
  // tip.loaded()
  // 存cookie
  return res
}

module.exports = {
  unifyRequest
}