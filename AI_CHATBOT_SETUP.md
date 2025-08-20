# AI Chatbot Feature Setup Guide

## Overview
The FinTrack app now includes an intelligent AI chatbot that can answer questions about your financial data, including customers, suppliers, transactions, invoices, and more. The chatbot has access to your database and can provide insights and analysis based on your actual business data.

## Features

### 🤖 AI Assistant Capabilities
- **Customer Analysis**: Ask about customer balances, status, recent activity
- **Supplier Insights**: Get information about suppliers, payments, and relationships
- **Transaction History**: Query recent transactions, amounts, and trends
- **Invoice Management**: Check invoice status, overdue payments, and balances
- **Financial Reports**: Get insights on income, expenses, and cash flow
- **Account Balances**: View current account balances and summaries

### 💬 Chat Interface
- **Modern UI**: Beautiful gradient design with smooth animations
- **Quick Suggestions**: Pre-built questions for common queries
- **Real-time Responses**: Instant AI-powered answers
- **Conversation History**: Maintains context across multiple messages
- **Floating Action Button**: Quick access from any screen

## Setup Instructions

### 1. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install openai
```

#### Configure OpenAI API Key
1. Get an OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Update `backend/config.env`:
```env
OPENAI_API_KEY=your-actual-openai-api-key-here
```

#### Start the Backend Server
```bash
cd backend
npm run dev
```

### 2. Frontend Setup

The frontend components are already integrated. The AI chatbot is accessible through:
- **Drawer Menu**: "AI Assistant" option
- **Floating Action Button**: Available on the main dashboard

### 3. API Endpoints

The AI chatbot uses these new endpoints:

#### POST `/api/ai-chat/chat`
Send a message to the AI assistant
```json
{
  "message": "What are my top 5 customers by balance?",
  "conversationHistory": [
    {
      "role": "user",
      "content": "Previous message",
      "timestamp": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### GET `/api/ai-chat/suggestions`
Get quick question suggestions
```json
{
  "suggestions": [
    "What are my top 5 customers by balance?",
    "Show me recent transactions over $1000",
    "What's my total income vs expenses this month?"
  ]
}
```

## Usage Examples

### Customer Queries
- "What are my top 5 customers by balance?"
- "How many active customers do I have?"
- "Show me customers with overdue invoices"
- "What's the average customer balance?"

### Transaction Queries
- "Show me recent transactions over $1000"
- "What's my total income this month?"
- "Which transactions are pending?"
- "What's my cash flow trend?"

### Supplier Queries
- "Which suppliers do I owe money to?"
- "How much do I spend on suppliers monthly?"
- "Show me my most expensive suppliers"
- "Which suppliers are inactive?"

### Financial Analysis
- "What's my total income vs expenses this month?"
- "Show me overdue invoices"
- "What's my account balance summary?"
- "What's my cash flow trend?"

## Technical Details

### Database Access
The AI chatbot has read-only access to:
- Customers table
- Suppliers table
- Transactions table
- Invoices table
- Receipts table
- Accounts table

### AI Model
- **Model**: GPT-3.5-turbo
- **Context**: Includes recent business data and conversation history
- **Response Limit**: 500 tokens per response
- **Temperature**: 0.7 (balanced creativity and accuracy)

### Security
- **Authentication**: All requests require valid JWT token
- **Business Isolation**: Users can only access their own business data
- **Rate Limiting**: Standard API rate limits apply
- **Data Privacy**: No data is stored by OpenAI beyond the request

## Troubleshooting

### Common Issues

#### 1. "Failed to send message" Error
- Check if OpenAI API key is correctly set in `config.env`
- Verify the backend server is running
- Check network connectivity

#### 2. "No data available" Responses
- Ensure you have data in your database
- Check if the user has proper business_id association
- Verify database permissions

#### 3. Slow Response Times
- Check OpenAI API status
- Verify network connection
- Consider upgrading OpenAI plan for faster responses

### Debug Mode
Enable debug logging by setting:
```env
NODE_ENV=development
```

## Cost Considerations

### OpenAI API Costs
- **GPT-3.5-turbo**: ~$0.002 per 1K tokens
- **Typical conversation**: 2-5 cents per interaction
- **Monthly estimate**: $10-50 depending on usage

### Optimization Tips
- Keep conversations concise
- Use specific questions for better responses
- Implement caching for common queries (future enhancement)

## Future Enhancements

### Planned Features
- **Voice Input**: Speech-to-text for hands-free operation
- **Data Visualization**: Charts and graphs in responses
- **Action Items**: Ability to perform actions based on AI suggestions
- **Multi-language Support**: Chat in different languages
- **Custom Training**: Train on specific business terminology

### Integration Opportunities
- **Email Integration**: Send reports via email
- **Calendar Integration**: Schedule follow-ups
- **Notification System**: Proactive alerts and insights
- **Export Features**: Export AI insights to reports

## Support

For technical support or feature requests:
1. Check the troubleshooting section above
2. Review the API documentation
3. Contact the development team

---

**Note**: The AI chatbot is designed to provide helpful insights but should not replace professional financial advice. Always verify important financial decisions with qualified professionals. 