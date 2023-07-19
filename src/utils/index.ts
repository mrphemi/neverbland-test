//  convert time in mins to hours and mins
export function convertMinsToHrsMins(mins: number) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    let hrs = h > 0 ? h + "h" : "";
    let min = m > 0 ? m + "m" : "";
    return hrs + min;
}
