# Firebase Setup for Ainic Webapp

This document explains how to set up Firebase Authentication and Firestore for the Ainic webapp.

## Installation

Firebase has already been installed in the project with the following command:

```bash
npm install firebase --legacy-peer-deps
```

## Configuration

1. Firebase configuration is stored in `lib/firebase.ts`
2. Environment variables are stored in `.env.local` (you'll need to update these with your actual Firebase project credentials)

## Environment Variables

Update the `.env.local` file with your actual Firebase project credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## Firebase Services

The Firebase setup includes:

1. **Authentication** - For user login/signup
2. **Firestore** - For database operations

## Usage Examples

### Authentication

The project includes:
- `contexts/AuthContext.tsx` - Context provider for managing authentication state
- `hooks/useAuth.ts` - Custom hook for authentication functions
- `components/AuthExample.tsx` - Example component showing login/signup functionality

### Firestore

The project includes:
- `lib/firestore.ts` - Utility functions for common Firestore operations
- `components/FirestoreExample.tsx` - Example component showing how to add and retrieve documents

## Implementation

To use Firebase in your components:

1. For authentication, use the `useAuth` hook:
```typescript
import { useAuth } from '@/hooks/useAuth';

export default function MyComponent() {
  const { user, loading, signIn, signUp, logout } = useAuth();
  // ... component logic
}
```

2. For Firestore operations, use the utility functions:
```typescript
import { addDocument, getDocuments } from '@/lib/firestore';

// Add a document
const { error } = await addDocument('collectionName', { data });

// Get documents
const { documents, error } = await getDocuments('collectionName');
```

## Next Steps

1. Update the `.env.local` file with your actual Firebase credentials
2. Test the authentication example component
3. Test the Firestore example component
4. Integrate Firebase functionality into your existing components as needed