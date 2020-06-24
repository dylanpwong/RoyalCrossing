# RoyalCrossing

Royal Crossing is a story sharing site powered by postgres db, rails backend, and react redux front end. 

__link__: https://royalcrossing.herokuapp.com/#/


## Features

1. User Sign Up and Sign In
1. Show Stories
1. Create Stories
1. Edit Stories
1. Show Chapters
1. Edit Chapters
1. Delete Chapters
1. Show Users profile page

## User Sign Up and Sign In

## Showing A story
The Show Story feature shows the story page  along with a the chapters table index. This component utilizes the associations, set up in the rails backened. It fetches the selected story from the backend along with all the chapters, by utlizing ComponentDIdMount after the initial render of nothing

## Creating A Story
The create story feature was tricky in a sense that when a User creates a story they must also create the first chapter of the story as well. The problem lies with how A chapter must be created. 

Each Chapter must belong to a Story, and thus have a story_id. But how could the chapter, created in the story creation form, have a story_id of a story that is being created along side it?

I did this by envoking the thunk action creator for my create Chapter inside the response from my create Story thunk action creator. Below is the code that executes it. On line 59-65 you can see that the chapter thunk action creator is only called within 

Examing the code you can also see on lines 36 and 43 two objects containing information on the story and chapter. This is so in the later lines, I can error check to see if the user has left and categories blank. A similiar method is done for chapter creation as well.

```javascript
    // createFiction.jsx
    submitHandler(e){
        e.preventDefault();
        const data ={
            id: this.state.id,
            title: this.state.storyTitle,
            synopsis: this.state.synopsis,
            author_id: this.props.author.id,
            genre_ids: this.state.genre_ids
        }
        const chapData={
            title: this.state.chapterTitle,
            content: this.state.content,

        }
      
        if(this.state.synopsis==""){
            this.setState({errors: true});
        }else if(this.state.storyTitle==""){
            this.setState({ errors: true });
        }else if(this.state.chapterTitle=="" &&!this.props.edit){
            this.setState({ errors: true });
        }else if(this.state.content=="" &&!this.props.edit){
            this.setState({ errors: true });
        }else if (this.state.genre_ids.length ==0){
            this.setState({ errors: true });
        }else if(!this.props.edit){
            this.state.errors=false;
            this.props.createAStory(data).then((res)=>{
                chapData.story_id = res.story.id;
                    this.props.createChapter(chapData).then((res2)=>{
                  
                        this.props.history.push('/')
                    })
            })
        }else{
            this.state.errors=false;
            this.props.editStoryFunc(data).then((res)=>{
              
                this.props.history.push(`/fiction/${res.story.id}`);
            })
            
        }
       
    }

```











