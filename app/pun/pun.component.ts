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
        .switchMap(partial => this.puns.suggestKeywords(partial))
        .share();

    pun$ = this.keyword$
        .switchMap(keywords => this.puns.getPuns(keywords))
        .share();
    
    noResults$ = this.keyword$
        .map(keywords => keywords.length === 0);

    listenClick$ = new Subject<void>();

    spokenKeyword$ = this.listenClick$
        .switchMap(() => this.speech.listen())
/*
    snapshot$ = new Subject<{ dataURL: string }>();
    
    getDevice$ = new Subject<any>();

    led$ = new Subject<void>();

    googleVision$ = this.snapshot$
    .map(e => {
        const dataURLHeader = 'data:image/png;base64,';
        const base64Image = e.dataURL.substr(dataURLHeader.length);
        return base64Image;
    })
    .switchMap(base64Image => this.googleVision.annotateImage(base64Image));

    spokenKeyword$ = this.listenClick$
    .switchMap(() => this.speech.listen())

    typedKeyword$ = this.keywordsInputChange$
    .switchMap(text => this.puns.suggestKeywords(text));*/

    ngOnInit() {
    
    }
    constructor(
        private puns: PunService, 
        private speech: SpeechService
      ) {}
}

