import http from './http'


const request = {
  getStar: () => {
    return http({
      url: 'https://api.qjqq.cn/api/GitHubStar?username=everfu&repo=hexo-theme-solitude',
      method: 'get'
    })
  },
  getInfo: () => {
    return http({
      url: 'https://api.qjqq.cn/api/Npmdown?Username=everfu&packageName=hexo-theme-solitude',
      method: 'get'
    })
  }
}

export default request
