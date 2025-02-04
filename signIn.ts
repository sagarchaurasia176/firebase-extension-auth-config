import {signInWithPopup, GoogleAuthProvider, UserCredential } from 'firebase/auth';
import { auth } from './src/firebaseConfig';
// Google Sign-In Logic
const signInButton = document.getElementById('signIn') as HTMLButtonElement | null;
// signInWithGoogle
export function signIn(): void {
  const auths = auth;
  const provider = new GoogleAuthProvider();
  signInWithPopup(auths, provider)
    .then((result: UserCredential) => {
      if (result.user) {
        console.log("User signed in:", result.user.displayName);
      }
    })
    .catch((error: Error) => {
      console.error("Error during sign-in:", error);
    });
}

if (signInButton) {
  signInButton.addEventListener('click', signIn);
}