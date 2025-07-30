# 💸 React Investment Calculator

This is a simple and interactive **Investment Calculator** built with **React**. It allows users to enter investment details and view a detailed year-by-year breakdown of investment growth.

## 📌 Features

- 📥 User inputs:
  - Initial Investment
  - Annual Investment
  - Expected Annual Return (%)
  - Duration (Years)
- 📊 Output:
  - Yearly breakdown of:
    - Investment Value
    - Interest Earned
    - Total Interest
    - Investment Capital

## 🚀 React Concepts Used

- **Lifting State Up**: State is managed in a common parent component and passed down to child components as props to ensure data flow is consistent.
- **Two-Way Binding**: Form inputs are bound to state, allowing real-time user interaction and updates.
- **Controlled Components**: All form inputs are controlled by React using `useState`.
- **Dynamic Rendering**: Table of results is dynamically rendered based on user input.

## 🛠️ Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- CSS for styling (or Tailwind/Bootstrap if used)

## 📷 Preview

![Investment Calculator Screenshot](./screenshot.png) <!-- Replace with actual screenshot path -->

## 🧮 Example Calculation

Given:
- Initial Investment: ₹10,000  
- Annual Investment: ₹5,000  
- Expected Return: 8%  
- Duration: 5 years

You get a table showing how your investment grows each year — including total interest earned and capital at the end.

## 📁 Project Structure


## 🧑‍💻 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Rod7678/Investment-Project.git
   cd investment-calculator
2. Install dependencies:
    npm install
3. run the app
   npm run dev
     
