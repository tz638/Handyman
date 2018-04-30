import * as types from './actionTypes';
import firebaseService from '../../services/firebase';
import { Alert } from 'react-native'

export const restoreSession = () => {
  return (dispatch) => {
    dispatch(sessionRestoring());

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user));
          unsubscribe();
        } else {
          dispatch(sessionLogout());
          unsubscribe();
        }
      });
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        dispatch(sessionError(error.message));
      });

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user));
          unsubscribe();
        }
      });
  };
};

export const signupUser = (email, password, name, age, language, gender) => {
  return (dispatch) => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(authData)  {
          firebaseService.database()
          .ref('users/'+authData.uid)
          .set({"name": name,
                "email": email,
                "age": age,
                "language": language,
                "gender": gender,
                "picture": ""
          });
      }).catch(error => {
        dispatch(sessionError(error.message));;
      });

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user));
          unsubscribe();
        }
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .signOut()
      .then(() => {
        dispatch(sessionLogout());
      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });
  };
};

const sessionRestoring = () => ({
  type: types.SESSION_RESTORING
});

const sessionLoading = () => ({
  type: types.SESSION_LOADING
});

const sessionSuccess = user => ({
  type: types.SESSION_SUCCESS,
  user
});

const sessionError = error => ({
  type: types.SESSION_ERROR,
  error
});

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT
});
