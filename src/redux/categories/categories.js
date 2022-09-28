const CEHCK_STATUS = 'CEHCK_STATUS';
const initailState = [];

export default function reducer(state = initailState, action) {
  switch (action.type) {
    case CEHCK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Check Status Action
export function checkStatus() {
  return { type: CEHCK_STATUS };
}
