import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  userList: any = [];

  selectedMailArray = []
  constructor(private modalService: NgbModal, private userService: UserServiceService) { }
  ngOnInit() {
    this.userService.getUserList().subscribe(res => {
      this.userList = res;
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }

  open() {
    const modalRef = this.modalService.open(UserComponent, {
      size: 'xl',
      scrollable: true
    })
    modalRef.componentInstance.type = 'Add'
    modalRef.result.then((result) => {
      this.userList.push(result)
    });
  }

  selectedMail(data) {
    this.selectedMailArray.push(data.id)
  }

  deleteUser(index) {
    this.userList.splice(index, 1)
  }

  editUser(data, index) {
    const modalRef = this.modalService.open(UserComponent, {
      size: 'xl',
      scrollable: true
    })
    modalRef.componentInstance.userData = data;
    modalRef.componentInstance.type = 'Edit';
    modalRef.result.then((res) => {
      console.log(res)
      this.userList[index] = res
    });
  }

}
