export declare type Cartesian = {
    x: number;
    y: number;
};
export declare type Polar = {
    r: number;
    t: number;
};
export declare function polar(cartesian: Cartesian): Polar;
export declare function cartesian(polar: Polar): Cartesian;
export declare function boundedRing(polar: Polar, rMin: number, rMax: number): {
    t: number;
    r: number;
};
export declare function boundedBox(point: Cartesian, min: Cartesian, max: Cartesian): {
    x: number;
    y: number;
};
