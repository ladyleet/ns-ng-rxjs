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
            .switchMap(function (partial) { return _this.puns.suggestKeywords(partial); });
        this.pun$ = this.keyword$
            .switchMap(function (keywords) { return _this.puns.getPuns(keywords); })
            .share();
        this.noResults$ = this.keyword$
            .map(function (keywords) { return keywords.length === 0; });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB1bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0NBQXVDO0FBRXZDLGtEQUFnRDtBQUNoRCw2REFBMkQ7QUFPM0Q7SUFnQkksc0JBQ1ksSUFBZ0IsRUFDaEIsTUFBcUI7UUFGakMsaUJBR007UUFGTSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFqQmpDLHlCQUFvQixHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBRTdDLGFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7UUFFOUQsU0FBSSxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ2YsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQTNCLENBQTJCLENBQUM7YUFDbEQsS0FBSyxFQUFFLENBQUM7UUFFYixlQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDckIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQVF2QyxDQUFDO0lBTk4sK0JBQVEsR0FBUjtJQUVBLENBQUM7SUFmUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQWtCb0Isd0JBQVU7WUFDUiw4QkFBYTtPQWxCeEIsWUFBWSxDQW9CeEI7SUFBRCxtQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFB1blNlcnZpY2UgfSBmcm9tICcuLi9wdW4vcHVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3BlZWNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NwZWVjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcHVuXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3B1bi5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQdW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGtleXdvcmRzSW5wdXRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIFxuICAgIGtleXdvcmQkID0gdGhpcy5rZXl3b3Jkc0lucHV0Q2hhbmdlJFxuICAgICAgICAuc3dpdGNoTWFwKHBhcnRpYWwgPT4gdGhpcy5wdW5zLnN1Z2dlc3RLZXl3b3JkcyhwYXJ0aWFsKSk7XG5cbiAgICBwdW4kID0gdGhpcy5rZXl3b3JkJFxuICAgICAgICAuc3dpdGNoTWFwKGtleXdvcmRzID0+IHRoaXMucHVucy5nZXRQdW5zKGtleXdvcmRzKSlcbiAgICAgICAgLnNoYXJlKCk7XG5cbiAgICBub1Jlc3VsdHMkID0gdGhpcy5rZXl3b3JkJFxuICAgICAgICAubWFwKGtleXdvcmRzID0+IGtleXdvcmRzLmxlbmd0aCA9PT0gMCk7XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHB1bnM6IFB1blNlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIHNwZWVjaDogU3BlZWNoU2VydmljZVxuICAgICAgKSB7fVxufVxuXG4iXX0=