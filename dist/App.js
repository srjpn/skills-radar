import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import entriesData from "./entries.json";
import { Radar } from "./components/Radar";
function App() {
    return (_jsx(_Fragment, { children: _jsx(Radar, { entries: entriesData }) }));
}
export default App;
