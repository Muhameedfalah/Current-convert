import React, { useState } from "react";
import { Amount } from "./Amount";
import { CurrencySelector } from "./CurrencySelector";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { Result } from "./Result";

const getSorted = (arrayToSort) =>
  arrayToSort.sort((a, b) => a[0].localeCompare(b[0]));


const getCurrencyRate = (currency, base, rates) =>
  currency === base ? 1 : rates[currency];

export const getCurrencyOptions = (rates = {}, selectedRate) => {
  const ratesKeys = Object.keys(rates);
  const ratesWithoutSelected = selectedRate
    ? ratesKeys.filter(rk => rk !== selectedRate.label)
    : ratesKeys;
  const sortedRates = getSorted(ratesWithoutSelected);
  return sortedRates.map((s) => ({ label: s, value: s.toLowerCase() }));
};

export const convertAmount = (base, rates, amount, from, to) => {
  const { value, error } = amount;
  if (error || !from || !to) return 0;

  const fromRate = getCurrencyRate(from, base, rates);
  const toRate = getCurrencyRate(to, base, rates);
  return (toRate * value) / fromRate;
};

export function CurrencyForm({ base, rates }) {
  const [amount, setAmount] = useState({ value: "100", error: undefined });
  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);
  const [resultValue, setResultValue] = useState(undefined);

  const handleAmountChange = (event) => {
    const { value } = event.target;
    setAmount({ value, error });
  };

  const handleFromChange = (from) => {
    setFrom(from);
  };

  const handleToChange = (to) => {
    setTo(to);
  };

  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValue = convertAmount(base, rates, amount, from?.label, to?.label);
    setResultValue(newValue);
  };

  const { value: amountValue, error } = amount;

  return (
    <form onSubmit={handleSubmit}>
      <Amount
        error={error}
        value={amountValue}
        onChange={handleAmountChange}
      />
      <CurrencySelector
        label="From"
        options={getCurrencyOptions(rates, from)}
        value={from}
        onChange={handleFromChange}
      />
      <CurrencySwitcher disabled={!from || !to} onSwitch={handleSwitch} />
      <CurrencySelector
        label="To"
        options={getCurrencyOptions(rates, to)}
        value={to}
        onChange={handleToChange}
      />
      <input className="button" type="submit" value="Convert" style={{
        borderRadius: "10px",
      }}/>

      <Result value={resultValue} />
    </form>
  );
}
