# Cortica-Assignment

## Description

This is a responsive FlavorFeast application built with React, Redux, and Chakra UI. It features product listings, cart management, and a smooth user experience with responsive design. Users can add items to the cart, and view their cart with a detailed summary.

## Deployed links
- **Frontend :**
   https://cortica-assignment.vercel.app/
- **Backend :**
  https://cortica-assignment.onrender.com/

## Technology Stack
- **Frontend:** 
React, Redux, Chakra UI, React Router DOM, Axios, React Responsive Carousel
- **Backend:**
Node.js, Express, MongoDB, Mongoose

## Backend

### Folder Structure

- `models/` - Contains Mongoose models.
- `routes/` - Contains Express route handlers.
- `server.js` - Main entry point for the server.
- `db.js` - Connecting Database

### API

- **GET `/api/menu/items`** - Retrive all items.
- **POST `/api/cart/add`** - Add an item to the cart.
- **GET `/api/cart`** - Retrieve all cart items.
- **PUT `/api/cart/update/:id`** - Update the quantity of a cart item.
- **DELETE `/api/cart/delete/:id`** - Remove an item from the cart.

## Frontend

### UI Sample Images

- **Landing Page:**
  ![image](https://github.com/user-attachments/assets/5c382478-d9bc-46cb-9cbe-59a3cce27167)



- **Product Listing Page:**
 ![image](https://github.com/user-attachments/assets/dbe02421-aba5-4327-b7b5-328444e02b02)


- **Product Details:**
  ![image](https://github.com/user-attachments/assets/dbb64111-6abe-4028-b780-8045994c6a92)
  

- **Cart Page:**
  ![image](https://github.com/user-attachments/assets/e196fea2-6042-4548-87f4-5f045e07dbf2)




### Features

- **Hero Section**: Includes a hero image and description.
- **Product Carousel**: Displays a carousel of product images.
- **Responsive Design**: Adapts to different screen sizes and devices.
- **Cart Management**: View and manage cart items with real-time updates.
- **Detailed Cart Summary**: Shows a detailed summary of cart items and total price.


## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Pranavi-Kayapati/Cortica-Assignment.git
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
   npm run server
   ```

2. **Start the Frontend Application:**
   ```bash
   cd frontend
   npm run start
   ```

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

Ensure the following environment variables are set for the backend:

- `PORT` - 8000 (default: `5000`)
- `MONGODB_URL` - `mongodb+srv://pranavi:kayapati@cluster0.e84zy24.mongodb.net/corticaMenu`

Create a `.env` file in the `backend` directory with these variables.


  ----

