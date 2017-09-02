import {Injectable} from '@angular/core';
import 'rxjs/add/operator/share';
import {
  StateService,
  LocalStorageService
} from '../../modules/puzzle/index';

@Injectable()
export class PuzzleStateService extends StateService {
  constructor(databaseService: LocalStorageService) {
    super(databaseService);
  }
}
