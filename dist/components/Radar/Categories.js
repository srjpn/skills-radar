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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { blips } from "../../blips";
import "./categories.css";
export function Categories(_a) {
    var selected = _a.selected, setSelected = _a.setSelected;
    return (_jsx(_Fragment, { children: Object.entries(categoryEntries).map(function (_a) {
            var category = _a[0], entries = _a[1];
            return (_jsxs("div", __assign({ className: "category ".concat(getCategoryId(category)) }, { children: [_jsx("h3", { children: category }), _jsx("ul", { children: entries.map(function (entry) {
                            return (_jsx("li", __assign({ onMouseOver: function () { return setSelected(entry.originId); }, className: selected === entry.originId ? "selected" : "" }, { children: entry.label }), entry.id));
                        }) })] }), category));
        }) }));
}
function getCategoryId(category) {
    var categoryMap = {
        Tools: "tools",
        "Languages & Frameworks": "languages-frameworks",
        Techniques: "techniques",
        Platforms: "platforms",
    };
    return categoryMap[category];
}
var byCategory = function (category) {
    return blips.filter(function (entry) { return entry.category === category; });
};
var categoryEntries = {
    Tools: byCategory("Tools"),
    "Languages & Frameworks": byCategory("Languages & Frameworks"),
    Techniques: byCategory("Techniques"),
    Platforms: byCategory("Platforms"),
};
