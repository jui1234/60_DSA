var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();
    let used = new Set();

    for (let i = 0; i < s.length; i++) {
        let chofs = s[i];
        let choft = t[i];

        if (!map.has(chofs)) {
            if (used.has(choft)) return false;

            map.set(chofs, choft);
            used.add(choft);
        } 
        else if (map.get(chofs) !== choft) {
            return false;
        }
    }

    return true;
};

console.log("result",isIsomorphic("egg","add"))
console.log("result",isIsomorphic("f11", "b23"))
console.log("result",isIsomorphic("paper", "title"))
console.log("result",isIsomorphic("badc", "baba"))