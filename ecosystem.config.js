const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  apps: [
    {
      name: "ideaplanai",
      script: "npm",
      args: "run start:dev",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        NVIDIA_NIM_API_KEY: process.env.NVIDIA_NIM_API_KEY,
      },
      env_production: {
        NODE_ENV: "production",
        NVIDIA_NIM_API_KEY: process.env.NVIDIA_NIM_API_KEY,
      },
    },
  ],
};
