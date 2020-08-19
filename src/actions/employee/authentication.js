import { employeeConstants } from '../../constants/employee';

const login = (username, password, role) => {
  return (dispatch) => {
    return fetch('https://great-banking.herokuapp.com/employees/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) =>
      response.json().then((data) => {
        dispatch({
          type: employeeConstants.authentication.LOGIN_EMP,
          data,
          role,
        });
      })
    );
  };
};

export const authenticationEmployeeActions = {
  login,
  //logout,
  //changePassword,
};
