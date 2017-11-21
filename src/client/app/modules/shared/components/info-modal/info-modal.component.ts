import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { InfoModal } from './info-modal';


@Component({
    selector: 'sd-info-modal',
    templateUrl: './info-modal.component.html',
    styleUrls: ['./info-modal.component.css']
})
export class AppComponent {
    public modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {}

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    public close() {
        this.modalRef.hide();
        this.modalRef = null;
    }
}
