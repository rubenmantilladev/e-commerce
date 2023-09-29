import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  public success(title: string, text: string, timer = 1500): void {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: timer,
    });
  }

  public error(title: string, text: string, timer = 1500): void {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: timer,
    });
  }

  public warning(title: string, text: string, timer = 1500): void {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: timer,
    });
  }

  public info(title: string, text: string, timer = 1500): void {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: timer,
    });
  }

  public question(title: string, text: string, timer = 1500): void {
    Swal.fire({
      position: 'center',
      icon: 'question',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: timer,
    });
  }
}
