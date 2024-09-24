# Next.js Admin Dashboard with Role-Based Access Control (RBAC)

This project is a Next.js application that implements a dashboard with role-based access control (RBAC). It includes features such as user authentication, admin panel, and role-specific access to different parts of the application.

## Features

- User authentication (login/logout)
- Role-based access control (Admin, Technician, Driver, Customer)
- Admin dashboard
- Secure API routes
- Edge Runtime compatible JWT authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- A PostgreSQL database (for Prisma ORM)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up your environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   DATABASE_URL="your-postgresql-database-url"
   JWT_SECRET="your-secret-key-for-jwt"
   ```

4. Set up the database:
   ```
   npx prisma migrate dev
   ```

5. (Optional) Seed the database with initial data:
   ```
   npx prisma db seed
   ```

## Usage

To run the development server:

```
npm run dev
```
or
```
yarn dev
```

## Environment Variables

Create a `.env` file in the root directory and add the following:
```
DATABASE_URL=
JWT_SECRET=
BREVO_SMTP_HOST=
BREVO_SMTP_PORT=
BREVO_SMTP_PASSWORD=
BREVO_SMTP_USER=
```
    
### Creating the First Admin User

To create the first admin user, navigate to the `/setup` route in your browser. This route is only accessible when there are no users in the database.

### Logging In

Use the email and password of the admin user you created to log in at the `/login` route.

### Accessing Different Areas

- Admin Dashboard: `/admin`
- Technician Area: `/technician`
- Driver Area: `/driver`
- Customer Area: `/customer`

Access to these areas is controlled by the user's role.

## Project Structure

- `/pages` or `/app`: Contains the Next.js pages/routes
- `/components`: Reusable React components
- `/lib`: Utility functions and shared logic
- `/prisma`: Database schema and migrations
- `/public`: Static files
- `/styles`: Tailwind CSS

## API Routes

- `/api/auth/login`: Handles user login
- `/api/auth/logout`: Handles user logout
- `/api/users`: CRUD operations for users (admin only)
- `/api/[other-resources]`: Other API routes for your application

## Contributing

Contributions to this project are welcome. Please ensure you follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Francis Mwaniki - francis@mwaniki.dev

Project Link: [https://github.com/Francis-Mwaniki/next-rbac](https://github.com/Francis-Mwaniki/next-rbac)