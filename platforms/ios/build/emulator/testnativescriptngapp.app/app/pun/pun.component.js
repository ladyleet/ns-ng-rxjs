"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var pun_service_1 = require("../pun/pun.service");
var speech_service_1 = require("../services/speech.service");
var PunComponent = (function () {
    function PunComponent(puns, speech) {
        var _this = this;
        this.puns = puns;
        this.speech = speech;
        this.keywordsInputChange$ = new Subject_1.Subject();
        this.keyword$ = this.keywordsInputChange$
            .switchMap(function (partial) { return _this.puns.suggestKeywords(partial); })
            .share();
        this.pun$ = this.keyword$
            .switchMap(function (keywords) { return _this.puns.getPuns(keywords); })
            .share();
        this.noResults$ = this.keyword$
            .map(function (keywords) { return keywords.length === 0; });
        this.listenClick$ = new Subject_1.Subject();
        this.spokenKeyword$ = this.listenClick$
            .switchMap(function () { return _this.speech.listen(); });
    }
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
    PunComponent.prototype.ngOnInit = function () {
    };
    PunComponent = __decorate([
        core_1.Component({
            selector: "ns-pun",
            moduleId: module.id,
            templateUrl: "./pun.component.html",
        }),
        __metadata("design:paramtypes", [pun_service_1.PunService,
            speech_service_1.SpeechService])
    ], PunComponent);
    return PunComponent;
}());
exports.PunComponent = PunComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB1bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0NBQXVDO0FBRXZDLGtEQUFnRDtBQUNoRCw2REFBMkQ7QUFPM0Q7SUEwQ0ksc0JBQ1ksSUFBZ0IsRUFDaEIsTUFBcUI7UUFGakMsaUJBR007UUFGTSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUEzQ2pDLHlCQUFvQixHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBRTdDLGFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFsQyxDQUFrQyxDQUFDO2FBQ3hELEtBQUssRUFBRSxDQUFDO1FBRWIsU0FBSSxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ2YsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQTNCLENBQTJCLENBQUM7YUFDbEQsS0FBSyxFQUFFLENBQUM7UUFFYixlQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDckIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUU1QyxpQkFBWSxHQUFHLElBQUksaUJBQU8sRUFBUSxDQUFDO1FBRW5DLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVk7YUFDN0IsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUE7SUE0QnJDLENBQUM7SUEzQlY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBbUIwRDtJQUV0RCwrQkFBUSxHQUFSO0lBRUEsQ0FBQztJQXpDUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQTRDb0Isd0JBQVU7WUFDUiw4QkFBYTtPQTVDeEIsWUFBWSxDQThDeEI7SUFBRCxtQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFB1blNlcnZpY2UgfSBmcm9tICcuLi9wdW4vcHVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3BlZWNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NwZWVjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcHVuXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3B1bi5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQdW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGtleXdvcmRzSW5wdXRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIFxuICAgIGtleXdvcmQkID0gdGhpcy5rZXl3b3Jkc0lucHV0Q2hhbmdlJFxuICAgICAgICAuc3dpdGNoTWFwKHBhcnRpYWwgPT4gdGhpcy5wdW5zLnN1Z2dlc3RLZXl3b3JkcyhwYXJ0aWFsKSlcbiAgICAgICAgLnNoYXJlKCk7XG5cbiAgICBwdW4kID0gdGhpcy5rZXl3b3JkJFxuICAgICAgICAuc3dpdGNoTWFwKGtleXdvcmRzID0+IHRoaXMucHVucy5nZXRQdW5zKGtleXdvcmRzKSlcbiAgICAgICAgLnNoYXJlKCk7XG4gICAgXG4gICAgbm9SZXN1bHRzJCA9IHRoaXMua2V5d29yZCRcbiAgICAgICAgLm1hcChrZXl3b3JkcyA9PiBrZXl3b3Jkcy5sZW5ndGggPT09IDApO1xuXG4gICAgbGlzdGVuQ2xpY2skID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAgIHNwb2tlbktleXdvcmQkID0gdGhpcy5saXN0ZW5DbGljayRcbiAgICAgICAgLnN3aXRjaE1hcCgoKSA9PiB0aGlzLnNwZWVjaC5saXN0ZW4oKSlcbi8qXG4gICAgc25hcHNob3QkID0gbmV3IFN1YmplY3Q8eyBkYXRhVVJMOiBzdHJpbmcgfT4oKTtcbiAgICBcbiAgICBnZXREZXZpY2UkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgbGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICBnb29nbGVWaXNpb24kID0gdGhpcy5zbmFwc2hvdCRcbiAgICAubWFwKGUgPT4ge1xuICAgICAgICBjb25zdCBkYXRhVVJMSGVhZGVyID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnO1xuICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGUuZGF0YVVSTC5zdWJzdHIoZGF0YVVSTEhlYWRlci5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gYmFzZTY0SW1hZ2U7XG4gICAgfSlcbiAgICAuc3dpdGNoTWFwKGJhc2U2NEltYWdlID0+IHRoaXMuZ29vZ2xlVmlzaW9uLmFubm90YXRlSW1hZ2UoYmFzZTY0SW1hZ2UpKTtcblxuICAgIHNwb2tlbktleXdvcmQkID0gdGhpcy5saXN0ZW5DbGljayRcbiAgICAuc3dpdGNoTWFwKCgpID0+IHRoaXMuc3BlZWNoLmxpc3RlbigpKVxuXG4gICAgdHlwZWRLZXl3b3JkJCA9IHRoaXMua2V5d29yZHNJbnB1dENoYW5nZSRcbiAgICAuc3dpdGNoTWFwKHRleHQgPT4gdGhpcy5wdW5zLnN1Z2dlc3RLZXl3b3Jkcyh0ZXh0KSk7Ki9cblxuICAgIG5nT25Jbml0KCkge1xuICAgIFxuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwdW5zOiBQdW5TZXJ2aWNlLCBcbiAgICAgICAgcHJpdmF0ZSBzcGVlY2g6IFNwZWVjaFNlcnZpY2VcbiAgICAgICkge31cbn1cblxuIl19