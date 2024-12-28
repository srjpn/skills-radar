var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { status } from "../../types";
import { rings } from "../../constants";
var height = 810;
export function SVGGrid() {
    var width = Math.max(window.innerWidth, 1400);
    return (_jsx("svg", __assign({ width: width, height: height, style: { backgroundColor: "white" } }, { children: _jsxs("g", __assign({ style: { backgroundColor: "green" }, transform: "translate(".concat(width / 2, ", ").concat(height / 2, ")") }, { children: [_jsx("line", { x1: 0, y1: -380, x2: 0, y2: 380, stroke: "#f2f2ff", strokeWidth: 2 }), _jsx("line", { x1: -width / 2, y1: 0, x2: width / 2, y2: 0, stroke: "#f2f2ff", strokeWidth: 2 }), status.map(function (status, i) {
                    return (_jsx("g", { children: _jsx("circle", { cx: 0, cy: 0, r: rings[i].radius, fill: "none", stroke: "#dde", strokeWidth: 4 }) }, status));
                })] })) })));
}
