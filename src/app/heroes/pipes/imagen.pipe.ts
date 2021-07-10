import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen',
  // pure: false
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: Heroe ): string {

    console.log('se proceso')

    if ( !heroe.id && ! heroe.alt_image ){
      return 'assets/no-image.png';
    } else if ( heroe.alt_image ){
      return heroe.alt_image;
    } else {
      return `assets/heroes/${ heroe.id }.jpg`;
    }

  }

}
