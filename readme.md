# ![](https://d.newsweek.com/en/full/1760172/ufo.jpg) 
# ![](https://git.generalassemb.ly/hlang/jsr-202-projects/blob/master/unit2/unit2-%20HamishL/images/titleimage.png) 

# Project 3: Click Bath
by Hamish Lang

### Overview

My goal was to create an over the top, sci-fi feed reader that would allow the user to filer, like, and remove articles based on how authentic the article is. 

__What's with the name?!?__
Wanted something sci-fi looking, based the name of the Navy fighter Jet that discovered a UFO and was publicly announced recently. 

__Design Inspirations__


Inspired by the game 'Death Stranding', love how instense the UI is, and the use of colours. Also love the recent design of the 
ǍCROŇYMř laptop by ASUS. Overtly futuristic.


__Features Overview__

- Reads three different API's for the main feed. These are searching different topics each. When the API's successfully finish calling, the data is merged into one object (called `comboSort` in the js file) and also split out into separate category objects for filtering. Due to the fact that my API's have a maximum call limit per day (100), I have an offline mode within the code at the very bottom.

- Allows the user to like and remove articles, these liked and removed articles can be viewed indepently, and altered.

- Results sorted by date.

- Live search which scans both the article summary and title, is also not case sensitive. 

- 'Picture of the Day', uses NASA's Picture of the day api to allow the user to view this in a separate popup.

- Dynamic UI features; Lots of feedback implemented to show the users actions. Can click outside of popup to close also.

- No article erroring, if there are no articles showing in some views, an error message will display.

- Braille animation to show user feedback.

- Black and white images go color on hover.

#### THINGS I WISH I COULD HAVE IMPLEMENTED (ran out of time) 

(or upcoming features 😉)

- Hide api keys, further tidy up code and optimise.

- Remove function in popup window.

- No content message for live search if all articles are removed. For some reason my function wouldn't work in this situation.

- Create better loading animation

- I spent far too much time working on an animation for the braille interaction that used different delays for changing the characters and did this at random intervals. This is why the function is setup to print separate characters into separate divs. I ran into massive issues with blowing out the call stack doing this. It looked awesome, would love to figure out a solution for this with an instructor. 

- Allow user to search other terms ("ghosts", "monsters") by using existing API's but simply updating search work via input.

- Rating system. Thought it would be nice to have a feature where when selecting articles you could hover the squares to input a 1-10 score, to score how interesting it is. The like function is this but boolean essentially. 

- Take out separate arrays for filters, simply assign a value to each object and then use a printing function that only prints the type based on the input. 

- Offline / online toggle.

- Color photo preview on/off. 

- Filter by date.

- Hovering type in article shows filter list on click. 

#### THINGS I WISH I DID FROM THE BEGINNING

- I kept adding on features as I went, which made the code quite messy. If I had a clearer outline I would have combined the functions more effectively.

- No boiler plate for CSS and HTML, I wish I just started it a bit more from scratch (except for the excellent js file).

- Should of used different API's that didn't have limits on them.

- Bundled functions into different js files, the main js file became harder and harder to navigate over time. 



