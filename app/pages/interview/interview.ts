import {Component} from '@angular/core';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';



@Component({
    directives: [DND_DIRECTIVES],
    templateUrl: 'build/pages/interview/interview.html',
    providers: [DND_PROVIDERS]
})
export class InterviewPage {

    constructor() { }

}