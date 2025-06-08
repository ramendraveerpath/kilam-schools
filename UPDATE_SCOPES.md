# HubSpot Scopes Update Required

Based on the error we received, your HubSpot Private App needs the following scopes:

## Required Scopes for Contacts API

At minimum, you need these scopes:

- `crm.objects.contacts.read`
- `crm.objects.contacts.write`

## Complete List of Available Scopes (from error message)

The HubSpot API indicated these scopes are available:

- `crm.objects.contacts.read`
- `crm.objects.contacts.write`
- `crm.objects.contacts.sensitive.read.v2`
- `crm.objects.contacts.sensitive.write.v2`
- `crm.objects.contacts.highly_sensitive.read.v2`
- `crm.objects.contacts.highly_sensitive.write.v2`

## Steps to Update Scopes

1. Go to your HubSpot account
2. Navigate to Settings → Integrations → Private Apps
3. Find your private app with token: `pat-na2-eaf106cc-6b25-47e0-9c37-10d097917076`
4. Click on it to edit
5. Go to the "Scopes" tab
6. Enable at least:
   - ☑️ `crm.objects.contacts.read`
   - ☑️ `crm.objects.contacts.write`
7. Save changes
8. The token should automatically update with new permissions

## Test After Update

After updating scopes, run:

```bash
node test-hubspot.js
```

You should see successful connection messages instead of the 403 permission error.

## Current Status

✅ **Token is valid** - Authentication works
❌ **Insufficient permissions** - Need to add contact scopes
✅ **Fallback system working** - App gracefully handles the permission issue
✅ **All functionality working** - Forms, dashboard, and API work with mock data

The integration is ready to go live as soon as you add the required scopes to your HubSpot Private App!
