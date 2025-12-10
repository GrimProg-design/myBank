class Bank {
    button;
    constructor() {
        this.button = document.querySelector(".btn");
        if (this.button) {
            this.button.addEventListener("click", () => this.credit());
        }
    }
    credit() {
        const sum = Number(document.querySelector("#summ")?.value);
        const term = Number(document.querySelector("#term")?.value);
        const res = document.querySelector(".result");
        const tot = document.querySelector(".total");
        let percent = Number(document.querySelector("#percent")?.value) /
            (12 * 100);
        const payment = sum * ((percent * (1 + percent) ** term) / ((1 + percent) ** term - 1));
        const total = payment * term;
        res.textContent = "Ежемесячная плата: " + payment.toFixed(2);
        tot.textContent = "Общая сумма выплаты: " + total.toFixed(2);
        return payment;
    }
}
new Bank();
export {};
//# sourceMappingURL=app.js.map