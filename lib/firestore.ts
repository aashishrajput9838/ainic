import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

// Example function to add a document to a collection
export async function addDocument(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error };
  }
}

// Example function to get documents from a collection
export async function getDocuments(collectionName: string) {
  try {
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    const documents: any[] = [];
    
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    
    return { documents, error: null };
  } catch (error) {
    return { documents: [], error };
  }
}

// Example function to get documents with a filter
export async function getDocumentsByField(collectionName: string, field: string, value: any) {
  try {
    const q = query(collection(db, collectionName), where(field, '==', value));
    const querySnapshot = await getDocs(q);
    const documents: any[] = [];
    
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    
    return { documents, error: null };
  } catch (error) {
    return { documents: [], error };
  }
}

// Example function to update a document
export async function updateDocument(collectionName: string, docId: string, data: any) {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    return { error: null };
  } catch (error) {
    return { error };
  }
}

// Example function to delete a document
export async function deleteDocument(collectionName: string, docId: string) {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return { error: null };
  } catch (error) {
    return { error };
  }
}