const defaultState = {
  user: 'Bot',
  status: 'offline',
  friends: '732,982',
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      
      return Object.assign({}, state, {
        status: 'online'
      });


      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
