import { customerConstants } from '../../constants/customer';

export const initialState = {
  listReceivers: [],
  checkingAccountNumber: null,
  amountCheckingAccount: null,
  name: null
};
// let inforLogin = JSON.parse(localStorage.getItem("inforLogin"));
// const initiateState = inforLogin ? { loggedIn: true, inforLogin } : { loggingIn: false, inforLogin: { accesstoken: 'null' } };

function transfer(state = initialState, action) {
  switch (action.type) {
    case customerConstants.transfer.GET_LIST_RECEIVERS: {
      const st = { ...state };
      var listReceivers = action.data.customer.listReceivers.map(
        (receiver, i) => {
          return {
            ...receiver,
            id: i + 1,
          };
        }
      );
      st.listReceivers = listReceivers;
      st.checkingAccountNumber =
        action.data.customer.checkingAccount.accountNumber;
      st.name = action.data.customer.name;
      st.email = action.data.customer.email;
      st.username = action.data.customer.username;
      st.amountCheckingAccount = action.data.customer.checkingAccount.amount;
      st.isLogin = action.data.status;
      return st;
    }
    case customerConstants.transfer.UPDATE_LIST_RECEIVERS: {
      const st = { ...state };

      var listReceivers = action.listReceivers.map((receiver, i) => {
        return {
          ...receiver,
          id: i + 1,
        };
      });
      st.listReceivers = listReceivers;

      return st;
    }

    default:
      return state;
  }
}

export default transfer;
