

Welcome to the documentation for the Fusion Lab frontend development during the 2023 Winter Semester at ITBE.

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The project is a website development aimed at showcasing the new bridge design by Donnersbergerbrücke Group A. It provides an interactive platform for users to explore the designs in detail, comment on, and vote for their favorite ones. Additionally, the website features information about the team and its members. It primarily utilizes the React JS and IFC.js for its development. This overview section highlights the project's goal to blend architectural innovation with community engagement, leveraging modern web technologies for an enriched user experience.

## Setup

This part describes how to set up the project locally, including installation steps for dependencies.

First start by installing Node.js to get npm (Node Package Manager)

Then install dependencies listed in the project's package.json file

```bash
npm install
```

## Usage

This part explains how to use the Fusion Lab Group A's project, including any commands needed to run or build it.

```bash
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.


```bash
npm run build
```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

## Technologies Used

This part lists the main technologies and tools used in the project.

- HTML5
- CSS3
- JavaScript
- React.js
- Bootstrap
- MUI

## Folder Structure

This part provides an overview of the project's folder structure to help navigate through different modules and resources.

```
├── src/
│   ├── components/ 
│   ├── images/
│   ├── App.js
│   └── ...
│
├── public/
│   ├── index.html
│   └── rcs/
│
├── README.md
└── ...
```

- **src/**: This directory contains the source code of the project.
  - **components/**: Houses React components used throughout the project.
  - **images/**: Stores images and other multimedia resources used in the project.
  - **app.js**: The main entry point of the application, where the root component is defined.
  - **index.js**: The file responsible for rendering the React application into the DOM.
  
- **public/**: Contains public assets and the main HTML file.
  - **index.html**: The HTML template used as the entry point for the React application.
  - **rcs/**: Store IFC models used in the project.
  
- **README.md**: This README file provides documentation for the project, including setup instructions, usage guidelines, and other relevant information.


## Contributer

Every user who issues a pull request to the project and merges it into the project is a contributor.
- [@Nayun Kim](https://github.com/narchitect)
- [@Jeffrey Limnardy](https://github.com/jeffreylimnardy)
- [@Julian Gerstner](https://github.com/JulianLeQuack)
- [@Ying Lu](https://github.com/charlotte54071)

We appreciate all contributions to make this project better!

## License

This project is licensed under the MIT License.

