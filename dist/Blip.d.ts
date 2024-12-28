import { Entry } from "./types";
import { Polar, Cartesian } from "./math";
export declare class Blip {
    entry: Entry;
    polarMin: Polar;
    polarMax: Polar;
    cartesianMin: Cartesian;
    cartesianMax: Cartesian;
    x: number;
    y: number;
    constructor(entry: Entry);
    position(point: Cartesian): void;
    translate(): string;
    update(d: d3.SimulationNodeDatum): this;
    clip(): void;
    get label(): Entry["label"];
    get originId(): Entry["originId"];
    isSelected(selected?: string): boolean;
    get id(): Entry["id"];
    get icon(): Entry["icon"];
    get status(): Entry["status"];
    get category(): Entry["category"];
}
export declare const quadrants: {
    radialMin: number;
    radialMax: number;
    factorX: number;
    factorY: number;
}[];
