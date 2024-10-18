# Mentoring-ACL-NextJS_BE_Tutor

## Project Overview

This project demonstrates the implementation of **Server Components** and **Client Components** in **Next.js**, integrated with **Prisma ORM** and **MySQL**. The goal is to provide an easy-to-follow guide for handling both server-side data fetching and client-side interactivity.

## Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- MySQL database
- Postman or a similar API testing tool

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/Mentoring-ACL-NextJS_BE_Tutor.git
cd Mentoring-ACL-NextJS_BE_Tutor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Prisma

#### 1. Initialize Prisma

```bash
npx prisma init
```

#### 2. Configure the .env file with your MySQL connection details

```bash
DATABASE_URL="mysql://username:password@localhost:3306/yourdatabase"
```

#### 3. Generate Prisma Client

```bash
npx prisma generate
```

#### 4. Apply the migrations

```bash
npx prisma migrate dev --name init
```

### 4. Run the Application

For development mode with hot reloading:

```bash
npm run dev
```

For production mode:

```bash
npm run build
npm start
```

### 5. API Testing (Postman)

- GET Request - Fetch all posts
  - URL: http://localhost:3000/api/posts
  - Method: GET

- POST Request - Create a new post
  - URL: http://localhost:3000/api/posts
  - Method: POST
  - Body: 
    ```json
    {
      "title": "New Post",
      "content": "This is a new post."
    }
    ```
    
### Project Structure
```
.
├── app
│   ├── api
│   │   └── posts
│   │       └── route.ts    # API routes for CRUD operations
│   ├── components
│   │   └── Modal.tsx       # Client-side interactive modal component
│   └── page.tsx            # Server-side component fetching posts
├── prisma
│   ├── schema.prisma       # Prisma schema defining the database model
├── .env                    # Environment variables including MySQL config
└── README.md               # Project documentation
```

### Contributing
This project is part of a mentoring session for learning Next.js and Prisma ORM. Feel free to contribute to improve the project or report issues.

### Contributors
- Kurnia Cahya Febryanto - Mentor and Project Contributor

### License
This project is open-source and available under the MIT License.