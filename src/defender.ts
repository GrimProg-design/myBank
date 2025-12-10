export class Defender{
    isValid(...args: number[]): boolean{
        for(const n of args) {
            if(n < 0) {
                console.log("Значения не верные")
                return false
            }
        }
        console.log("Значения верные")
        return true
    }
}