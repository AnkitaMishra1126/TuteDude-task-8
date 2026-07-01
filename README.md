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
- Register Page <img width="1905" height="965" alt="Screenshot 2026-07-01 160857" src="https://github.com/user-attachments/assets/0f71fc6d-5639-46c5-9e58-0f6d011ecbd3" />

- Login Page  
<img width="1905" height="967" alt="Screenshot 2026-07-01 160921" src="https://github.com/user-attachments/assets/13ef0d92-30c6-48af-a5d2-d678462824b5" />

- Dashboard    <img width="1852" height="967" alt="Screenshot 2026-07-01 160720" src="https://github.com/user-attachments/assets/061ceed2-be17-4f76-97b7-195f64f56822" />

- Add Task Model  <img width="1828" height="911" alt="Screenshot 2026-07-01 160818" src="https://github.com/user-attachments/assets/1a7a333e-9c03-4d8c-919e-6f7d6b7d9fd5" />

- Edit Task Model  <img width="1835" height="915" alt="Screenshot 2026-07-01 160751" src="https://github.com/user-attachments/assets/9d4d5f78-c1ad-4f4e-8ec1-f95d0d5bf538" />

- Search Bar     <img width="1837" height="950" alt="Screenshot 2026-07-01 164149" src="https://github.com/user-attachments/assets/19229639-d739-4304-bd74-e7c8ab22f8d9" />

- Task Cards     <img width="1853" height="907" alt="Screenshot 2026-07-01 164240" src="https://github.com/user-attachments/assets/7eb82ebf-7f26-4116-bb86-b26cbc1a9072" />

-NotFound Page   <img width="1895" height="943" alt="Screenshot 2026-07-01 194904" src="https://github.com/user-attachments/assets/29dc5b9d-6ff9-42bc-a73f-6f9f899a1d2b" />

-EmptyState page  <img width="1905" height="917" alt="Screenshot 2026-07-01 195353" src="https://github.com/user-attachments/assets/6d5c2099-b5e6-4cb2-b4ee-24dc883e3114" />



