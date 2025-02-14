<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# 😴 Undergraduate Sleep Management System 🎓

## [Overview](pplx://action/followup)

This project is a web application designed to help university students manage and improve their sleep quality 🌙. It addresses the challenges students face due to academic pressures 📚, irregular schedules 📅, and unhealthy habits 🍔. The application uses machine learning 🤖 to predict sleep quality based on user-provided data and offers personalized recommendations to promote better sleep habits.

## [Key Features](pplx://action/followup)

*   **[😴 Sleep Quality Prediction](pplx://action/followup):** Predicts a user's sleep quality (on a scale of 1-10) based on factors like age, gender, university year, sleep duration, study hours, screen time, caffeine intake, and physical activity. Explainable AI (XAI) provides insights into how each factor impacts the score.
*   **[✨ Personalized Recommendations](pplx://action/followup):** Provides actionable plans and recommendations tailored to the user's specific sleep patterns and lifestyle, potentially drawing on a panel of doctors' expertise 👨‍⚕️. Includes gamification elements to encourage adherence.
*   **[📝 Sleep Journal & History](pplx://action/followup):** Allows users to track their sleep data, including subjective sleep quality ratings and integration with wearable devices (Fitbit, Apple Watch) for automatic data import 📲.
*   **[🎯 Goal Setting & Progress Tracking](pplx://action/followup):** Enables users to set sleep-related goals and track their progress. Adaptive goal setting adjusts tasks based on daily progress.
*   **[📊 Data Analytics Dashboard](pplx://action/followup):** Provides a dashboard with visualizations of sleep patterns, trends, and the option for anonymous peer comparison. Predictive analytics identify potential sleep issues.
*   **[🌱 Lifestyle Management Tools](pplx://action/followup):** Includes features like study schedule optimization (integrating with calendar apps 🗓️) and mindfulness/relaxation exercises 🧘.

## [Technology Stack](pplx://action/followup)

*   **[Frontend](pplx://action/followup):**
    *   **[Framework](pplx://action/followup):** React
    *   **[Styling](pplx://action/followup):** CSS (with potential for Tailwind CSS or Bootstrap)
    *   **[Data Visualization](pplx://action/followup):** Chart.js 📈 or Plotly
*   **[Backend](pplx://action/followup):**
    *   **[Framework](pplx://action/followup):** Node.js with Express or Spring Boot (Java)
    *   **[Database](pplx://action/followup):** PostgreSQL 🐘 or MongoDB
    *   **[Authentication](pplx://action/followup):** Firebase Auth 🔥
    *   **[Notifications](pplx://action/followup):** Web Push Protocol
    *   **[APIs](pplx://action/followup):**
        *   Wearable Devices: Fitbit API, Apple HealthKit API, Garmin Connect API
        *   Sleep Tracking Apps: Sleep Cycle API
        *   Calendar APIs: Google Calendar API, Apple Calendar API
        *   Third-Party Sleep Analysis APIs
*   **[Machine Learning](pplx://action/followup):**
    *   **[Language](pplx://action/followup):** Python 🐍
    *   **[Data Processing](pplx://action/followup):** Pandas and NumPy
    *   **[Model Training](pplx://action/followup):** TensorFlow or PyTorch
*   **[Other Tools](pplx://action/followup):**
    *   **[Version Control](pplx://action/followup):** Git with GitHub 🐙
    *   **[Project Management](pplx://action/followup):** Trello
    *   **[IDEs](pplx://action/followup):** VSCode, PyCharm, IntelliJ IDEA
    *   **[Testing](pplx://action/followup):** Jest (frontend), Pytest (backend), Postman (API testing)

## [Setup Instructions](pplx://action/followup)

1.  **[Clone the repository](pplx://action/followup):**

    ```
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **[Frontend Setup (React)](pplx://action/followup):**

    ```
    cd frontend  # Or the directory where your React app is located
    npm install   # Or yarn install
    npm start     # Or yarn start
    ```

3.  **[Backend Setup (Node.js/Spring Boot)](pplx://action/followup):**

    *   **[(Node.js with Express Example)](pplx://action/followup):**

        ```
        cd backend  # Or the directory where your Node.js backend is located
        npm install   # Or yarn install
        # Configure your database connection (e.g., in .env file)
        npm start     # Or yarn start
        ```

    *   **[(Spring Boot Example)](pplx://action/followup):**

        *   Import the project into your IDE (IntelliJ IDEA, Eclipse).
        *   Configure the database connection in `application.properties` or `application.yml`.
        *   Run the Spring Boot application.

4.  **[Database Setup](pplx://action/followup):**

    *   Set up your chosen database (PostgreSQL or MongoDB).
    *   Configure the connection details in your backend application.
    *   Run any necessary database migrations or schema creation scripts.

5.  **[API Keys](pplx://action/followup):**

    *   Obtain API keys for any external services you plan to use (e.g., Fitbit API, Google Calendar API).
    *   Store these keys securely (e.g., using environment variables).

## [Dependencies](pplx://action/followup)

*   React
*   Node.js
*   Express (or Spring Boot)
*   PostgreSQL or MongoDB
*   Firebase Auth
*   Chart.js or Plotly
*   TensorFlow or PyTorch
*   Pandas
*   NumPy
*   (And other dependencies as listed in `package.json` for frontend and backend)

## [API Endpoints (Example)](pplx://action/followup)

*   `/api/predict` (POST): Predicts sleep quality based on input data.
*   `/api/users` (GET/POST): Manages user accounts.
*   `/api/sleep-data` (GET/POST): Retrieves and stores sleep data.

## [Contributing](pplx://action/followup)

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.

## [Team Members](pplx://action/followup)

*   Rusira Sandul (W2051886 / 20231180)
*   Fathima Nihla (W2053085 / 20232264)
*   Dewmi Jayasundara (W2053736 / 20232161)
*   Chalitha T. Wickramasingha (W20521752 / 20231629)
*   Dulsara Abeywardena (W2051887/20231183)
*   Lakindu Perera (W20518695 / 20231153)

## [License](pplx://action/followup)

[MIT License]
>>>>>>> 3723a17b1e57d31a76766ffcfb515038bebcdda1
