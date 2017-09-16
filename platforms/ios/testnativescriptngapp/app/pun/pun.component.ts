import { Component, OnInit } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { PunService } from '../pun/pun.service';
import { SpeechService } from '../services/speech.service';

@Component({
    selector: "ns-pun",
    moduleId: module.id,
    templateUrl: "./pun.component.html",
})
export class PunComponent implements OnInit {
    keywordsInputChange$ = new Subject<string>();
    
    keyword$ = this.keywordsInputChange$
        .switchMap(partial => this.puns.suggestKeywords(partial));

    pun$ = this.keyword$
        .switchMap(keywords => this.puns.getPuns(keywords))
        .share();

    noResults$ = this.keyword$
        .map(keywords => keywords.length === 0);
    
    ngOnInit() {
    
    }
    constructor(
        private puns: PunService, 
        private speech: SpeechService
      ) {}
}

