"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
// TODO: get this injected properly
var SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition ||
    window.mozSpeechRecognition || window.msSpeechRecogntion);
var SpeechService = (function () {
    function SpeechService() {
    }
    SpeechService.prototype.listen = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var speech = new SpeechRecognition();
            var resultHandler = function (e) {
                console.log(e);
                var results = _this.cleanSpeechResults(e.results);
                observer.next(results);
                observer.complete();
            };
            var errorHandler = function (err) {
                observer.error(err);
            };
            speech.addEventListener('result', resultHandler);
            speech.addEventListener('error', errorHandler);
            speech.start();
            return function () {
                speech.removeEventListener('result', resultHandler);
                speech.removeEventListener('error', errorHandler);
                speech.abort();
            };
        });
    };
    SpeechService.prototype.cleanSpeechResults = function (results) {
        return (Array.from(results)
            .reduce(function (final, result) {
            return final.concat(Array.from(result, function (x) { return x.transcript; }));
        }, []));
    };
    SpeechService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SpeechService);
    return SpeechService;
}());
exports.SpeechService = SpeechService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCw4Q0FBNkM7QUFFN0MsbUNBQW1DO0FBQ25DLElBQU0saUJBQWlCLEdBQUcsTUFBTSxJQUFJLENBQzVCLE1BQU8sQ0FBQyxpQkFBaUIsSUFBVSxNQUFPLENBQUMsdUJBQXVCO0lBQ2xFLE1BQU8sQ0FBQyxvQkFBb0IsSUFBVSxNQUFPLENBQUMsa0JBQWtCLENBQ3ZFLENBQUM7QUFHRjtJQUNFO0lBQ0EsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFBQSxpQkF5QkM7UUF4QkMsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBVyxVQUFBLFFBQVE7WUFDdEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1lBRXZDLElBQU0sYUFBYSxHQUFHLFVBQUMsQ0FBTTtnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFNLE9BQU8sR0FBYSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3RCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsSUFBTSxZQUFZLEdBQUcsVUFBQyxHQUFHO2dCQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFZixNQUFNLENBQUM7Z0JBQ0wsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDBDQUFrQixHQUExQixVQUEyQixPQUFZO1FBQ3JDLE1BQU0sQ0FBVyxDQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2hCLE1BQU0sQ0FDTCxVQUFDLEtBQWUsRUFBRSxNQUFXO1lBQzNCLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxVQUFVLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFBMUQsQ0FBMEQsRUFDNUQsRUFBRSxDQUNILENBQ0osQ0FBQztJQUNKLENBQUM7SUF4Q1UsYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0F5Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIFRPRE86IGdldCB0aGlzIGluamVjdGVkIHByb3Blcmx5XG5jb25zdCBTcGVlY2hSZWNvZ25pdGlvbiA9IHdpbmRvdyAmJiAoXG4gICg8YW55PndpbmRvdykuU3BlZWNoUmVjb2duaXRpb24gfHwgKDxhbnk+d2luZG93KS53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiB8fCBcbiAgKDxhbnk+d2luZG93KS5tb3pTcGVlY2hSZWNvZ25pdGlvbiB8fCAoPGFueT53aW5kb3cpLm1zU3BlZWNoUmVjb2dudGlvblxuKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwZWVjaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGxpc3RlbigpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHN0cmluZ1tdPihvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBzcGVlY2ggPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcblxuICAgICAgY29uc3QgcmVzdWx0SGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gdGhpcy5jbGVhblNwZWVjaFJlc3VsdHMoZS5yZXN1bHRzKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGVycm9ySGFuZGxlciA9IChlcnIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHNwZWVjaC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bHQnLCByZXN1bHRIYW5kbGVyKTtcbiAgICAgIHNwZWVjaC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9ySGFuZGxlcik7XG4gICAgICBzcGVlY2guc3RhcnQoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3BlZWNoLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc3VsdCcsIHJlc3VsdEhhbmRsZXIpO1xuICAgICAgICBzcGVlY2gucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICBzcGVlY2guYWJvcnQoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuU3BlZWNoUmVzdWx0cyhyZXN1bHRzOiBhbnkpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIDxzdHJpbmdbXT4oXG4gICAgICBBcnJheS5mcm9tKHJlc3VsdHMpXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKGZpbmFsOiBzdHJpbmdbXSwgcmVzdWx0OiBhbnkpID0+XG4gICAgICAgICAgICBmaW5hbC5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQsICh4OiBhbnkpID0+IHgudHJhbnNjcmlwdCkpLFxuICAgICAgICAgIFtdXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=