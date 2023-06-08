import { Component } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  constructor(private data: DulieuService) { }

  // listTask:Task[] = [
  //   {id:1, tenTask:'Phân tích yêu cầu', duAnID:1, nhanvienID:1,moTa:"Phân tích các yêu cầu của khách hàng để team thực hiện",status:0,priority:1 },
  //   {id:2, tenTask:'Thực hiện layout cho ứng dụng', duAnID:1, nhanvienID:2,moTa:"Thực hiện layout website, chú ý kỹ responsive",status:0,priority:1 },
  //   {id:3, tenTask:'Tìm hiểu yêu cầu của khách hàng', duAnID:2, nhanvienID:3,moTa:"Đến công ty và ghi nhận các yêu cầu của khách hàng",status:0,priority:2 },
  //   {id:4, tenTask:'Đăng ký thành viên', duAnID:3, nhanvienID:4,moTa:"Thực hiện chức năng đăng ký, có capcha, mail kích hoạt",status:0,priority:1 },
  //   {id:5, tenTask:'Đổi pass, quên pass', duAnID:1, nhanvienID:4,moTa:"Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ",status:0,priority:1 },
  //   {id:6, tenTask:'Testing 1', duAnID:4, nhanvienID:3,moTa:"Kiểm tra mọi form chức năng theo các case đã liệt kê",status:0,priority:2 },
  //   {id:7, tenTask:'Triển khai website', duAnID:5, nhanvienID:4,moTa:"Triển khai website lên hosting đã mua",status:0,priority:2 },
  //   {id:8, tenTask:'Hướng dẫn sử dụng và bàn giao', duAnID:5, nhanvienID:1,moTa:"Hướng dẫn sử dụng cho khách hàng",status:0,priority:2 },
  //   {id:9, tenTask:'Testing 2', duAnID:4, nhanvienID:2,moTa:"Kiểm tra các tính năng bảo mật theo các yêu cầu đã nêu trong tài liệu dự án",status:0,priority:2 },
  // ];

  tukhoa:string = '';
  listTask:any;
  listDuAn:any;
  listNhanVien:any;
  task:Task[] = [];

  ngOnInit():void {
    this.data.getTask().subscribe(d => {
      this.listTask = d;
      this.task = this.listTask;
    });

    this.data.getDuAn().subscribe(data => this.listDuAn = data);
    this.data.getNhanVien().subscribe(data => this.listNhanVien = data);
  }

  locTask() {
    this.listTask = this.task.filter(p => p.tenTask.includes(this.tukhoa));
  }

  getDuAnById(id:number) {
    const getDuAn = this.listDuAn.find((da:any) => da.id == id);
    if(getDuAn) {
      return getDuAn.tenDuAn;
    }
    return '';
  }

  getNhanVienById(id:number) {
    const getNV = this.listNhanVien.find((nv:any) => nv.id == id);
    if(getNV) {
      return getNV.ho + ' ' + getNV.ten;
    }
    return '';
  }

  xoaTask(id:number) {
    this.data.xoaTask(id).subscribe(data => data);
    window.location.href = 'http://localhost:4200/task';
  }
}
