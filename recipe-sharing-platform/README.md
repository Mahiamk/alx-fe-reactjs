# Recipe Sharing Platform

A Recipe Sharing Platform built with React and Tailwind CSS. This application allows users to browse, add, and share recipes in a clean, modern, and responsive UI.

## Features

- **Browse Recipes**: View a list of recipes on the homepage.
- **Recipe Detail**: View detailed information about individual recipes.
- **Add Recipe**: Submit new recipes via a form.
- **Responsive Design**: Fully responsive UI built using Tailwind CSS.
- **Dark Mode Support**: Toggle between light and dark mode (optional).

## Getting Started

Follow the steps below to set up the project locally.

### Prerequisites

Before getting started, make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/en/) (LTS version)
- [npm](https://www.npmjs.com/) (Comes with Node.js)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/recipe-sharing-platform.git
cd recipe-sharing-platform
2. Install Dependencies
Run the following command to install the project dependencies:

npm install
This will install React, Tailwind CSS, and other necessary packages.

3. Set Up Tailwind CSS
Tailwind CSS has already been configured for this project. Here's a quick overview of the setup:

Tailwind CSS Installation:
Tailwind CSS, PostCSS, and Autoprefixer are installed as dev dependencies.
Tailwind's configuration file (tailwind.config.js) is set up to remove unused styles in production.
CSS File:
Tailwind's @tailwind directives are included in the src/index.css file to load Tailwind's base styles, components, and utilities.
4. Start the Development Server
To start the development server, run:

npm run dev
The application will be available at http://localhost:3000. Any changes made to your React components will automatically reload the page.

Project Structure

The project structure follows common practices for React applications:

recipe-sharing-platform/
├── public/               # Public files (index.html, etc.)
├── src/                  # Source files for the React application
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable components (e.g., Header, Footer)
│   ├── pages/            # Pages (e.g., HomePage, RecipeDetailPage)
│   ├── App.jsx           # Main App component
│   ├── index.css         # Tailwind CSS integration
│   └── main.jsx          # Entry point for React
├── tailwind.config.js    # Tailwind CSS configuration file
├── postcss.config.js     # PostCSS configuration file
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
Pages and Components
HomePage.jsx: Displays a list of all recipes.
RecipeDetailPage.jsx: Displays details for an individual recipe.
AddRecipeForm.jsx: Form for users to add a new recipe.
Header.jsx: Navbar for navigation.
Footer.jsx: Footer with additional links or information.
Technologies Used

React: JavaScript library for building user interfaces.
Vite: A fast development build tool and bundler for React.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
PostCSS: Tool for transforming CSS with JavaScript plugins like Autoprefixer.
Contributing

Contributions are welcome! If you find any bugs or want to improve the project, feel free to open an issue or submit a pull request.

How to Contribute
Fork the repository.
Clone your fork locally.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -am 'Add new feature').
Push to your fork (git push origin feature-name).
Open a pull request to the main branch of the original repository.
License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

Tailwind CSS
Vite
React
PostCSS