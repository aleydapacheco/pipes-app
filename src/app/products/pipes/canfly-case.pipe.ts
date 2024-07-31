import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyCase implements PipeTransform {
    transform(value: boolean, ): string {
        console.log({ value});
        return ( value ) 
        ? 'Vuela'
        : 'No vuela'
    }
}