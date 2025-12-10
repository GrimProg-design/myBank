class Bank {
  button: HTMLButtonElement | null;

  constructor() {
    this.button = document.querySelector(".btn");

    if (this.button) {
      this.button.addEventListener("click", () => this.calculate());
    }
  }

  calculate() {
    const sum = Number(
      document.querySelector<HTMLInputElement>("#summ")?.value
    );
    const term = Number(
      document.querySelector<HTMLInputElement>("#term")?.value
    );
    const res = document.querySelector<HTMLParagraphElement>(".result");
    let percent =
      Number(document.querySelector<HTMLInputElement>("#percent")?.value) /
      (12 * 100);

    const payment =
      sum * ((percent * (1 + percent) ** term) / ((1 + percent) ** term - 1));

    res!.textContent = payment.toFixed(3);
    return payment;
  }
}

new Bank();
