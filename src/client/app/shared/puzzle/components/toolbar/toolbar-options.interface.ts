import {ToolbarStateEnum} from './toolbar-state.enum';
import {
  ActionsServiceInterface,
  StateServiceInterface
} from './../../index';

export interface ToolbarOptionsInterface {
  id: string;
  state: ToolbarStateEnum;
  actionService?: ActionsServiceInterface;
  stateService?: StateServiceInterface;
  isAbout: boolean;
  toggleText?: string;
  toggleTitle?: string;
  aboutText?: string;
  aboutTitle?: string;
}
