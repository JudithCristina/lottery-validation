import {
  auth,
  db,
} from './config';

export const signInWithEmail = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
export const logOut = () => {
  return auth.signOut();
};
