

// CLICK BATH


$(".areaShow").hide();
$(".popUpMenu").hide();
$(".x").hide();
$('.settingsArea').hide()




Tone.Transport.bpm.value = 120;

// this took so bloody long to get right. Basically these are different chords, for different scales in both major and minor

let C   =   ['C','E','G','B',];
let Cs    =  ['Db','F','Ab','C',];
let D  =    ['D','F#','A','C#'];
let Ds  =   ['Eb','G','Bb','D',];
let E  =    ['E','G#','B','D#'];
let F  =    ['F','A','C','E',];
let Fs  =   ['F#','A#','C#','F',];
let G  =    ['G','B','D','F#'];
let Gs  =   ['Ab','C','Eb','G',];
let A  =    ['A','C#','E','G#'];
let As  =   ['Bb','D','F','A',];
let B  =    ['B','D#','F#','A#',];

let Cm   =   ['C','Eb','G','Bb',];
let Csm    = ['C#','E','G#','B',];
let Dm =     ['D','F','A','C',];
let Dsm  =   ['D#','F#','A#','C#',];
let Em =     ['E','G','B','D',];
let Fm  =    ['F','Ab','C','Eb',];
let Fsm  =   ['F#','A','C#','E',];
let Gm  =    ['G','Bb','D','F',];
let Gsm  =   ['G#','B','D#','F#',];
let Am  =    ['A','C','E','G',];
let Asm  =   ['A#','C#','F','G#',];
let Bm  =    ['B','D','F#','A',];

// Channels for delays

let delay;
let delay2;
let volume;
let ready;
let merge = new Tone.Channel();
let merge2 = new Tone.Channel();

let panner = new Tone.Panner();
// panner.pan.setValueAtTime(-1, 0.25);
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

  // merge.connect(reverb)
  // merge2.connect(reverb)
  reverb.connect(Tone.Master);
  reverb2.connect(Tone.Master);


  reverb.connect(merge);
  reverb2.connect(merge2);

  ready = true;
}


const synth = new Tone.PolySynth()

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
})

const piano1 = new Tone.Sampler({
  urls: {
    C6: "piano 1.mp3",
    C5: "piano 2.mp3",
    C4: "piano 3.mp3",
    C3: "piano 4.mp3",
    // A2: "A2.mp3",
  },
  baseUrl: "assets/",

})

// let flute1 = require('../static/flute 1.mp3');

const flute = new Tone.Sampler({
  urls: {
    // C6: flute1,
    C6: "flute 1.mp3",
    C5: "flute 2.mp3",
    C4: "flute 3.mp3",
    // C4: audio.flute 3.mp3,

    // A2: "A2.mp3",
  },
  baseUrl: "assets/",

})

const casioStrings = new Tone.Sampler({
  urls: {
    C6: "casio2 1.mp3",
    C5: "casio2 2.mp3",
    C4: "casio2 3.mp3",
    C3: "casio2 4.mp3",
    // A2: "A2.mp3",
  },
  baseUrl: "assets/",

})

const casio3 = new Tone.Sampler({
  urls: {
    C7: "casio3 1.mp3",
    C6: "casio3 2.mp3",
    C5: "casio3 3.mp3",
    C4: "casio3 4.mp3",
    // A2: "A2.mp3",
  },
  baseUrl: "assets/",

})

let synth2 = new Tone.Synth({
  "oscillator": {
    // We prefix 'fat' so we can spread the oscillator over multiple frequencies
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
})
piano1.volume.value = 8;
flute.volume.value = 6;
casioStrings.volume.value = 15;
casio3.volume.value = 15;
synth.volume.value = -15;
synth2.volume.value = -13;

// const reverb = new Tone.Reverb(10)

// let noteArray = ['C5','Eb3','Gb4','Bb4','C4','Eb4','Gb4',]
let noteArray = (octave) => {
  // defaults to c major, same as check marks
  let notes = C
  delay.feedback.value = 0.8
  delay2.feedback.value = 0.8
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
  }
  // let notes = ['C', 'D', 'E', 'F', 'G', 'B']

  function randomNote() {
    return Math.floor(Math.random() * notes.length)
  }

  return `${notes[randomNote()]}${octave}`

}
// let noteArray = (octave) => { return ['C5', 'E5', 'G5', 'B5', 'C4', 'E4', 'G4', ] }
noteArray;


let randomArray = () => {
  return Math.floor(Math.random() * 4)
}


//this establishes all of the effect routing
setup();




const audioButton = $("#audio-button");
const audioButton2 = $("#audio-button2");

let defaultPreset = {
  name: "Ambient Stuff",
  by: "Hamish Lang",
  tone1: casioStrings,
  tone1Type: "",
  tone1Colors: ['rgba(189,218,183,0.7)', 'rgba(49,184,119,0.8)'],
  tone2: flute,
  color1: "Blue",
  color2: "green",
  sfxBird1: 0.4,
  sfxBird2: 0.4,
  sfxOcean: 0.5,
  drone1: 0,
  drone2: 0,
};



function synthSetup(theButton, panName, targetTwo, number ) {
  let synthName;
  theButton.on('click', (e) => {
    // if (theButton === audioButton) {

      if ($(`#piano${number}`).is(':checked')) {
        synthName = piano1;
        // console.log(this)
      } else if ($(`#sine${number}`).is(":checked")) {
        synthName = synth2;
      } 
      else if ($(`#flute${number}`).is(":checked")) {
        synthName = flute;
      }
      else if ($(`#casio${number}`).is(":checked")) {
        synthName = casio3;
      }
      else if ($(`#strings${number}`).is(":checked")) {
        synthName = casioStrings;
      }
      else if ($(`#synth${number}`).is(":checked")) {
        synthName = synth2;
      }
      synthName.connect(panName)
    // }
      // console.log(panName)

      

      
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.
    //Convert new number into -1 - 1 range to work with Pan numbering
    let xPanWidth = (Math.floor(x) / rect.width * 2) - 1
    //Convert number to format for actaves
    let octaveClick = 6 - (Math.floor((y / rect.height) * 5))

    let gradientPercY = y / rect.height * 100
    let gradientPercX = x / rect.width * 100



    $(targetTwo).css(
      'background', 'radial-gradient(at ' + gradientPercX + '% ' + gradientPercY + '%, rgba(255, 255, 255, 0.5)0%, rgba(101,141,210,0.0) 41%)');

    // $(theButton).css(
    //   'background', 'linear-gradient(180deg, '+ colors[0] +'70%, '+ colors[1] +'100%)');

    // use the pan value and allocate it to the panner
    panName.pan.value = xPanWidth;
    console.log(octaveClick)
    synthName.triggerAttackRelease(noteArray(octaveClick), '1n');
  });
};

synthSetup(audioButton, panner, ".areaShow", 1);
synthSetup(audioButton2, pannerTwo, ".areaShow2", 2);




function popupMaker(target, targetPop) {
  target;
  targetPop;
  $(target).click(function (e) {


    //stop function was a miracle to find. Was getting animation delays due to blowing the queue with bunch of fade in / out requests. 
    // $(".popup").stop();
    // $(".popup2").stop();
    $(targetPop).stop();

    $(".popup").css({
      left: e.pageX,
      top: e.pageY
    });

    $(".popup").fadeIn(100).fadeOut(700);
    // $(".popup").fadeOut(700);

    $(".popup2").css({
      left: e.pageX,
      top: e.pageY
    });

    $(".popup2").fadeIn(300);
    $(".popup2").fadeOut(300);

    $(targetPop).fadeIn(300);
    $(targetPop).fadeOut(800);

  });
}

popupMaker(".area", ".areaShow")
popupMaker(".area2", ".areaShow2")





// $('.area').mousedown(function (e) {
//   switch (e.which) {
//     case 1:
//       // console.log('Left Mouse button pressed.');
//       // $(".popUpMenu").hide();
//       // $(".x").hide();
//       break;
//     case 2:
//       console.log('Middle Mouse button pressed.');
//       break;
//     case 3:
//       $(".popUpMenu").show();
//       $(".x").show();
//       $(".popUpMenu").css({
//         left: e.pageX
//       });
//       $(".popUpMenu").css({
//         top: e.pageY
//       });
//       $(".x").css({
//         left: e.pageX
//       });
//       $(".x").css({
//         top: e.pageY
//       });
//       break;
//     default:
//       return;
//   }
// });

$(".x").on("click", function () {
    $(".popUpMenu").hide();
    $(".x").hide();
  }

)




let bird1 = new Tone.Player("assets/birds1.mp3").toDestination();
let ocean = new Tone.Player("assets/ocean.mp3").toDestination();



function knobFunction(target, parent, type, toneName) {
  toneName.autostart = true;
  toneName.volume.value = -100;
  toneName.loop = true;
  document.getElementById(target).addEventListener("input", (event) => {

    let knobAdjust = 255 - (event.target.value * 2.55);
    // took a while to get my head around how to translate the 1-100 values to DB values
    let volumeKnobEquation = (event.target.value * 0.5) - 50;
    // console.log(knobAdjust);
    $(parent).css('background-color', 'rgba(100,' + knobAdjust + ', 200, 0.3)')
    toneName.volume.value = volumeKnobEquation
    // console.log(event.target.value)

    if (event.target.value > 0) {
      toneName.mute = false
      // toneName.autostart = true;
      // console.log(event.target.value)
      // toneName.start()
      // bird1.autostart = true;
    }
    if (event.target.value === 0) {
      toneName.volume.value = -100;
      toneName.mute = true
      // toneName.stop()
      $(parent).css('background-color', 'rgba(211, 211, 211, 0.3)')

    }



  });
}

knobFunction("knob1", ".knob-container1", 'birds', bird1)
knobFunction("knob2", ".knob-container2", 'ocean', ocean)

Nexus.colors.accent = "royalblue"
Nexus.colors.fill = "#fff"

let oscilloscope = new Nexus.Oscilloscope('#oscilloscope', {});
let oscilloscope2 = new Nexus.Oscilloscope('#oscilloscope2', {});

oscilloscope.connect(merge);
oscilloscope2.connect(merge2);
//CURSOR FUNCTIONS



const cursor = document.querySelector('.cursor')
const cursor2 = document.querySelector('.cursor2')
const area1 = document.querySelector('.area')
const area2 = document.querySelector('.area2')



function cursorForBoxes(box, pointerBox) {
  $(pointerBox).hide()
  box.addEventListener('mousemove', e => {
    pointerBox.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px;")



  })
  box.addEventListener('mouseleave', e => {
    $(pointerBox).hide()
  })
}

cursorForBoxes(area1, cursor)
cursorForBoxes(area2, cursor2)


$('.settingsButton').toggle(function () {
  $('.settingsArea').slideDown(200)
  // noteCount = true;
}, function () {
  $('.settingsArea').slideUp(200)
  $('.notes').slideUp(100);
  $('.keys').slideUp(100)
  // setTrue(noteCount, 0)

})


let keyDisplay = (target, area) => {
  $( target ).click(function () {
    if ( $( area ).first().is( ":hidden" ) ) {
      $( area ).fadeIn( 100 );
    } else {
      $( area ).hide();
    }
  });
}

keyDisplay('.selectedNote', '.notes')
keyDisplay('.selectedKey', '.keys')

$('.keySettings').change(function() {

// auto populate DIV with note when changed 
// $('.notes').change(function() {
    let setNoteValue = $("input[name='note']:checked").val();
    if(setNoteValue){
        $('.actualNote').text(setNoteValue);
        $('.notes').slideUp(100)
        delay.feedback.value = 0
        delay2.feedback.value = 0
        
    }
  // })
    $('.keys').change(function() {
    let setKeyValue = $("input[name='key']:checked").val();
    if(setKeyValue){
        $('.actualKey').text(setKeyValue);
        $('.keys').slideUp(100)

    }
  })




if ($(`#c`).is(':checked') && $(`#major`).is(':checked')) {
  console.log("C Major")
}


})


// delay.feedback.value = 0









import * as database from './database';
// import audio from '/assets/birds.mp3';


const buildMessageRow = (messageItem) => {
  const newMessageRow = document.createElement('tr');

  newMessageRow.setAttribute('id', messageItem.id);
  newMessageRow.innerHTML = `
    <td>${messageItem.message}</td>
    <td>${messageItem.votes}</td>
    <td>
      <i class="material-icons upvote">thumb_up</i>
      <i class="material-icons downvote">thumb_down</i>
      <i class="material-icons delete">delete</i>
    </td>
  `;

  // todo: consider using delegation for this instead
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

  document.getElementById('submit').addEventListener('click', async (evt) => {
    evt.preventDefault();

    const newMessageInput = document.getElementById('newmessage');

    // lets wait for the new message to be created before we request to render the list
    await database.messages.create(newMessageInput.value);

    renderList();

    newMessageInput.value = '';
  });
};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}

