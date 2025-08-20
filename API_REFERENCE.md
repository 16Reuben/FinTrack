# FinTrack API Reference

## Quick Start

**Base URL:** `http://localhost:3001/api` (development)

**Authentication:** Include JWT token in Authorization header
```
Authorization: Bearer <your-jwt-token>
```

## Authentication

### Register
```http
POST /auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com", 
  "password": "securepassword123",
  "firstName": "John",
  "lastName": "Doe",
  "businessName": "John's Business"
}
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Refresh Token
```http
POST /auth/refresh
Authorization: Bearer <refresh_token>
```

## Core Endpoints

### Customers

**Get All Customers**
```http
GET /customers?page=1&limit=10&search=john
```

**Create Customer**
```http
POST /customers
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "address": "456 Oak Ave",
  "creditLimit": 2000.00
}
```

**Get Customer**
```http
GET /customers/:id
```

**Update Customer**
```http
PUT /customers/:id
Content-Type: application/json

{
  "name": "Jane Smith Updated",
  "email": "jane.updated@example.com"
}
```

**Delete Customer**
```http
DELETE /customers/:id
```

### Suppliers

**Get All Suppliers**
```http
GET /suppliers?page=1&limit=10
```

**Create Supplier**
```http
POST /suppliers
Content-Type: application/json

{
  "name": "ABC Supplies",
  "email": "contact@abcsupplies.com",
  "phone": "+1234567890",
  "address": "789 Business Blvd",
  "paymentTerms": "Net 30"
}
```

**Get/Update/Delete Supplier**
```http
GET /suppliers/:id
PUT /suppliers/:id
DELETE /suppliers/:id
```

### Transactions

**Get All Transactions**
```http
GET /transactions?type=income&startDate=2024-01-01&endDate=2024-12-31
```

**Create Transaction**
```http
POST /transactions
Content-Type: application/json

{
  "type": "income",
  "amount": 1500.00,
  "description": "Payment from customer",
  "categoryId": 1,
  "customerId": 1,
  "date": "2024-01-15"
}
```

**Get/Update/Delete Transaction**
```http
GET /transactions/:id
PUT /transactions/:id
DELETE /transactions/:id
```

### Invoices

**Get All Invoices**
```http
GET /invoices?status=pending&customerId=1
```

**Create Invoice**
```http
POST /invoices
Content-Type: application/json

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
  "total": 1100.00
}
```

**Update Invoice Status**
```http
PUT /invoices/:id/status
Content-Type: application/json

{
  "status": "paid",
  "paymentDate": "2024-01-20"
}
```

### Receipts

**Get All Receipts**
```http
GET /receipts?category=expense&startDate=2024-01-01&endDate=2024-12-31
```

**Upload Receipt**
```http
POST /receipts
Content-Type: multipart/form-data

Form fields:
- image: Receipt image file
- amount: Receipt amount
- description: Receipt description
- category: Receipt category
- date: Receipt date
```

### Reports

**Profit & Loss Report**
```http
GET /reports/profit-loss?startDate=2024-01-01&endDate=2024-12-31
```

**Cash Flow Report**
```http
GET /reports/cash-flow?startDate=2024-01-01&endDate=2024-12-31
```

**Dashboard Summary**
```http
GET /reports/dashboard
```

### AI Chat

**Send Message**
```http
POST /ai-chat/message
Content-Type: application/json

{
  "message": "What's my current cash flow?",
  "context": "financial_summary"
}
```

### Voice Analytics

**Process Voice Input**
```http
POST /voice-analytics/process
Content-Type: multipart/form-data

Form fields:
- audio: Audio file (WAV, MP3, M4A)
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information",
  "statusCode": 400
}
```

### Paginated Response
```json
{
  "success": true,
  "data": {
    "items": [
      // Array of items
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 150,
      "pages": 15
    }
  }
}
```

## Common HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Query Parameters

### Pagination
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10, max: 100)

### Filtering
- `search` - Search term for text fields
- `type` - Filter by type (income/expense, etc.)
- `status` - Filter by status
- `startDate` - Start date (YYYY-MM-DD)
- `endDate` - End date (YYYY-MM-DD)

### Sorting
- `sortBy` - Sort field
- `sortOrder` - Sort order (asc/desc)

## File Upload

- **Max file size:** 10MB
- **Supported formats:** JPG, PNG, PDF, WAV, MP3, M4A
- **Content-Type:** `multipart/form-data`

## Rate Limiting

- **Auth endpoints:** 5 requests/minute
- **Other endpoints:** 100 requests/minute per user

## Testing Examples

### Using curl

**Login:**
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Get Customers:**
```bash
curl -X GET http://localhost:3001/api/customers \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Using JavaScript

```javascript
const api = {
  baseURL: 'http://localhost:3001/api',
  
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers
      },
      ...options
    };
    
    const response = await fetch(`${this.baseURL}${endpoint}`, config);
    return response.json();
  },
  
  // Get customers
  async getCustomers(page = 1, limit = 10) {
    return this.request(`/customers?page=${page}&limit=${limit}`);
  },
  
  // Create customer
  async createCustomer(customerData) {
    return this.request('/customers', {
      method: 'POST',
      body: JSON.stringify(customerData)
    });
  }
};
```

## WebSocket Support

Real-time notifications via WebSocket:
```
ws://localhost:3001/ws
```

```javascript
const ws = new WebSocket('ws://localhost:3001/ws');
ws.onmessage = (event) => {
  const notification = JSON.parse(event.data);
  console.log('New notification:', notification);
};
```

## Error Handling

Always check the response status and handle errors appropriately:

```javascript
try {
  const response = await api.getCustomers();
  if (response.success) {
    // Handle success
    console.log(response.data);
  } else {
    // Handle API error
    console.error(response.message);
  }
} catch (error) {
  // Handle network/other errors
  console.error('Request failed:', error);
}
```

## Support

- Check [main documentation](documentation.md) for detailed guides
- Review [integration guide](INTEGRATION_GUIDE.md) for setup instructions
- Create an issue in the repository for bugs or questions

