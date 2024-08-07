# Cortica-Assignment

## Description

This is a responsive e-commerce application built with React, Redux, and Chakra UI. It features product listings, cart management, and a smooth user experience with responsive design. Users can browse products, add items to the cart, and view their cart with a detailed summary.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

## Running

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend Application:**
   ```bash
   cd frontend
   npm start
   ```

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

Ensure the following environment variables are set for the backend:

- `PORT` - 8000 (default: `5000`)
- `MONGODB_URL` - `mongodb+srv://pranavi:kayapati@cluster0.e84zy24.mongodb.net/corticaMenu`

Create a `.env` file in the `backend` directory with these variables.

## Backend

### Folder Structure

- `models/` - Contains Mongoose models.
- `routes/` - Contains Express route handlers.
- `controllers/` - Contains logic for route handling.
- `middleware/` - Contains custom middleware.
- `config/` - Contains configuration files.
- `server.js` - Main entry point for the server.

### API

- **POST `/api/cart/add`** - Add an item to the cart.
- **GET `/api/cart`** - Retrieve all cart items.
- **PUT `/api/cart/update/:id`** - Update the quantity of a cart item.
- **DELETE `/api/cart/delete/:id`** - Remove an item from the cart.

## Frontend

### UI Sample Images

- **Landing Page:**
  https://github.com/user-attachments/assets/357fcccd-67ce-4e91-8141-9971a5d756cc
)

- **Product Listing Page:**
  https://github.com/user-attachments/assets/5e3aa92c-8eb4-47e1-af16-d557f6340ebf
)
- **Product Details:**
  https://github.com/user-attachments/assets/dbb64111-6abe-4028-b780-8045994c6a92
)
)
- **Cart Page:**
https://github.com/user-attachments/assets/428a7287-3ce3-4674-9498-c49b017aa761
)

### Features

- **Hero Section**: Includes a hero image and description.
- **Product Carousel**: Displays a carousel of product images and names.
- **Responsive Design**: Adapts to different screen sizes and devices.
- **Cart Management**: View and manage cart items with real-time updates.
- **Detailed Cart Summary**: Shows a detailed summary of cart items and total price.

---

Replace `<repository-url>` and `<repository-directory>` with your actual repository URL and directory name. Update the paths to UI sample images as necessary.
```## Description

This is a responsive e-commerce application built with React, Redux, and Chakra UI. It features product listings, cart management, and a smooth user experience with responsive design. Users can browse products, add items to the cart, and view their cart with a detailed summary.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
Install Dependencies:
-**For the backend**:
-```bash
cd backend
npm install```
-**For the frontend**:
```bash
cd frontend
npm install```
