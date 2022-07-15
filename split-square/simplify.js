function simplify(s){
    if (s === 0 || s === 1) return s;

    s = s.map(simplify);

    if(Number.isInteger(s[0]) && s.every(q => 1 === s[0])) return s[0];

    return s;
}