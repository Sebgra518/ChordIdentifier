var button = document.getElementById("button");
let sharpflat = [false, false, false, false, false, false, false, true];
let notes = [true, false, false, false, false, false, false, false, false];
var letters = ["C", "D", "E", "F", "G", "A", "B"];
let pianoTileColor = [];
var pianoOutput = "";
var currentKey;
pianoTileColor.fill(false,0,24);

//Trebble or Bass
var trebble = document.getElementById("Trebble");
var bass = document.getElementById("Bass");
//Sharp or Flat
var sharp = document.getElementById("Sharp");
var flat = document.getElementById("Flat");

var htmlPrintStaff = document.getElementById("printStaff");
var htmlPrintPiano = document.getElementById("printPiano");


//Get all accidental Objs
let accidentalObjs = [];
for (var i = 0; i <= 7; i++){
  accidentalObjs[i] = document.getElementById(i);
}

//Get all staff line Objs
let staffObjs = []
for (var i = 0; i < 9; i++){
  staffObjs[i] = document.getElementById("staff" + (i));
}



//Run Program

//Staff
function clearAllNotes() {
  for (var i = 0; i <= 8; i++) {
    notes[i] = false;
  }
}

//Places a note on the staff
function placeNote(num,location){
  document.getElementById("note1").style.top = location;
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[num] = true;
}

//Gets the last number of an element's id's name
function getElementIdNum(elem){
  let tmp = Array.from(elem.id.toString());
  let tmpString = "";
  tmp.forEach(element => {
    if(!isNaN(element)){
      tmpString += element;
    }
  });

  return parseInt(tmpString)
}

//Add onClick event to all line objects
for (var i = 0; i < staffObjs.length; i++) {
  staffObjs[i].onclick = function() {
    let idNum = getElementIdNum(this)
    placeNote(idNum ,(345 + (8 * idNum) + "px"));
  }
}


//Check if a line/space was clicked and place a note on the staff
document.getElementById("note1").onclick = function () {
  document.getElementById("note1").style.visibility = "hidden";
  clearAllNotes();
};

document.getElementById("Trebble").onclick = function () {
  document.getElementById("TrebbleCleff").style.visibility = "visible";
  document.getElementById("BassCleff").style.visibility = "hidden";
  document.getElementById("sharp1").style.top = "334px";
  document.getElementById("sharp2").style.top = "354px";
  document.getElementById("sharp3").style.top = "324px";
  document.getElementById("sharp4").style.top = "347px";
  document.getElementById("sharp5").style.top = "370px";
  document.getElementById("sharp6").style.top = "340px";
  document.getElementById("sharp7").style.top = "362px";
  document.getElementById("flat1").style.top = "360px";
  document.getElementById("flat2").style.top = "340px";
  document.getElementById("flat3").style.top = "370px";
  document.getElementById("flat4").style.top = "348px";
  document.getElementById("flat5").style.top = "375px";
  document.getElementById("flat6").style.top = "354px";
  document.getElementById("flat7").style.top = "384px";
};
document.getElementById("Bass").onclick = function () {
  document.getElementById("TrebbleCleff").style.visibility = "hidden";
  document.getElementById("BassCleff").style.visibility = "visible";
  document.getElementById("sharp1").style.top = "348px";
  document.getElementById("sharp2").style.top = "368px";
  document.getElementById("sharp3").style.top = "338px";
  document.getElementById("sharp4").style.top = "361px";
  document.getElementById("sharp5").style.top = "384px";
  document.getElementById("sharp6").style.top = "354px";
  document.getElementById("sharp7").style.top = "376px";
  document.getElementById("flat1").style.top = "374px";
  document.getElementById("flat2").style.top = "354px";
  document.getElementById("flat3").style.top = "384px";
  document.getElementById("flat4").style.top = "362px";
  document.getElementById("flat5").style.top = "389px";
  document.getElementById("flat6").style.top = "368px";
  document.getElementById("flat7").style.top = "398px";
};

//Checks if sharp or flat is checked and shows/hides the sharp/flat images on the scale
function displaySharpsOrFlats(num) {
  //Check if sharp is checked
  if (document.getElementById("Sharp").checked) {
    //Clear all sharps
    for (var i = 1; i <= 7; i++) {
      document.getElementById("sharp" + i).style.visibility = "hidden";
    }

    //Display the required sharps
    for (var i = 1; i <= num; i++) {
      document.getElementById("sharp" + i).style.visibility = "visible";
    }
  }

  //Check if flat is checked
  if (document.getElementById("Flat").checked) {
    //Clear all flats
    for (var i = 1; i <= 7; i++) {
      document.getElementById("flat" + i).style.visibility = "hidden";
    }

    //Display the required sharps
    for (var i = 1; i <= num; i++) {
      document.getElementById("flat" + i).style.visibility = "visible";
    }
  }
}

function clearSharpsAndFlats(){
//Clear all sharps
for (var i = 1; i <= 7; i++) {
  document.getElementById("sharp" + i).style.visibility = "hidden";
}
//Clear all flats
for (var i = 1; i <= 7; i++) {
  document.getElementById("flat" + i).style.visibility = "hidden";
}
accidentalObjs[0].checked = true;
}

document.getElementById("Sharp").onclick = function () {
  clearSharpsAndFlats();
};
document.getElementById("Flat").onclick = function () {
  clearSharpsAndFlats();
};

//Add onClick event to all line objects to show Sharp or Flat Key Sig
for (var i = 0; i <= 7; i++) {
  document.getElementById(i).onclick = function() {
    let idNum = getElementIdNum(this)
    displaySharpsOrFlats(idNum);
  }
}

//piano
function togglePianoButton(key,num,s){
  if (pianoTileColor[num]) {
    if(s){
      document.getElementById(key).style.backgroundColor = "black";
    } else {
      document.getElementById(key).style.backgroundColor = "white";
    }
    pianoTileColor[num] = false;
  } else {
    document.getElementById(key).style.backgroundColor = "lightblue";
    pianoTileColor[num] = true;
  }
}

//Temporary
var blkOrWht = [false,true,false,true,false,false,true,false,true,false,true,false,false,true,false,true,false,false,true,false,true,false,true,false,]

//Adds onClick to each keyboard key
for (var i = 0; i <= 23; i++){
  document.getElementById("p" + i).onclick = function() {
    let idNum = getElementIdNum(this)
    togglePianoButton("p" + idNum,idNum,blkOrWht[idNum]);
  }
}


//Checks which note the chord is (ie. A,B,C,E,F...) and adds to the pianoOuput string
function checkKey() {
  for (var i = 0; i < 11; i++) {
    if (pianoTileColor[i]) {
      currentKey = i;
      pianoOutput += letters[i];
      break;
    }
  }
}
//Adds what type of chord it is (ie. minor,diminished,augmented...) and adds to the pianoOuput string
function checkAdditional() {
  //3
  if (pianoTileColor[currentKey + 4]) {
    
    //5
    if (pianoTileColor[currentKey + 7]) {

      //Major7
      if (pianoTileColor[currentKey + 11]) {
        pianoOutput += "maj7";
      }
      //Domminent 7
      else if (pianoTileColor[currentKey + 10]
      ) {
        pianoOutput += "7";
      }
      //Major
      else {
        pianoOutput += "";
        checkAdd(currentKey + 8);
      }
    }
    //Augmented
    else if (pianoTileColor[currentKey + 8]) {
      pianoOutput += "aug";
    }
    else {
      pianoOutput = "Not a chord";
    }
  }

  //flat3
  else if (pianoTileColor[currentKey + 3]) {
    //5
    if (pianoTileColor[currentKey + 7]) {
      pianoOutput += "min";
    }
    //flat5
    else if (pianoTileColor[currentKey + 6]) {
      pianoOutput += "dim";
    }
    else {
      pianoOutput = "Not a chord";
    }
  }
  else {
    pianoOutput = "Not a chord";
  }
}

function checkAdd(start){
 for (var i = start; i < 24; i++){
  if (pianoTileColor[i]){
    pianoOutput += "add" + arrayToInterval(i);
  }
  
 }
}

//Converts the array version of the piano into intervals (still trying to find a way to optimise)
//Yes, I could of used switch, but used for my better understanding of the problem
function arrayToInterval(i){
  //If i is even
  if (i == 2){
    return 2; //-0
  }
  else if (i == 4){
    return 3; //-1
  }
  else if (i == 12){
    return 8;  //-4
  }
  else if (i == 14){
    return 9;  //-5
  }
  else if (i == 16){
    return 10;  //-6
  }


//If i is odd
  else if (i == 5){
    return 4; //-1
  }
  else if (i == 7){
    return 5; //-2
  }
  else if (i == 9){
    return 6; //-3
  }
  else if (i == 11){
    return 7; //-4
  }
  else if (i == 17){
    return 11;  //-6
  }
  else if (i == 19){
    return 12;  //-7
  }
  else if (i == 21){
    return 13;  //-8
  }
  else if (i == 23){
    return 14;  //-9
  }
}

//rotates all items in array by a specified amount to the right
function rotateArrayRight(arr,amount){
  for (var i = 0; i < amount; i++){
    arr.unshift(arr.pop())
  }
}


//    Staff Chord Identifier   //
button.onclick = function () {

  //TrebbleCleff
  if (trebble.checked) {
    //0 Sharps/Flats
    if (accidentalObjs[0].checked) {
      if (notes[0] || notes[7]) {
        htmlPrintStaff.innerHTML = "Major";
      }
      if (notes[1] || notes[8]) {
        htmlPrintStaff.innerHTML = "minor";
      }
      if (notes[2]) {
        htmlPrintStaff.innerHTML = "minor";
      }
      if (notes[3]) {
        htmlPrintStaff.innerHTML = "Major";
      }
      if (notes[4]) {
        htmlPrintStaff.innerHTML = "Diminished";
      }
      if (notes[5]) {
        htmlPrintStaff.innerHTML = "minor";
      }
      if (notes[6]) {
        htmlPrintStaff.innerHTML = "Major";
      }
    }
    //CheckSharp
    else if (sharp.checked) {
      
      let num = 0;
      let sharps = ["Diminished","minor", "Major", "Major",  "minor", "minor", "Major"]

      //Go through list of 
      for(var i = 1; i <= 7; i++){
        if (accidentalObjs[i].checked){
          num = i;
        }
      }

      //Rotate the array depending on the amount of sharps
      for (var i = 0; i < num - 1; i++){
        rotateArrayRight(sharps,3);
      }

      //Check which note is places and display result
      if(notes[0] || notes[7]){
        htmlPrintStaff.innerHTML = sharps[0];
      } else if (notes[1] || notes[8]){
        htmlPrintStaff.innerHTML = sharps[1];
      } else {
        for (var i = 2; i <= 6; i++){
          if(notes[i]){
            htmlPrintStaff.innerHTML = sharps[i];
            break;
          }
        }
      }
    }

    //CheckFlat
    else if (flat.checked) {
      //1 Flat
      if (accidentalObjs[1].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //2 Flat
      else if (accidentalObjs[2].checked) {
        if (notes[0] || notes[7]) {
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[6]) {
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //3 Flat
      else if (accidentalObjs[3].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //4 Flat
      else if (accidentalObjs[4].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
      //5  Sharp
      else if (accidentalObjs[5].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //6  Sharp
      else if (accidentalObjs[6].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //7 Sharp
      else if (accidentalObjs[7].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
    }
  }

  //BassCleff
  if (bass.checked) {
    //0 Sharp
    if (accidentalObjs[0].checked) {
      if (notes[0] || notes[7]) {
        htmlPrintStaff.innerHTML = "minor";
      } else if (notes[1] || notes[8]) {
        htmlPrintStaff.innerHTML = "Major";
      } else if (notes[2]) {
        htmlPrintStaff.innerHTML = "Major";
      } else if (notes[3]) {
        htmlPrintStaff.innerHTML = "minor";
      } else if (notes[4]) {
        htmlPrintStaff.innerHTML = "minor";
      } else if (notes[5]) {
        htmlPrintStaff.innerHTML = "Major";
      } else if (notes[6]) {
        htmlPrintStaff.innerHTML = "Diminished";
      }
    } else if (sharp.checked) {
      //1 Sharp
      if (accidentalObjs[1].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //2 Sharp
      if (accidentalObjs[2].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //3 Sharp
      if (accidentalObjs[3].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //4 Sharp
      if (accidentalObjs[4].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //5 Sharp
      if (accidentalObjs[5].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //6 Sharp
      if (accidentalObjs[6].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //7 Sharp
      if (accidentalObjs[7].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
    } else if (flat.checked) {
      //1 Flat
      if (accidentalObjs[1].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //2 Flat
      if (accidentalObjs[2].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //3 Flat
      if (accidentalObjs[3].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //4 Flat
      if (accidentalObjs[4].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //5 Flat
      if (accidentalObjs[5].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //6 Flat
      if (accidentalObjs[6].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //7 Flat
      if (accidentalObjs[7].checked) {
        if (notes[0] || notes[7]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) { //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) { //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) { //
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
    }
  }

  //piano
  checkKey();
  checkAdditional();
  htmlPrintPiano.innerHTML = pianoOutput;
  pianoOutput = "";

};