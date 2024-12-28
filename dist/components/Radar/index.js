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
import { useState } from "react";
import { Categories } from "./Categories";
import { Blips } from "./Blips";
import { SVGGrid } from "./SVGGrid";
import { Blip } from "../../Blip";
import "./radar.css";
export function Radar(_a) {
    var entries = _a.entries;
    var _b = useState(), selected = _b[0], setSelected = _b[1];
    var blips = entries.map(function (entry) { return new Blip(entry); });
    return (_jsxs("div", __assign({ className: "radar" }, { children: [_jsx(Categories, { selected: selected, setSelected: setSelected }), _jsx(Blips, { selected: selected, setSelected: setSelected, entries: blips }), _jsx(SVGGrid, {})] })));
}
