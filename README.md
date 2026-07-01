# 📝 Taskify Frontend
Taskify is a modern To-Do list appliction build using **React**,**Vite**,and **Tailwind Css**

# Features
- User Registration
- User Login
- View all tasks
- Add new task
- Edit existing task
- Delete task
- Search tasks [debounced search]
- Edit task status [pending / completed]
- Authentication using react context Api

## Technologies used
- React + vite
- Tailwind Css
- axios
- react router dom
- react icons

## Installation 
step.1 - //clone the repository
           git clone ""
step.2 - //navigate to the project
          cd frontend
step.3 - // install dependencies
         npm i OR npm install
step.4 - //start the server
         npm run dev
The application will run at:
http://localhost:5173/


## 🔗Backend
Make sure the backend server is running before starting the frontend.
Backend URL: http://loaclhost:3000

## API Endpoints
For authentication:
  POST /api/v1/register
  POST /api/v1/signin
 
For tasks: 
POST /api/v2/addlist
PUT /api/v2/updatelist/:id
DELETE /api/v2/deletelist/:id
GET /api/v2/getlist
GET /api/v2/searchlist
PUT /api/v2/update-status/:id


## ScreenShort
- Register Page (<Screenshot 2026-07-01 160857.png>)
- Login Page    (<Screenshot 2026-07-01 160921.png>)
- Dashboard     
- Add Task Model
- Edit Task Model
- Search Bar
- Task Cards
