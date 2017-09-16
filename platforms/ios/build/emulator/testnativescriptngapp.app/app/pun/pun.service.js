"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
;
var PunService = (function () {
    function PunService() {
    }
    PunService.prototype.suggestKeywords = function (partial) {
        var keywords = suggestKeywords(partial);
        return Observable_1.Observable.of(keywords);
    };
    PunService.prototype.getPuns = function (keywords) {
        var puns = getPuns(keywords);
        return Observable_1.Observable.of(puns);
    };
    PunService = __decorate([
        core_1.Injectable()
    ], PunService);
    return PunService;
}());
exports.PunService = PunService;
function suggestKeywords(partial) {
    if (!partial) {
        return [];
    }
    return Object.keys(mocks.keywords)
        .filter(function (keyword) { return keyword.indexOf(partial.toLowerCase()) === 0; });
}
function getPuns(keywords) {
    if (!keywords || keywords.length === 0) {
        return [];
    }
    var found = keywords.reduce(function (found, keyword) {
        var ids = mocks.keywords[keyword];
        if (ids) {
            return ids.reduce(function (found, id) {
                found[id] = mocks.puns[id];
                return found;
            }, found);
        }
        return found;
    }, {});
    return Object.keys(found).map(function (key) { return found[key]; });
}
var mocks = {
    keywords: {
        'banana': [0, 13, 14, 15, 16],
        'cheese': [3, 4, 5, 6, 7, 8, 12, 17, 23],
        'bird': [3, 11, 12, 1, 20],
        'hotel': [4, 9, 10, 11],
        'mexican': [6, 17, 21, 22, 23, 24, 25],
        'cow': [12, 26, 27, 28, 29, 30, 31],
        'egg': [18, 19, 20, 32, 33],
        'food': [0, 13, 14, 15, 16, 3, 4, 5, 6, 7, 8, 12, 23, 18, 19, 20, 32, 33]
    },
    puns: {
        '0': {
            pun: 'Whats banana your mind?',
            answer: 'A bunch.'
        },
        '1': {
            pun: 'Id make a pun about a chicken...',
            answer: 'But it would be fowl.'
        },
        '2': {
            pun: 'this is a pun about a pickle and a hat',
            answer: 'answer'
        },
        '3': {
            pun: 'What kind of cheese can fly?',
            answer: 'Curds of Prey.'
        },
        '4': {
            pun: 'What hotel did the cheese stay at?',
            answer: 'The Stilton.'
        },
        '5': {
            pun: 'What is the saddest cheese?', answer: 'Blue Cheese.'
        },
        '6': {
            pun: 'What do you call a cheese that isnt yours?',
            answer: 'Nacho Cheese.'
        },
        '7': {
            pun: 'What music does cheese listen to?', answer: 'R & Brie.'
        },
        '8': {
            pun: 'Whats always the last piece of cheese left?',
            answer: 'Forever Provolone.'
        },
        '9': {
            pun: 'I used to be a hotel clerk',
            answer: 'But then I had reservations.'
        },
        '10': {
            pun: 'Im staying at a really trend new hotel',
            answer: 'Its the inn thing to do.'
        },
        '11': {
            pun: 'A bird doctor checked into a hotel.',
            answer: 'He said, "This is the best place I feather stayed at".'
        },
        '12': {
            pun: 'A bird and a cow go shopping for cheese. The cow, knowing he can produce the milk says to the bird, "this place is robin you blind!".',
            answer: 'The bird says, "I like my cheese cheep cheep!'
        },
        '13': {
            pun: 'Why dont bananas snore?',
            answer: 'They dont want to wake up the rest of the bunch!'
        },
        '14': {
            pun: 'Why do bananas wear sunscreen?',
            answer: 'Because they peel.'
        },
        '15': {
            pun: 'What do you call two banana skins?',
            answer: 'A pair of slippers.'
        },
        '16': {
            pun: 'Why are bananas never lonely?',
            answer: 'Because they hang around in bunches.'
        },
        '17': {
            pun: 'A chef asked a tomato about to be diced into salsa how it was feeling.',
            answer: 'He had a chip on his shoulders and said "its nacho business".'
        },
        '18': {
            pun: 'We saw Kanye the other day at breakfast.',
            answer: 'Someone said "Om-a-lette you finish, but I hope that omelette is good!"'
        },
        '19': {
            pun: 'Was on a diet with my sister. She fed me one egg for lunch.',
            answer: 'That had me bEGGing for more food!'
        },
        '20': {
            pun: 'How to roosters flirt with chickens?',
            answer: 'They wish chickens an egg-stra special day.'
        },
        '21': {
            pun: 'How to tacos handle disputes?',
            answer: 'They taco-ver coffee.'
        },
        '22': {
            pun: 'If youre hungry for mexican food, what is the worst thing you could do?',
            answer: 'Burrito around the bush about it.'
        },
        '23': {
            pun: 'Our local Mexican restaurant was closed the other day.',
            answer: 'They said it was a queso the flu.'
        },
        '24': {
            pun: 'Bunch of avocados decided to run a marathon.',
            answer: 'They figure theyve guac what it takes.'
        },
        '25': {
            pun: 'Anyone been exposed to a cheesy mexican pun?',
            answer: 'Que, so avocado say, weve all bean there, but lets not taco about it.'
        },
        '26': {
            pun: 'The cow told everyone his grandfather was a knight',
            answer: 'And that his name was sir loin. I laughed so hard I had to rib my eyes.'
        },
        '27': {
            pun: 'Why was the cow afraid?',
            answer: 'He was a cow-herd.'
        },
        '28': {
            pun: 'What do you call a cow with a twitch?',
            answer: 'Beef jerky.'
        },
        '29': {
            pun: 'How do you count cows?',
            answer: 'With a cow-culator.'
        },
        '30': {
            pun: 'What do you call a cow with 3 legs?',
            answer: 'Lean beef.'
        },
        '31': {
            pun: 'Why did the cow get arrested?',
            answer: 'He was using cow-nterfeit money.'
        },
        '32': {
            pun: 'This egg was egg-cellent at cracking me up.',
            answer: 'He was making a lot of pun yolks.'
        },
        '33': {
            pun: 'The egg was egg-stremely happy.',
            answer: 'But you couldnt really tell from his egg-spression.'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFNNUMsQ0FBQztBQUdGO0lBQUE7SUFVQSxDQUFDO0lBVEMsb0NBQWUsR0FBZixVQUFnQixPQUFlO1FBQzdCLElBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxRQUFrQjtRQUN4QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFUVSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7T0FDQSxVQUFVLENBVXRCO0lBQUQsaUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxnQ0FBVTtBQVl2Qix5QkFBeUIsT0FBZTtJQUN0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDL0IsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQTtBQUNwRSxDQUFDO0FBRUQsaUJBQWlCLFFBQVE7SUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxPQUFPO1FBQzNDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzFCLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELElBQU0sS0FBSyxHQUFHO0lBQ1osUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDM0IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDMUU7SUFFRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUU7WUFDSCxHQUFHLEVBQUUseUJBQXlCO1lBQzlCLE1BQU0sRUFBRSxVQUFVO1NBQ25CO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsR0FBRyxFQUFFLGtDQUFrQztZQUN2QyxNQUFNLEVBQUUsdUJBQXVCO1NBQ2hDO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsR0FBRyxFQUFFLHdDQUF3QztZQUM3QyxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELEdBQUcsRUFBRTtZQUNILEdBQUcsRUFBRSw4QkFBOEI7WUFDbkMsTUFBTSxFQUFFLGdCQUFnQjtTQUN6QjtRQUNELEdBQUcsRUFBRTtZQUNILEdBQUcsRUFBRSxvQ0FBb0M7WUFDekMsTUFBTSxFQUFFLGNBQWM7U0FDdkI7UUFDRCxHQUFHLEVBQUU7WUFDSCxHQUFHLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLGNBQWM7U0FDM0Q7UUFDRCxHQUFHLEVBQUU7WUFDSCxHQUFHLEVBQUUsNENBQTRDO1lBQ2pELE1BQU0sRUFBRSxlQUFlO1NBQ3hCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsR0FBRyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxXQUFXO1NBQzlEO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsR0FBRyxFQUFFLDZDQUE2QztZQUNsRCxNQUFNLEVBQUUsb0JBQW9CO1NBQzdCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxNQUFNLEVBQUUsOEJBQThCO1NBQ3ZDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHdDQUF3QztZQUM3QyxNQUFNLEVBQUUsMEJBQTBCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHFDQUFxQztZQUMxQyxNQUFNLEVBQUUsd0RBQXdEO1NBQ2pFO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHVJQUF1STtZQUM1SSxNQUFNLEVBQUUsK0NBQStDO1NBQ3hEO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHlCQUF5QjtZQUM5QixNQUFNLEVBQUUsa0RBQWtEO1NBQzNEO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLGdDQUFnQztZQUNyQyxNQUFNLEVBQUUsb0JBQW9CO1NBQzdCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLG9DQUFvQztZQUN6QyxNQUFNLEVBQUUscUJBQXFCO1NBQzlCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLCtCQUErQjtZQUNwQyxNQUFNLEVBQUUsc0NBQXNDO1NBQy9DO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHdFQUF3RTtZQUM3RSxNQUFNLEVBQUUsK0RBQStEO1NBQ3hFO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLDBDQUEwQztZQUMvQyxNQUFNLEVBQUUseUVBQXlFO1NBQ2xGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLDZEQUE2RDtZQUNsRSxNQUFNLEVBQUUsb0NBQW9DO1NBQzdDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHNDQUFzQztZQUMzQyxNQUFNLEVBQUUsNkNBQTZDO1NBQ3REO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLCtCQUErQjtZQUNwQyxNQUFNLEVBQUUsdUJBQXVCO1NBQ2hDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHlFQUF5RTtZQUM5RSxNQUFNLEVBQUUsbUNBQW1DO1NBQzVDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHdEQUF3RDtZQUM3RCxNQUFNLEVBQUUsbUNBQW1DO1NBQzVDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLDhDQUE4QztZQUNuRCxNQUFNLEVBQUUsd0NBQXdDO1NBQ2pEO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLDhDQUE4QztZQUNuRCxNQUFNLEVBQUUsdUVBQXVFO1NBQ2hGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLG9EQUFvRDtZQUN6RCxNQUFNLEVBQUUseUVBQXlFO1NBQ2xGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHlCQUF5QjtZQUM5QixNQUFNLEVBQUUsb0JBQW9CO1NBQzdCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLHVDQUF1QztZQUM1QyxNQUFNLEVBQUUsYUFBYTtTQUN0QjtRQUNELElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSx3QkFBd0I7WUFDN0IsTUFBTSxFQUFFLHFCQUFxQjtTQUM5QjtRQUNELElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxxQ0FBcUM7WUFDMUMsTUFBTSxFQUFFLFlBQVk7U0FDckI7UUFDRCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsK0JBQStCO1lBQ3BDLE1BQU0sRUFBRSxrQ0FBa0M7U0FDM0M7UUFDRCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsNkNBQTZDO1lBQ2xELE1BQU0sRUFBRSxtQ0FBbUM7U0FDNUM7UUFDRCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsaUNBQWlDO1lBQ3RDLE1BQU0sRUFBRSxxREFBcUQ7U0FDOUQ7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBQdW4ge1xuICBpZDogbnVtYmVyLFxuICBwdW46IHN0cmluZyxcbiAgYW5zd2VyOiBzdHJpbmdcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQdW5TZXJ2aWNlIHtcbiAgc3VnZ2VzdEtleXdvcmRzKHBhcnRpYWw6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBjb25zdCBrZXl3b3JkcyA9IHN1Z2dlc3RLZXl3b3JkcyhwYXJ0aWFsKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihrZXl3b3Jkcyk7XG4gIH1cblxuICBnZXRQdW5zKGtleXdvcmRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UHVuW10+IHtcbiAgICBjb25zdCBwdW5zID0gZ2V0UHVucyhrZXl3b3Jkcyk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YocHVucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VnZ2VzdEtleXdvcmRzKHBhcnRpYWw6IHN0cmluZykge1xuICBpZiAoIXBhcnRpYWwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMobW9ja3Mua2V5d29yZHMpXG4gICAgLmZpbHRlcihrZXl3b3JkID0+IGtleXdvcmQuaW5kZXhPZihwYXJ0aWFsLnRvTG93ZXJDYXNlKCkpID09PSAwKVxufVxuXG5mdW5jdGlvbiBnZXRQdW5zKGtleXdvcmRzKSB7XG4gIGlmICgha2V5d29yZHMgfHwga2V5d29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgZm91bmQgPSBrZXl3b3Jkcy5yZWR1Y2UoKGZvdW5kLCBrZXl3b3JkKSA9PiB7XG4gICAgY29uc3QgaWRzID0gbW9ja3Mua2V5d29yZHNba2V5d29yZF07XG4gICAgaWYgKGlkcykge1xuICAgICAgcmV0dXJuIGlkcy5yZWR1Y2UoKGZvdW5kLCBpZCkgPT4ge1xuICAgICAgICBmb3VuZFtpZF0gPSBtb2Nrcy5wdW5zW2lkXTtcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgfSwgZm91bmQpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMoZm91bmQpLm1hcChrZXkgPT4gZm91bmRba2V5XSk7XG59XG5cbmNvbnN0IG1vY2tzID0ge1xuICBrZXl3b3Jkczoge1xuICAgICdiYW5hbmEnOiBbMCwgMTMsIDE0LCAxNSwgMTZdLFxuICAgICdjaGVlc2UnOiBbMywgNCwgNSwgNiwgNywgOCwgMTIsIDE3LCAyM10sXG4gICAgJ2JpcmQnOiBbMywgMTEsIDEyLCAxLCAyMF0sXG4gICAgJ2hvdGVsJzogWzQsIDksIDEwLCAxMV0sXG4gICAgJ21leGljYW4nOiBbNiwgMTcsIDIxLCAyMiwgMjMsIDI0LCAyNV0sIFxuICAgICdjb3cnOiBbMTIsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzFdLFxuICAgICdlZ2cnOiBbMTgsIDE5LCAyMCwgMzIsIDMzXSxcbiAgICAnZm9vZCc6IFswLCAxMywgMTQsIDE1LCAxNiwgMywgNCwgNSwgNiwgNywgOCwgMTIsIDIzLCAxOCwgMTksIDIwLCAzMiwgMzNdXG4gIH0sXG5cbiAgcHVuczoge1xuICAgICcwJzoge1xuICAgICAgcHVuOiAnV2hhdHMgYmFuYW5hIHlvdXIgbWluZD8nLFxuICAgICAgYW5zd2VyOiAnQSBidW5jaC4nXG4gICAgfSxcbiAgICAnMSc6IHsgXG4gICAgICBwdW46ICdJZCBtYWtlIGEgcHVuIGFib3V0IGEgY2hpY2tlbi4uLicsIFxuICAgICAgYW5zd2VyOiAnQnV0IGl0IHdvdWxkIGJlIGZvd2wuJ1xuICAgIH0sXG4gICAgJzInOiB7XG4gICAgICBwdW46ICd0aGlzIGlzIGEgcHVuIGFib3V0IGEgcGlja2xlIGFuZCBhIGhhdCcsIFxuICAgICAgYW5zd2VyOiAnYW5zd2VyJ1xuICAgIH0sXG4gICAgJzMnOiB7XG4gICAgICBwdW46ICdXaGF0IGtpbmQgb2YgY2hlZXNlIGNhbiBmbHk/JywgXG4gICAgICBhbnN3ZXI6ICdDdXJkcyBvZiBQcmV5LidcbiAgICB9LFxuICAgICc0Jzoge1xuICAgICAgcHVuOiAnV2hhdCBob3RlbCBkaWQgdGhlIGNoZWVzZSBzdGF5IGF0PycsIFxuICAgICAgYW5zd2VyOiAnVGhlIFN0aWx0b24uJ1xuICAgIH0sXG4gICAgJzUnOiB7XG4gICAgICBwdW46ICdXaGF0IGlzIHRoZSBzYWRkZXN0IGNoZWVzZT8nLCBhbnN3ZXI6ICdCbHVlIENoZWVzZS4nXG4gICAgfSxcbiAgICAnNic6IHtcbiAgICAgIHB1bjogJ1doYXQgZG8geW91IGNhbGwgYSBjaGVlc2UgdGhhdCBpc250IHlvdXJzPycsIFxuICAgICAgYW5zd2VyOiAnTmFjaG8gQ2hlZXNlLidcbiAgICB9LFxuICAgICc3JzogeyBcbiAgICAgIHB1bjogJ1doYXQgbXVzaWMgZG9lcyBjaGVlc2UgbGlzdGVuIHRvPycsIGFuc3dlcjogJ1IgJiBCcmllLidcbiAgICB9LFxuICAgICc4Jzoge1xuICAgICAgcHVuOiAnV2hhdHMgYWx3YXlzIHRoZSBsYXN0IHBpZWNlIG9mIGNoZWVzZSBsZWZ0PycsIFxuICAgICAgYW5zd2VyOiAnRm9yZXZlciBQcm92b2xvbmUuJ1xuICAgIH0sXG4gICAgJzknOiB7IFxuICAgICAgcHVuOiAnSSB1c2VkIHRvIGJlIGEgaG90ZWwgY2xlcmsnLCBcbiAgICAgIGFuc3dlcjogJ0J1dCB0aGVuIEkgaGFkIHJlc2VydmF0aW9ucy4nXG4gICAgfSxcbiAgICAnMTAnOiB7XG4gICAgICBwdW46ICdJbSBzdGF5aW5nIGF0IGEgcmVhbGx5IHRyZW5kIG5ldyBob3RlbCcsIFxuICAgICAgYW5zd2VyOiAnSXRzIHRoZSBpbm4gdGhpbmcgdG8gZG8uJ1xuICAgIH0sXG4gICAgJzExJzoge1xuICAgICAgcHVuOiAnQSBiaXJkIGRvY3RvciBjaGVja2VkIGludG8gYSBob3RlbC4nLCBcbiAgICAgIGFuc3dlcjogJ0hlIHNhaWQsIFwiVGhpcyBpcyB0aGUgYmVzdCBwbGFjZSBJIGZlYXRoZXIgc3RheWVkIGF0XCIuJ1xuICAgIH0sXG4gICAgJzEyJzoge1xuICAgICAgcHVuOiAnQSBiaXJkIGFuZCBhIGNvdyBnbyBzaG9wcGluZyBmb3IgY2hlZXNlLiBUaGUgY293LCBrbm93aW5nIGhlIGNhbiBwcm9kdWNlIHRoZSBtaWxrIHNheXMgdG8gdGhlIGJpcmQsIFwidGhpcyBwbGFjZSBpcyByb2JpbiB5b3UgYmxpbmQhXCIuJywgXG4gICAgICBhbnN3ZXI6ICdUaGUgYmlyZCBzYXlzLCBcIkkgbGlrZSBteSBjaGVlc2UgY2hlZXAgY2hlZXAhJ1xuICAgIH0sXG4gICAgJzEzJzoge1xuICAgICAgcHVuOiAnV2h5IGRvbnQgYmFuYW5hcyBzbm9yZT8nLCBcbiAgICAgIGFuc3dlcjogJ1RoZXkgZG9udCB3YW50IHRvIHdha2UgdXAgdGhlIHJlc3Qgb2YgdGhlIGJ1bmNoISdcbiAgICB9LFxuICAgICcxNCc6IHsgXG4gICAgICBwdW46ICdXaHkgZG8gYmFuYW5hcyB3ZWFyIHN1bnNjcmVlbj8nLCBcbiAgICAgIGFuc3dlcjogJ0JlY2F1c2UgdGhleSBwZWVsLidcbiAgICB9LFxuICAgICcxNSc6IHsgXG4gICAgICBwdW46ICdXaGF0IGRvIHlvdSBjYWxsIHR3byBiYW5hbmEgc2tpbnM/JywgXG4gICAgICBhbnN3ZXI6ICdBIHBhaXIgb2Ygc2xpcHBlcnMuJ1xuICAgIH0sXG4gICAgJzE2Jzoge1xuICAgICAgcHVuOiAnV2h5IGFyZSBiYW5hbmFzIG5ldmVyIGxvbmVseT8nLCBcbiAgICAgIGFuc3dlcjogJ0JlY2F1c2UgdGhleSBoYW5nIGFyb3VuZCBpbiBidW5jaGVzLidcbiAgICB9LFxuICAgICcxNyc6IHtcbiAgICAgIHB1bjogJ0EgY2hlZiBhc2tlZCBhIHRvbWF0byBhYm91dCB0byBiZSBkaWNlZCBpbnRvIHNhbHNhIGhvdyBpdCB3YXMgZmVlbGluZy4nLCBcbiAgICAgIGFuc3dlcjogJ0hlIGhhZCBhIGNoaXAgb24gaGlzIHNob3VsZGVycyBhbmQgc2FpZCBcIml0cyBuYWNobyBidXNpbmVzc1wiLidcbiAgICB9LFxuICAgICcxOCc6IHtcbiAgICAgIHB1bjogJ1dlIHNhdyBLYW55ZSB0aGUgb3RoZXIgZGF5IGF0IGJyZWFrZmFzdC4nLCBcbiAgICAgIGFuc3dlcjogJ1NvbWVvbmUgc2FpZCBcIk9tLWEtbGV0dGUgeW91IGZpbmlzaCwgYnV0IEkgaG9wZSB0aGF0IG9tZWxldHRlIGlzIGdvb2QhXCInXG4gICAgfSxcbiAgICAnMTknOiB7XG4gICAgICBwdW46ICdXYXMgb24gYSBkaWV0IHdpdGggbXkgc2lzdGVyLiBTaGUgZmVkIG1lIG9uZSBlZ2cgZm9yIGx1bmNoLicsIFxuICAgICAgYW5zd2VyOiAnVGhhdCBoYWQgbWUgYkVHR2luZyBmb3IgbW9yZSBmb29kISdcbiAgICB9LFxuICAgICcyMCc6IHtcbiAgICAgIHB1bjogJ0hvdyB0byByb29zdGVycyBmbGlydCB3aXRoIGNoaWNrZW5zPycsIFxuICAgICAgYW5zd2VyOiAnVGhleSB3aXNoIGNoaWNrZW5zIGFuIGVnZy1zdHJhIHNwZWNpYWwgZGF5LidcbiAgICB9LFxuICAgICcyMSc6IHtcbiAgICAgIHB1bjogJ0hvdyB0byB0YWNvcyBoYW5kbGUgZGlzcHV0ZXM/JywgXG4gICAgICBhbnN3ZXI6ICdUaGV5IHRhY28tdmVyIGNvZmZlZS4nXG4gICAgfSxcbiAgICAnMjInOiB7XG4gICAgICBwdW46ICdJZiB5b3VyZSBodW5ncnkgZm9yIG1leGljYW4gZm9vZCwgd2hhdCBpcyB0aGUgd29yc3QgdGhpbmcgeW91IGNvdWxkIGRvPycsIFxuICAgICAgYW5zd2VyOiAnQnVycml0byBhcm91bmQgdGhlIGJ1c2ggYWJvdXQgaXQuJ1xuICAgIH0sXG4gICAgJzIzJzoge1xuICAgICAgcHVuOiAnT3VyIGxvY2FsIE1leGljYW4gcmVzdGF1cmFudCB3YXMgY2xvc2VkIHRoZSBvdGhlciBkYXkuJywgXG4gICAgICBhbnN3ZXI6ICdUaGV5IHNhaWQgaXQgd2FzIGEgcXVlc28gdGhlIGZsdS4nXG4gICAgfSxcbiAgICAnMjQnOiB7XG4gICAgICBwdW46ICdCdW5jaCBvZiBhdm9jYWRvcyBkZWNpZGVkIHRvIHJ1biBhIG1hcmF0aG9uLicsIFxuICAgICAgYW5zd2VyOiAnVGhleSBmaWd1cmUgdGhleXZlIGd1YWMgd2hhdCBpdCB0YWtlcy4nXG4gICAgfSxcbiAgICAnMjUnOiB7XG4gICAgICBwdW46ICdBbnlvbmUgYmVlbiBleHBvc2VkIHRvIGEgY2hlZXN5IG1leGljYW4gcHVuPycsIFxuICAgICAgYW5zd2VyOiAnUXVlLCBzbyBhdm9jYWRvIHNheSwgd2V2ZSBhbGwgYmVhbiB0aGVyZSwgYnV0IGxldHMgbm90IHRhY28gYWJvdXQgaXQuJ1xuICAgIH0sXG4gICAgJzI2Jzoge1xuICAgICAgcHVuOiAnVGhlIGNvdyB0b2xkIGV2ZXJ5b25lIGhpcyBncmFuZGZhdGhlciB3YXMgYSBrbmlnaHQnLCBcbiAgICAgIGFuc3dlcjogJ0FuZCB0aGF0IGhpcyBuYW1lIHdhcyBzaXIgbG9pbi4gSSBsYXVnaGVkIHNvIGhhcmQgSSBoYWQgdG8gcmliIG15IGV5ZXMuJ1xuICAgIH0sXG4gICAgJzI3Jzoge1xuICAgICAgcHVuOiAnV2h5IHdhcyB0aGUgY293IGFmcmFpZD8nLCBcbiAgICAgIGFuc3dlcjogJ0hlIHdhcyBhIGNvdy1oZXJkLidcbiAgICB9LFxuICAgICcyOCc6IHtcbiAgICAgIHB1bjogJ1doYXQgZG8geW91IGNhbGwgYSBjb3cgd2l0aCBhIHR3aXRjaD8nLCBcbiAgICAgIGFuc3dlcjogJ0JlZWYgamVya3kuJ1xuICAgIH0sXG4gICAgJzI5Jzoge1xuICAgICAgcHVuOiAnSG93IGRvIHlvdSBjb3VudCBjb3dzPycsIFxuICAgICAgYW5zd2VyOiAnV2l0aCBhIGNvdy1jdWxhdG9yLidcbiAgICB9LFxuICAgICczMCc6IHtcbiAgICAgIHB1bjogJ1doYXQgZG8geW91IGNhbGwgYSBjb3cgd2l0aCAzIGxlZ3M/JywgXG4gICAgICBhbnN3ZXI6ICdMZWFuIGJlZWYuJ1xuICAgIH0sXG4gICAgJzMxJzoge1xuICAgICAgcHVuOiAnV2h5IGRpZCB0aGUgY293IGdldCBhcnJlc3RlZD8nLCBcbiAgICAgIGFuc3dlcjogJ0hlIHdhcyB1c2luZyBjb3ctbnRlcmZlaXQgbW9uZXkuJ1xuICAgIH0sXG4gICAgJzMyJzoge1xuICAgICAgcHVuOiAnVGhpcyBlZ2cgd2FzIGVnZy1jZWxsZW50IGF0IGNyYWNraW5nIG1lIHVwLicsIFxuICAgICAgYW5zd2VyOiAnSGUgd2FzIG1ha2luZyBhIGxvdCBvZiBwdW4geW9sa3MuJ1xuICAgIH0sXG4gICAgJzMzJzoge1xuICAgICAgcHVuOiAnVGhlIGVnZyB3YXMgZWdnLXN0cmVtZWx5IGhhcHB5LicsIFxuICAgICAgYW5zd2VyOiAnQnV0IHlvdSBjb3VsZG50IHJlYWxseSB0ZWxsIGZyb20gaGlzIGVnZy1zcHJlc3Npb24uJ1xuICAgIH1cbiAgfVxufTsiXX0=