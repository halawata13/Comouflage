const Element = require("./Element.js");

module.exports = class Moon extends Element {
    /**
     * @override
     */
    addView() {
        this.addMoon();
    }

    /**
     * 月を描画する
     */
    addMoon() {
        const pos = this.getMoonPos();

        this.moon = this.paper.circle(pos[0], pos[1], 32)
            .attr({
                fill: "#ffff00"
            });

        setInterval(() => {
            const pos = this.getMoonPos();

            this.moon.attr({
                cx: pos[0],
                cy: pos[1]
            });
        }, 60000);
    }

    /**
     * 月の位置を描画する
     * @returns {Array}
     */
    getMoonPos() {
        const time = Element.getTime();
        const hour1 = time.hour < 12 ? time.hour + 6 : time.hour - 18;
        const hour2 = time.hour + 1 < 12 ? time.hour + 1 + 6 : time.hour + 1 - 18;

        const x1 = Math.round(this.width / 12 * (hour1));
        const y1 = Math.round(this.height / 9 * Math.abs(6 - hour1));
        const x2 = Math.round(this.width / 12 * (hour2));
        const y2 = Math.round(this.height / 9 * Math.abs(6 - hour2));

        const x = x1 + ((x2 - x1) / 60 * time.minute);
        const y = y1 + ((y2 - y1) / 60 * time.minute);

        return [x, y];
    }
};
