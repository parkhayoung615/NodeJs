export class Keyboard {
    #switchEl
    #fontSelectEl
    #containerEl
    #keyboardEl
    #inputGroupEl
    #inputEl
    #keyPress = false
    #mouseDown = false

    constructor() {
        this.#assignElement()
        this.#addEvent()
        
    }

    #assignElement() {
        // Element 정리 ~,~
        this.#containerEl = document.getElementById('container')
        this.#switchEl = this.#containerEl.querySelector('#switch')
        this.#fontSelectEl = this.#containerEl.querySelector('#font')
        this.#keyboardEl = this.#containerEl.querySelector('#keyboard')
        this.#inputGroupEl = this.#containerEl.querySelector('#input-group')
        this.#inputEl = this.#inputGroupEl.querySelector('#input')
    }

    #addEvent() {
        // 만든 함수 실행 시키는 함수 ~,~
        this.#inputEl.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, '')
        })
        this.#switchEl.addEventListener('change', this.#onChangeTheme)
        this.#fontSelectEl.addEventListener('change', this.#onChangeFont)
        this.#keyboardEl.addEventListener('mousedown', (e) => {
            if(this.#keyPress) return
            this.#mouseDown = true
            e.target.closest('div.key')?.classList.add('active')
        })
        this.#keyboardEl.addEventListener('mouseup', (e) => {

            const keyEl = e.target.closest('div.key')
            if(this.#keyPress) return
            this.#mouseDown = false
            const isActive = !!keyEl?.classList.contains('active')
            // undifined는 isActive가 false로 처리되게
            const val = keyEl?.dataset.val
            if(isActive && !!val && val !== 'Space' && val !== 'Backspace'){
                this.#inputEl.value += val
            }
            // undifined에 느낌표 두 개 박으면 false됨 그렇다네요
            if(isActive && val === 'Space') {
                this.#inputEl.value += ' '
            }
            if(isActive && val === 'Backspace') {
                this.#inputEl.value = this.#inputEl.value.slice(0,-1)
            }

            this.#keyboardEl.querySelector('.active')?.classList.remove('active')

        })
        document.addEventListener('keydown', (e) => {
            if(this.#mouseDown) return
            this.#keyPress = true
            this.#inputGroupEl.classList.toggle(
                'error',
                e.key==='Process'
            )
            this.#keyboardEl.querySelector(`[data-code=${e.code}]`)?.classList.add('active') // ?를 통해서 키를 누른지 여부를 알 수 있음(null-safety)
        })
        document.addEventListener('keyup', (e) => {
            if(this.#mouseDown) return
            this.#keyPress = false
            this.#keyboardEl.querySelector(`[data-code=${e.code}]`)?.classList.remove('active')
        })
    }


    // 함수를 만들어 봅시다
    #onChangeTheme(e) {
        document.documentElement.setAttribute(
            'theme',
            e.target.checked ? 'dark-mode' : ''
        )
    }

    #onChangeFont(e) {
        document.body.style.fontFamily = e.target.value
    }
}