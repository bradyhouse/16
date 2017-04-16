import { DatabaseService } from './database/database.service';
import { StateService } from './state/state.service';

export const PUZZLE_PROVIDERS: any[] = [
  DatabaseService,
  StateService
];

export * from './database/database-service.interface';
export * from './database/database.service';
export * from './state/state-service.interface';
export * from './state/state.service';
