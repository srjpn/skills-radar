import entries from "./entries.json";
import { Blip } from "./Blip";
export var blips = entries.map(function (entry) { return new Blip(entry); });
