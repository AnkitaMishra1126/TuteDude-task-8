## Setup instructions
1. Clone the repository
  > git clone "https://github.com/AnkitaMishra1126/TuteDude-task-8/tree/main"
  > cd backend
2. Install dependencies
  > npm i   OR npm install
3. Configure MongoDB Atlas - Open connection/connection.js and replace the connection string with your own MongoDB Atlas URI:
4. for running app
  > npm run dev    

### API Endpoints
POST /api/v1/register
POST /api/v1/signin

POST /api/v2/addlist
PUT /api/v2/updatelist/:id
DELETE /api/v2/deletelist/:id
GET /api/v2/getlist
GET /api/v2/searchlist
PUT /api/v2/update-status/:id

## Environment variables
MONGO_URI= "add your own MongoDB Atlas URI"
PORT=  port number as your need.

## Challenges faced 
1. Understanding MongoDB references between User and List.
2. Implementing password hashing using bcrypt.
3. Managing CRUD operations efficiently.