const Weather = require("./Weather");
const Sky = require("./Sky.js");
const Sun = require("./Sun.js");
const Moon = require("./Moon.js");
const Cloud = require("./Cloud.js");
const Ground = require("./Ground.js");
const Whale = require("./Whale.js");

/**
 * 世界
 * @type {World}
 */
module.exports = class World {
    /**
     * 世界を構築する
     *
     * @param {string} selector
     * @param {number} width
     * @param {number} height
     */
    constructor(selector, width, height) {
        this.width = width;
        this.height = height;

        const weather = new Weather();

        const sky = new Sky(weather, this.width, this.height);
        const sun = new Sun(weather, this.width, this.height);
        const moon = new Moon(weather, this.width, this.height);
        const cloud = new Cloud(weather, this.width, this.height);
        const ground = new Ground(weather, this.width, this.height);
        const whale = new Whale(weather, this.width, this.height);

        const container = document.querySelector(selector);
        sky.getPaper().appendTo(container).addClass('l-header__sky');
        sun.getPaper().appendTo(container).addClass('l-header__sun');
        moon.getPaper().appendTo(container).addClass('l-header__moon');
        cloud.getPaper().appendTo(container).addClass('l-header__cloud');
        ground.getPaper().appendTo(container).addClass('l-header__ground');
        whale.getPaper().appendTo(container).addClass('l-header__whale');

        whale.addMessage('.l-header__whale', '#whale-message');
    }
};
