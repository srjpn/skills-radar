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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import * as d3 from "d3";
import { Tooltip } from "./Tooltip";
import { Icon } from "./Icon";
import "./blips.css";
export function Blips(_a) {
    var selected = _a.selected, setSelected = _a.setSelected, entries = _a.entries;
    var animatedBlips = useAnimatedBlips(entries);
    return (_jsx("div", __assign({ className: "blips" }, { children: animatedBlips.map(function (blip, i) {
            return (_jsx("div", __assign({ className: "blip ".concat(getStatusId(blip.status), " ").concat(selected === blip.originId ? "selected" : ""), onMouseOver: function () { return setSelected(blip.originId); }, style: { transform: blip.translate() } }, { children: blip.isSelected(selected) ? (_jsx(Tooltip, { blip: blip })) : (_jsx(Icon, { blip: blip })) }), blip.label));
        }) })));
}
function useAnimatedBlips(entries) {
    var _a = useState([]), animatedNodes = _a[0], setAnimatedNodes = _a[1];
    useEffect(function () {
        var simulation = d3
            .forceSimulation()
            .velocityDecay(0.029)
            .force("collision", d3.forceCollide().radius(16).strength(0.15))
            .on("tick", function () {
            var newNodes = simulation.nodes();
            var newBlips = entries.map(function (blip, i) { return blip.update(newNodes[i]); });
            setAnimatedNodes(newBlips);
        })
            .nodes(entries);
        return function () {
            simulation.stop();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return animatedNodes;
}
function getStatusId(status) {
    var statusMap = {
        "🚫 Hold": "hold",
        "🚧 Try": "try",
        "🤔 Reconsider": "reconsider",
        "✅ Use": "use",
    };
    return statusMap[status];
}
