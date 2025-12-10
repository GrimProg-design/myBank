class Bank {
  button: HTMLButtonElement | null;

  constructor() {
    this.button = document.querySelector(".btn");

    if (this.button) {
      this.button.addEventListener("click", () => this.credit());
    }
  }

  credit() {
    const sum = Number(
      document.querySelector<HTMLInputElement>("#summ")?.value
    );
    const term = Number(
      document.querySelector<HTMLInputElement>("#term")?.value
    );
    const res = document.querySelector<HTMLParagraphElement>(".result");
    const tot = document.querySelector<HTMLParagraphElement>(".total");
    let percent =
      Number(document.querySelector<HTMLInputElement>("#percent")?.value) /
      (12 * 100);

    const payment =
      sum * ((percent * (1 + percent) ** term) / ((1 + percent) ** term - 1));
    const total = payment * term;

    res!.textContent = "Ежемесячная плата: " + payment.toFixed(2);
    tot!.textContent = "Общая сумма выплаты: " + total.toFixed(2);
    return payment;
  }
}

new Bank();
