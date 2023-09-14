## Package.json scripts

`prisma:generate` - to generate types(typescript) of tables
`prisma:migrate`  - to create a database migration


# Docker Setup

## Dockerfile

```dockerfile

# Can check node version in https://hub.docker.com/_/node
FROM node:18.17-alpine3.18 as development
```

# FEATURES

[x] - Authentication(Bcrypt, Redis, Prisma ORM)
[x]  - Email Verification
[x]  - Forgot Password(Send email with link to reset password)
[x] - User session with redis
[x]  - Better Error handling
[x]  - Limiting Network Traffic
      - using express-rate-limit
[]  - CORS
[x] - Dockerized