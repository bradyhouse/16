
export enum EventType {
  SHAKE = 1,
  SOLUTION = 2
}


// event interface
export interface IEvent {
  type: EventType;
  data: any;
}
