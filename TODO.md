# TODO LIST

[x] - ESlint
[x] - Prettier
[x] - Dockerize
[] - Routes
      [x] - Login
      [x] - Logout
      [] - Forgot Password
      [] - Profile
      [] - Edit Profile
      [] - Expiration for email verification link
[] - Express-Rate-Limit
      - https://www.youtube.com/shorts/uI2mwYWh9hc
[] - CORS
[] - Error handling
      - So paths wont show up on the error.
        - Ex. error:
            Error: You are not logged in
            at authed (/usr/src/app/src/api/v1/middlewares/auth.middleware.ts:22:15)
            at Layer.handle [as handle_request] (/usr/src/app/node_modules/express/lib/router/layer.js:95:5)
            at next (/usr/src/app/node_modules/express/lib/router/route.js:144:13)
            at Route.dispatch (/usr/src/app/node_modules/express/lib/router/route.js:114:3)
            at Layer.handle [as handle_request] (/usr/src/app/node_modules/express/lib/router/layer.js:95:5)
            at /usr/src/app/node_modules/express/lib/router/index.js:284:15
            at Function.process_params (/usr/src/app/node_modules/express/lib/router/index.js:346:12)
            at next (/usr/src/app/node_modules/express/lib/router/index.js:280:10)
            at Function.handle (/usr/src/app/node_modules/express/lib/router/index.js:175:3)
            at router (/usr/src/app/node_modules/express/lib/router/index.js:47:12)