// ReactInstallation.js
import React from 'react';
import InstallationTab from '../../../components/InstallationTab';

const ReactInstallation = () => {
  const sections = [
    {
      value: 'create-react-app',
      label: 'Create React App',
      language: 'bash',
      content: `To create a new React application using Create React App, run the following commands:

npx create-react-app my-react-app

This will create a new directory named 'my-react-app' with a basic React setup. To navigate into the project directory and start the development server, use:

cd my-react-app
npm start

Your React application will now be running on http://localhost:3000.

To build your project for production, use:
npm run build

This will create an optimized build of your app in the 'build' folder.`
    },
    {
      value: 'ide-react',
      label: 'IDE Setup for React',
      language: 'text',
      content: `You can easily integrate React with popular IDEs like Visual Studio Code. Follow these steps for the setup:

In Visual Studio Code:
- Open Visual Studio Code and go to File > Open Folder.
- Navigate to the directory where you created your React app (e.g., 'my-react-app') and open it.
- Visual Studio Code should detect the project and suggest installing recommended extensions for React.

You can now start developing your React application in Visual Studio Code with features like IntelliSense, debugging, and integrated terminal support.` 
    },
  ];

  return (
    <div>
      <InstallationTab sections={sections} />
    </div>
  );
};

export default ReactInstallation;
