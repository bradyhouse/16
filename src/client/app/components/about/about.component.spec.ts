// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app
import { t } from '../../modules/test/index';
import { AboutComponent } from './about.component';

// test module configuration for each test
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
