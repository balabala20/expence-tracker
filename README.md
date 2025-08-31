# Expense Tracker

This is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to help users track their income and expenses, manage savings goals, and visualize their financial data.

-----

## Features

  * **User Authentication**: Secure user registration and login functionality.
  * **Dashboard**: A comprehensive overview of your financial status, including total balance, income, and expenses. It also features charts for a quick visual summary.
  * **Income and Expense Tracking**: Easily add, edit, and delete your income and expense records.
  * **Savings Goals**: Set and track your savings goals to stay motivated and achieve your financial targets.
  * **Data Visualization**: Interactive charts and graphs to help you understand your spending habits and financial progress over time.
  * **Dark/Light Mode**: A theme toggle for a comfortable user experience in any lighting condition.

-----

## Technologies Used

### Frontend

  * React
  * Redux for state management
  * React Router for navigation
  * Axios for API requests
  * Chart.js for data visualization
  * React Chartjs 2
  * React Confetti for a fun user experience on achieving goals

### Backend

  * Node.js
  * Express.js
  * MongoDB with Mongoose
  * JSON Web Tokens (JWT) for authentication
  * bcryptjs for password hashing
  * CORS for cross-origin resource sharing
  * dotenv for environment variables

-----

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

  * Node.js and npm
  * MongoDB

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/balabala20/expence-tracker.git
    cd expence-tracker
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

4.  **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```
    MONGO_URI=<YOUR_MONGODB_URI>
    JWT_SECRET=<YOUR_JWT_SECRET>
    ```

-----

## Running the Application

1.  **Start the backend server:**

    From the `backend` directory, run:

    ```bash
    npm run server
    ```

2.  **Start the frontend development server:**

    From the `frontend` directory, run:

    ```bash
    npm start
    ```
