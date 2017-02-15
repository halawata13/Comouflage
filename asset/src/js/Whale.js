const Element = require("./Element.js");

/**
 * 鯨
 * @type {Ground}
 */
module.exports = class Whale extends Element {
    /**
     * @returns {string}
     */
    static get BODY() {
        return "M175.71,179c6,5.67,9.6,11,9.28,16.42-6.58.74-17.48,2.57-22.53,5.47-6.7,3.85-19.66,6-26.94,6.83-4-.25-7.7-.59-10.46-1-8.61-1.35-11.48-6.42-12.75-12s1.25-8.47.21-16.28c-1-7.42-7.77-10-15.56-7.17.87-4.34,7.27-7.09,15.2-4.39,1.36-6.83,7.14-8.57,13.7-6.2-9.64,4.9-9.62,11.86-8.3,17.73,2.13,9.43,3.28,10.65,9.95,11.24s10.12-2.65,16.72-10.75C150.45,171.26,169.09,172.78,175.71,179Z";
    }

    /**
     * @returns {string}
     */
    static get CHIN() {
        return "M185,195.45a11.73,11.73,0,0,1-.5,2.75c-2.69,8.82-12.16,8.87-22.8,9.63a220.77,220.77,0,0,1-26.18-.07c7.29-.85,20.25-3,26.94-6.83C167.51,198,178.41,196.19,185,195.45Z";
    }

    /**
     * @returns {string}
     */
    static get EYE() {
        return "M168.79,190c0,2-3,3-3,0A1.5,1.5,0,0,1,168.79,190Z";
    }

    /**
     * @returns {string}
     */
    static get HAND1() {
        return "M143.23,161.89c5.91-5.39,13.83-3.69,14.22,6.55A14.14,14.14,0,0,0,143.23,161.89Z";
    }

    /**
     * @returns {string}
     */
    static get AHOGE1() {
        return "M152.56,201.57c0,4.49-3.27,18.26-14.66,15.69-3.9-.88,6.5-14.93,7.5-16.88";
    }

    /**
     * @returns {string}
     */
    static get HAND2() {
        return "M176.55,161c-6.82-4.67-14.27-1.17-13.62,7.29C166.08,164.49,169.55,161.1,176.55,161Z";
    }

    /**
     * @returns {string}
     */
    static get AHOGE2() {
        return "M152.56,201.83c0,5.53-12.07,15.49-19.44,13.3-3.89-1.15,8.62-13.25,12.28-14.77";
    }

    /**
     * @override
     */
    addView() {
        this.addWhale();
    }

    /**
     * 鯨を描画する
     */
    addWhale() {
        const shadow = this.getShadowFilter();

        const body = this.paper.path(Whale.BODY).attr({ fill: '#494168', filter: shadow });
        const chin = this.paper.path(Whale.CHIN).attr({ fill: '#fff', filter: shadow });
        const eye = this.paper.path(Whale.EYE).attr({ fill: '#fff', filter: shadow });
        const hand1 = this.paper.path(Whale.HAND1).attr({ fill: '#494168', filter: shadow });
        const ahoge1 = this.paper.path(Whale.AHOGE1).attr({ fill: '#494168', filter: shadow });
        const hand2 = this.paper.path(Whale.HAND2).attr({ fill: '#494168', filter: shadow, opacity: 0 });
        const ahoge2 = this.paper.path(Whale.AHOGE2).attr({ fill: '#494168', filter: shadow, opacity: 0 });

        setInterval(function() {
            hand1.attr({
                opacity: 1
            });
            ahoge1.attr({
                opacity: 1
            });
            hand2.attr({
                opacity: 0
            });
            ahoge2.attr({
                opacity: 0
            });
        }, 2000);

        setTimeout(function() {
            setInterval(function() {
                hand1.attr({
                    opacity: 0
                });
                ahoge1.attr({
                    opacity: 0
                });
                hand2.attr({
                    opacity: 1
                });
                ahoge2.attr({
                    opacity: 1
                });
            }, 2000);
        }, 1000);
    }

    /**
     * メッセージを描画する
     * @param {string} targetSelector
     * @param {string} msgSelector
     */
    addMessage(targetSelector, msgSelector) {
        jQuery(targetSelector).on('click', function() {
            if (jQuery(msgSelector).css('display') == 'none') {
                var date = Element.getTime();
                jQuery(msgSelector).text(date.year + '/' + date.month + '/' + date.date + ' ' + date.hour + ':' + ("00" + date.minute).substr(-2));
                jQuery(msgSelector).show();
            } else {
                jQuery(msgSelector).hide();
            }
        });

        var date = Element.getTime();
        jQuery(msgSelector).text(date.year + '/' + date.month + '/' + date.date + ' ' + date.hour + ':' + ("00" + date.minute).substr(-2));
    }
};
