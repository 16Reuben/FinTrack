# FinTrack API Documentation

## 📋 Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Base URL](#base-url)
- [Error Handling](#error-handling)
- [Endpoints](#endpoints)
  - [Authentication](#authentication-endpoints)
  - [Users](#users-endpoints)
  - [Customers](#customers-endpoints)
  - [Suppliers](#suppliers-endpoints)
  - [Transactions](#transactions-endpoints)
  - [Invoices](#invoices-endpoints)
  - [Receipts](#receipts-endpoints)
  - [Reports](#reports-endpoints)
  - [Notifications](#notifications-endpoints)
  - [AI Chat](#ai-chat-endpoints)
  - [Voice Analytics](#voice-analytics-endpoints)

## Overview

The FinTrack API is a RESTful API built with Node.js and Express. It provides comprehensive financial management capabilities including user authentication, customer management, supplier management, transaction tracking, invoicing, and reporting.

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Token Refresh

Tokens expire after 7 days by default. Use the refresh endpoint to get a new token:

```javascript
// Refresh token example
const response = await fetch('/api/auth/refresh', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${refreshToken}`,
    'Content-Type': 'application/json'
  }
});
```

## Base URL

```
Development: http://localhost:3001/api
Production: https://your-domain.com/api
```

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information",
  "statusCode": 400
}
```

Common HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Endpoints

### Authentication Endpoints

#### Register User
```http
POST /auth/register
```

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "firstName": "John",
  "lastName": "Doe",
  "businessName": "John's Business",
  "phone": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "businessName": "John's Business"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here"
  }
}
```

#### Login User
```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here"
  }
}
```

#### Refresh Token
```http
POST /auth/refresh
```

**Headers:**
```
Authorization: Bearer <refresh_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "token": "new_jwt_token_here",
    "refreshToken": "new_refresh_token_here"
  }
}
```

#### Logout
```http
POST /auth/logout
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Users Endpoints

#### Get User Profile
```http
GET /users/profile
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "businessName": "John's Business",
    "phone": "+1234567890",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Update User Profile
```http
PUT /users/profile
```

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "businessName": "Smith's Business",
  "phone": "+1234567890"
}
```

### Customers Endpoints

#### Get All Customers
```http
GET /customers?page=1&limit=10&search=john&sortBy=name&sortOrder=asc
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)
- `search` (optional): Search term for name or email
- `sortBy` (optional): Sort field (name, email, createdAt)
- `sortOrder` (optional): Sort order (asc, desc)

**Response:**
```json
{
  "success": true,
  "data": {
    "customers": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "+1234567890",
        "address": "123 Main St",
        "creditLimit": 1000.00,
        "currentBalance": 250.00,
        "createdAt": "2024-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "pages": 3
    }
  }
}
```

#### Create Customer
```http
POST /customers
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "address": "456 Oak Ave",
  "creditLimit": 2000.00,
  "notes": "Preferred customer"
}
```

#### Get Customer by ID
```http
GET /customers/:id
```

#### Update Customer
```http
PUT /customers/:id
```

#### Delete Customer
```http
DELETE /customers/:id
```

### Suppliers Endpoints

#### Get All Suppliers
```http
GET /suppliers?page=1&limit=10&search=supplier&sortBy=name&sortOrder=asc
```

#### Create Supplier
```http
POST /suppliers
```

**Request Body:**
```json
{
  "name": "ABC Supplies",
  "email": "contact@abcsupplies.com",
  "phone": "+1234567890",
  "address": "789 Business Blvd",
  "paymentTerms": "Net 30",
  "creditLimit": 5000.00,
  "currentBalance": 1500.00,
  "notes": "Reliable supplier"
}
```

#### Get Supplier by ID
```http
GET /suppliers/:id
```

#### Update Supplier
```http
PUT /suppliers/:id
```

#### Delete Supplier
```http
DELETE /suppliers/:id
```

### Transactions Endpoints

#### Get All Transactions
```http
GET /transactions?page=1&limit=10&type=income&category=1&startDate=2024-01-01&endDate=2024-12-31
```

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `type` (optional): Transaction type (income, expense)
- `category` (optional): Category ID
- `startDate` (optional): Start date (YYYY-MM-DD)
- `endDate` (optional): End date (YYYY-MM-DD)

#### Create Transaction
```http
POST /transactions
```

**Request Body:**
```json
{
  "type": "income",
  "amount": 1500.00,
  "description": "Payment from customer",
  "categoryId": 1,
  "customerId": 1,
  "date": "2024-01-15",
  "paymentMethod": "bank_transfer",
  "reference": "INV-001",
  "notes": "Payment for invoice #001"
}
```

#### Get Transaction by ID
```http
GET /transactions/:id
```

#### Update Transaction
```http
PUT /transactions/:id
```

#### Delete Transaction
```http
DELETE /transactions/:id
```

### Invoices Endpoints

#### Get All Invoices
```http
GET /invoices?page=1&limit=10&status=pending&customerId=1
```

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `status` (optional): Invoice status (draft, sent, paid, overdue)
- `customerId` (optional): Customer ID

#### Create Invoice
```http
POST /invoices
```

**Request Body:**
```json
{
  "customerId": 1,
  "invoiceNumber": "INV-001",
  "issueDate": "2024-01-15",
  "dueDate": "2024-02-15",
  "items": [
    {
      "description": "Web Development Services",
      "quantity": 1,
      "unitPrice": 1000.00,
      "amount": 1000.00
    }
  ],
  "subtotal": 1000.00,
  "tax": 100.00,
  "total": 1100.00,
  "notes": "Payment due within 30 days"
}
```

#### Get Invoice by ID
```http
GET /invoices/:id
```

#### Update Invoice Status
```http
PUT /invoices/:id/status
```

**Request Body:**
```json
{
  "status": "paid",
  "paymentDate": "2024-01-20",
  "paymentMethod": "bank_transfer"
}
```

#### Delete Invoice
```http
DELETE /invoices/:id
```

### Receipts Endpoints

#### Get All Receipts
```http
GET /receipts?page=1&limit=10&category=expense&startDate=2024-01-01&endDate=2024-12-31
```

#### Upload Receipt
```http
POST /receipts
```

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: multipart/form-data
```

**Form Data:**
- `image`: Receipt image file
- `amount`: Receipt amount
- `description`: Receipt description
- `category`: Receipt category
- `date`: Receipt date
- `merchant`: Merchant name

#### Get Receipt by ID
```http
GET /receipts/:id
```

#### Update Receipt
```http
PUT /receipts/:id
```

#### Delete Receipt
```http
DELETE /receipts/:id
```

### Reports Endpoints

#### Profit & Loss Report
```http
GET /reports/profit-loss?startDate=2024-01-01&endDate=2024-12-31
```

**Response:**
```json
{
  "success": true,
  "data": {
    "period": {
      "startDate": "2024-01-01",
      "endDate": "2024-12-31"
    },
    "income": {
      "total": 50000.00,
      "categories": [
        {
          "category": "Services",
          "amount": 40000.00
        },
        {
          "category": "Products",
          "amount": 10000.00
        }
      ]
    },
    "expenses": {
      "total": 30000.00,
      "categories": [
        {
          "category": "Office Supplies",
          "amount": 5000.00
        },
        {
          "category": "Utilities",
          "amount": 25000.00
        }
      ]
    },
    "netProfit": 20000.00
  }
}
```

#### Cash Flow Report
```http
GET /reports/cash-flow?startDate=2024-01-01&endDate=2024-12-31
```

#### Dashboard Summary
```http
GET /reports/dashboard
```

### Notifications Endpoints

#### Get Notifications
```http
GET /notifications?page=1&limit=10&read=false
```

#### Mark Notification as Read
```http
PUT /notifications/:id/read
```

#### Delete Notification
```http
DELETE /notifications/:id
```

### AI Chat Endpoints

#### Send Message
```http
POST /ai-chat/message
```

**Request Body:**
```json
{
  "message": "What's my current cash flow?",
  "context": "financial_summary"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": "Based on your recent transactions, your current cash flow is positive with $15,000 in available funds...",
    "suggestions": [
      "View detailed cash flow report",
      "Check upcoming expenses",
      "Review customer payments"
    ]
  }
}
```

### Voice Analytics Endpoints

#### Process Voice Input
```http
POST /voice-analytics/process
```

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: multipart/form-data
```

**Form Data:**
- `audio`: Audio file (WAV, MP3, M4A)

**Response:**
```json
{
  "success": true,
  "data": {
    "transcription": "I spent 50 dollars on office supplies yesterday",
    "intent": "expense_tracking",
    "entities": {
      "amount": 50,
      "category": "office_supplies",
      "date": "yesterday"
    },
    "action": "create_transaction"
  }
}
```

## Rate Limiting

The API implements rate limiting to prevent abuse:
- **Authentication endpoints**: 5 requests per minute
- **Other endpoints**: 100 requests per minute per user

## Pagination

Most list endpoints support pagination with the following parameters:
- `page`: Page number (starts from 1)
- `limit`: Items per page (default: 10, max: 100)

Response includes pagination metadata:
```json
{
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "pages": 15,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## File Upload

For file uploads (receipts, voice recordings), use `multipart/form-data`:
- Maximum file size: 10MB
- Supported formats: JPG, PNG, PDF, WAV, MP3, M4A
- Files are stored securely and accessible via unique URLs

## WebSocket Support

Real-time notifications are available via WebSocket connection:
```
ws://localhost:3001/ws
```

Subscribe to notifications:
```javascript
const ws = new WebSocket('ws://localhost:3001/ws');
ws.onmessage = (event) => {
  const notification = JSON.parse(event.data);
  console.log('New notification:', notification);
};
```

## SDK Examples

### JavaScript/TypeScript
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 10000
});

// Add auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Example: Get customers
const getCustomers = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/customers?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};
```

### Python
```python
import requests

class FinTrackAPI:
    def __init__(self, base_url, token=None):
        self.base_url = base_url
        self.token = token
        self.session = requests.Session()
        
        if token:
            self.session.headers.update({
                'Authorization': f'Bearer {token}'
            })
    
    def get_customers(self, page=1, limit=10):
        response = self.session.get(
            f'{self.base_url}/customers',
            params={'page': page, 'limit': limit}
        )
        return response.json()
```

## Testing

Test the API using tools like Postman, curl, or the provided test scripts:

```bash
# Test authentication
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Test protected endpoint
curl -X GET http://localhost:3001/api/customers \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Support

For API support and questions:
- Check the [main documentation](documentation.md)
- Review the [integration guide](INTEGRATION_GUIDE.md)
- Create an issue in the repository

