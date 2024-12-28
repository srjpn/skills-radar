export function polar(cartesian) {
    var x = cartesian.x, y = cartesian.y;
    return {
        t: Math.atan2(y, x),
        r: Math.sqrt(x * x + y * y),
    };
}
export function cartesian(polar) {
    return {
        x: polar.r * Math.cos(polar.t),
        y: polar.r * Math.sin(polar.t),
    };
}
function bounded(value, min, max) {
    var low = Math.min(min, max);
    var high = Math.max(min, max);
    return Math.min(Math.max(value, low), high);
}
export function boundedRing(polar, rMin, rMax) {
    return {
        t: polar.t,
        r: bounded(polar.r, rMin, rMax),
    };
}
export function boundedBox(point, min, max) {
    return {
        x: bounded(point.x, min.x, max.x),
        y: bounded(point.y, min.y, max.y),
    };
}
