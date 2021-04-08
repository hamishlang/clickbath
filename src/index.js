// CLICK BATH


$(".areaShow").hide();
$(".popUpMenu").hide();



//set the tempo for tone js
Tone.Transport.bpm.value = 120;

// this took so bloody long to get right. Basically these are different chords, for different scales in both major and minor
let C = ['C', 'E', 'G', 'B', ];
let Cs = ['Db', 'F', 'Ab', 'C', ];
let D = ['D', 'F#', 'A', 'C#'];
let Ds = ['Eb', 'G', 'Bb', 'D', ];
let E = ['E', 'G#', 'B', 'D#'];
let F = ['F', 'A', 'C', 'E', ];
let Fs = ['F#', 'A#', 'C#', 'F', ];
let G = ['G', 'B', 'D', 'F#'];
let Gs = ['Ab', 'C', 'Eb', 'G', ];
let A = ['A', 'C#', 'E', 'G#'];
let As = ['Bb', 'D', 'F', 'A', ];
let B = ['B', 'D#', 'F#', 'A#', ];

let Cm = ['C', 'Eb', 'G', 'Bb', ];
let Csm = ['C#', 'E', 'G#', 'B', ];
let Dm = ['D', 'F', 'A', 'C', ];
let Dsm = ['D#', 'F#', 'A#', 'C#', ];
let Em = ['E', 'G', 'B', 'D', ];
let Fm = ['F', 'Ab', 'C', 'Eb', ];
let Fsm = ['F#', 'A', 'C#', 'E', ];
let Gm = ['G', 'Bb', 'D', 'F', ];
let Gsm = ['G#', 'B', 'D#', 'F#', ];
let Am = ['A', 'C', 'E', 'G', ];
let Asm = ['A#', 'C#', 'F', 'G#', ];
let Bm = ['B', 'D', 'F#', 'A', ];

// Channels for delays, these are used later to establish the delay on the sound
let delay;
let delay2;
let volume;
let ready;

let merge = new Tone.Channel();
let merge2 = new Tone.Channel();
let panner = new Tone.Panner();
let pannerTwo = new Tone.Panner();


// Load the reverb
async function setup() {
  const reverb = new Tone.Reverb({
    decay: 10,
    wet: 0.6,
    preDelay: 0.2
  });
  const reverb2 = new Tone.Reverb({
    decay: 10,
    wet: 0.6,
    preDelay: 0.2
  });

  delay = new Tone.FeedbackDelay('2n', 0.85);
  delay2 = new Tone.FeedbackDelay('2n', 0.85);

  volume = new Tone.Volume(-4).toDestination();
  Tone.Master.volume.value = -1;
  await reverb.generate();
  await reverb2.generate();
  // AUUUUDDDIOOOOO ROUTING
  panner.connect(reverb);
  panner.connect(delay);
  delay.connect(reverb);

  pannerTwo.connect(reverb2);
  pannerTwo.connect(delay2);
  delay2.connect(reverb2);

  reverb.connect(Tone.Master);
  reverb2.connect(Tone.Master);


  reverb.connect(merge);
  reverb2.connect(merge2);

  ready = true;
}

// the following block is for setting up the synths and samplers
const synth = new Tone.PolySynth();

synth.set({
  "volume": 0,
  "detune": 0,
  "portamento": 0,
  "envelope": {
    "attack": 0.01,
    "attackCurve": "linear",
    "decay": 1,
    "decayCurve": "exponential",
    "release": 0.5,
    "releaseCurve": "exponential",
    "sustain": 0.1,
  },
  "oscillator": {
    "partialCount": 0,
    "partials": [],
    "phase": 0,
    "type": "sine"
  }
});

const piano1 = new Tone.Sampler({
  urls: {
    C6: "piano 1.mp3",
    C5: "piano 2.mp3",
    C4: "piano 3.mp3",
    C3: "piano 4.mp3",
    // A2: "A2.mp3",
  },
  baseUrl: "assets/",

});


const flute = new Tone.Sampler({
  urls: {
    C6: "flute 1.mp3",
    C5: "flute 2.mp3",
    C4: "flute 3.mp3",
  },
  baseUrl: "assets/",

});

const casioStrings = new Tone.Sampler({
  urls: {
    C6: "casio2 1.mp3",
    C5: "casio2 2.mp3",
    C4: "casio2 3.mp3",
    C3: "casio2 4.mp3",
  },
  baseUrl: "assets/",

});

const casio3 = new Tone.Sampler({
  urls: {
    C7: "casio3 1.mp3",
    C6: "casio3 2.mp3",
    C5: "casio3 3.mp3",
    C4: "casio3 4.mp3",
  },
  baseUrl: "assets/",

});

const clarinet = new Tone.Sampler({
  urls: {
    C6: "clarinet3.mp3",
    C5: "clarinet2.mp3",
    C4: "clarinet1.mp3",
  },
  baseUrl: "assets/",
});

const strings2 = new Tone.Sampler({
  urls: {
    C6: "strings2-4.mp3",
    C5: "strings2-3.mp3",
    C4: "strings2-2.mp3",
    C3: "strings2-1.mp3",
  },
  baseUrl: "assets/",
});

const tapebells = new Tone.Sampler({
  urls: {
    C6: "tapebell4.mp3",
    C5: "tapebell3.mp3",
    C4: "tapebell2.mp3",
    C3: "tapebell1.mp3",
  },
  baseUrl: "assets/",
});

const tapeguitar = new Tone.Sampler({
  urls: {
    C5: "tapeguitar3.mp3",
    C4: "tapeguitar2.mp3",
    C3: "tapeguitar1.mp3",
  },
  baseUrl: "assets/",
});

const guitar = new Tone.Sampler({
  urls: {
    C5: "guitar3.mp3",
    C4: "guitar2.mp3",
    C3: "guitar1.mp3",
  },
  baseUrl: "assets/",
});


let synth2 = new Tone.Synth({
  "oscillator": {
    "type": `sine2`,
    "count": 30,
    "spread": 30
  },
  "envelope": {
    "attack": 0.1,
    "decay": 3.6,
    "sustain": 0.1,
    "release": 1.5,
    "attackCurve": "exponential"
  }
});


//set the volume for the noises
piano1.volume.value = 8;
flute.volume.value = 6;
casioStrings.volume.value = 15;
casio3.volume.value = 15;
synth.volume.value = -15;
synth2.volume.value = -13;

//this function is used to establish what notes to use, basically it checks the current checkmark boxes to find out what notes should be played by using if statements
let noteArray = (octave) => {
  // defaults to c major, same as check marks
  let notes = C

  //re-establish the delay level as some other funcitions kill it so that note clashes do not occur
  delay.feedback.value = 0.8;
  delay2.feedback.value = 0.8;

  // here are a;; teh checkmarks
  if ($(`#optimistic`).is(':checked')) {
    console.log("feeling nice")
    notes = C
  };

  if ($(`#melancholy`).is(':checked')) {
    console.log("feeling weird")
    notes = ['C', 'D', 'Eb', 'G', ];
  };

  if ($(`#c`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = C
    } else {
      notes = Cm
    };
  };
  if ($(`#cs`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = Cs
    } else {
      notes = Csm
    };
  };
  if ($(`#d`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = D
    } else {
      notes = Dm
    };
  };
  if ($(`#ds`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = Ds
    } else {
      notes = Dsm
    };
  };
  if ($(`#e`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = Es
    } else {
      notes = Esm
    };
  };
  if ($(`#e`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = Ds
    } else {
      notes = Dsm
    };
  };
  if ($(`#f`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = F
    } else {
      notes = Fm
    };
  };
  if ($(`#fs`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = Fs
    } else {
      notes = Fsm
    };
  };
  if ($(`#g`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = G
    } else {
      notes = Gm
    };
  };
  if ($(`#gs`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = Gs
    } else {
      notes = Gsm
    };
  };
  if ($(`#a`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = A
    } else {
      notes = Am
    };
  };
  if ($(`#As`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = As
    } else {
      notes = Asm
    };
  };
  if ($(`#b`).is(':checked')) {
    if ($(`#major`).is(':checked')) {
      notes = B
    } else {
      notes = Bm
    };
  };
  if ($(`#cs`).is(':checked') && $(`#major`).is(':checked')) {
    notes = Cs
  };

  // this simply ensures that the user is cycling through the array of notes defined earlier randomly
  function randomNote() {
    return Math.floor(Math.random() * notes.length)
  };
  return `${notes[randomNote()]}${octave}`
};


//this establishes all of the effect routing
setup();

//defining the actual areas as buttons for ease of use
const audioButton = $("#audio-button");
const audioButton2 = $("#audio-button2");





// THIS IS THE ACTUAL CLICKER FUNCTION THAT MAKES NOISE

// It uses the mouses position to gauge its position within the div, to effect the pan (left and right speaker) and the note selection, it also checks the radios (finally!) to establish which sound wil play
function synthSetup(theButton, panName, targetTwo, number) {
  let synthName;
  theButton.on('click', (e) => {
    // if (theButton === audioButton) {

    if ($(`#piano${number}`).is(':checked')) {
      synthName = piano1;""
      // console.log(this)
    } else if ($(`#sine${number}`).is(":checked")) {
      synthName = synth2;
    } else if ($(`#flute${number}`).is(":checked")) {
      synthName = flute;
    } else if ($(`#casio${number}`).is(":checked")) {
      synthName = casio3;
    } else if ($(`#strings${number}`).is(":checked")) {
      synthName = casioStrings;
    } else if ($(`#guitar${number}`).is(":checked")) {
      synthName = guitar;
    } else if ($(`#strings2${number}`).is(":checked")) {
      synthName = strings2;
    } else if ($(`#clarinet${number}`).is(":checked")) {
      synthName = clarinet;
    } else if ($(`#tapebells${number}`).is(":checked")) {
      synthName = tapebells;
    } else if ($(`#tapeguitar${number}`).is(":checked")) {
      synthName = tapeguitar;
    }
    synthName.connect(panName);

    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    //Convert new number into -1 - 1 range to work with Pan numbering
    let xPanWidth = (Math.floor(x) / rect.width * 2) - 1
    //Convert number to format for actaves
    let octaveClick = 6 - (Math.floor((y / rect.height) * 5));

    let gradientPercY = y / rect.height * 100;
    let gradientPercX = x / rect.width * 100;
    panName.pan.value = xPanWidth;
    $(targetTwo).css(
      'background', 'radial-gradient(at ' + gradientPercX + '% ' + gradientPercY + '%, rgba(255, 255, 255, 0.5)0%, rgba(101,141,210,0.0) 41%)');

    synthName.triggerAttackRelease(noteArray(octaveClick), '1n');
  });
};
//establishes both of the sounds immediatly, these are called again, based on user input, or changes in the loading
synthSetup(audioButton, panner, ".areaShow", 1);
synthSetup(audioButton2, pannerTwo, ".areaShow2", 2);



// this is the UI for the circles that appear when you click somewhere
function popupMaker(target, targetPop) {
  target;
  targetPop;
  $(target).click(function (e) {
    $(targetPop).stop();
    $(".popup").css({
      left: e.pageX,
      top: e.pageY
    });
    $(".popup").fadeIn(100).fadeOut(700);
    $(".popup2").css({
      left: e.pageX,
      top: e.pageY
    });
    $(".popup2").fadeIn(300);
    $(".popup2").fadeOut(300);
    $(targetPop).fadeIn(300);
    $(targetPop).fadeOut(800);

  });
};


//establish the UI for both sides. didn't want to have them as a combied function as it would mean the circle would move from one to another
popupMaker(".area", ".areaShow");
popupMaker(".area2", ".areaShow2");

// set up all of the effect loops
let ocean = new Tone.Player("assets/ocean.mp3").toDestination();
let bird1 = new Tone.Player("assets/birds1.mp3").toDestination();
let bird2 = new Tone.Player("assets/birds2.mp3").toDestination();
let bird3 = new Tone.Player("assets/birds3.mp3").toDestination();
let rain = new Tone.Player("assets/rain.mp3").toDestination();
let thunder = new Tone.Player("assets/thunder.mp3").toDestination();
let forest = new Tone.Player("assets/forest.mp3").toDestination();
let beach = new Tone.Player("assets/beach.mp3").toDestination();
let wind = new Tone.Player("assets/wind.mp3").toDestination();


//setup the knob functionality, I'm using a frameworks to support this as I really wanted a knob instead of a slider, which would have been easier, but not as fun to use
function knobFunction(target, parent, toneName) {
  toneName.autostart = true;
  toneName.volume.value = -100;
  toneName.loop = true;
  document.getElementById(target).addEventListener("input", (event) => {

    let knobAdjust = 255 - (event.target.value * 2.55);
    // took a while to get my head around how to translate the 1-100 values to DB values
    let volumeKnobEquation = (event.target.value * 0.5) - 50;

    $(parent).css('background-color', 'rgba(100,' + knobAdjust + ', 200, 0.3)')
    toneName.volume.value = volumeKnobEquation


    if (event.target.value > 0) {
      toneName.mute = false

    }
    if (event.target.value === 0) {
      toneName.volume.value = -100;
      toneName.mute = true
      // toneName.stop()
      $(parent).css('background-color', 'rgba(211, 211, 211, 0.3)')
    }
  });
}


//connect the effects loops to the knobs
knobFunction("birds", ".knob-container1", bird1);
knobFunction("birds2", ".knob-container7", bird2);
knobFunction("birds3", ".knob-container9", bird3);
knobFunction("waves", ".knob-container2", ocean);
knobFunction("thunder", ".knob-container4", thunder);
knobFunction("rain", ".knob-container3", rain);
knobFunction("forest", ".knob-container5", forest);
knobFunction("beach", ".knob-container6", beach);
knobFunction("wind", ".knob-container8", wind);


//establish the nexus oscillators, which is the thing making the sound visualisation
Nexus.colors.accent = "black";
Nexus.colors.fill = "#fff";

let oscilloscope = new Nexus.Oscilloscope('#oscilloscope', {});
let oscilloscope2 = new Nexus.Oscilloscope('#oscilloscope2', {});

oscilloscope.connect(merge);
oscilloscope2.connect(merge2);

//CURSOR FUNCTIONS
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const area1 = document.querySelector('.area');
const area2 = document.querySelector('.area2');



function cursorForBoxes(box, pointerBox) {
  $(pointerBox).hide();
  box.addEventListener('mousemove', e => {
    pointerBox.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px;");
  });
  box.addEventListener('mouseleave', e => {
    $(pointerBox).hide();
  })
}


// this is part of the pop up UI
cursorForBoxes(area1, cursor);
cursorForBoxes(area2, cursor2);


//this was really important for me to get right, and took quiet a bit of time. Basically this functions ensures that when some dropdowsn are activated, others are closed
let keyDisplay = (target, area) => {
  $(target).click(function () {

    if (target !== '.selectedMood') {
      if ($(area).first().is(":hidden")) {
        $('.moods').hide();
        $(area).fadeIn(100);
      } else {
        $(area).hide();
      };
    };
    if (target == '.selectedMood') {
      if ($(area).first().is(":hidden")) {
        console.log("working")
        $('.notes').hide();
        $('.keys').hide();
        $(area).fadeIn(100);
      } else {
        $(area).hide();
      };
    };
  });
};


// assigning the function to the drop downs in the options menu
keyDisplay('.selectedNote', '.notes');
keyDisplay('.selectedKey', '.keys');
keyDisplay('.selectedMood', '.moods');



//this is the menu display, did a combo function for all menus as I needed the top one to be able to close the additional drop downs within it, the bottom one doesn't need this hence the if statements
let menuDisplay = (target, area) => {
  $(target).click(function () {

    if (target == '.options') {
      if ($(area).first().is(":hidden")) {

        $(area).slideDown(200);
        $('.options > span ').addClass("arrowFlip");
      } else {
        $('.options > span ').removeClass("arrowFlip");
        $(area).slideUp(200);
        $('.moods').hide();
        $('.keys').hide();
        $('.notes').hide();
      }
    } else {
      if ($(area).first().is(":hidden")) {
        $('.presets > span ').addClass("arrowFlip");
        console.log("working");
        $('.notes').hide();
        $('.keys').hide();
        $(area).slideDown(200);
        $('.bigspace').slideDown(200);
        
      } else {
        $('.presets > span ').removeClass("arrowFlip");
        $(area).slideUp(200);
        $('.bigspace').slideUp(200);
      };
    };
  });
}


//establish button logic for both menus
menuDisplay('.options', '.setarea');
menuDisplay('.presets', '.presetsArea');

//if there is change in the key activate it, also, if one is selected of the musical keys and the other isn't, select a note or key by default to ensure a key is selected
$('.keySettings').change(function () {
  showWeatherNotActive();
  // auto populate DIV with note when changed 
  let setNoteValue = $("input[name='note']:checked").val();
  let setKeyValue = $("input[name='key']:checked").val();

  if (setNoteValue) {
    if ($("input[name='key']:checked") === undefined) {
      console.log("no key!!");
    };
  };
  if (setKeyValue) {
    $('.actualKey').text(setKeyValue);
    $('.keys').slideUp(100)
  };
});

$('.notes').change(function () {
  //turn off delays to avoid soundclashes
  delay.feedback.value = 0;
  delay2.feedback.value = 0;
  showWeatherNotActive();
  let setNoteValue = $("input[name='note']:checked").val();
  $('.notes').slideUp(100);
  $('.actualNote').text(setNoteValue);
  $('.actualMood').text("---");
  $('.keytypes').removeClass("grey");
  $('.selectedNote').removeClass("grey");
  $('.selectedKey').removeClass("grey");
  $('.keytypes2').addClass("grey");
  $('.selectedMood').addClass("grey");
  $("input[name='mood']:checked").removeAttr('checked')

  //check if a key has been selected, if not, select major by default
  if ($("input[name='key']:checked").val() == undefined) {
    console.log("no key!!");
    $("#major").prop("checked", true);
    $('.actualKey').text("Major");
  };
});


//this function is all about changing the UI to ensure that certain states show as active or inactive
function setDaKey() {
  $('.actualMood').text("---");
  $('.keytypes').removeClass("grey");
  $('.selectedNote').removeClass("grey");
  $('.selectedKey').removeClass("grey");
  $('.keytypes2').addClass("grey");
  $('.selectedMood').addClass("grey");
  $("input[name='mood']:checked").removeAttr('checked')
}
//small function due to the repeated use of it in the larger function for changing gradients based on which tone is checked. This was the best way I could find to animate gradient changes, simply ensure there is a base black and white one which is always persistent, then add an additional div on top. 
function gradientFades(side, css) {
  // $(side).fadeOut(400);
  $(side).hide();
  $(side).css(css);
  $(side).fadeIn("slow");
};

//here is the larger function, this checks which tone is selected then changes it accordingly, tried to make this as small as possible by 
function gradientChanger(side, number) {
  if ($(`input[name='tone${number}']:checked`).val() === `strings${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(255,250,170,0.41) 0%, rgba(245,230,59,0.45) 50%, rgba(80,159,203,1) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `flute${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(0, 255, 217, 0.3) 0%, rgba(42, 105, 109, 0.3) 50%, rgba(101, 141, 210, 0.8) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `piano${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(249,231,170,0.6) 0%, rgba(245,86,59,0.4) 50%, rgba(101,141,210,1) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `sine${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(170,229,249,1) 0%, rgba(59,203,245,0.4) 50%, rgba(101,141,210,1) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `casio${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(248,205,250,0.1) 0%, rgba(199,59,245,0.3) 50%, rgba(101,141,210,1) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `guitar${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(255,215,92,0.5) 0%, rgba(223,146,83,0.45) 50%, rgba(80,159,203,1) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `strings2${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(0, 212, 255, 0.3) 0%, rgba(68, 68, 173, 0.3) 50%, rgba(101, 141, 210, 0.8) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `clarinet${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(234,255,244,1) 0%, rgba(83,223,182,0.45) 50%, rgba(80,159,203,1) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `tapebells${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(239,255,247,0.81) 0%, rgba(59,216,245,0.45) 50%, rgba(72,125,150,1) 100%)"
    });
  } else if ($(`input[name='tone${number}']:checked`).val() === `tapeguitar${number}`) {
    gradientFades(side, {
      "background": "linear-gradient(180deg, rgba(255,221,170,0.3) 0%, rgba(245,96,59,0.4) 50%, rgba(80,159,203,1) 100%)"
    });
  } else {
    $(side).fadeOut("slow")
  };
};


// this is used for instances were the tones have been selected by non direct user interactions (ie: on load, on loading preset, on weather API)
function thingsChange(target, gradientMask, number) {
  $(target).change(function (e) {
    gradientChanger(gradientMask, number)
    // gradientChanger(gradientMask, number)
    showWeatherNotActive();
  });
};


// activate early
thingsChange('.set1', ".gradient1", 1);
thingsChange('.set2', ".gradient2", 2);

// if the key changes, make sure to change the delay and slide up the actual selection to lower the amount of user clicks needed
$('.keys').change(function () {
  //turn off delays to avoid soundclashes
  delay.feedback.value = 0;
  delay2.feedback.value = 0;
  let setKeyValue = $("input[name='key']:checked").val();
  $('.keys').slideUp(100);
  $('.actualKey').text(setKeyValue);

  setDaKey();

  //check if a key has been selected, if not, select major by default
  if ($("input[name='note']:checked").val() == undefined) {
    console.log("no note!!")
    $("#c").prop("checked", true);
    $('.actualNote').text("C")
  }
});


//welcome to JQUERY HELLLLL , this is for ensuring that the UI looks pretty and clean when a mood is selected, it ensure the musical key selection is activated
function setDaMood() {
  $("input[name='note']:checked").removeAttr('checked')
  $("input[name='key']:checked").removeAttr('checked')
  $('.actualNote').text("---");
  $('.actualKey').text("---");
  $('.keytypes').addClass("grey");
  $('.selectedNote').addClass("grey");
  $('.selectedKey').addClass("grey");
  $('.keytypes2').removeClass("grey");
  $('.selectedMood').removeClass("grey");
};

// if the mood changes, ensure to use the above function and slide it up
$('.moods').change(function () {
  let setMoodValue = $("input[name='mood']:checked").val();
  setDaMood();
  $('.actualMood').text(setMoodValue);
  $('.moods').slideUp(100);
});



//fire base stuff, ripped directly from our previous lesson, developed the app about 75% before trying to implement this into it. Firebase is used to store presets from the user
import * as database from './database';


const buildMessageRow = (messageItem) => {
  const newMessageRow = document.createElement('tr');

  newMessageRow.setAttribute('id', messageItem.id);
  newMessageRow.innerHTML = `
    <td class="themessage">${messageItem.Name}</td>
    <td class="voteCount">${messageItem.votes}</td>
    <td class="actions">
      <i class="material-icons upvote">thumb_up</i>
      <i class="material-icons downvote">thumb_down</i>
      <i class="material-icons delete">delete</i>
    </td>
    <td class="load">
    <div>LOAD</div>
    </td>
    
  `;

  newMessageRow.querySelector('.upvote').addEventListener('click', async () => {
    await database.messages.updateVotes(messageItem.id, 1);
    renderList();
  });
  newMessageRow.querySelector('.downvote').addEventListener('click', async () => {
    await database.messages.updateVotes(messageItem.id, -1);
    renderList();
  });
  newMessageRow.querySelector('.delete').addEventListener('click', async () => {
    await database.messages.delete(messageItem.id);
    renderList();
  });
  //added this into allow the user to actually load presets from the list
  newMessageRow.querySelector('.load').addEventListener('click', async () => {
    console.log(messageItem);
    $(`#${messageItem.Tone1}`).prop("checked", true);
    $(`#${messageItem.Tone2}`).prop("checked", true);
    if (messageItem.keyMood !== "---") {
      console.log("it's a mood key")
      $(`#${messageItem.keyMood}`).prop("checked, true")
      setDaMood();
      showWeatherNotActive();
      gradientChanger(".gradient1", 1);
      gradientChanger(".gradient2", 2);
      $('.actualMood').text(messageItem.keyMood)

    }
    if (messageItem.keyNote !== "---") {
      console.log("it's a musical key")
      $(`#${messageItem.keyNote}`).prop("checked", true)
      $(`#${messageItem.keyScale}`).prop("checked", true)
      setDaKey()
      showWeatherNotActive();
      gradientChanger(".gradient1", 1);
      gradientChanger(".gradient2", 2);
      $('.actualNote').text(messageItem.keyNote);
      $('.actualKey').text(messageItem.keyScale);
    }
    notification(`${messageItem.Name} loaded`)
    // renderList();
  });
  return newMessageRow;
};

const renderList = async () => {
  const listContainer = document.getElementById('message-container');

  // get latest messages
  const messages = await database.messages.getAll();

  // reset list container to empty
  listContainer.innerHTML = '';

  // remove children from list container
  messages.forEach((messageItem) => {
    const newMessageRow = buildMessageRow(messageItem);
    listContainer.append(newMessageRow);
  });
};


const onLoadHandler = async () => {
  // initial render of list
  await renderList();
  // So good putting the gradient changes here, means the browser gently loads in the shades once finished looading 
  gradientChanger(".gradient1", 1);
  gradientChanger(".gradient2", 2);
  $('.hiddenKnobs').delay(800).slideDown(700);

  document.getElementById('submit').addEventListener('click', async (evt) => {
    evt.preventDefault();

    const newMessageInput = document.getElementById('newmessage');

    // lets wait for the new message to be created before we request to render the list
    await database.messages.create(newMessageInput.value);
    // await database.Tone1.create($("input[name='tone1']:checked").val());


    renderList();

    newMessageInput.value = '';
  });
};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
};


//simple little function for showing additional notification when things are loaded (mainly weather or user presets)
function notification(message) {
  $('.notification').text(message);
  $('.notification').fadeIn(100).delay(800);
  $('.notification').fadeOut(1200);
};

//hide or show the effects knobs lane
$('.effects').on("click", function () {
  if ($('.hiddenKnobs').first().is(":hidden")) {
    $('.effects').text("HIDE FX");
    $('.hiddenKnobs').slideDown(700);
  } else {
    $('.effects').text("SHOW FX");
    $('.hiddenKnobs').slideUp(700);
  };
});


//VEEEEEEERY BASIC idea here, but seemed like a good idea, basically get the users location, and load a settings based on their weather
// https://www.w3schools.com/html/html5_geolocation.asp
$('.getLat ').on("click", function () {
  $('.weatherDetails').remove();
  $('#weatherState').text("Loading");
  $('#weatherState').addClass("loading");
  $('#weatherState').removeClass("offline");


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  };
});

//here's the weather api call
const getWeather = function (lat, lon) {

  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}6&lon=${lon}&appid=${database.weatherCall.apiKey}&exclude=hourly,hourly,daily&units=metric`
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went really wrong');
      }
    })
    .then((json) => {
      //this is where I print the read out into the DOM
      console.log(json.current.weather[0].main);
      console.log(json.current.temp);
      console.log(json.current);
      console.log("something else");
      $('.loading').text('Weather Preset Loaded');
      notification("Weather Loaded");
      $('#weatherState').removeClass("loading")
      weatherTones(json.current.weather[0].main);
      gradientChanger(".gradient1", 1);
      gradientChanger(".gradient2", 2);
      setDaKey();
      $('.weatherImage').empty()
      $('.weatherRight').append(`
      <div class="weatherDetails">
      Temperature: <b>${Math.floor(json.current.temp)}°</b> Cel <br>
      Feels Like:  <b>${Math.floor(json.current.feels_like)}°</b> Cel <br>
      Conditions:  <span class="caps">${json.current.weather[0].description}</span> <br>
      </div>`);
      $('.weatherImage').append(
        `<img class="actualWeatherImage"src="http://openweathermap.org/img/wn/${json.current.weather[0].icon}@2x.png" alt="">`
      );
    })
    .catch((error) => {
      console.error('BURGER:', error);
    });
};


//simple function to clear the weather status, if a user deviates from the provided preset, the status changes, this is the function that is called on within others
function showWeatherNotActive() {
  $('#weatherState').addClass("offline");
  $('#weatherState').text("Not Applied");
};




//this is another mini function for printing weather results 
function noteAndKeySelector(note, key, tone1, tone2) {
  $(`#${note}`).prop("checked", true);
  $(`#${key}`).prop("checked", true);
  $(`#${tone1}`).prop("checked", true);
  $(`#${tone2}`).prop("checked", true);
  $('.actualNote').text(note);
  $('.actualKey').text(key);

}
// https://openweathermap.org/weather-conditions
// this is the function that uses the weather conditions to determine what tones to play
function weatherTones(conditions) {
  if (conditions === "Clouds") {
    console.log("The clouds work!");
    noteAndKeySelector('f', 'minor', 'piano1', 'strings2', );
  } else if (conditions === "Clear") {
    console.log("The clear work!")
    noteAndKeySelector('g', 'major', 'tapeguitar1', 'strings22', )
  } else if (conditions === "Snow") {
    console.log("The snow work!")
    noteAndKeySelector('as', 'major', 'strings1', 'tapebell2', )
  } else if (conditions === "Rain") {
    console.log("The clear work!")
    noteAndKeySelector('f', 'major', 'piano1', 'piano2', )
  } else if (conditions === "Drizzle") {
    console.log("The drizzle work!")
    noteAndKeySelector('D', 'minor', 'synth1', 'clarinet2', )
  } else if (conditions === "Thunderstorm") {
    console.log("The Thunder work!")
    noteAndKeySelector('fs', 'minor', 'flute', 'tapeguitar2', )
  } else {
    console.log("Atmosphere conditions")
  };
};

//this gets the position, and then runs the weather api
function showPosition(position) {
  $('.weatherImage').empty()
  console.log("Latitude: " + position.coords.latitude +
    "Longitude: " + position.coords.longitude)
  getWeather(position.coords.latitude, position.coords.longitude)

}