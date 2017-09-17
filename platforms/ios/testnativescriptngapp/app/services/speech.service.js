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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCw4Q0FBNkM7QUFDN0MsbUZBQW9HO0FBR3BHO0lBQ0U7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQVcsVUFBQSxRQUFRO1lBQ3RDLElBQU0sTUFBTSxHQUFHLElBQUksbURBQWlCLEVBQUUsQ0FBQztZQUV2QyxNQUFNLENBQUMsY0FBYyxDQUNuQjtnQkFDRSw4Q0FBOEM7Z0JBQzlDLE1BQU0sRUFBRSxPQUFPO2dCQUNmLCtDQUErQztnQkFDL0Msb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsOERBQThEO2dCQUM5RCxRQUFRLEVBQUUsVUFBQyxhQUE2QztvQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxhQUFhLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLGFBQWEsQ0FBQyxRQUFVLENBQUMsQ0FBQztnQkFDM0QsQ0FBQzthQUNGLENBQ0YsQ0FBQyxJQUFJLENBQ0osVUFBQyxPQUFnQixJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFDOUQsVUFBQyxZQUFvQixJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLFlBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMENBQWtCLEdBQTFCLFVBQTJCLE9BQVk7UUFDckMsTUFBTSxDQUFXLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDaEIsTUFBTSxDQUNMLFVBQUMsS0FBZSxFQUFFLE1BQVc7WUFDM0IsT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLFVBQVUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUExRCxDQUEwRCxFQUM1RCxFQUFFLENBQ0gsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQXBDVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQXFDekI7SUFBRCxvQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uLCBTcGVlY2hSZWNvZ25pdGlvblRyYW5zY3JpcHRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNwZWVjaC1yZWNvZ25pdGlvblwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BlZWNoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbGlzdGVuKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nW10+KG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IHNwZWVjaCA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xuXG4gICAgICBzcGVlY2guc3RhcnRMaXN0ZW5pbmcoXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBvcHRpb25hbCwgdXNlcyB0aGUgZGV2aWNlIGxvY2FsZSBieSBkZWZhdWx0XG4gICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsICAgIFxuICAgICAgICAgIC8vIHNldCB0byB0cnVlIHRvIGdldCByZXN1bHRzIGJhY2sgY29udGludW91c2x5XG4gICAgICAgICAgcmV0dXJuUGFydGlhbFJlc3VsdHM6IHRydWUsXG4gICAgICAgICAgLy8gdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgcmVwZWF0ZWRseSBkdXJpbmcgcmVjb2duaXRpb25cbiAgICAgICAgICBvblJlc3VsdDogKHRyYW5zY3JpcHRpb246IFNwZWVjaFJlY29nbml0aW9uVHJhbnNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgc2FpZDogJHt0cmFuc2NyaXB0aW9uLnRleHR9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciBmaW5pc2hlZD86ICR7dHJhbnNjcmlwdGlvbi5maW5pc2hlZH1gKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApLnRoZW4oXG4gICAgICAgIChzdGFydGVkOiBib29sZWFuKSA9PiB7IGNvbnNvbGUubG9nKGBzdGFydGVkIGxpc3RlbmluZyBZT09gKSB9LFxuICAgICAgICAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IHsgY29uc29sZS5sb2coYHNoaXRzIHdlYWsgRXJyb3I6ICR7ZXJyb3JNZXNzYWdlfWApOyB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblNwZWVjaFJlc3VsdHMocmVzdWx0czogYW55KTogc3RyaW5nW10ge1xuICAgIHJldHVybiA8c3RyaW5nW10+KFxuICAgICAgQXJyYXkuZnJvbShyZXN1bHRzKVxuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgIChmaW5hbDogc3RyaW5nW10sIHJlc3VsdDogYW55KSA9PlxuICAgICAgICAgICAgZmluYWwuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0LCAoeDogYW55KSA9PiB4LnRyYW5zY3JpcHQpKSxcbiAgICAgICAgICBbXVxuICAgICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19