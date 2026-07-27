# AutoHub Dealership Management System

AutoHub is a full-stack web application that allows customers to browse vehicles, reserve cars, and contact a dealership online. It also provides an admin dashboard where staff can manage vehicles and dealership activities.

## Features

### Customer
- Register and Login
- Browse available vehicles
- Search vehicles
- View vehicle details
- Reserve a vehicle
- Send inquiries
- View reservations and payments
- Contact the dealership through WhatsApp

### Admin
- Secure admin dashboard
- Add new vehicles
- Update vehicle information
- Mark vehicles as sold
- Manage reservations
- View customer inquiries
- View dealership statistics

## Technologies Used

### Frontend
- React
- React Router
- Axios
- CSS

### Backend
- Django
- Django REST Framework
- SQLite
- JWT Authentication

## Project Structure

```
AutoHub/
│
├── backend/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

## Installation

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/register/` | Register user |
| POST | `/api/token/` | Login |
| GET | `/api/vehicles/` | View vehicles |
| POST | `/api/reservations/` | Reserve vehicle |
| POST | `/api/inquiries/` | Send inquiry |
| GET | `/api/dashboard/` | Dashboard statistics |

## Screens

- Home
- About
- Cars
- Vehicle Details
- Contact
- Login
- Register
- Dashboard
- Admin Dashboard

## Future Improvements

- M-Pesa payment integration
- Vehicle comparison
- Email notifications
- Vehicle reviews
- Live chat support

## Author

**George Njenga**

## License

This project was developed for educational purposes.