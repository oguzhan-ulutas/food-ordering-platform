# food-ordering-platform

A food ordering application where users can order food and manage a restaurant.

# [Live Preview](https://food-ordering-platform-client.onrender.com/)

## Setup

To run locally follow the steps.

### Step 1: Environment File Setup

Create a .env file for client and server directories enter .env variables.

#### Server .env File
##### Mongodb - Client Url
MONGODB=your-mongodb-string
CLIENT_BASE_URL=your-client-url

##### Auth0
AUTH0_AUDIENCE=your-audience-string
AUTH0_ISSUER_BASE_URL=your-issuer-base-url

##### Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret-key

#### Client .env File
VITE_API_BASE_URL=your-server-url

VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_CALLBACK_URL=your-client-url
VITE_AUTH0_AUDIENCE=your-auth0-audience

### Step 2: Dependency Installation

Execute inside the both client and server folders.

```sh
npm install
```

### Step 3: Launching the Development Server

Execute:

```sh
npm start
```

Or to start the server continuously with nodemon:

```sh
npm run dev
```

### Step 4: Launching the Client

Inside the frontend folder execute:

```sh
npm run dev
```

## Thanks
@chrisblakely01 for his [youtube video](https://www.youtube.com/watch?v=ardeKHEN1j4&ab_channel=ChrisBlakely).

