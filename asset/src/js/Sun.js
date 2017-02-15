const Element = require("./Element.js");

module.exports = class Sun extends Element {
    /**
     * @override
     */
    addView() {
        this.addSun();
    }

    /**
     * 太陽を描画する
     */
    addSun() {
        const pos = this.getSunPos();

        this.sun = this.paper.circle(pos[0], pos[1], 32)
            .attr({
                fill: "#ffffb3",
                filter: this.getShadowFilter()
            });

        setInterval(() => {
            const pos = this.getSunPos();

            this.sun.attr({
                cx: pos[0],
                cy: pos[1]
            });
        }, 60000);
    }

    /**
     * 太陽の座標を取得する
     * @returns {Array}
     */
    getSunPos() {
        const time = Element.getTime();

        const x1 = Math.round(this.width / 12 * (time.hour - 6));
        const y1 = Math.round(this.height / 9 * Math.abs(12 - time.hour));
        const x2 = Math.round(this.width / 12 * (time.hour + 1 - 6));
        const y2 = Math.round(this.height / 9 * Math.abs(time.hour + 1 - 12));

        const x = x1 + ((x2 - x1) / 60 * time.minute);
        const y = y1 + ((y2 - y1) / 60 * time.minute);

        return [x, y];
    }
};
