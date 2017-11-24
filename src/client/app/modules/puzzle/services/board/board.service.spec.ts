import { TestBed, async } from '@angular/core/testing';
import { BoardService } from './board.service';

import { Observable } from 'rxjs/Observable';

export function main() {
  describe('Board Service', () => {

    let boardService: BoardService;

    beforeEach(() => {

      TestBed.configureTestingModule({
        providers: [BoardService]
      });

      boardService = TestBed.get(BoardService);
    });

    it('should return an Observable when get called', async(() => {
      expect(TestBed.get(BoardService).get()).toEqual(jasmine.any(Observable));
    }));

    it('should have an unsolved empty board', async(() => {
      expect(boardService.board.rowCount).toEqual(0);
      expect(boardService.board.colCount).toEqual(0);
      expect(boardService.board.isSolved).toEqual(false);
      expect(boardService.board.squares.length).toEqual(0);
      expect(boardService.board.sequence.length).toEqual(0);
      expect(boardService.board.expectedSequence.length).toEqual(0);
    }));
    
  });
}
