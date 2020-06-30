import { employeeConstants } from '../../constants/employee';
import axios from "axios"
const saveProfile = (accessToken) => {
  return (dispatch) => {
    return axios.get('http://localhost:3001/employees/info/profile', {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'access-token': accessToken,
      },
    }).then((data) => {
        const info = data.data.employee;
      return dispatch({ type: employeeConstants.info.SAVE_PROFILE_EMP, data: info });
    });
  };
};

export const profileEmployeeActions = {
  saveProfile,
};
