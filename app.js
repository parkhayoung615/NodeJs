// install 을 해야만 함 (npm install express)
const express = require('express')
const nunjucks = require('nunjucks')
const bodyparser = require('body-parser')
const admin = require('./routes/admin')
const app = express()
const port = 3000

// 옵션만 잡아준 거임
nunjucks.configure('template', {
    autoescape : true,
    express : app
})

app.use(express.json()) // json 방식으로 파싱
app.use(bodyparser.urlencoded({extended:false})) // query-string 모듈 사용
app.use('/upload', express.static('upload'))
// http://localhost:3000/upload/download.jpg

// localhost:3000
app.get('/', (req, res)=> {
    res.send('hello express')
})

app.listen(port, ()=> {
    console.log('Express listening on port', port)
})// npm start

// 미들웨어란??? 사용자의 특정한 요구대로 만들어 제공하는 프로그램
function testMiddleware(req, res, next) {  // 미들웨어 생성
    console.log('첫번째 미들웨어')  // 미들웨어에서 처리를 원하는 동작
    // 등급확인 후 변수를 글로벌 변수로 만들어야 되....... (뷰 변수)
    app.locals.isGold = true
    next()  // 미들웨어를 벗어나 다음 영역 실행 (원래 경로로 가기 위해서)
}

function testMiddleware2(req, res, next) {
    console.log('두번째 미들웨어')
    next()
}

// 정말 중간이라서 미들웨어임? 대박이네
// 두번쨰 미들웨어를 거쳐서 갈 수도 있음
app.get('/', testMiddleware, testMiddleware2, (req, res) => {  // 미들웨어 동작 필요한 요청에 생성한 미들웨어 삽입
    res.send('hello express')
})

// localhost:3000/admin
app.use('/admin', admin)


// npm start
// nodemon은 인식하지 못함
// 그래서 package 를 바꿔야 해요


// js 는 js 대로
// html 은 html 대로
// 이런식으로 구조화 하는 것이 좋음
// 자신만의 코딩스타일은 좋지만 자폐적인 스타일은 ㅂㄹ