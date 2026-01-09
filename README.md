## 📌 Project Description

**De Vinc Front End** is the user interface of the **De Vinc** platform, deployed at **https://devinc.vn**.  
The project focuses on **user experience**, **performance**, and **accurate state management**, communicating directly with the backend to display and process data efficiently.

---

## 📦 Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Frontend UI |
| React Router | Client-side routing |
| Redux Toolkit (Saga) / Context API / Hooks | State management |
| Axios / Fetch | API communication |

---

## 🛠 Install & Run project

### 1. Clone repository

```bash
git clone https://github.com/quangdung861/de-vinc-front-end.git
cd de-vinc-front-end
```
### 2. Install dependencies
```bash
npm install
# or
yarn install
```
### 3. Environment Configuration

Create a `.env` file in the root directory and configure the required environment variables to connect to the backend:

```env
REACT_APP_API_BASE_URL=your_api_domain
```

### 4. Run the project in development mode
```bash
npm start
# or
yarn start
```
The application will be available at:
👉 http://localhost:3000

### 5. Build for production
```bash
npm run build
# or
yarn build
```
