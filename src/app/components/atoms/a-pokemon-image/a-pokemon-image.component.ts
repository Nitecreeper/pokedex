import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-pokemon-image',
  templateUrl: './a-pokemon-image.component.html',
  styleUrl: './a-pokemon-image.component.css'
})
export class APokemonImageComponent {
  @Input() public imgSrc: string | undefined = '';
  @Input() public imgAlt: string = '';
  @Input() public class: string = '';
  @Input() public width: string | null = null;
}
