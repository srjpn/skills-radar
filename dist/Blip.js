import { status, categories } from "./types";
import { rings } from "./constants";
import { polar, cartesian, boundedBox, boundedRing, } from "./math";
var margin = 20;
var Blip = /** @class */ (function () {
    function Blip(entry) {
        this.entry = entry;
        this.x = 0;
        this.y = 0;
        var quadrant = categories.indexOf(entry.category);
        var ring = status.indexOf(entry.status);
        this.polarMin = {
            t: quadrants[quadrant].radialMin * Math.PI,
            r: ring === 0 ? 30 : rings[ring - 1].radius,
        };
        this.polarMax = {
            t: quadrants[quadrant].radialMax * Math.PI,
            r: rings[ring].radius,
        };
        this.cartesianMin = {
            x: margin * quadrants[quadrant].factorX,
            y: margin * quadrants[quadrant].factorY,
        };
        this.cartesianMax = {
            x: rings[3].radius * quadrants[quadrant].factorX,
            y: rings[3].radius * quadrants[quadrant].factorY,
        };
        var init = cartesian({
            t: randomBetween(this.polarMin.t, this.polarMax.t),
            r: normalBetween(this.polarMin.r, this.polarMax.r),
        });
        this.position(init);
        this.clip();
    }
    Blip.prototype.position = function (point) {
        this.x = point.x;
        this.y = point.y;
    };
    Blip.prototype.translate = function () {
        return "translate(".concat(this.x, "px, ").concat(this.y, "px)");
    };
    Blip.prototype.update = function (d) {
        this.clip();
        return this;
    };
    Blip.prototype.clip = function () {
        var box = boundedBox(this, this.cartesianMin, this.cartesianMax);
        var point = boundedRing(polar(box), this.polarMin.r + margin, this.polarMax.r - margin);
        this.position(cartesian(point));
    };
    Object.defineProperty(Blip.prototype, "label", {
        get: function () {
            return this.entry.label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "originId", {
        get: function () {
            return this.entry.originId;
        },
        enumerable: false,
        configurable: true
    });
    Blip.prototype.isSelected = function (selected) {
        return this.originId === selected;
    };
    Object.defineProperty(Blip.prototype, "id", {
        get: function () {
            return this.entry.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "icon", {
        get: function () {
            return this.entry.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "status", {
        get: function () {
            return this.entry.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blip.prototype, "category", {
        get: function () {
            return this.entry.category;
        },
        enumerable: false,
        configurable: true
    });
    return Blip;
}());
export { Blip };
// Plato's number
var seed = 5040;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
function randomBetween(min, max) {
    return min + random() * (max - min);
}
function normalBetween(min, max) {
    return min + (random() + random()) * 0.5 * (max - min);
}
export var quadrants = [
    { radialMin: 0, radialMax: 0.5, factorX: 1, factorY: 1 },
    { radialMin: 0.5, radialMax: 1, factorX: -1, factorY: 1 },
    { radialMin: -1, radialMax: -0.5, factorX: -1, factorY: -1 },
    { radialMin: -0.5, radialMax: 0, factorX: 1, factorY: -1 },
];
