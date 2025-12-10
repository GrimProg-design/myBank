import { Defender } from "./defender.js";
class Bank {
    defender;
    button;
    constructor(defender = new Defender()) {
        this.defender = defender;
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
        if (!this.defender.isValid(sum, term, percent)) {
            alert("Ваши данные имею отрицательные значения");
            window.location.reload();
        }
        res.textContent = "Ежемесячная плата: " + payment.toFixed(2);
        tot.textContent = "Общая сумма выплаты: " + total.toFixed(2);
        return payment;
    }
}
new Bank();
//# sourceMappingURL=app.js.map