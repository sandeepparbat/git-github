import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform
{
    transform(value : String , limit?: number)
    {
        if(!value){
            return null;
        }
        console.log("Limit "+limit);
        let actuallimit = (limit) ? limit : 50;
        console.log("Actaul limit",limit);
        return value.substr(0,actuallimit)+"...";

    }
}