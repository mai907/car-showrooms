import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
