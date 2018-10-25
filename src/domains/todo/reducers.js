import reducerRegister from '@/support/redux/reducerRegister'

const reducers = {
  'ADD_TODO': (state, action) =>
    Object.assign({}, state, [
      ...state,
      action.todo
    ])
}

export default reducerRegister(reducers, [])