const Element = require("./Element.js");

module.exports = class Sky extends Element {
    /**
     * @override
     */
    addView() {
        this.addSky();
        this.addPattern();
    }

    /**
     * 月を描画する
     */
    addSky() {
        this.sky = this.paper.rect(0, 0, this.width, this.height)
            .attr({
                fill: this.paper.gradient("l(0, 0, 0, 1)" + Sky.getTopSkyColor() + "-" + Sky.getBottomSkyColor())
            });

        setInterval(() => {
            this.sky.attr({
                fill: this.paper.gradient("l(0, 0, 0, 1)" + Sky.getTopSkyColor() + "-" + Sky.getBottomSkyColor())
            });
        }, 60000);
    }

    /**
     * パターンを描画する
     */
    addPattern() {
        const sky = this.paper.rect(0, 0, this.width, this.height)
            .attr({
                fill: "#333",
                opacity: 1
            });

        const image = this.paper.image("/wp-content/themes/comouflage/asset/img/sky.png", 0, 0, this.width, this.height)
            .attr({
                mask: sky
            });
    }

    /**
     * 空の上部の色を取得する
     * @returns {string}
     */
    static getTopSkyColor() {
        const time = Element.getTime();

        const c1 = Sky.getSkyTopColors(time.hour);
        const c2 = Sky.getSkyTopColors(time.hour + 1);

        const r = c1[0] + ((c2[0] - c1[0]) / 60 * time.minute);
        const g = c1[1] + ((c2[1] - c1[1]) / 60 * time.minute);
        const b = c1[2] + ((c2[2] - c1[2]) / 60 * time.minute);

        return Element.getRgbaString(r, g, b);
    }

    /**
     * 空の下部の色を取得する
     * @returns {string}
     */
    static getBottomSkyColor() {
        const time = Element.getTime();

        const c1 = Sky.getSkyBottomColors(time.hour);
        const c2 = Sky.getSkyBottomColors(time.hour + 1);

        const r = c1[0] + ((c2[0] - c1[0]) / 60 * time.minute);
        const g = c1[1] + ((c2[1] - c1[1]) / 60 * time.minute);
        const b = c1[2] + ((c2[2] - c1[2]) / 60 * time.minute);

        return Element.getRgbaString(r, g, b);
    }

    /**
     * 空の上部の色を取得する
     * @param {int} hour
     * @returns {Array}
     */
    static getSkyTopColors(hour) {
        const colors = [
            [64, 80, 111], // 0
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [204, 238, 255], // 6
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255], // 12
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [255, 232, 186],
            [255, 225, 131], // 18
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111], // 0
        ];

        return colors[hour];
    }

    /**
     * 空の上部の色を取得する
     * @param {int} hour
     * @returns {Array}
     */
    static getSkyBottomColors(hour) {
        const colors = [
            [64, 80, 111], // 0
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [204, 238, 255], // 6
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255], // 12
            [204, 238, 255],
            [204, 238, 255],
            [204, 238, 255],
            [229, 247, 225],
            [255, 213, 145],
            [255, 225, 131], // 18
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111],
            [64, 80, 111], // 0
        ];

        return colors[hour];
    }
};
