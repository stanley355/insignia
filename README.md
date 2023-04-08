# Insignia Interview Test

### Requirement

1. Create a new Nx monorepo using the nx create command.
2. Add a NestJS backend to the monorepo using the nx generate command, and configure it to use Prisma as the database client.
3. Add modules for authentication, CRUD operations for user, contact, and group entities to the NestJS backend.
4. Add a Next.js frontend to the monorepo using the nx generate command, and configure it to use TailwindCSS for styling.
5. Create a CMS in the Next.js app.
6. Add a new page /flow to the Next.js app that contains a component using the react-flow library.
- Use Nx's nx-container library to containerize the entire application and push it to Docker Hub.

### Setup
- Clone this repo
- Run `yarn install`
- Adjust the `.env` value with your local port
- Run the migration with `npx prisma migrate dev`
- Run the backend with `nx serve backend`. The full code is in `./apps/backend`
- Run the frontend with `nx serve frontend`. The full code is in `./apps/frontend`

### Side Effect
I found the Requirement is quite unsatisfactory in some points
- It's said that I shall create 4 tables namely User, contact, contactList and contactGroup but on the `User` table it exists `Workspace` and `Account` column, should I create new table for that since it doesn't exist before. In addition what's the value of `Workspace` and `Account` ?
- I