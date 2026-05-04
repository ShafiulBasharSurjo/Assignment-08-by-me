Tiles Gallery
A modern, full-stack web application designed for browsing and managing a high-quality gallery of tile designs. This project serves as a practical implementation of local-first development workflows and secure authentication patterns.

🚀 Purpose
The Tiles Gallery project was created to provide a seamless interface for users to explore various tile patterns and textures. It serves as a learning platform for mastering Next.js App Router, integrating Better-Auth for identity management, and utilizing MongoDB Atlas for scalable cloud data storage.

🔗 Live URL
[Insert Your Vercel or Deployment Link Here]

✨ Key Features
Secure Authentication: Full registration and login system powered by Better-Auth, supporting email and password credentials.

Dynamic User Profiles: A dedicated "My Profile" page allowing logged-in users to view their session data and update their display name and profile image.

Responsive Tile Gallery: A clean, grid-based UI built with Tailwind CSS and DaisyUI for optimal viewing on any device.

Real-time UI Updates: Utilization of react-hook-form for efficient, zero-refresh form handling and validation.

Robust Backend: Integration with MongoDB Atlas via the Better-Auth MongoDB adapter for reliable user and data persistence.

📦 Tech Stack & NPM Packages
Core Frameworks
Next.js: The React framework for production.

React: For building the component-based user interface.

Authentication & Database
better-auth: A comprehensive authentication library for Next.js.

mongodb: Official MongoDB driver for Node.js.

@better-auth/mongodb-adapter: Specifically used to connect authentication flows to the MongoDB cluster.

Styling & UI
tailwindcss: Utility-first CSS framework for rapid UI development.

daisyui: A component library for Tailwind CSS used for the avatar, buttons, and form layouts.

lucide-react: For consistent and scalable iconography.

Form Handling
react-hook-form: Used to manage form state and validation in the Registration and Profile pages.

🛠️ Local Development
To run this project locally on your machine (e.g., Windows with Cursor):

Clone the repository:

Bash
git clone https://github.com/ShafiulBasharSurjo/Assignment-08-by-me/blob/main/README.md
Install dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file and include your MONGODB_URI, BETTER_AUTH_SECRET, and BETTER_AUTH_URL.

Run the development server:

Bash
npm run dev
