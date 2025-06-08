# HubSpot Integration Setup Guide

This guide will help you set up HubSpot integration for the Kilam Schools application to store and manage leads directly in HubSpot.

## 🚀 Quick Start

### 1. Get Your HubSpot Access Token

1. **Log in to your HubSpot account**
2. **Navigate to Settings** (gear icon in the top navigation)
3. **Go to Integrations > Private Apps**
4. **Create a new Private App** or select an existing one
5. **Configure Scopes** - Enable these permissions:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `settings.users.read` (optional, for account info)
6. **Generate Access Token** and copy it

### 2. Configure Environment Variables

Update your `.env.local` file with your real HubSpot credentials:

```bash
# HubSpot Configuration
HUBSPOT_ACCESS_TOKEN=your-actual-hubspot-access-token-here
HUBSPOT_PORTAL_ID=your-hubspot-portal-id

# Development
NODE_ENV=development
```

### 3. Test the Connection

Run the test script to verify your HubSpot connection:

```bash
node test-hubspot.js
```

If successful, you should see output like:

```
🔧 Testing HubSpot API connection...
✅ Environment variables loaded
✅ HubSpot client initialized
✅ Successfully connected to HubSpot!
✅ Contacts API working!
🎉 HubSpot integration test completed successfully!
```

### 4. Start the Development Server

```bash
npm run dev
```

## 📋 Features Implemented

### ✅ What's Working

1. **Form Submissions** - Website forms now save directly to HubSpot
2. **Lead Dashboard** - View and manage leads from HubSpot at `/hubspot-leads`
3. **Search & Filter** - Search leads by name, email, phone, or school
4. **Export to Excel** - Download filtered lead data
5. **Real-time Stats** - See conversion rates and lead scores
6. **Automatic Mapping** - Form data maps to HubSpot contact properties

### 📊 HubSpot Properties Used

The integration uses these HubSpot contact properties:

**Standard Properties:**

- `email` - Student/Parent email
- `firstname` - Student first name
- `lastname` - Student last name
- `phone` - Contact phone number
- `hs_lead_status` - Lead status (NEW, OPEN, IN_PROGRESS, etc.)
- `lifecyclestage` - Set to "lead"
- `hubspotscore` - Lead scoring

**Custom Properties (you may need to create these):**

- `student_class` - Student's current class
- `parent_name` - Parent/Guardian name
- `school` - Current school name
- `address` - Contact address
- `interests` - Areas of interest (comma-separated)
- `lead_source` - Source of the lead
- `budget` - Budget range
- `timeline` - Enrollment timeline

## 🔧 Creating Custom Properties in HubSpot

If you get errors about missing properties, create them in HubSpot:

1. Go to **Settings > Properties**
2. Select **Contact Properties**
3. Click **Create Property**
4. Add these custom properties:

| Property Name | Internal Name   | Type             | Description             |
| ------------- | --------------- | ---------------- | ----------------------- |
| Student Class | `student_class` | Single-line text | Student's current class |
| Parent Name   | `parent_name`   | Single-line text | Parent/Guardian name    |
| School        | `school`        | Single-line text | Current school          |
| Address       | `address`       | Multi-line text  | Contact address         |
| Interests     | `interests`     | Multi-line text  | Areas of interest       |
| Lead Source   | `lead_source`   | Single-line text | Source of the lead      |
| Budget        | `budget`        | Single-line text | Budget range            |
| Timeline      | `timeline`      | Single-line text | Enrollment timeline     |

## 📁 Files Changed

### New Files:

- `.env.local` - Environment variables
- `src/lib/hubspot.js` - HubSpot API functions
- `test-hubspot.js` - Connection test script

### Modified Files:

- `src/app/api/hubspot-leads/route.js` - Updated to use HubSpot API
- `package.json` - Added HubSpot dependencies

## 🔄 Data Flow

1. **Form Submission** → `FormPage.jsx` → `/api/hubspot-leads` → HubSpot Contacts API
2. **Dashboard View** → `hubspot-leads/page.jsx` → `/api/hubspot-leads` → HubSpot Contacts API
3. **Search/Filter** → Query parameters → HubSpot Search API → Filtered results

## 🚨 Troubleshooting

### Common Errors:

**401 Unauthorized**

- Check your access token in `.env.local`
- Verify the token hasn't expired
- Ensure you're using a valid private app token

**403 Forbidden**

- Your token doesn't have required scopes
- Add `crm.objects.contacts.read` and `crm.objects.contacts.write` scopes

**Property doesn't exist**

- Create missing custom properties in HubSpot
- Check property internal names match exactly

**No leads showing**

- Check if you have any contacts in HubSpot
- Verify the lifecycle stage is set to "lead"
- Test with the test script first

### Debug Steps:

1. Run `node test-hubspot.js` to verify connection
2. Check browser console for API errors
3. Verify environment variables are loaded
4. Check HubSpot logs in your account

## 🎯 Next Steps

1. **Replace the dummy access token** in `.env.local` with your real token
2. **Test the connection** using the test script
3. **Create custom properties** in HubSpot if needed
4. **Submit a test form** to verify everything works
5. **Check the dashboard** at `/hubspot-leads` to see your data

## 📞 Support

If you encounter issues:

1. Check the console for error messages
2. Verify your HubSpot permissions
3. Test the connection with the provided test script
4. Review HubSpot's API documentation for any changes
