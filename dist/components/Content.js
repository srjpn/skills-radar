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
export function Content() {
    return (_jsxs("div", __assign({ style: {
            width: "600px",
            margin: "80px auto",
            lineHeight: 1.6,
        } }, { children: [_jsxs("p", { children: [_jsx("b", { children: "Use" }), _jsx("br", {}), "Technologies used in production that serve well a certain purpose at Choco. We invest in understanding and mastering this tech. This doesn't mean the technology should be used for any use case and in any way: everything has tradeoffs."] }), _jsxs("p", { children: [_jsx("b", { children: "Try" }), _jsx("br", {}), "Technologies we believe can become \"use\" and are currently being researched, prototyped or tried in production by a team. We keep tech in trial until we understand its tradeoffs."] }), _jsxs("p", { children: [_jsx("b", { children: "Reconsider" }), _jsx("br", {}), "Technologies that we used but are currently reconsidering, either because it doesn't suit us anymore or because considerably superior alternatives exist to a degree it might justify a migration."] }), _jsxs("p", { children: [_jsx("b", { children: "Hold" }), _jsx("br", {}), "Technologies that we used but no longer recommended for new projects. Usually can be continued for existing projects, unless stated otherwise."] })] })));
}
