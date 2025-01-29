# **Playwright Test Automation Project**

This project demonstrates end-to-end (E2E) test automation for a web application using Playwright. The tests cover various workflows and scenarios, ensuring the functionality of core features, such as user authentication, message management, document handling, and other essential features.

---

## **Table of Contents**

1. [About](#about)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup & Installation](#setup--installation)
5. [Running Tests](#running-tests)
6. [GitHub Actions](#github-actions)
7. [License](#license)

---

## **About**

This repository includes a test suite that covers important functionalities of a web application. Using Playwright, we automate the process of logging in, interacting with core sections like Messages and Documents, and verifying their expected behavior.

---

## **Features**

- **End-to-End Tests**: Validate critical user flows like navigation, login, message management, document handling, and more.
- **Cross-Browser Testing**: Tests are executed across multiple browsers like Chromium, Firefox, and WebKit.
- **Environment Variables**: Uses `.env` files to manage sensitive data like credentials and other settings.
- **GitHub Actions**: Integrated with CI/CD pipelines to run tests automatically on every push or pull request.

---

## **Tech Stack**

- **Playwright**: Powerful framework for automating browsers in Node.js.
- **Node.js**: JavaScript runtime for running tests.
- **GitHub Actions**: Automating the testing and deployment process.
- **TypeScript**: Type-safe programming for a more robust test suite.
- **dotenv**: Loads environment variables from a `.env` file.

---

## **Setup & Installation**

Follow these steps to get the project up and running locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**:

Make sure you have Node.js installed, then run the following command:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

Add correct credentials to the .env file in the root of the project

4. **Install Playwright Browsers**:

   ```bash
   npx playwright install --with-deps
   ```
## **Running Tests**
You can run the tests locally using the following command:
```bash
npx playwright test
   ```
To run a specific test file or test suite, you can pass the test file name like this:
```bash
npx playwright test path/to/test-file.spec.ts
   ```
You can run tests in parallel by using Playwright's built-in parallel execution:
```bash
npx playwright test --workers=4
```

## **GitHub Actions**
This project is integrated with GitHub Actions to automate the process of running tests on every push or pull request.
### Workflow
**Runs on**: push and pull_request events for main and master branches.
**Actions**: The GitHub Actions workflow installs dependencies, sets up Playwright browsers, and runs the tests. The test results are uploaded as artifacts.

## License
This project is licensed under the MIT License.


## Enjoy automating with Playwright! 🚀
### Key Sections:

- **About**: Explains the purpose of the project.
- **Features**: Highlights the main functionalities.
- **Tech Stack**: Lists technologies used in the project.
- **Setup & Installation**: Step-by-step guide on setting up the project locally.
- **Running Tests**: Instructions to run tests and test suites locally.
- **GitHub Actions**: Details about the GitHub Actions workflow for CI/CD.
- **Contributing**: How others can contribute to the project.
- **License**: Information about the project's license.

Feel free to adjust the details, especially in the "Setup & Installation" section, based on your exact setup and requirements.



