## 📌 Mô tả dự án

**De Vinc Front End** là giao diện người dùng cho nền tảng **De Vinc**, được triển khai tại **https://devinc.vn**.  
Dự án tập trung vào **trải nghiệm người dùng**, **hiệu năng**, và **quản lý trạng thái chính xác**, kết nối trực tiếp với backend để hiển thị và xử lý dữ liệu.

---

## 📦 Công nghệ sử dụng

| Công nghệ | Mục đích |
|---------|----------|
| React | Frontend UI |
| React Router | Điều hướng |
| Redux toolkit (saga) / Context API / Hooks | State management |
| Axios / Fetch | Giao tiếp API |

---

## 🛠 Cài đặt & Chạy project

### 1. Clone repository

```bash
git clone https://github.com/quangdung861/de-vinc-front-end.git
cd de-vinc-front-end
```
### 2. Clone repository
```bash
npm install
# or
yarn install
```
### 3. Environment Configuration

Create a `.env` file in the root directory and configure the required environment variables to connect to the backend:

```env
REACT_APP_API_ORIGIN=your_api_domain
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