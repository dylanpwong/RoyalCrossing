# RoyalCrossing

Royal Crossing is a story sharing site powered by postgres db, rails backend, and react redux front end. 

__link__: https://royalcrossing.herokuapp.com/#/


## Features

1. User Sign Up and Sign In
1. Create Stories
1. View Stories
1. Edit Stories
1. View Chapters
1. Show Users profile page


## Showing A story
The Show Story feature shows the story page  along with a the chapters table index. This component utilizes the associations, set up in the rails backened. It fetches the selected story from the backend along with all the chapters, by utlizing ComponentDIdMount after the initial render of nothing

## Creating A Story
The create story feature was tricky in a sense that when a User creates a story they must also create the first chapter of the story as well. The problem lies with how A chapter must be created. 

Each Chapter must belong to a Story, and thus have a story_id. But how could the chapter, created in the story creation form, have a story_id of a story that is being created along side it?

I did this by envoking the thunk action creator for my create Chapter inside the response from my create Story thunk action creator.











