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
step 1. //clone the repository <br>
           git clone "https://github.com/AnkitaMishra1126/TuteDude-task-8.git"<br>
step 2. //navigate to the project <br>
          cd frontend<br>
step 3. // install dependencies<br>
         npm i OR npm install<br>
step 4. //start the server<br>
         npm run dev<br>
The application will run at: 
http://localhost:5173/


## 🔗Backend
Make sure the backend server is running before starting the frontend.<br>
Backend URL: http://loaclhost:3000

## API Endpoints
For authentication:<br>
- POST /api/v1/register<br>
- POST /api/v1/signin<br>
 
For tasks: <br>
- POST /api/v2/addlist<br>
- PUT /api/v2/updatelist/:id<br>
- DELETE /api/v2/deletelist/:id<br>
- GET /api/v2/getlist<br>
- GET /api/v2/searchlist<br>
- PUT /api/v2/updatestatus/:id<br>

## Challenges Faced [Frontend]

### 1. Implementing Task Search

One of the main challenges I faced was implementing the search functionality. Initially, the search API was called on every keystroke. For example, when searching for **"Resume"**, the application sent multiple requests:

<br>
R  <br>
Re <br>
Res<br>
Resu<br>
Resum<br>
Resume<br>
<br>

This caused multiple API calls, unnecessary re-rendering, and sometimes the task list became blank while typing because the UI was updating with each request.

After researching and learning about the **debounce** technique, I implemented a debounced search using React's `useEffect` and `setTimeout`. Now, the application waits for the user to stop typing for a short time before making a single API request. This reduced unnecessary API calls, improved performance, and provided a smoother user experience.

### 2. Connecting Frontend with Backend APIs

Another challenge was correctly integrating the frontend with the backend APIs. I encountered issues with incorrect query parameters and API endpoints, which prevented tasks from loading correctly. After debugging the requests using the browser's Developer Tools and Thunder Client, I corrected the API calls and ensured proper communication between the frontend and backend.

### 3. Managing Authentication State

Managing the logged-in user's information across different pages was another challenge. I solved this by using the React Context API, which allowed me to store the authenticated user's data globally and access it throughout the application without prop drilling.

## Challenges faced [backend]
1. Understanding MongoDB references between User and List.
2. Implementing password hashing using bcrypt.
3. Managing CRUD operations efficiently.

## ScreenShort
- Register Page <img width="1905" height="965" alt="Screenshot 2026-07-01 160857" src="https://github.com/user-attachments/assets/0f71fc6d-5639-46c5-9e58-0f6d011ecbd3" />

- Login Page  
<img width="1905" height="967" alt="Screenshot 2026-07-01 160921" src="https://github.com/user-attachments/assets/13ef0d92-30c6-48af-a5d2-d678462824b5" />

- Dashboard    <img width="1852" height="967" alt="Screenshot 2026-07-01 160720" src="https://github.com/user-attachments/assets/061ceed2-be17-4f76-97b7-195f64f56822" />

- Add Task Model  <img width="1828" height="911" alt="Screenshot 2026-07-01 160818" src="https://github.com/user-attachments/assets/1a7a333e-9c03-4d8c-919e-6f7d6b7d9fd5" />

- Edit Task Model  <img width="1835" height="915" alt="Screenshot 2026-07-01 160751" src="https://github.com/user-attachments/assets/9d4d5f78-c1ad-4f4e-8ec1-f95d0d5bf538" />

- Search Bar     <img width="1837" height="950" alt="Screenshot 2026-07-01 164149" src="https://github.com/user-attachments/assets/19229639-d739-4304-bd74-e7c8ab22f8d9" />

- Task Cards     <img width="1853" height="907" alt="Screenshot 2026-07-01 164240" src="https://github.com/user-attachments/assets/7eb82ebf-7f26-4116-bb86-b26cbc1a9072" />

- NotFound Page   <img width="1895" height="943" alt="Screenshot 2026-07-01 194904" src="https://github.com/user-attachments/assets/29dc5b9d-6ff9-42bc-a73f-6f9f899a1d2b" />

- EmptyState page  <img width="1905" height="917" alt="Screenshot 2026-07-01 195353" src="https://github.com/user-attachments/assets/6d5c2099-b5e6-4cb2-b4ee-24dc883e3114" />
## Deployment

### Backend

Deployed on **Render**

Base URL:

https://task-8-gkpe.onrender.com

All API testing was performed using this deployed backend.

### Frontend

Deployed on **Netlify**

Base URL:

https://famous-donut-f3c594.netlify.app


## API Testing
All backend APIs were tested using **Postman** aganist the deployed Render backend to ensure they work correctly in a productive environment.

##Testing Endpoints
- POST /api/v1/register<br>   <img width="1427" height="880" alt="Screenshot 2026-07-05 193955" src="https://github.com/user-attachments/assets/801e11c1-934a-4f63-9b20-b41de1232f95" />

- POST /api/v1/signin<br>    <img width="1438" height="922" alt="Screenshot 2026-07-05 194045" src="https://github.com/user-attachments/assets/9b8dc7b3-4f74-4097-b2b4-a0046e909478" />

- POST /api/v2/addlist<br>  <img width="1903" height="921" alt="Screenshot 2026-07-05 192949" src="https://github.com/user-attachments/assets/d4098958-a112-4325-8a4b-659e8e9df7e6" />

- PUT /api/v2/updatelist/:id<br> <img width="1442" height="930" alt="Screenshot 2026-07-05 193445" src="https://github.com/user-attachments/assets/8b3fe404-59bf-49d8-94a8-289e52375de2" />

- DELETE /api/v2/deletelist/:id<br> <img width="1296" height="856" alt="Screenshot 2026-07-05 193808" src="https://github.com/user-attachments/assets/79d98a0f-6698-498d-b478-8d5f6c021dd4" />

- GET /api/v2/getlist<br> <img width="1437" height="975" alt="Screenshot 2026-07-05 193559" src="https://github.com/user-attachments/assets/9419ffe1-2e85-4cc6-823d-5032d55ed43c" />

- GET /api/v2/searchlist<br> <img width="1915" height="937" alt="Screenshot 2026-07-06 123829" src="https://github.com/user-attachments/assets/a205370c-82da-42a7-9b68-36fdc6037d45" />

- PUT /api/v2/updatestatus/:id<br><img width="1847" height="1072" alt="Screenshot 2026-07-06 122116" src="https://github.com/user-attachments/assets/94838fe6-0e71-43de-8680-d00d549f7653" />


