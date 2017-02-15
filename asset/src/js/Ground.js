const Element = require("./Element.js");

/**
 * 大地
 * @type {Ground}
 */
module.exports = class Ground extends Element {
    /**
     * パス
     * @returns {string}
     */
    static get PATH() {
        return "M0,170.7s178.11,28.21,385.46,0,254.34-3.73,364.66,0S920.7,148,1086.18,148,1280,165.6,1280,165.6V285H0Z";
    }

    /**
     * @override
     */
    addView() {
        this.addGround();
        this.addPattern();
        this.addShadow();
    }

    /**
     * 大地を描画する
     */
    addGround() {
        this.ground = this.paper.path(Ground.PATH)
            .attr({
                fill: "#3a9b00",
                opacity: 1,
                filter: this.getShadowFilter()
            });
    }

    /**
     * パターンを描画する
     */
    addPattern() {
        const ground = this.paper.path(Ground.PATH)
            .attr({
                fill: "#3a9b00",
                opacity: 1
            });
        const image = this.paper.image("/wp-content/themes/comouflage/asset/img/ground.png", 0, 0, this.width, this.height)
            .attr({
                mask: ground
            });
    }

    /**
     * 影を描画する
     */
    addShadow() {
        const time = Element.getTime();

        const a1 = Ground.getGroundShadowAlpha(time.hour);
        const a2 = Ground.getGroundShadowAlpha(time.hour + 1);
        const a = a1 + ((a2 - a1) / 60 * time.minute);

        this.shadow = this.paper.path(Ground.PATH)
            .attr({
                fill: "rgba(0, 0, 0, " + a + ")"
            });
    }

    /**
     * 大地の色を取得する
     * @param {int} hour
     * @returns {number}
     */
    static getGroundShadowAlpha(hour) {
        const colors = [
            0.7, // 0
            0.7,
            0.7,
            0.7,
            0.7,
            0.7,
            0.5, // 6
            0.3,
            0.1,
            0,
            0,
            0,
            0, // 12
            0,
            0,
            0,
            0.1,
            0.3,
            0.5, // 18
            0.7,
            0.7,
            0.7,
            0.7,
            0.7,
            0.7, // 0
        ];

        return colors[hour];
    }
};
