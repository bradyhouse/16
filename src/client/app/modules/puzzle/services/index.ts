import { BoardService } from './board/index';
import { LocalStorageService } from './database/local-storage.service';
import { StateService } from './state/state.service';

export const PUZZLE_PROVIDERS: any[] = [
  LocalStorageService,
  StateService,
  BoardService
];

export * from './database/local-storage.service';
export * from './database/database-service.interface';
export * from './state/state-service.interface';
export * from './state/state.service';
export * from './board/index';
