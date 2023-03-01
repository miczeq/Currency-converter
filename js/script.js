{
    console.log("Witam wszystkich deweloperów w kalkulatorze walut:)")

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.69;
        const rateGBP = 5.30;
        const rateUSD = 4.40;
        const rateCHF = 4.77;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;

        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };

    init();

}