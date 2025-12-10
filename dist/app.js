class Bank {
    button;
    constructor() {
        this.button = document.querySelector(".btn");
        if (this.button) {
            this.button.addEventListener("click", () => this.calculate());
        }
    }
    calculate() {
        const sum = Number(document.querySelector("#summ")?.value);
        const term = Number(document.querySelector("#term")?.value);
        const res = document.querySelector(".result");
        let percent = Number(document.querySelector("#percent")?.value) /
            (12 * 100);
        const payment = sum * ((percent * (1 + percent) ** term) / ((1 + percent) ** term - 1));
        res.textContent = payment.toFixed(3);
        return payment;
    }
}
new Bank();
export {};
//# sourceMappingURL=app.js.map