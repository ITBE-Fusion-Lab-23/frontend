

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

This part explains how to use the Fusion Lab Homepage project, including any commands needed to run, build, or deploy it.

```bash
npm start
```

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

homepage/
│
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

- **src/**: This directory contains the source code of the project.
  - **components/**: Houses React components used throughout the project.
  - **images/**: Stores images and other multimedia resources used in the project.
  - **app.js**: The main entry point of the application, where the root component is defined.
  - **index.js**: The file responsible for rendering the React application into the DOM.
  
- **public/**: Contains public assets and the main HTML file.
  - **index.html**: The HTML template used as the entry point for the React application.
  
- **README.md**: This README file provides documentation for the project, including setup instructions, usage guidelines, and other relevant information.


## Contributing

We welcome contributions to enhance the Fusion Lab Homepage project. To contribute, please follow these steps:

Fork this repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add some feature')
Push to the branch (git push origin feature/your-feature)
Submit a pull request
License

This project is licensed under the MIT License.

