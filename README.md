

# Personal Finance Web App

The Personal Finance Web App is a web application that helps users track their saving goals and calculates the monthly deposit needed to achieve those goals. It consists of a back-end built with Django, Django Rest Framework, JWT authentication, and PostgreSQL, and a front-end built with React.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Deployment](#deployment)

## Features

- User registration and login functionality.
- Creation and management of saving goals.
- Calculation of the monthly deposit required to reach a saving goal by a specified deadline.
- Viewing and updating of saving goals.
- Deletion of saving goals.

## Installation

To run the Personal Finance Web App locally, follow these steps:

1. Clone the repository:

```shell
git clone <repository_url>
cd personal-finance-web-app
```

2. Set up the virtual environment and install dependencies:

```shell
python -m venv env
source env/bin/activate
pip install -r requirements.txt
```

3. Set up the database:

   - Create a PostgreSQL database for the application.
   - Update the database settings in the `personal_finance/settings.py` file with your database credentials.

4. Run database migrations:

```shell
python manage.py migrate
```

5. Generate a secret key for Django:

```shell
python manage.py generate_secret_key
```

   - Copy the generated secret key and replace the `SECRET_KEY` value in the `personal_finance/settings.py` file.

6. Start the development server:

```shell
python manage.py runserver
```

7. Access the application at `http://localhost:8000`.

## API Endpoints

The Personal Finance Web App provides the following API endpoints:

### User Registration

- **Endpoint:** `/api/auth/register/`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**

```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "example_password"
}
```

- **Response:**

```json
{
  "user": {
    "id": 1,
    "username": "example_user",
    "email": "user@example.com"
  },
  "token": "example_token"
}
```

### User Login

- **Endpoint:** `/api/auth/login/`
- **Method:** `POST`
- **Description:** Log in an existing user.
- **Request Body:**

```json
{
  "username": "example_user",
  "password": "example_password"
}
```

- **Response:**

```json
{
  "user": {
    "id": 1,
    "username": "example_user",
    "email": "user@example.com"
  },
  "token": "example_token"
}
```

### User Logout

- **Endpoint:** `/api/auth/logout/`
- **Method:** `POST`
- **Description:** Log out the currently authenticated user.

### Create a Saving Goal

- **Endpoint:** `/api/saving-goals/`
- **Method:** `POST`
- **Description:** Create a new saving goal.
- **Request Body:**

```json
{
  "title": "Example Goal",
  "description": "Example goal description",
  "amount": 30000,
  "deadline": "2025-10-01"
}
```

- **Response:**

```json
{
  "id": 1,
  "title": "

Example Goal",
  "description": "Example goal description",
  "amount": 30000,
  "deadline": "2025-10-01",
  "monthly_deposit": 1250
}
```

### Update a Saving Goal

- **Endpoint:** `/api/saving-goals/<goal_id>/`
- **Method:** `PUT`
- **Description:** Update an existing saving goal.
- **Request Body:**

```json
{
  "title": "Updated Goal",
  "description": "Updated goal description",
  "amount": 40000,
  "deadline": "2025-12-01"
}
```

- **Response:**

```json
{
  "id": 1,
  "title": "Updated Goal",
  "description": "Updated goal description",
  "amount": 40000,
  "deadline": "2025-12-01",
  "monthly_deposit": 1666.67
}
```

### Delete a Saving Goal

- **Endpoint:** `/api/saving-goals/<goal_id>/`
- **Method:** `DELETE`
- **Description:** Delete a saving goal.

## Frontend

The front-end of the Personal Finance Web App is built with React. To set up the front-end development environment, follow these steps:

1. Navigate to the `frontend` directory:

```shell
cd frontend
```

2. Install the dependencies:

```shell
npm install
```

3. Start the development server:

```shell
npm start
```

4. Access the front-end at `http://localhost:3000`.

## Deployment

To deploy the Personal Finance Web App, follow these steps:

1. Set up the production database and update the database settings in the `personal_finance/settings.py` file with the production database credentials.

2. Collect the static files:

```shell
python manage.py collectstatic
```

3. Set up a web server (e.g., Nginx) to serve the Django application and static files.

4. Build the front-end for production:

```shell
cd frontend
npm run build
```

5. Serve the built front-end files using the web server.

6. Access the deployed application using the appropriate URL.

## Conclusion

The Personal Finance Web App is a powerful tool for managing saving goals and calculating monthly deposits. By following the installation instructions and utilizing the provided API endpoints, you can easily set up and deploy the application. For any further assistance, please refer to the documentation or contact the development team.

Enjoy tracking your saving goals with the Personal Finance Web App!


