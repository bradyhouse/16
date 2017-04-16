import { t } from '../index';
import { browser, element, by } from 'protractor';

t.describe('App', function() {

  t.be(async function() {
    return await browser.get('/');
  });

  t.it('should have a title', function() {
    t.e(browser.getTitle()).toEqual('EniPuzzle');
  });

  t.it('should have <fi-app>', function() {
    t.e(element(by.tagName('fi-app')).isPresent()).toEqual(true);
  });

});
