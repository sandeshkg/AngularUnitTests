import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'mobileNumberFormatter'
})
export class MobileNumberFormatter implements PipeTransform{
    
    transform(value: string) {
        //throw new Error("Method not implemented.");
        var mobileNumber = value.substr(0,3) + '-' + value.substr(2,3) + '-' + value.substr(6,4);
        return mobileNumber;
        
    }

}