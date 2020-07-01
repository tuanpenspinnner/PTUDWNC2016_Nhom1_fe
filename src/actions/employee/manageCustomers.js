import { employeeConstants } from '../../constants/employee';
import axios from 'axios';
const getListAccounts = (accessToken) => {
  return (dispatch) => {
    return axios
      .get('http://localhost:3001/employees/account-customers', {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'access-token': accessToken,
        },
      })
      .then((data) => {
        const result = data.data;
        return dispatch({
          type: employeeConstants.moneyRecharge.GET_LIST_ACCOUNTS,
          data: result,
        });
      });
  };
};
const moneyRecharge = (accessToken, username, accountNumber, amount, type) => {
  return (dispatch) => {
    return axios
      .post(
        'http://localhost:3001/employees/money-recharge',
        {
          username: username,
          accountNumber: accountNumber,
          amount: amount,
          type: type,
        },
        {
          headers: {
            'access-token': accessToken,
          },
        }
      )
      .then((data) => {
        const result = data.data;
        return dispatch({
          type: employeeConstants.moneyRecharge.RECHARGE_MONEY,
          data: result,
        });
      });
  };
};
export const manageCustomersActions = {
  getListAccounts,
  moneyRecharge,
};
