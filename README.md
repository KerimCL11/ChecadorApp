# Comprehensive Documentation for ChecadorApp

## Frontend Overview

`ChecadorApp` is a React application focused on employee check-in functionality. It employs React functional components and state hooks for dynamic state management.

### `App.jsx`

#### Structure and State Management

- **State Variables:**
  - `empCode` & `empCode2`: Store employee codes for validation.
  - `isLoading`: Indicates the status of asynchronous operations.
  - `error`: Stores error information.
  - `succes`: Represents the success status of operations.
  - `responseArray`: Holds server response data.

#### Key Functionality

- **`submitPunch`:**
  - Validates employee codes and handles form submission.
  - Communicates with the backend API to post employee data.
  - Manages loading, error, and success states based on the operation outcome.

#### UI Rendering

- Conditionally displays UI elements based on the application's state, including loaders, error messages, and success indicators.

### `main.jsx`

- Serves as the entry point, rendering the `App` component within `React.StrictMode`.

## Backend API Overview

The backend is developed with Express.js, handling HTTP requests and interfacing with a SQL database for employee data management.

### `server.js`

#### Setup and Middleware

- Configures Express app with CORS and body parsing middleware.
- Defines routes and their corresponding logic.

#### Routing and Logic

- **`POST /punch/:empCode`:**
  - Processes the `empCode` parameter from the request.
  - Utilizes `LunchPunch.js` to interact with the database and fetch employee information.

### `LunchPunch.js`

#### Database Interaction

- Establishes a connection to a SQL database using environment-configured settings.
- Executes a stored procedure to log lunch service usage and retrieve related employee data.

#### Function Definitions

- **`addLunchServiceUsageAndRetrieveEmployee(empCode)`:**
  - Connects to the database and calls `InsertLunchServiceUsage` with `empCode`.
  - Returns employee data or error information based on the operation's result.

## Libraries Used

### Frontend

- React
- sweetalert2
- axios

### Backend

- Express.js
- mssql
- cors
- dotenv
