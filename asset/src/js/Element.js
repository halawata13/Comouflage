module.exports = class Element {
    /**
     * @param {Weather} weather
     * @param {number} width
     * @param {number} height
     */
    constructor(weather, width, height) {
        this.weather = weather;
        this.width = width;
        this.height = height;
        this.paper = Snap(this.width, this.height).remove();

        this.addView()
    }

    /**
     * @abstract
     */
    addView() {
    }

    /**
     * @returns {Snap}
     */
    getPaper() {
        return this.paper;
    }

    /**
     * 共通の影フィルターを取得する
     * @returns {*}
     */
    getShadowFilter() {
        return this.paper.filter(Snap.filter.shadow(0, 0, 2, "#000", 0.1));
    }

    /**
     * percent% の確率で true を返す
     * @param {number} percent
     * @returns {boolean}
     */
    static isDoing(percent) {
        return (Math.floor(Math.random() * 100) + 1) <= percent;
    }

    /**
     * min 以上 max 以下の整数を返す
     * @param {number} min
     * @param {number} max
     * @returns {*}
     */
    static getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * 現在時刻を取得する
     * @returns {{hour: number, minute: number}}
     */
    static getTime() {
        const date = new Date();

        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            //hour: 0,
            //minute: 50,
            second: date.getSeconds()
        }
    }

    /**
     * rgba() 書式文字列を返す
     * @param {string} r
     * @param {string} g
     * @param {string} b
     * @param {string} a
     * @returns {string}
     */
    static getRgbaString(r, g, b, a = "1.0") {
        return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    }
};
