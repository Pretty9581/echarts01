var ws = require("nodejs-websocket");
console.log("开始建立连接...")

function setData() {
    let data =  JSON.stringify(
        {
            code: 200,
            message: "success",
            result: [
                Math.floor(Math.random() * 40) + 1,
                Math.floor(Math.random() * 40) + 1,
                Math.floor(Math.random() * 40) + 1,
                Math.floor(Math.random() * 40) + 1,
                Math.floor(Math.random() * 40) + 1,
                Math.floor(Math.random() * 40) + 1
            ]
        }
    )
    return data;
}

var server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        setInterval(()=>{
             conn.send(setData())
        },2000);
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("出现异常")
    });
}).listen(8001)

