// import Mock from 'mockjs'

// var Mock = require('mockjs')

import Mock  from 'mockjs'
// console.log(111);
const data = Mock.mock({
    code:'200',
    message:'获取成功',
    'data|15': [{
        'id|+1': 1,
        'leftname|1':['教材教辅','文学小说','生活艺术','职业技能'],
        proname: "@first()",
        desc: '@ctitle',
        "kind|1-5": [
            {
              "name|+1": [
                "故事会",
                "新闻时刻",
                "快乐时光"
              ]
            }
          ]
    }]
})

Mock.mock('/getkind', 'get', () => {
    return data
})

// Mock.mock('/getproadd', 'post', (config) => {
//     console.log('请求了一个post方式的假地址', JSON.parse(config.body))


//     data.data.push(JSON.parse(config.body))

//     return data
// })