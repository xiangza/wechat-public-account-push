/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx65b52ba98c506963',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6e6dda8508e2d6da1c246b97d3648e2c',

  PROVINCE: '天津',
  CITY: '天津',

  USERS: [
    {
      // 想要发送的人的名字
      name: '武林权',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXqBw6VqLV--mVlAlPpPemAtrE3g',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DCiQxj0A_w9ZiZw4nqkdCsXB8KFAyDaWnmIQ9mvSq0Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '武林权', year: '2002', date: '02-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '郭涛', year: '2002', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '07-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-11-16' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '郭涛',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXqBw6W90IvU6xKlh649QlilQa4k',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DCiQxj0A_w9ZiZw4nqkdCsXB8KFAyDaWnmIQ9mvSq0Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '武林权', year: '2002', date: '02-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '郭涛', year: '2002', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '07-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-11-16' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'hMcBgCkmMOvlmL_dRIOxX7l8HEjkvSE0PfqzGC6Tueg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXqBw6aU5mKtWrNBoF_X43AImITg',
    }
  ],

}

module.exports = USER_CONFIG

