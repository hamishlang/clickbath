
# ![](https://github.com/hamishlang/clickbath/blob/main/clickbath.png | width=100) 

# Project 3: Click Bath
by Hamish Lang

### Overview

Click Bath is an ambient music generator. It allows the user to click on one of two pads to produce a claiming tone. It can be used by musicians and non-musicians alike, no musical theory is required. 

__What's with the name?!?__
The idea is a play on ‘sound baths’, which is usually just ambient music played live on non traditional instruments which is rising in popularity. Click bath does not require 



__Design Inspirations__


I wanted to do the opposite of my previous project, and provide the cleanest UI possible, with as little options or settings shown initially to ensure the app does not appear to be too complex or intimidating.  

Music apps tend to be overtly settings heavy, which is in most cases ideal for usability. I believe though that this can make them less approachable for newcomers. 



__Features Overview__

- Allows users to assign one of ten sounds to one of the two pads, the color of the pad will change depending on the tone selected when changed.

- Notes can be chosen from either a musical scale or a ‘mood’ based scale for non-musicians.

- Global Presets can be loaded from firebase.

- A weather specific preset can be loaded from the users location.

- Oscilloscopes that react to the sound being played. 

- Knobs with dynamic coloring.

- Dynamic selections that change other fields and update accordingly.

- Environmental soundscapes can be blended into the tones via the center knobs.

- Pads randomly generate notes based on the tone and key, and based on the users mouse location within the pad, the sound will pan to the right or left speaker, and play a high tone at the top, or a low tone at the bottom.

- Selection of keys is, and presets, changes all states.

- Tones were created by myself, using a combination of synths, guitars, and pre recorded sample libraries.

#### TECH USED 

- Tone.js for sound playback, musical control.

- WebAudio Controls for the Knob interaction controls.

- Nexus.js for Oscilloscope functionality.

- LOTS of JQuery.

- OpenWeather API.

- Google Firebase.



#### FURTHER UPDATES NEEDED

- Responsive, mobile version.
- Fix occasional clicks due to changing the pan.
- Allow environmental effects to be assigned to presets and loaded.
- Improve tones!
- Clean up CSS, it’s a real mess!
- Improve onload animations.


#### THINGS I WISH I DID FROM THE BEGINNING

- Use Sass!

- Wasted so much time using old libraries and reading docs for more recent version leading to huge headaches. 

- Sketch out the UI more, really wanted it to be responsive but ran out of time. 


<!-- # ![](https://i.pinimg.com/originals/14/4b/9f/144b9fad1e750ec3b016988b5700c4d2.jpgs=100)  -->
<img src="https://i.pinimg.com/originals/14/4b/9f/144b9fad1e750ec3b016988b5700c4d2.jpg" width="300">


