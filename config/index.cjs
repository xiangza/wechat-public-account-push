/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '',
  CITY: '',

  USERS: [
    {
      // 想要发送的人的名字
      name: '',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '武林权', year: '2002', date: '03-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
1
/* eslint-disable */
2
​
3
/**
4
 * 此项目配置为方便新人使用，已缩减至最简配置。
5
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
6
 * 自行添加属性，以支持更多个性化功能
7
 */
8
const USER_CONFIG = {
9
​
10
  // 使用微信测试号：公众号APP_ID
11
  APP_ID: '',
12
​
13
  // 使用微信测试号：公众号APP_SECRET
14
  APP_SECRET: '',
15
​
16
  PROVINCE: '',
17
  CITY: '',
18
​
19
  USERS: [
20
    {
21
      // 想要发送的人的名字
22
      name: '',
23
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
24
      id: '',
25
      // 使用微信测试号：你想对他发送的模板消息的模板ID
26
      useTemplateId: '',
27
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
28
      horoscopeDate: '',
29
      festivals: [
30
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
31
        {
32
          type: '*生日', name: '武林权', year: '2002', date: '03-22',
33
        },
34
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
35
        {
36
          type: '生日', name: '郭涛', year: '2002', date: '07-11',
37
        },
38
        {
39
          type: '节日', name: '相恋纪念日', year: '2021', date: '11-16',
40
        },
41
      ],
42
      // 我们在一起已经有xxxx天了的配置
43
      customizedDateList: [
44
        // 在一起的日子
45
        { keyword: 'love_day', date: '2021-11-16' },
46
        // 结婚纪念日
47
        //{ keyword: 'marry_day', date: '2022-09-09' },
48
      ],
49
    },
50
    {
51
      // 想要发送的人的名字
52
      name: '郭涛',
53
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
54
      id: 'oXqBw6W90IvU6xKlh649QlilQa4k',
55
      // 使用微信测试号：你想对他发送的模板消息的模板ID
56
      useTemplateId: 'DCiQxj0A_w9ZiZw4nqkdCsXB8KFAyDaWnmIQ9mvSq0Q',
57
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
58
      horoscopeDate: '3-22',
59
      festivals: [
60
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
61
        {
62
          type: '*生日', name: '武林权', year: '2002', date: '02-22',
63
        },
64
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
65
        {
66
          type: '生日', name: '郭涛', year: '2002', date: '09-31',
67
        },
68
        {

        {
          type: '生日', name: '郭涛', year: '2002', date: '07-11',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2021', date: '11-16',
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
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

