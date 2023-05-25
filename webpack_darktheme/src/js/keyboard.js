export class Keyboard {
    #switchEl
    #fontSelectEl
    #containerEl
    #keyboardEl

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
    }

    #addEvent() {
        // 만든 함수 실행 시키는 함수 ~,~
        this.#switchEl.addEventListener('change', this.#onChangeTheme)
        this.#fontSelectEl.addEventListener('change', this.#onChangeFont)
        document.addEventListener('keydown', (e) => {
            this.#keyboardEl.querySelector(`[data-code=${e.code}]`)?.classList.add('active') // ?를 통해서 키를 누른지 여부를 알 수 있음(null-safety)
        })
        document.addEventListener('keyup', (e) => {
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