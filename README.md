# RoyalCrossing

Royal Crossing is a story sharing site powered by postgres db, rails backend, and react redux front end. 

__link__: https://royalcrossing.herokuapp.com/#/


## Features

1. User Sign Up and Sign In
2. Displays Stories
3. Create Stories
4. View Stories
5. View Chapters
6. Show Users page


## Showing A story


## Creating A Story
The create story feature was tricky in a sense that when a User creates a story they must also create the first chapter of the story as well. The problem lies with how A chapter must be created. 

Each Chapter must belong to a Story, and thus have a story_id. But how could the chapter, created in the story creation form, have a story_id of a story that is being created along side it?

I did this by envoking the thunk action creator for my create Chapter inside the response from my create Story thunk action creator.







