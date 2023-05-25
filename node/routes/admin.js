// localhost:3000/admin
// localhost:3000/board/write
// localhost:3000/board/modify
// localhost:3000/sns

// 별도로 파일로 만들어서 라우팅 처리


const express = require('express')
const router = express.Router()

// localhost:3000/admin
// admin으로만 접속하면 send 안에 있는 글자가 보임
router.get('/', (req, res) => {
    res.send('admin 이후 url')
})

// js 오타 고치는 확장 프로그램 있음!!

// 문서 열기 전
// 템플릿 열고 렌더링 후 문서 여는 과정


// localhost:3000/admin/products
// 이걸 통해서 html 문서의 message 부분에 내가 원하는 문구를 띄울 수 있게 됨
router.get('/products', (req, res) => {
    // res.send('admin products')
    // 뷰 엔진을 찾게 됨
    // 너무 어려우면 주말에 JS 강의 듣는 겸
    // 야크 문서 정복하면서 복습하는 것도 낫베드인 듯 싶습니당

    // node123
    res.render('admin/products.html') // 위랑 같은 거임요
    // res.render('admin/products.html', {
    //     message : 'hellooooooooooooooooooooooooooo'
    // })
})

router.get('/write', (req, res) => {
    res.render('admin/write.html')
})

router.post('/write', (req, res) => {
    res.send(req.body)
    // res.send(req.price)
})

module.exports = router