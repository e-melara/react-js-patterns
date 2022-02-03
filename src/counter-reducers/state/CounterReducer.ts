import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      };
    case "incrementBy":
      return {
        previous: state.counter,
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
      };
    default:
      return state;
  }
};
