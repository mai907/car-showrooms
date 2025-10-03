import { Component } from '@angular/core';
import { ErrorPageComponent } from '../../shared/components/error-page/error-page.component';

@Component({
  selector: 'app-unauthorized',
  imports: [ErrorPageComponent],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css'
})
export class UnauthorizedComponent {

}
