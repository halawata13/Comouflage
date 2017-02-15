const Element = require("./Element.js");

module.exports = class Cloud extends Element {
    /**
     * @override
     */
    addView() {
        this.generate_interval = 3000;
        this.addCloud();
    }

    addCloud() {
        setInterval(() => {
            if (!Element.isDoing(30)) {
                return;
            }

            const time = Element.getTime();

            const a1 = Cloud.getCloudShadowAlpha(time.hour);
            const a2 = Cloud.getCloudShadowAlpha(time.hour + 1);
            const a = a1 + ((a2 - a1) / 60 * time.minute);

            const y = Element.getRandom(0, this.height / 3 * 2);
            const w = Element.getRandom(50, 130);
            const h = Element.getRandom(15, 30);
            const d = (this.width + Element.getRandom(0, 500)) * 100;

            const cloud = this.paper.ellipse(-200, y, w, h)
                .attr({
                    fill: "rgba(255, 255, 255, " + a + ")",
                    filter: this.getShadowFilter()
                })
                .animate({
                    cx: this.width + 4000
                }, d, mina.linear, function() {
                    cloud.remove();
                });
        }, this.generate_interval);
    }

    /**
     * 雲の色を取得する
     * @param {int} hour
     * @returns {number}
     */
    static getCloudShadowAlpha(hour) {
        const colors = [
            0.1, // 0
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.5, // 6
            0.9,
            0.9,
            0.9,
            0.9,
            0.9,
            0.9, // 12
            0.9,
            0.9,
            0.9,
            0.9,
            0.9,
            0.5, // 18
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1, // 0
        ];

        return colors[hour];
    }
};
