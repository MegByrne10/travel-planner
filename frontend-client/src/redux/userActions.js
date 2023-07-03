// API CONSTANTS

const BASE_URL = 'http://localhost:3001';
const LOGIN_URL = BASE_URL + '/login';
const SIGNUP_URL = BASE_URL + '/signup';
const LOGOUT_URL = BASE_URL + '/logout';
const TRIPS_URL = 'http://localhost:3001/api/v1/trips';
// const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// Redux Actions

const setUserAction = userObj => ({
  type: 'SET_CURRENT_USER',
  payload: userObj
});

const clearUserAction = () => ({
  type: 'CLEAR_CURRENT_USER'
});

const setTripsAction = tripsObj => ({
  type: 'SET_TRIPS',
  payload: tripsObj
});

// Fetch

export const createUserFromEmailAndPassword = async (firstName, lastName, email, password, passwordConfirmation) => {
  if(!email || !password) return;
  console.log("sending...")
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        "user": {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      }
    )
  };
  fetch(SIGNUP_URL, config)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      // dispatch(setUserAction(data.user));
  });
}

export const loginUserToDB = async (email, password) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        "user": {
          email: email,
          password: password,
        }
      }
    )
  };
  fetch(LOGIN_URL, config)
    .then(r => {
      const authHeader = r.headers.get('Authorization');
      const token = authHeader.slice(7);
      
      console.log("Auth Header:", authHeader);
      console.log("token:", token);
      
      localStorage.setItem('token', token);
      console.log("Storage:", localStorage.token)
    })
    .then(data => {
      // dispatch(setUserAction(data.user));
      // localStorage.setItem('token', data.token);
      
      console.log("Data:", data)
    });
};

// const newUserToDB = userObj => dispatch => {
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userObj)
//   };
//   fetch(SIGNUP_URL, config)
//     .then(r => r.json())
//     .then(data => {
//       console.log(data)
//       dispatch(setUserAction(data.user));
//     });
// };


const logoutUser = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(LOGOUT_URL, config).then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};

export const getTripsFromApi = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    }
  };
  fetch(TRIPS_URL, config)
    .then(r => {r.json()});
    // .then(data => {
    //   console.log(data)
    //   return data;
    // });
    // .then(tripsInstance => {
    //   dispatch(setTripsAction(tripsInstance));
    // });
};


export default {
  createUserFromEmailAndPassword,
  loginUserToDB,
  logoutUser
};