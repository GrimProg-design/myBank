export class Defender {
    isValid(...args) {
        for (const n of args) {
            if (n < 0) {
                console.log("Значения не верные");
                return false;
            }
        }
        console.log("Значения верные");
        return true;
    }
    pipe(...args) {
        let arr = [];
        for (let n of args) {
            n = Math.abs(n);
            arr.push(n);
        }
        return arr;
    }
}
//# sourceMappingURL=defender.js.map