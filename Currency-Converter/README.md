# Currency Converter

A simple browser-based currency converter. Enter an amount, choose the source and target currencies, and get the converted value using the latest exchange-rate data available from ExchangeRate-API.

## Features

- Loads the available currencies when the page opens
- Converts an amount between supported currencies
- Displays the result with the selected currency codes
- Responsive layout for desktop and mobile screens
- Uses live exchange-rate data from an external API

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- ExchangeRate-API

## Getting Started

### Run locally

1. Clone or download this repository.
2. Open the `Currency-Converter` folder.
3. Open `index.html` in a browser, or serve the folder with a local development server.
4. Make sure the browser can access the internet so the currency list and exchange rates can be loaded.

For example, with the VS Code Live Server extension, right-click `index.html` and choose **Open with Live Server**.

## How It Works

When the page loads, the app requests the latest USD-based rates from:

```text
https://api.exchangerate-api.com/v4/latest/USD
```

The returned currency codes populate both dropdowns. When the form is submitted, the app requests rates for the selected source currency, multiplies the entered amount by the target rate, and displays the result rounded to two decimal places.

## Project Structure

```text
Currency-Converter/
├── index.html  # Page structure and form controls
├── script.js   # API requests and conversion logic
├── style.css   # Layout and visual styles
└── README.md   # Project documentation
```

## Notes and Limitations

- An internet connection is required because exchange rates are fetched at runtime.
- The project depends on the public ExchangeRate-API endpoint, so availability and rate freshness depend on that service.
- The converter currently validates negative values, but additional validation for empty or invalid input could be added.

## Future Improvements

- Add clearer loading and API error states.
- Prevent conversion when the amount is empty or invalid.
- Add a swap-currencies button.
- Add the exchange-rate timestamp and offline fallback handling.

