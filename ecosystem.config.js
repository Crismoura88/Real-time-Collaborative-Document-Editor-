module.exports = {
    apps: [
      {
        name: 'frontend', // Replace with your app name
        script: 'frontend/node_modules/react-scripts/scripts/start.js', // Adjust the path as needed
        watch: true,
        ignore_watch: ['node_modules'],
        instances: 1,
        exec_mode: 'fork',
        cwd: 'frontend', // Set the working directory to your React app
        env: {
          NODE_ENV: 'production',
          PORT: 3000,
        },
      },
      {
        name: 'backend', // Replace with your server name
        script: 'backend/server.js', // Adjust the path as needed
        watch: true,
        ignore_watch: ['node_modules'],
        instances: 1,
        exec_mode: 'fork',
        cwd: 'backend', // Set the working directory to your Node.js server
        env: {
          NODE_ENV: 'production',
          PORT: 4000,
        },
      },
    ],
  };
  