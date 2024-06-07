# KidShield Dashboard

KidShield Dashboard is a web-based administrative interface designed to provide parents and guardians with insights into their child's online activity and manage content filtering settings in collaboration with the chrome extension. This dashboard is built with React, TypeScript, and Vite, using pnpm for package management.

## Features

- **Activity Overview:** Visual representation of browsing activity.
- **Content Management:** Tools to configure and manage content filtering.
- **Extension Settings:** Customize the extension with user-specific preferences.
- **Responsive Design:** Optimized for various devices and screen sizes.

## Installation

To install the KidShield Dashboard, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/KylixMedusa/kidshield-dashboard.git
   cd kidshield-dashboard
   ```

2. **Install Dependencies:**
   Ensure you have pnpm installed. Then, install the required dependencies:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your environment variables. An example `.env` file might look like this:
   ```plaintext
   VITE_API_URL=https://api.kidshield.com
   VITE_EXTENSION_ID=your-extension-id
   ```

4. **Run the Development Server:**
   Start the development server to see the dashboard in action:
   ```bash
   pnpm run dev
   ```

## Usage

1. **Accessing the Dashboard:**
   Once the server is running, open your browser and navigate to the local development URL provided by Vite (e.g., `http://localhost:3000`).

2. **Navigating the Interface:**
   Use the navigation menu to access different sections of the dashboard, such as Activity Overview, Content Management, and User Management.

## Contributing

We welcome contributions from the community! To contribute to KidShield Dashboard, follow these steps:

1. **Fork the Repository:**
   Click the "Fork" button at the top right of the repository page to create a copy of the repo under your GitHub account.

2. **Clone the Forked Repository:**
   ```bash
   git clone https://github.com/your-username/kidshield-dashboard.git
   cd kidshield-dashboard
   ```

3. **Create a New Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes and Commit:**
   Implement your changes and commit them with a descriptive message:
   ```bash
   git add .
   git commit -m "Add feature: your-feature-name"
   ```

5. **Push to Your Fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Submit a Pull Request:**
   Go to the original repository on GitHub and submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.