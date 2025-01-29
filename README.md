# **Playwright Test Automation Project** 🚀

Welcome to the **Playwright Test Automation Project**! This repository demonstrates **end-to-end (E2E) test automation** for a web application using **Playwright**, a modern and powerful browser automation framework. The tests validate core workflows such as user authentication, message management, document handling, and more to ensure the application's functionality is robust and reliable.

---

## **Table of Contents** 📚
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup--installation)
- [Running Tests](#running-tests)
- [GitHub Actions](#github-actions)
- [Linting and Code Quality](#linting-and-code-quality)
- [License](#license)

---

## **About**

This project is designed to automate and validate the core functionalities of a web application. Using **Playwright**, we simulate real user interactions—such as logging in, navigating the app, managing messages, handling documents, and verifying expected behaviors. Our goal is to ensure the application works seamlessly across different browsers and environments.

---

## **Features**

- **End-to-End Testing**: Automates critical user flows such as login, navigation, message management, and document handling.
- **Cross-Browser Testing**: Ensures compatibility across **Chromium**, **Firefox**, and **WebKit**.
- **Environment Variables**: Securely manage sensitive data, like credentials, using `.env` files.
- **GitHub Actions**: Automate testing with CI/CD pipelines that run on every push or pull request.
- **Parallel Execution**: Save time by running tests in parallel to improve efficiency.

---

## **Tech Stack**

- **[Playwright](https://playwright.dev/)**: Fast and reliable browser automation framework.
- **[Node.js](https://nodejs.org/)**: JavaScript runtime for executing tests.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds type safety and improves code quality.
- **[dotenv](https://github.com/motdotla/dotenv)**: Loads environment variables from a `.env` file.
- **[GitHub Actions](https://github.com/features/actions)**: Automates testing and deployment workflows.

---

## **Setup & Installation**

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/qa-auto-n/pw-mailfence.git
    cd pw-mailfence
    ```

2. **Install dependencies**:
   Run the following command to install project dependencies:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Add the necessary credentials to the `.env` file in the root of the project:
    ```bash
    AUTH_STATE_PATH=.auth
    BASE_URL=https://mailfence.com
    USERNAME=your-mailfence-username
    PASSWORD=your-mailfence-password
    ```
   Replace `your-mailfence-username` and `your-mailfence-password` with your actual credentials.

4. **Install Playwright Browsers**:
   Install the required browsers for Playwright:
    ```bash
    npx playwright install --with-deps
    ```

---

## **Running Tests**

You can run the tests locally using the following command:
```bash
npx playwright test
```

To run a specific test file or suite, pass the file name like this:
```bash
npx playwright test path/to/test-file.spec.ts
```

For parallel execution, use Playwright’s built-in functionality:
```bash
npx playwright test --workers=4
```

---

## **GitHub Actions**

This project is integrated with **GitHub Actions** to automate testing on every push or pull request to the `main` or `master` branches.

### **Workflow**
**Runs on**: push and pull_request events for `main` and `master` branches.

**Actions**: The workflow installs dependencies, sets up Playwright browsers, and runs the tests. Test results are uploaded as artifacts.

---

## **Linting and Code Quality**

To maintain consistent coding standards and high-quality code, this project uses **ESLint**.

### **How to Use ESLint**

After setting up the project, you can run ESLint to check for issues and ensure your code adheres to the project's style guide.

Run ESLint with the following command:
```bash
npx eslint .
```

To run ESLint on a specific file or folder:
```bash
npx eslint path/to/your-file.ts
```

### **Automatic Fixing**
ESLint can automatically fix certain issues. To fix issues automatically, use:
```bash
npx eslint . --fix
```

This will fix linting issues where possible according to the project’s ESLint configuration.

---

## **License**

This project is licensed under the MIT License.

---

## Enjoy automating with Playwright! 🚀

---

### Key Sections:
- **About**: Explains the purpose of the project.
- **Features**: Highlights key functionalities.
- **Tech Stack**: Lists technologies used in the project.
- **Setup & Installation**: Step-by-step guide on setting up the project locally.
- **Running Tests**: How to run tests and specific test suites.
- **GitHub Actions**: Details about the GitHub Actions workflow for CI/CD.
- **Linting and Code Quality**: Information about ESLint integration and how to use it.
- **License**: License information for the project.

---

Feel free to modify this to match any specific details of your setup!