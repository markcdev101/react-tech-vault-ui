// GitHubInstallationGitHubPages.js
import React from 'react';
import InstallationTab from '../../../components/InstallationTab';

const GitHubInstallationGitHubPages = () => {
  const sections = [
    {
      value: 'github-pages-react',
      label: 'GitHub Pages for React',
      language: 'text',  // Plain text for steps
      content: `To deploy a React application to GitHub Pages, follow these steps:

1. **Install gh-pages package**:
   You need to install the \`gh-pages\` package as a dev dependency. Run the following command in your React project directory:
   \`\`\`
   npm install gh-pages --save-dev
   \`\`\`

2. **Update package.json**:
   - Add a \`homepage\` field in \`package.json\`. Set the value to: \`https://<your-username>.github.io/<your-repository-name>\`.
     For example:
     \`\`\`json
     "homepage": "https://your-username.github.io/your-repo-name"
     \`\`\`
   - Add the following scripts to the \`scripts\` section in \`package.json\`:
     \`\`\`json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     \`\`\`

3. **Create a GitHub repository**:
   - Create a new repository on GitHub for your project. You can do this from the GitHub website by clicking "New Repository" in the top-right corner.

4. **Push your code to GitHub**:
   If you haven't initialized a Git repository in your project yet, initialize it and push your code to GitHub:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repository-name>.git
   git push -u origin main
   \`\`\`

5. **Deploy to GitHub Pages**:
   Now, deploy your React app to GitHub Pages by running:
   \`\`\`bash
   npm run deploy
   \`\`\`

6. **Access your deployed app**:
   After the deployment is complete, you can access your React app at the URL specified in the \`homepage\` field.

**Note**: Ensure that GitHub Pages is enabled for your repository in the repository settings under the "Pages" section.`
    },
    {
      value: 'github-pages-angular',
      label: 'GitHub Pages for Angular',
      language: 'text',  // Plain text for steps
      content: `To deploy an Angular application to GitHub Pages, follow these steps:

1. **Install angular-cli-ghpages**:
   First, install the \`angular-cli-ghpages\` package globally by running the following command:
   \`\`\`bash
   npm install -g angular-cli-ghpages
   \`\`\`

2. **Build the Angular application**:
   Build your Angular project using the Angular CLI. Make sure to specify the base-href parameter as your GitHub Pages URL:
   \`\`\`bash
   ng build --prod --base-href "https://<your-username>.github.io/<your-repository-name>/"
   \`\`\`
   This will build the project in the \`dist/\` folder.

3. **Create a GitHub repository**:
   Create a new repository on GitHub for your project if you haven't already. You can do this from the GitHub website by clicking "New Repository."

4. **Deploy the Angular app**:
   Use the following command to deploy your app to GitHub Pages:
   \`\`\`bash
   ngh --dir=dist/<your-project-name>
   \`\`\`
   Replace \`<your-project-name>\` with the name of your Angular project (the folder name generated inside \`dist/\` after the build process).

5. **Push your code to GitHub**:
   If you haven't initialized a Git repository in your project yet, initialize it and push your code to GitHub:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repository-name>.git
   git push -u origin main
   \`\`\`

6. **Access your deployed app**:
   After deployment, you can access your Angular app at the URL specified in the \`--base-href\` parameter.

**Note**: Ensure that GitHub Pages is enabled for your repository in the repository settings under the "Pages" section.`
    }
  ];

  return (
    <div>
      <InstallationTab sections={sections} />
    </div>
  );
};

export default GitHubInstallationGitHubPages;
