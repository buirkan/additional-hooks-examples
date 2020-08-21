export const initialState = { count: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    case 'res':
      return initialState;
    default:
      throw new Error();
  };
};