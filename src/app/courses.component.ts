import { CoursesService } from './courses.service';
import { Component } from "@angular/core";


@Component({
    selector:'courses',
    template:`
                {{course.title | uppercase}} <br/>
                {{course.rating | number:'1.2-2'}} <br/>
                {{course.students | number }} <br/>
                {{course.price |currency:'INR'}} <br/>
                {{course.releaseDate | date: 'dd:MMM:yy HH:mm:ss'}} <br/>
                {{text | summary : 10}}
                    
            `
})
export class CoursesComponent{
    course = {
        title:"The Complete Angular Course",
        rating: 4343554.7865,
        students : 301258,
        price : 190.52,
        releaseDate : Date.now()
    }

    text=`As you learn HTML5 and add new techniques to your toolbox, you’re likely going to want to build yourself a boilerplate from which you can begin all your HTML5-based projects. We encourage this, and you may also consider using one of the many online sources that provide a basic HTML5 starting point for you.As you learn HTML5 and add new techniques to your toolbox, you’re likely going to want to build yourself a boilerplate from which you can begin all your HTML5-based projects. We encourage this, and you may also consider using one of the many online sources that provide a basic HTML5 starting point for you. As you learn HTML5 and add new techniques to your toolbox, you’re likely going to want to build yourself a boilerplate from which you can begin all your HTML5-based projects. We encourage this, and you may also consider using one of the many online sources that provide a basic HTML5 starting point for you.`;
}