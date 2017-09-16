"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var nativescript_speech_recognition_1 = require("nativescript-speech-recognition");
var SpeechService = (function () {
    function SpeechService() {
    }
    SpeechService.prototype.listen = function () {
        return new Observable_1.Observable(function (observer) {
            var speech = new nativescript_speech_recognition_1.SpeechRecognition();
            speech.startListening({
                // optional, uses the device locale by default
                locale: "en-US",
                // set to true to get results back continuously
                returnPartialResults: false,
                // this callback will be invoked repeatedly during recognition
                onResult: function (transcription) {
                    console.log("User said: " + transcription.text);
                    console.log("User finished?: " + transcription.finished);
                },
            }).then(function (started) { console.log("started listening"); }, function (errorMessage) { console.log("Error: " + errorMessage); });
            /*const speech = new SpeechRecognition();
      
            const resultHandler = (e: any) => {
              console.log(e);
              const results: string[] = this.cleanSpeechResults(e.results);
              observer.next(results);
              observer.complete();
            };
      
            const errorHandler = (err) => {
              observer.error(err);
            };
      
            speech.addEventListener('result', resultHandler);
            speech.addEventListener('error', errorHandler);
            speech.start();
      
            return () => {
              speech.removeEventListener('result', resultHandler);
              speech.removeEventListener('error', errorHandler);
              speech.abort();
            };*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCw4Q0FBNkM7QUFDN0MsbUZBQW9HO0FBR3BHO0lBQ0U7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQVcsVUFBQSxRQUFRO1lBQ3RDLElBQU0sTUFBTSxHQUFHLElBQUksbURBQWlCLEVBQUUsQ0FBQztZQUV2QyxNQUFNLENBQUMsY0FBYyxDQUNuQjtnQkFDRSw4Q0FBOEM7Z0JBQzlDLE1BQU0sRUFBRSxPQUFPO2dCQUNmLCtDQUErQztnQkFDL0Msb0JBQW9CLEVBQUUsS0FBSztnQkFDM0IsOERBQThEO2dCQUM5RCxRQUFRLEVBQUUsVUFBQyxhQUE2QztvQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxhQUFhLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLGFBQWEsQ0FBQyxRQUFVLENBQUMsQ0FBQztnQkFDM0QsQ0FBQzthQUNGLENBQ0YsQ0FBQyxJQUFJLENBQ0osVUFBQyxPQUFnQixJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFDMUQsVUFBQyxZQUFvQixJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxZQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckUsQ0FBQztZQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcUJJO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMENBQWtCLEdBQTFCLFVBQTJCLE9BQVk7UUFDckMsTUFBTSxDQUFXLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDaEIsTUFBTSxDQUNMLFVBQUMsS0FBZSxFQUFFLE1BQVc7WUFDM0IsT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLFVBQVUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUExRCxDQUEwRCxFQUM1RCxFQUFFLENBQ0gsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQTFEVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQTJEekI7SUFBRCxvQkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uLCBTcGVlY2hSZWNvZ25pdGlvblRyYW5zY3JpcHRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNwZWVjaC1yZWNvZ25pdGlvblwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BlZWNoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbGlzdGVuKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nW10+KG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IHNwZWVjaCA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xuXG4gICAgICBzcGVlY2guc3RhcnRMaXN0ZW5pbmcoXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBvcHRpb25hbCwgdXNlcyB0aGUgZGV2aWNlIGxvY2FsZSBieSBkZWZhdWx0XG4gICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgICAgLy8gc2V0IHRvIHRydWUgdG8gZ2V0IHJlc3VsdHMgYmFjayBjb250aW51b3VzbHlcbiAgICAgICAgICByZXR1cm5QYXJ0aWFsUmVzdWx0czogZmFsc2UsXG4gICAgICAgICAgLy8gdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgcmVwZWF0ZWRseSBkdXJpbmcgcmVjb2duaXRpb25cbiAgICAgICAgICBvblJlc3VsdDogKHRyYW5zY3JpcHRpb246IFNwZWVjaFJlY29nbml0aW9uVHJhbnNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgc2FpZDogJHt0cmFuc2NyaXB0aW9uLnRleHR9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciBmaW5pc2hlZD86ICR7dHJhbnNjcmlwdGlvbi5maW5pc2hlZH1gKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApLnRoZW4oXG4gICAgICAgIChzdGFydGVkOiBib29sZWFuKSA9PiB7IGNvbnNvbGUubG9nKGBzdGFydGVkIGxpc3RlbmluZ2ApIH0sXG4gICAgICAgIChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4geyBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3JNZXNzYWdlfWApOyB9XG4gICAgICApO1xuICAgICAgLypjb25zdCBzcGVlY2ggPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcblxuICAgICAgY29uc3QgcmVzdWx0SGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gdGhpcy5jbGVhblNwZWVjaFJlc3VsdHMoZS5yZXN1bHRzKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGVycm9ySGFuZGxlciA9IChlcnIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHNwZWVjaC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bHQnLCByZXN1bHRIYW5kbGVyKTtcbiAgICAgIHNwZWVjaC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9ySGFuZGxlcik7XG4gICAgICBzcGVlY2guc3RhcnQoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3BlZWNoLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc3VsdCcsIHJlc3VsdEhhbmRsZXIpO1xuICAgICAgICBzcGVlY2gucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICBzcGVlY2guYWJvcnQoKTtcbiAgICAgIH07Ki9cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5TcGVlY2hSZXN1bHRzKHJlc3VsdHM6IGFueSk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gPHN0cmluZ1tdPihcbiAgICAgIEFycmF5LmZyb20ocmVzdWx0cylcbiAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAoZmluYWw6IHN0cmluZ1tdLCByZXN1bHQ6IGFueSkgPT5cbiAgICAgICAgICAgIGZpbmFsLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCwgKHg6IGFueSkgPT4geC50cmFuc2NyaXB0KSksXG4gICAgICAgICAgW11cbiAgICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==