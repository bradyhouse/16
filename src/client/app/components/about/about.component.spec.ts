
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';


import { t } from '../../modules/test/index';
import { AboutComponent } from './about.component';


const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [AboutComponent, TestComponent]
  });
};

export function main() {
  t.describe('@Component: AboutComponent', () => {

    t.be(testModuleConfig);

  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent { }
