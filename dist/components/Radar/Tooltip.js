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
import { Icon } from "./Icon";
import "./tooltip.css";
export function Tooltip(_a) {
    var blip = _a.blip;
    return (_jsxs("div", __assign({ className: "tooltip" }, { children: [_jsxs("div", __assign({ className: "tooltip-title" }, { children: [_jsx(Icon, { tooltip: true, blip: blip }), _jsx("b", { children: blip.label })] })), _jsx("div", __assign({ className: "tooltip-statusWrapper" }, { children: _jsx("span", __assign({ className: "tooltip-status" }, { children: blip.status })) })), _jsx("div", __assign({ className: "tooltip-category" }, { children: blip.category }))] })));
}
