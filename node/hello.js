// console.log('Hello Node.js')
// 터미널에 이걸 작성해보세요
// node ./hello.js
// node ./(파일 이름)

// 내보내기
// module.export.변수 = 데이터
// module.export.apple = 'red'

// 불러오기
// 변수 = require('js파일명)

//  "yydh" : "npx node index.js"
//npm run (언어)
// 다른 라이브러리를 받게 되는 어쩌구
// npm listall express

// 다운 받는 어쩌구
// npm init -y

const http = require('http')
// 외부 라이브러리 가져오기
http.createServer((Request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'})
    response.write('Hello yydh Server!')
    response.end()
    // 순수 노드로 웹서버 구축 성공~!
}).listen(3000) // 포트 번호
// Ctrl + c - 리눅스 명령어 (서버 닫기)

// npm install -g
// 모든 곳에 라이브러리를 깔 거야

// nodemon 깔면 되...
// nodemon app.js <- 명령어

// cmd에서 그냥 우클릭 하면 붙여넣기됨 ㅁㅊ
// shift + insert key

// cd C:\Users\user\Desktop\Node << 이런식으로 하고
// nodemon 파일명 <<< 이렇게 해주면 됨