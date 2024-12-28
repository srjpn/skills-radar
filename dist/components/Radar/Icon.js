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
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import "./icon.css";
var basePath = "".concat(process.env.PUBLIC_URL, "/images/");
export function Icon(_a) {
    var blip = _a.blip, tooltip = _a.tooltip;
    var _b = blip.icon, type = _b[0], str = _b[1];
    switch (type) {
        case "none":
            return _jsx(_Fragment, {});
        case "emoji":
            return _jsx("div", __assign({ className: "icon emoji ".concat(tooltip && "in") }, { children: str }));
        case "data":
        case "url":
            return (_jsx("div", __assign({ className: "icon image ".concat(tooltip && "in") }, { children: _jsx("div", { style: {
                        backgroundImage: "url(".concat(type === "url" ? basePath : "").concat(str, ")"),
                    } }) })));
    }
}
