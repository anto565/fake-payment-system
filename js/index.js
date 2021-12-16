const app = new Vue({
    el: "#app",
    data: {
        message: "カードを動かさないで下さい カードを読み取り中. . .",
        seen: false
    },
    methods: {
        move() {
            const se = new Audio("sound/SUICA.mp3")
            se.play()

            this.seen = true

            this.seen = true

            setTimeout(() => {
                this.message = "カードを動かさないで下さい 読み取れました. . ."
            }, 7000)

            setTimeout(() => {
                this.message = "カードを動かさないで下さい サーバーと接続中. . ."
            }, 10000)

            setTimeout(() => {
                this.message = "カードを動かさないで下さい 完了. . ."
            }, 24000)

            setTimeout(() => {
                this.message = "カードを動かさないで下さい 決済中. . ."
            }, 27000)

            setTimeout(() => {
                this.message = "カードを動かさないで下さい 完了. . ."
            }, 32000)

            setTimeout(() => {
                location.href = "receipt.html"
            }, 36000)
        }

    }
})