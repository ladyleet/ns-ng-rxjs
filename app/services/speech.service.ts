import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpeechRecognition, SpeechRecognitionTranscription } from "nativescript-speech-recognition";

@Injectable()
export class SpeechService {
  constructor() {
  }

  listen(): Observable<string[]> {
    return new Observable<string[]>(observer => {
      const speech = new SpeechRecognition();

      speech.startListening(
        {
          // optional, uses the device locale by default
          locale: "en-US",
          // set to true to get results back continuously
          returnPartialResults: true,
          // this callback will be invoked repeatedly during recognition
          onResult: (transcription: SpeechRecognitionTranscription) => {
            console.log(`User said: ${transcription.text}`);
            console.log(`User finished?: ${transcription.finished}`);
          },
        }
      ).then(
        (started: boolean) => { console.log(`started listening YOO`) },
        (errorMessage: string) => { console.log(`shits weak Error: ${errorMessage}`); }
      );
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
  }

  private cleanSpeechResults(results: any): string[] {
    return <string[]>(
      Array.from(results)
        .reduce(
          (final: string[], result: any) =>
            final.concat(Array.from(result, (x: any) => x.transcript)),
          []
        )
    );
  }
}
