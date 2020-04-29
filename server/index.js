// 项目管理包
// $npm init -y 
// 后端内容node.js
// $cnpm i express -S

// 安装依赖包
// cnpm i

// 启动服务器
// $node index.js

var express = require("express");
var app = express();

// 创建静态目录./dist,默认访问index.html文件
app.use(express.static("./dist"));


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// req 客户端向服务器数据响应
// res 服务器向客户端数据响应
// get() 数据请求get请求post请求
// post()
// "/" 路由操作
// http://127.0.0.1:3000/
app.get("/",function(req,res){
    // 返回字符串 send()方法
    res.send("你好");
})

// 请求数据接口APi，获取数据
// http://127.0.0.1:3000/goodsApi
app.get("/goodsApi",function(req,res){
    // 返回对象 json()方法
    res.json({name:"商品名称",price:"22",num:1})
})
// 在服务器中定义变量，重启服务器会被初始化
var userList = [];//全局数据变量
// 先注册用户，在登陆用户

// 登陆接口
// http://127.0.0.1:3000/login
app.get("/login",function(req,res){
    console.log(req.query);
    let {username,password} = req.query;
    if(username == "" && password == ""){
        return; //终止路由操作
    }

    // 1.通过前端传递登陆信息
    // 2.使用前台登陆用户名，在后台中userList匹配到相同用户名密码，找到为登陆成功，找不到登陆失败
    
    // 使用前台用户名找userlist对象数据，对比密码
    let data = userList.find(item=>item.username == username);//返回对象
    console.log("返回对象",data);
    // 判断密码是否相同
    if( data && data.password == password){
        res.send("200");
    }else{
        res.send("201");
    }

})

// 注册接口
// http://127.0.0.1:3000/register
// http://127.0.0.1:3000/register?username=zhangsan&password=123123&password2=123123
app.get("/register",function(req,res){
    // req.query获取get请求传递数据
    console.log(req.query);
    // 判断数据
    let {username,password,password2} = req.query;
    if(username != "" && password == password2 && password != ""){
        console.log("注册成功");
        userList.push({username,password});
        res.send("200");
    }else{
        res.send("201");
    }
})


let result = [
    {
        id:1,
        name:"小米10",
        price:'4699',
        content:"骁龙865处理器 / 1亿像素8K电影相机 / 双模5G / 新一代LPDDR5内存 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配Wi-Fi 6 / 超强VC液冷散热 / 30W极速闪充+30W无线闪充+10W无线反充 / 4780mAh大电量 / 多功能NFC",
        image:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494501.22494385.jpg",
        imgs:[
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494493.13637506.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494494.07981314.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494497.07636691.jpg"
        ],
        categroyId:0
    },
    {
        id:2,
        name:"Redmi K30",
        price:'1699',
        content:"120Hz高帧率流速屏 / 索尼6400万前后六摄 / 6.67''小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
        image:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575881724.64226888.jpg",
        imgs:[
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494493.13637506.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494494.07981314.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494497.07636691.jpg"
        ],
        categroyId:1
    },
    {
        id:3,
        name:"Redmi K30 5G6664444",
        price:'2599',
        content:"120Hz高帧率流速屏 / 索尼6400万前后六摄 / 6.67''小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
        image:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882086.62224334.jpg",
        imgs:[
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494493.13637506.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494494.07981314.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494497.07636691.jpg"
        ],
        categroyId:2
    },
    {
        id:4,
        name:"Redmi K30 5G6663333",
        price:'2599',
        content:"120Hz高帧率流速屏 / 索尼6400万前后六摄 / 6.67''小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
        image:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882086.62224334.jpg",
        imgs:[
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494493.13637506.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494494.07981314.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494497.07636691.jpg"
        ],
        categroyId:3
    },
    {
        id:5,
        name:"Redmi K30 5G666222",
        price:'2599',
        content:"120Hz高帧率流速屏 / 索尼6400万前后六摄 / 6.67''小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
        image:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882086.62224334.jpg",
        imgs:[
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494493.13637506.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494494.07981314.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494497.07636691.jpg"
        ],
        categroyId:4
    },
    {
        id:6,
        name:"Redmi K30 5G66611111",
        price:'2599',
        content:"120Hz高帧率流速屏 / 索尼6400万前后六摄 / 6.67''小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
        image:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882086.62224334.jpg",
        imgs:[
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494493.13637506.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494494.07981314.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494497.07636691.jpg"
        ],
        categroyId:5
    },
];
// 商品数据接口
// http://127.0.0.1:3000/goodsList
app.get("/goodsList",(req,res)=>{
    res.json({code:200,result});
})

// 通过id获取商品
// http://127.0.0.1:3000/goodsList/1
app.get("/goodsList/:id",(req,res)=>{
    let data = result.find(item=>item.id == req.params.id);
    res.json({code:200,result:data});
})


// 商品数据接口
// http://127.0.0.1:3000/goods
app.get("/goods",(req,res)=>{
    let result=[{
        id: 1,
        goodsName: "口红",
        goodsImage: "../../img/y6.jpg",
        goodsPrice: "420.00"
      },
        {
          id: 2,
          goodsName: "新款手表",
          goodsImage: "../../img/y3.jpg",
          goodsPrice: "520.00"
        },
        {
          id: 3,
          goodsName: "新款鞋子",
          goodsImage: "../../img/y5.jpg",
          goodsPrice: "680.00"
        },
        {
          id: 4,
          goodsName: "春季新款外套",
          goodsImage: "../../img/y1.jpg",
          goodsPrice: "100.00"
        },]
    res.json({code:200,result});
})

// 通过id获取商品
// http://127.0.0.1:3000/goods/1
app.get("/goods/:id",(req,res)=>{
    let result=[{
        id: 1,
        goodsName: "口红",
        goodsImage: "../../img/y6.jpg",
        goodsImgs: [
            "../../img/y6.jpg",
            "../../img/y6.jpg",
            "../../img/y6.jpg",
        ],
        goodsPrice: "100",
        goodsPriceOld: "320",
        goodsDetails: "../../image/IMG_0466.JPG"
      },
      {
        id: 2,
        goodsName: "配饰",
        goodsImage: "../../img/y3.jpg",
        goodsImgs: [
            "../../img/y3.jpg",
            "../../img/y3.jpg",
            "../../img/y3.jpg",
        ],
        goodsPrice: "100",
        goodsPriceOld: "320",
        goodsDetails: "../../image/IMG_0466.JPG"
      },
      {
        id: 3,
        goodsName: "鞋子",
        goodsImage:  "../../img/y5.jpg",
        goodsImgs: [
            "../../img/y5.jpg",
            "../../img/y5.jpg",
            "../../img/y5.jpg",
        ],
        goodsPrice: "100",
        goodsPriceOld: "320",
        goodsDetails: "../../image/IMG_0466.JPG"
      },
      {
        id: 4,
        goodsName: "外套",
        goodsImage:  "../../img/y1.jpg",
        goodsImgs: [
            "../../img/y1.jpg",
            "../../img/y1.jpg",
            "../../img/y1.jpg",
        ],
        goodsPrice: "100",
        goodsPriceOld: "320",
        goodsDetails: "../../image/IMG_0466.JPG"
      },
    ];
    let data = result.find(item=>item.id == req.params.id);
    res.json({code:200,result:data});
})



// 分类接口
app.get("/category",(req,res)=>{
    var result = [
        {
            id:0,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"签到"
        },
        {
            id:1,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"附近"
        },
        {
            id:2,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"游展"
        },
        {
            id:3,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"福利"
        },
        {
            id:4,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"玩乐"
        },
        {
            id:5,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"周边"
        },
        {
            id:6,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"体育"
        },
        {
            id:7,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"亲子"
        }
    ]
    res.json({code:200,result})
})






app.listen(3000,()=>{
    console.log("请访问:http://127.0.0.1:3000");
})