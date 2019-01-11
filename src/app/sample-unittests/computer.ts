export function Computer(leftop: any, rightop: any) : number{            
    if(leftop > 0 && rightop > 0)
        return leftop + rightop;
    else
        return 0;    
}