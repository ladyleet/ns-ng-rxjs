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
                returnPartialResults: true,
                // this callback will be invoked repeatedly during recognition
                onResult: function (transcription) {
                    console.log("User said: " + transcription.text);
                    console.log("User finished?: " + transcription.finished);
                },
            }).then(function (started) { console.log("started listening YOO"); }, function (errorMessage) { console.log("shits weak Error: " + errorMessage); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCw4Q0FBNkM7QUFDN0MsbUZBQW9HO0FBR3BHO0lBQ0U7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQVcsVUFBQSxRQUFRO1lBQ3RDLElBQU0sTUFBTSxHQUFHLElBQUksbURBQWlCLEVBQUUsQ0FBQztZQUV2QyxNQUFNLENBQUMsY0FBYyxDQUNuQjtnQkFDRSw4Q0FBOEM7Z0JBQzlDLE1BQU0sRUFBRSxPQUFPO2dCQUNmLCtDQUErQztnQkFDL0Msb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsOERBQThEO2dCQUM5RCxRQUFRLEVBQUUsVUFBQyxhQUE2QztvQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxhQUFhLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLGFBQWEsQ0FBQyxRQUFVLENBQUMsQ0FBQztnQkFDM0QsQ0FBQzthQUNGLENBQ0YsQ0FBQyxJQUFJLENBQ0osVUFBQyxPQUFnQixJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFDOUQsVUFBQyxZQUFvQixJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLFlBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoRixDQUFDO1lBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFxQkk7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywwQ0FBa0IsR0FBMUIsVUFBMkIsT0FBWTtRQUNyQyxNQUFNLENBQVcsQ0FDZixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNoQixNQUFNLENBQ0wsVUFBQyxLQUFlLEVBQUUsTUFBVztZQUMzQixPQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQTFELENBQTBELEVBQzVELEVBQUUsQ0FDSCxDQUNKLENBQUM7SUFDSixDQUFDO0lBMURVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBMkR6QjtJQUFELG9CQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb24sIFNwZWVjaFJlY29nbml0aW9uVHJhbnNjcmlwdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3BlZWNoLXJlY29nbml0aW9uXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcGVlY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBsaXN0ZW4oKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxzdHJpbmdbXT4ob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3Qgc3BlZWNoID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG5cbiAgICAgIHNwZWVjaC5zdGFydExpc3RlbmluZyhcbiAgICAgICAge1xuICAgICAgICAgIC8vIG9wdGlvbmFsLCB1c2VzIHRoZSBkZXZpY2UgbG9jYWxlIGJ5IGRlZmF1bHRcbiAgICAgICAgICBsb2NhbGU6IFwiZW4tVVNcIixcbiAgICAgICAgICAvLyBzZXQgdG8gdHJ1ZSB0byBnZXQgcmVzdWx0cyBiYWNrIGNvbnRpbnVvdXNseVxuICAgICAgICAgIHJldHVyblBhcnRpYWxSZXN1bHRzOiB0cnVlLFxuICAgICAgICAgIC8vIHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHJlcGVhdGVkbHkgZHVyaW5nIHJlY29nbml0aW9uXG4gICAgICAgICAgb25SZXN1bHQ6ICh0cmFuc2NyaXB0aW9uOiBTcGVlY2hSZWNvZ25pdGlvblRyYW5zY3JpcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2VyIHNhaWQ6ICR7dHJhbnNjcmlwdGlvbi50ZXh0fWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgZmluaXNoZWQ/OiAke3RyYW5zY3JpcHRpb24uZmluaXNoZWR9YCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKS50aGVuKFxuICAgICAgICAoc3RhcnRlZDogYm9vbGVhbikgPT4geyBjb25zb2xlLmxvZyhgc3RhcnRlZCBsaXN0ZW5pbmcgWU9PYCkgfSxcbiAgICAgICAgKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiB7IGNvbnNvbGUubG9nKGBzaGl0cyB3ZWFrIEVycm9yOiAke2Vycm9yTWVzc2FnZX1gKTsgfVxuICAgICAgKTtcbiAgICAgIC8qY29uc3Qgc3BlZWNoID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdEhhbmRsZXIgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IHRoaXMuY2xlYW5TcGVlY2hSZXN1bHRzKGUucmVzdWx0cyk7XG4gICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICB9O1xuXG4gICAgICBzcGVlY2guYWRkRXZlbnRMaXN0ZW5lcigncmVzdWx0JywgcmVzdWx0SGFuZGxlcik7XG4gICAgICBzcGVlY2guYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckhhbmRsZXIpO1xuICAgICAgc3BlZWNoLnN0YXJ0KCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHNwZWVjaC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXN1bHQnLCByZXN1bHRIYW5kbGVyKTtcbiAgICAgICAgc3BlZWNoLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgc3BlZWNoLmFib3J0KCk7XG4gICAgICB9OyovXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuU3BlZWNoUmVzdWx0cyhyZXN1bHRzOiBhbnkpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIDxzdHJpbmdbXT4oXG4gICAgICBBcnJheS5mcm9tKHJlc3VsdHMpXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKGZpbmFsOiBzdHJpbmdbXSwgcmVzdWx0OiBhbnkpID0+XG4gICAgICAgICAgICBmaW5hbC5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQsICh4OiBhbnkpID0+IHgudHJhbnNjcmlwdCkpLFxuICAgICAgICAgIFtdXG4gICAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=