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
I found the Requirement is quite unsatisfactory in some points:
- It's said that I shall create 4 tables namely User, contact, contactList and contactGroup but on the `User` table it exists `Workspace` and `Account` column, should I create new table for that since it doesn't exist before. In addition what's the value of `Workspace` and `Account` ?
- It's said that I should create the backend with authentication, my question will be should I create the authentication with ApiToken only or I should authenticate the login and logout as well
- On requirement no 5, I was asked to create a cms on next js, what's the cms specification? Should I create it for User, Contact, and ContactGroup. If yes, if one table changed, should it affect other table?
- Finaly on requirement no 6 I should create the `/flow` page with the react-flow. The question will be what's the design of the page? What will it consist of? On creating a frontend I should at least know what the page component and requirement will be
- These points are just my question for clarity I didn't blame anyone or anything for this confirmation