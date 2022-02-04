export function strUpper(...param) {
    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] !== "string") {
            throw new Error("Nem string tesom")
        }
    }   // vágom, hogy most ide felesleges a forEach, de a sima for ciklust utólag tettem be és baszok átírni
    let newerarr = [];
    param.forEach(item => {
        newerarr.push(item.charAt(0).toUpperCase() + item.slice(1));
    })
    return newerarr;
}