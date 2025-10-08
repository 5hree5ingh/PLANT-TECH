# EmailJS Setup Instructions

To enable email functionality for the contact form, you need to set up EmailJS service. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (info.planttech@gmail.com)
5. Note down the Service ID (e.g., "service_planttech")

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from your Planttech Engineering website.
```

4. Save the template and note down the Template ID (e.g., "template_contact")

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your Public Key

## 5. Update Configuration
In `src/App.jsx`, update these values in the `handleFormSubmit` function:

```javascript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your actual public key
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check the info.planttech@gmail.com inbox for the email

## Important Notes
- EmailJS free plan allows 200 emails per month
- The service ID, template ID, and public key are safe to use in client-side code
- Make sure to test thoroughly before deploying to production
