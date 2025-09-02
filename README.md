### Setup Instructions

1. **Frontend Setup**:
   - Ensure you have Node.js and npm installed.
   - Navigate to the frontend directory.
   - Run `npm install` to install the dependencies.
   - Start the development server with `npm start`.

2. **Backend Setup**:
   - Ensure you have Node.js installed.
   - Navigate to the backend directory.
   - Run `npm install` to install the dependencies.
   - Start the server with `node index.js`.

3. **Database Setup**:
   - Ensure you have PostgreSQL installed.
   - Connect to your PostgreSQL instance and run the SQL commands in `schema.sql` to set up the database.

4. **Deployment**:
   - For frontend, consider deploying to a service like Vercel or Netlify.
   - For backend, consider deploying to a service like Heroku or a VPS.
   - Ensure environmental variables are set for production use, such as database connection strings and server ports.

5. **File Uploads**:
   - The uploaded files will be stored in the `uploads` directory within the backend server. Ensure this directory exists and has appropriate permissions for writing files.

6. **Environment Variables**:
   - Create a `.env` file in the root of your backend directory to manage configurations like `PORT` and database connection strings.