import { Entry } from "./types";
import { Blip } from "./Blip";


export const blips = (entries: Entry[]) => entries.map((entry) => new Blip(entry as Entry));
