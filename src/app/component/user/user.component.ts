import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userData: any;
  @Input() type: any;
  userObj: any = {}
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    if(this.type == 'Edit'){
      this.userObj =  JSON.parse(JSON.stringify(this.userData))
    }
  }

  save() {
    this.activeModal.close(this.userObj)
  }
}
