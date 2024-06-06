import { Component, Input } from '@angular/core';
import { Animal } from '../animals.service';


@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

  @Input() animal : Animal = undefined!

nutri()
{
    //Qui andrà una chiamata al server che invierà l'informazione al server python
}

}
