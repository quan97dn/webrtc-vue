import firebase from 'firebase';

import { SignIn } from  '../../common/interfaces/interface-auth';

export default {
  signIn (data: SignIn, complete: any, error?: any) {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((user) => {
      complete(user);
    }, (err) => {
      error(err);
    });
  },
  signUp (data: SignIn, complete: any, error?: any) {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((user) => {
      complete(user);
    }, (err) => {
      error(err);
    });
  },
  signOut (complete: any, error?: any) {
    firebase.auth().signOut().then((user) => {
      complete(user);
    }, (err) => {
      error(err);
    });
  }
}
