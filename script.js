var button = document.getElementById("button");
var line1 = document.getElementById("line1");
var space1 = document.getElementById("space1");
var line2 = document.getElementById("line2");
var space2 = document.getElementById("space2");
var line3 = document.getElementById("line3");
var space3 = document.getElementById("space3");
var line4 = document.getElementById("line4");
var space4 = document.getElementById("space4");
var line5 = document.getElementById("line5");
let sharpflat = [false, false, false, false, false, false, false, true];
let notes = [true, false, false, false, false, false, false, false, false];
var letters = ["C", "D", "E", "F", "G", "A", "B"];
let pianoTileColor = [];
pianoTileColor.fill(false,0,24);
var pianoOutput = "";
var currentKey;

//Trebble or Bass
var trebble = document.getElementById("Trebble");
var bass = document.getElementById("Bass");
//Sharp or Flat
var sharp = document.getElementById("Sharp");
var flat = document.getElementById("Flat");
//Number of accidentals
var n0 = document.getElementById("0");
var n1 = document.getElementById("1");
var n2 = document.getElementById("2");
var n3 = document.getElementById("3");
var n4 = document.getElementById("4");
var n5 = document.getElementById("5");
var n6 = document.getElementById("6");
var n7 = document.getElementById("7");
var htmlPrintStaff = document.getElementById("printStaff");
var htmlPrintPiano = document.getElementById("printPiano");

//Run Program

//Staff
function clearAllNotes() {
  for (var i = 0; i <= 8; i++) {
    notes[i] = false;
  }
}

line1.onclick = function () {
  document.getElementById("note1").style.top = "344px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[0] = true;
};

space1.onclick = function () {
  document.getElementById("note1").style.top = "350px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[1] = true;
};

line2.onclick = function () {
  document.getElementById("note1").style.top = "357px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[2] = true;
};

space2.onclick = function () {
  document.getElementById("note1").style.top = "364px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[3] = true;
};

line3.onclick = function () {
  document.getElementById("note1").style.top = "372px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[4] = true;
};

space3.onclick = function () {
  document.getElementById("note1").style.top = "380px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[5] = true;
};

line4.onclick = function () {
  document.getElementById("note1").style.top = "386px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[6] = true;
};

space4.onclick = function () {
  document.getElementById("note1").style.top = "394px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[7] = true;
};

line5.onclick = function () {
  document.getElementById("note1").style.top = "402px";
  document.getElementById("note1").style.visibility = "visible";
  clearAllNotes();
  notes[8] = true;
};

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

document.getElementById("Sharp").onclick = function () {
  //Clear all sharps
  for (var i = 1; i <= 7; i++) {
    document.getElementById("sharp" + i).style.visibility = "hidden";
  }
  //Clear all flats
  for (var i = 1; i <= 7; i++) {
    document.getElementById("flat" + i).style.visibility = "hidden";
  }
  n0.checked = true;
};
document.getElementById("Flat").onclick = function () {
  //Clear all sharps
  for (var i = 1; i <= 7; i++) {
    document.getElementById("sharp" + i).style.visibility = "hidden";
  }
  //Clear all flats
  for (var i = 1; i <= 7; i++) {
    document.getElementById("flat" + i).style.visibility = "hidden";
  }
  n0.checked = true;
};

//Show Sharp or Flat Key Sig (Trebble)
document.getElementById("0").onclick = function () {
  displaySharpsOrFlats(0);
};
document.getElementById("1").onclick = function () {
  displaySharpsOrFlats(1);
};
document.getElementById("2").onclick = function () {
  displaySharpsOrFlats(2);
};
document.getElementById("3").onclick = function () {
  displaySharpsOrFlats(3);
};
document.getElementById("4").onclick = function () {
  displaySharpsOrFlats(4);
};
document.getElementById("5").onclick = function () {
  displaySharpsOrFlats(5);
};
document.getElementById("6").onclick = function () {
  displaySharpsOrFlats(6);
};
document.getElementById("7").onclick = function () {
  displaySharpsOrFlats(7);
};

//piano
document.getElementById("c1").onclick = function () {
  if (pianoTileColor[0]) {
    document.getElementById("c1").style.backgroundColor = "white";
    pianoTileColor[0] = false;
  } else {
    document.getElementById("c1").style.backgroundColor = "lightblue";
    pianoTileColor[0] = true;
  }
};
document.getElementById("cs1").onclick = function () {
  if (pianoTileColor[1]) {
    document.getElementById("cs1").style.backgroundColor = "black";
    pianoTileColor[1] = false;
  } else {
    document.getElementById("cs1").style.backgroundColor = "lightblue";
    pianoTileColor[1] = true;
  }
};
document.getElementById("d1").onclick = function () {
  if (pianoTileColor[2]) {
    document.getElementById("d1").style.backgroundColor = "white";
    pianoTileColor[2] = false;
  } else {
    document.getElementById("d1").style.backgroundColor = "lightblue";
    pianoTileColor[2] = true;
  }
};
document.getElementById("ds1").onclick = function () {
  if (pianoTileColor[3]) {
    document.getElementById("ds1").style.backgroundColor = "black";
    pianoTileColor[3] = false;
  } else {
    document.getElementById("ds1").style.backgroundColor = "lightblue";
    pianoTileColor[3] = true;
  }
};
document.getElementById("e1").onclick = function () {
  if (pianoTileColor[4]) {
    document.getElementById("e1").style.backgroundColor = "white";
    pianoTileColor[4] = false;
  } else {
    document.getElementById("e1").style.backgroundColor = "lightblue";
    pianoTileColor[4] = true;
  }
};
document.getElementById("f1").onclick = function () {
  if (pianoTileColor[5]) {
    document.getElementById("f1").style.backgroundColor = "white";
    pianoTileColor[5] = false;
  } else {
    document.getElementById("f1").style.backgroundColor = "lightblue";
    pianoTileColor[5] = true;
  }
};
document.getElementById("fs1").onclick = function () {
  if (pianoTileColor[6]) {
    document.getElementById("fs1").style.backgroundColor = "black";
    pianoTileColor[6] = false;
  } else {
    document.getElementById("fs1").style.backgroundColor = "lightblue";
    pianoTileColor[6] = true;
  }
};
document.getElementById("g1").onclick = function () {
  if (pianoTileColor[7]) {
    document.getElementById("g1").style.backgroundColor = "white";
    pianoTileColor[7] = false;
  } else {
    document.getElementById("g1").style.backgroundColor = "lightblue";
    pianoTileColor[7] = true;
  }
};
document.getElementById("gs1").onclick = function () {
  if (pianoTileColor[8]) {
    document.getElementById("gs1").style.backgroundColor = "black";
    pianoTileColor[8] = false;
  } else {
    document.getElementById("gs1").style.backgroundColor = "lightblue";
    pianoTileColor[8] = true;
  }
};
document.getElementById("a1").onclick = function () {
  if (pianoTileColor[9]) {
    document.getElementById("a1").style.backgroundColor = "white";
    pianoTileColor[9] = false;
  } else {
    document.getElementById("a1").style.backgroundColor = "lightblue";
    pianoTileColor[9] = true;
  }
};
document.getElementById("as1").onclick = function () {
  if (pianoTileColor[10]) {
    document.getElementById("as1").style.backgroundColor = "black";
    pianoTileColor[10] = false;
  } else {
    document.getElementById("as1").style.backgroundColor = "lightblue";
    pianoTileColor[10] = true;
  }
};
document.getElementById("b1").onclick = function () {
  if (pianoTileColor[11]) {
    document.getElementById("b1").style.backgroundColor = "white";
    pianoTileColor[11] = false;
  } else {
    document.getElementById("b1").style.backgroundColor = "lightblue";
    pianoTileColor[11] = true;
  }
};
document.getElementById("c2").onclick = function () {
  if (pianoTileColor[12]) {
    document.getElementById("c2").style.backgroundColor = "white";
    pianoTileColor[12] = false;
  } else {
    document.getElementById("c2").style.backgroundColor = "lightblue";
    pianoTileColor[12] = true;
  }
};
document.getElementById("cs2").onclick = function () {
  if (pianoTileColor[13]) {
    document.getElementById("cs2").style.backgroundColor = "black";
    pianoTileColor[13] = false;
  } else {
    document.getElementById("cs2").style.backgroundColor = "lightblue";
    pianoTileColor[13] = true;
  }
};
document.getElementById("d2").onclick = function () {
  if (pianoTileColor[14]) {
    document.getElementById("d2").style.backgroundColor = "white";
    pianoTileColor[14] = false;
  } else {
    document.getElementById("d2").style.backgroundColor = "lightblue";
    pianoTileColor[14] = true;
  }
};
document.getElementById("ds2").onclick = function () {
  if (pianoTileColor[15]) {
    document.getElementById("ds2").style.backgroundColor = "black";
    pianoTileColor[15] = false;
  } else {
    document.getElementById("ds2").style.backgroundColor = "lightblue";
    pianoTileColor[15] = true;
  }
};
document.getElementById("e2").onclick = function () {
  if (pianoTileColor[16]) {
    document.getElementById("e2").style.backgroundColor = "white";
    pianoTileColor[16] = false;
  } else {
    document.getElementById("e2").style.backgroundColor = "lightblue";
    pianoTileColor[16] = true;
  }
};
document.getElementById("f2").onclick = function () {
  if (pianoTileColor[17]) {
    document.getElementById("f2").style.backgroundColor = "white";
    pianoTileColor[17] = false;
  } else {
    document.getElementById("f2").style.backgroundColor = "lightblue";
    pianoTileColor[17] = true;
  }
};
document.getElementById("fs2").onclick = function () {
  if (pianoTileColor[18]) {
    document.getElementById("fs2").style.backgroundColor = "black";
    pianoTileColor[18] = false;
  } else {
    document.getElementById("fs2").style.backgroundColor = "lightblue";
    pianoTileColor[18] = true;
  }
};
document.getElementById("g2").onclick = function () {
  if (pianoTileColor[19]) {
    document.getElementById("g2").style.backgroundColor = "white";
    pianoTileColor[19] = false;
  } else {
    document.getElementById("g2").style.backgroundColor = "lightblue";
    pianoTileColor[19] = true;
  }
};
document.getElementById("gs2").onclick = function () {
  if (pianoTileColor[20]) {
    document.getElementById("gs2").style.backgroundColor = "black";
    pianoTileColor[20] = false;
  } else {
    document.getElementById("gs2").style.backgroundColor = "lightblue";
    pianoTileColor[20] = true;
  }
};
document.getElementById("a2").onclick = function () {
  if (pianoTileColor[21]) {
    document.getElementById("a2").style.backgroundColor = "white";
    pianoTileColor[21] = false;
  } else {
    document.getElementById("a2").style.backgroundColor = "lightblue";
    pianoTileColor[21] = true;
  }
};
document.getElementById("as2").onclick = function () {
  if (pianoTileColor[22]) {
    document.getElementById("as2").style.backgroundColor = "black";
    pianoTileColor[22] = false;
  } else {
    document.getElementById("as2").style.backgroundColor = "lightblue";
    pianoTileColor[22] = true;
  }
};
document.getElementById("b2").onclick = function () {
  if (pianoTileColor[23]) {
    document.getElementById("b2").style.backgroundColor = "white";
    pianoTileColor[23] = false;
  } else {
    document.getElementById("b2").style.backgroundColor = "lightblue";
    pianoTileColor[23] = true;
  }
};

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
    //Augmented
    if (pianoTileColor[currentKey + 8]) {
      pianoOutput += "aug";
    }
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
      }
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
  }
  else {
    pianoOutput = "Not a chord";
  }
}


//    Staff Chord Identifier   //
button.onclick = function () {

  //Staff
  //TrebbleCleff
  if (trebble.checked) {
    //0 Sharps/Flats
    if (n0.checked) {
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
      //1 Sharp
      if (n1.checked) {
        if (notes[0] || notes[7]) {
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[1] || notes[8]) {
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //2 Sharp
      else if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[4]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //3 Sharp
      else if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
      //4 Sharp
      else if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //5  Sharp
      else if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //6  Sharp
      else if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //7 Sharp
      else if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("");
        } else if (notes[5]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
      }
    }
    //CheckFlat
    else if (flat.checked) {
      //1 Flat
      if (n1.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //2 Flat
      else if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //3 Flat
      else if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //4 Flat
      else if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
      //5  Sharp
      else if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //6  Sharp
      else if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //7 Sharp
      else if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
    }
  }

  //BassCleff
  if (bass.checked) {
    //0 Sharp
    if (n0.checked) {
      if (notes[0] || notes[7]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      } else if (notes[1] || notes[8]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      } else if (notes[2]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      } else if (notes[3]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      } else if (notes[4]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      } else if (notes[5]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      } else if (notes[6]) {
        console.log("Diminished");
        htmlPrintStaff.innerHTML = "Diminished";
      }
    } else if (sharp.checked) {
      //1 Sharp
      if (n1.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //2 Sharp
      if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //3 Sharp
      if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //4 Sharp
      if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //5 Sharp
      if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //6 Sharp
      if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //7 Sharp
      if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
    } else if (flat.checked) {
      //1 Flat
      if (n1.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //2 Flat
      if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //3 Flat
      if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //4 Flat
      if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //5 Flat
      if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //6 Flat
      if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Diminished"); //
          htmlPrintStaff.innerHTML = "Diminished";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //7 Flat
      if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[1] || notes[8]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[2]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[3]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[4]) {
          console.log("minor"); //
          htmlPrintStaff.innerHTML = "minor";
        } else if (notes[5]) {
          console.log("Major"); //
          htmlPrintStaff.innerHTML = "Major";
        } else if (notes[6]) {
          console.log("Diminished"); //
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