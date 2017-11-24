import { Observable } from 'rxjs/Observable';

export interface ISampleState {
  names: Array<string>;
}

export const sampleInitialState: ISampleState = {
  names: <Array<string>>[]
};

// selects specific slice from sample state
export function getNames(state$: any) {
  return state$.select(state => state.names);
}
