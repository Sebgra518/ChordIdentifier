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
let sharpflat = [false, false, false, false, false, false, false, true,];
let notes = [false, false, false, false, false, false, false, false, false,];
let pianoTileColor = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
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
line1.onclick = function () {
  document.getElementById("note1").style.top = "344px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = true;
  notes[1] = false;
  notes[2] = false;
  notes[3] = false;
  notes[4] = false;
  notes[5] = false;
  notes[6] = false;
  notes[7] = false;
  notes[8] = false;
};

space1.onclick = function () {
  document.getElementById("note1").style.top = "350px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = true;
  notes[2] = false;
  notes[3] = false;
  notes[4] = false;
  notes[5] = false;
  notes[6] = false;
  notes[7] = false;
  notes[8] = false;
};

line2.onclick = function () {
  document.getElementById("note1").style.top = "357px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = false;
  notes[2] = true;
  notes[3] = false;
  notes[4] = false;
  notes[5] = false;
  notes[6] = false;
  notes[7] = false;
  notes[8] = false;
};

space2.onclick = function () {
  document.getElementById("note1").style.top = "364px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = false;
  notes[2] = false;
  notes[3] = true;
  notes[4] = false;
  notes[5] = false;
  notes[6] = false;
  notes[7] = false;
  notes[8] = false;
};

line3.onclick = function () {
  document.getElementById("note1").style.top = "372px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = false;
  notes[2] = false;
  notes[3] = false;
  notes[4] = true;
  notes[5] = false;
  notes[6] = false;
  notes[7] = false;
  notes[8] = false;
};

space3.onclick = function () {
  document.getElementById("note1").style.top = "380px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = false;
  notes[2] = false;
  notes[3] = false;
  notes[4] = false;
  notes[5] = true;
  notes[6] = false;
  notes[7] = false;
  notes[8] = false;
};

line4.onclick = function () {
  document.getElementById("note1").style.top = "386px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = false;
  notes[2] = false;
  notes[3] = false;
  notes[4] = false;
  notes[5] = false;
  notes[6] = true;
  notes[7] = false;
  notes[8] = false;
};

space4.onclick = function () {
  document.getElementById("note1").style.top = "394px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = false;
  notes[2] = false;
  notes[3] = false;
  notes[4] = false;
  notes[5] = false;
  notes[6] = false;
  notes[7] = true;
  notes[8] = false;
};

line5.onclick = function () {
  document.getElementById("note1").style.top = "402px";
  document.getElementById("note1").style.visibility = "visible";
  notes[0] = false;
  notes[1] = false;
  notes[2] = false;
  notes[3] = false;
  notes[4] = false;
  notes[5] = false;
  notes[6] = false;
  notes[7] = false;
  notes[8] = true;
};

document.getElementById("note1").onclick = function () {
  document.getElementById("note1").style.visibility = "hidden";
  notes[0] = false;
  notes[1] = false;
  notes[2] = false;
  notes[3] = false;
  notes[4] = false;
  notes[5] = false;
  notes[6] = false;
  notes[7] = false;
  notes[8] = false;
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
}
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

}
document.getElementById("Sharp").onclick = function () {
  document.getElementById("sharp1").style.visibility = "hidden";
  document.getElementById("sharp2").style.visibility = "hidden";
  document.getElementById("sharp3").style.visibility = "hidden";
  document.getElementById("sharp4").style.visibility = "hidden";
  document.getElementById("sharp5").style.visibility = "hidden";
  document.getElementById("sharp6").style.visibility = "hidden";
  document.getElementById("sharp7").style.visibility = "hidden";
  document.getElementById("flat1").style.visibility = "hidden";
  document.getElementById("flat2").style.visibility = "hidden";
  document.getElementById("flat3").style.visibility = "hidden";
  document.getElementById("flat4").style.visibility = "hidden";
  document.getElementById("flat5").style.visibility = "hidden";
  document.getElementById("flat6").style.visibility = "hidden";
  document.getElementById("flat7").style.visibility = "hidden";
  n0.checked = true;
}
document.getElementById("Flat").onclick = function () {
  document.getElementById("sharp1").style.visibility = "hidden";
  document.getElementById("sharp2").style.visibility = "hidden";
  document.getElementById("sharp3").style.visibility = "hidden";
  document.getElementById("sharp4").style.visibility = "hidden";
  document.getElementById("sharp5").style.visibility = "hidden";
  document.getElementById("sharp6").style.visibility = "hidden";
  document.getElementById("sharp7").style.visibility = "hidden";
  document.getElementById("flat1").style.visibility = "hidden";
  document.getElementById("flat2").style.visibility = "hidden";
  document.getElementById("flat3").style.visibility = "hidden";
  document.getElementById("flat4").style.visibility = "hidden";
  document.getElementById("flat5").style.visibility = "hidden";
  document.getElementById("flat6").style.visibility = "hidden";
  document.getElementById("flat7").style.visibility = "hidden";
  n0.checked = true;
}



//Show Sharp or Flat Key Sig (Trebble)
document.getElementById("0").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "hidden";
    document.getElementById("sharp2").style.visibility = "hidden";
    document.getElementById("sharp3").style.visibility = "hidden";
    document.getElementById("sharp4").style.visibility = "hidden";
    document.getElementById("sharp5").style.visibility = "hidden";
    document.getElementById("sharp6").style.visibility = "hidden";
    document.getElementById("sharp7").style.visibility = "hidden";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "hidden";
    document.getElementById("flat2").style.visibility = "hidden";
    document.getElementById("flat3").style.visibility = "hidden";
    document.getElementById("flat4").style.visibility = "hidden";
    document.getElementById("flat5").style.visibility = "hidden";
    document.getElementById("flat6").style.visibility = "hidden";
    document.getElementById("flat7").style.visibility = "hidden";
  }
}
document.getElementById("1").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "visible"; document.getElementById("sharp2").style.visibility = "hidden"; document.getElementById("sharp3").style.visibility = "hidden";
    document.getElementById("sharp4").style.visibility = "hidden";
    document.getElementById("sharp5").style.visibility = "hidden";
    document.getElementById("sharp6").style.visibility = "hidden";
    document.getElementById("sharp7").style.visibility = "hidden";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "visible"; document.getElementById("flat2").style.visibility = "hidden"; document.getElementById("flat3").style.visibility = "hidden";
    document.getElementById("flat4").style.visibility = "hidden";
    document.getElementById("flat5").style.visibility = "hidden";
    document.getElementById("flat6").style.visibility = "hidden";
    document.getElementById("flat7").style.visibility = "hidden";
  }
}
document.getElementById("2").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "visible";
    document.getElementById("sharp2").style.visibility = "visible";
    document.getElementById("sharp3").style.visibility = "hidden";
    document.getElementById("sharp4").style.visibility = "hidden";
    document.getElementById("sharp5").style.visibility = "hidden";
    document.getElementById("sharp6").style.visibility = "hidden";
    document.getElementById("sharp7").style.visibility = "hidden";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "visible";
    document.getElementById("flat2").style.visibility = "visible";
    document.getElementById("flat3").style.visibility = "hidden";
    document.getElementById("flat4").style.visibility = "hidden";
    document.getElementById("flat5").style.visibility = "hidden";
    document.getElementById("flat6").style.visibility = "hidden";
    document.getElementById("flat7").style.visibility = "hidden";
  }
}
document.getElementById("3").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "visible";
    document.getElementById("sharp2").style.visibility = "visible";
    document.getElementById("sharp3").style.visibility = "visible";
    document.getElementById("sharp4").style.visibility = "hidden";
    document.getElementById("sharp5").style.visibility = "hidden";
    document.getElementById("sharp6").style.visibility = "hidden";
    document.getElementById("sharp7").style.visibility = "hidden";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "visible";
    document.getElementById("flat2").style.visibility = "visible";
    document.getElementById("flat3").style.visibility = "visible";
    document.getElementById("flat4").style.visibility = "hidden";
    document.getElementById("flat5").style.visibility = "hidden";
    document.getElementById("flat6").style.visibility = "hidden";
    document.getElementById("flat7").style.visibility = "hidden";
  }

}
document.getElementById("4").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "visible";
    document.getElementById("sharp2").style.visibility = "visible";
    document.getElementById("sharp3").style.visibility = "visible";
    document.getElementById("sharp4").style.visibility = "visible";
    document.getElementById("sharp5").style.visibility = "hidden";
    document.getElementById("sharp6").style.visibility = "hidden";
    document.getElementById("sharp7").style.visibility = "hidden";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "visible";
    document.getElementById("flat2").style.visibility = "visible";
    document.getElementById("flat3").style.visibility = "visible";
    document.getElementById("flat4").style.visibility = "visible";
    document.getElementById("flat5").style.visibility = "hidden";
    document.getElementById("flat6").style.visibility = "hidden";
    document.getElementById("flat7").style.visibility = "hidden";
  }

}
document.getElementById("5").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "visible";
    document.getElementById("sharp2").style.visibility = "visible";
    document.getElementById("sharp3").style.visibility = "visible";
    document.getElementById("sharp4").style.visibility = "visible";
    document.getElementById("sharp5").style.visibility = "visible";
    document.getElementById("sharp6").style.visibility = "hidden";
    document.getElementById("sharp7").style.visibility = "hidden";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "visible";
    document.getElementById("flat2").style.visibility = "visible";
    document.getElementById("flat3").style.visibility = "visible";
    document.getElementById("flat4").style.visibility = "visible";
    document.getElementById("flat5").style.visibility = "visible";
    document.getElementById("flat6").style.visibility = "hidden";
    document.getElementById("flat7").style.visibility = "hidden";
  }
}
document.getElementById("6").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "visible";
    document.getElementById("sharp2").style.visibility = "visible";
    document.getElementById("sharp3").style.visibility = "visible";
    document.getElementById("sharp4").style.visibility = "visible";
    document.getElementById("sharp5").style.visibility = "visible";
    document.getElementById("sharp6").style.visibility = "visible";
    document.getElementById("sharp7").style.visibility = "hidden";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "visible";
    document.getElementById("flat2").style.visibility = "visible";
    document.getElementById("flat3").style.visibility = "visible";
    document.getElementById("flat4").style.visibility = "visible";
    document.getElementById("flat5").style.visibility = "visible";
    document.getElementById("flat6").style.visibility = "visible";
    document.getElementById("flat7").style.visibility = "hidden";
  }
}
document.getElementById("7").onclick = function () {
  if (document.getElementById("Sharp").checked) {
    document.getElementById("sharp1").style.visibility = "visible";
    document.getElementById("sharp2").style.visibility = "visible";
    document.getElementById("sharp3").style.visibility = "visible";
    document.getElementById("sharp4").style.visibility = "visible";
    document.getElementById("sharp5").style.visibility = "visible";
    document.getElementById("sharp6").style.visibility = "visible";
    document.getElementById("sharp7").style.visibility = "visible";
  }
  if (document.getElementById("Flat").checked) {
    document.getElementById("flat1").style.visibility = "visible";
    document.getElementById("flat2").style.visibility = "visible";
    document.getElementById("flat3").style.visibility = "visible";
    document.getElementById("flat4").style.visibility = "visible";
    document.getElementById("flat5").style.visibility = "visible";
    document.getElementById("flat6").style.visibility = "visible";
    document.getElementById("flat7").style.visibility = "visible";
    document.getElementById("flat7").style.visibility = "visible";
  }

}


//piano
document.getElementById("c1").onclick = function () {
  if (pianoTileColor[0]) {
    document.getElementById("c1").style.backgroundColor = "white";
    pianoTileColor[0] = false;
  }
  else {
    document.getElementById("c1").style.backgroundColor = "lightblue";
    pianoTileColor[0] = true;
  }
};
document.getElementById("cs1").onclick = function () {
  if (pianoTileColor[1]) {
    document.getElementById("cs1").style.backgroundColor = "black";
    pianoTileColor[1] = false;
  }
  else {
    document.getElementById("cs1").style.backgroundColor = "lightblue";
    pianoTileColor[1] = true;
  }
};
document.getElementById("d1").onclick = function () {
  if (pianoTileColor[2]) {
    document.getElementById("d1").style.backgroundColor = "white";
    pianoTileColor[2] = false;
  }
  else {
    document.getElementById("d1").style.backgroundColor = "lightblue";
    pianoTileColor[2] = true;
  }
};
document.getElementById("ds1").onclick = function () {
  if (pianoTileColor[3]) {
    document.getElementById("ds1").style.backgroundColor = "black";
    pianoTileColor[3] = false;
  }
  else {
    document.getElementById("ds1").style.backgroundColor = "lightblue";
    pianoTileColor[3] = true;
  }
};
document.getElementById("e1").onclick = function () {
  if (pianoTileColor[4]) {
    document.getElementById("e1").style.backgroundColor = "white";
    pianoTileColor[4] = false;
  }
  else {
    document.getElementById("e1").style.backgroundColor = "lightblue";
    pianoTileColor[4] = true;
  }
};
document.getElementById("f1").onclick = function () {
  if (pianoTileColor[5]) {
    document.getElementById("f1").style.backgroundColor = "white";
    pianoTileColor[5] = false;
  }
  else {
    document.getElementById("f1").style.backgroundColor = "lightblue";
    pianoTileColor[5] = true;
  }
};
document.getElementById("fs1").onclick = function () {
  if (pianoTileColor[6]) {
    document.getElementById("fs1").style.backgroundColor = "black";
    pianoTileColor[6] = false;
  }
  else {
    document.getElementById("fs1").style.backgroundColor = "lightblue";
    pianoTileColor[6] = true;
  }
};
document.getElementById("g1").onclick = function () {
  if (pianoTileColor[7]) {
    document.getElementById("g1").style.backgroundColor = "white";
    pianoTileColor[7] = false;
  }
  else {
    document.getElementById("g1").style.backgroundColor = "lightblue";
    pianoTileColor[7] = true;
  }
};
document.getElementById("gs1").onclick = function () {
  if (pianoTileColor[8]) {
    document.getElementById("gs1").style.backgroundColor = "black";
    pianoTileColor[8] = false;
  }
  else {
    document.getElementById("gs1").style.backgroundColor = "lightblue";
    pianoTileColor[8] = true;
  }
};
document.getElementById("a1").onclick = function () {
  if (pianoTileColor[9]) {
    document.getElementById("a1").style.backgroundColor = "white";
    pianoTileColor[9] = false;
  }
  else {
    document.getElementById("a1").style.backgroundColor = "lightblue";
    pianoTileColor[9] = true;
  }
};
document.getElementById("as1").onclick = function () {
  if (pianoTileColor[10]) {
    document.getElementById("as1").style.backgroundColor = "black";
    pianoTileColor[10] = false;
  }
  else {
    document.getElementById("as1").style.backgroundColor = "lightblue";
    pianoTileColor[10] = true;
  }
};
document.getElementById("b1").onclick = function () {
  if (pianoTileColor[11]) {
    document.getElementById("b1").style.backgroundColor = "white";
    pianoTileColor[11] = false;
  }
  else {
    document.getElementById("b1").style.backgroundColor = "lightblue";
    pianoTileColor[11] = true;
  }
};
document.getElementById("c2").onclick = function () {
  if (pianoTileColor[12]) {
    document.getElementById("c2").style.backgroundColor = "white";
    pianoTileColor[12] = false;
  }
  else {
    document.getElementById("c2").style.backgroundColor = "lightblue";
    pianoTileColor[12] = true;
  }
};
document.getElementById("cs2").onclick = function () {
  if (pianoTileColor[13]) {
    document.getElementById("cs2").style.backgroundColor = "black";
    pianoTileColor[13] = false;
  }
  else {
    document.getElementById("cs2").style.backgroundColor = "lightblue";
    pianoTileColor[13] = true;
  }
};
document.getElementById("d2").onclick = function () {
  if (pianoTileColor[14]) {
    document.getElementById("d2").style.backgroundColor = "white";
    pianoTileColor[14] = false;
  }
  else {
    document.getElementById("d2").style.backgroundColor = "lightblue";
    pianoTileColor[14] = true;
  }
};
document.getElementById("ds2").onclick = function () {
  if (pianoTileColor[15]) {
    document.getElementById("ds2").style.backgroundColor = "black";
    pianoTileColor[15] = false;
  }
  else {
    document.getElementById("ds2").style.backgroundColor = "lightblue";
    pianoTileColor[15] = true;
  }
};
document.getElementById("e2").onclick = function () {
  if (pianoTileColor[16]) {
    document.getElementById("e2").style.backgroundColor = "white";
    pianoTileColor[16] = false;
  }
  else {
    document.getElementById("e2").style.backgroundColor = "lightblue";
    pianoTileColor[16] = true;
  }
};
document.getElementById("f2").onclick = function () {
  if (pianoTileColor[17]) {
    document.getElementById("f2").style.backgroundColor = "white";
    pianoTileColor[17] = false;
  }
  else {
    document.getElementById("f2").style.backgroundColor = "lightblue";
    pianoTileColor[17] = true;
  }
};
document.getElementById("fs2").onclick = function () {
  if (pianoTileColor[18]) {
    document.getElementById("fs2").style.backgroundColor = "black";
    pianoTileColor[18] = false;
  }
  else {
    document.getElementById("fs2").style.backgroundColor = "lightblue";
    pianoTileColor[18] = true;
  }
};
document.getElementById("g2").onclick = function () {
  if (pianoTileColor[19]) {
    document.getElementById("g2").style.backgroundColor = "white";
    pianoTileColor[19] = false;
  }
  else {
    document.getElementById("g2").style.backgroundColor = "lightblue";
    pianoTileColor[19] = true;
  }
};
document.getElementById("gs2").onclick = function () {
  if (pianoTileColor[20]) {
    document.getElementById("gs2").style.backgroundColor = "black";
    pianoTileColor[20] = false;
  }
  else {
    document.getElementById("gs2").style.backgroundColor = "lightblue";
    pianoTileColor[20] = true;
  }
};
document.getElementById("a2").onclick = function () {
  if (pianoTileColor[21]) {
    document.getElementById("a2").style.backgroundColor = "white";
    pianoTileColor[21] = false;
  }
  else {
    document.getElementById("a2").style.backgroundColor = "lightblue";
    pianoTileColor[21] = true;
  }
};
document.getElementById("as2").onclick = function () {
  if (pianoTileColor[22]) {
    document.getElementById("as2").style.backgroundColor = "black";
    pianoTileColor[22] = false;
  }
  else {
    document.getElementById("as2").style.backgroundColor = "lightblue";
    pianoTileColor[22] = true;
  }
};
document.getElementById("b2").onclick = function () {
  if (pianoTileColor[23]) {
    document.getElementById("b2").style.backgroundColor = "white";
    pianoTileColor[23] = false;
  }
  else {
    document.getElementById("b2").style.backgroundColor = "lightblue";
    pianoTileColor[23] = true;
  }
};



/////////////////////////////////
//                             //
//                             //
//    Staff Chord Identifier   //
//                             //
//                             //
//                             //
/////////////////////////////////



button.onclick = function () {
  console.clear();

  //Staff
  console.log("Staff Chord:");

/*__|)_________________________________________
|___/__________________________________________
|__/|___________________________________________
|_/(|,\________________________________________
|_\_|_/_________________________________________
|   |__________________________________________
| (_|__________________________________________*/
  //TrebbleCleff
  if (trebble.checked) {
    //0 Sharps/Flats
    if (n0.checked) {
      if (notes[0] || notes[7]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      }
      if (notes[1] || notes[8]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      }
      if (notes[2]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      }
      if (notes[3]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      }
      if (notes[4]) {
        console.log("Diminished");
        htmlPrintStaff.innerHTML = "Diminished";
      }
      if (notes[5]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      }
      if (notes[6]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      }
    }
    //CheckSharp
    else if (sharp.checked) {
      //1 Sharp
      if (n1.checked) {
        if (notes[0] || notes[7]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";

        }
        else if (notes[5]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //2 Sharp
      else if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[4]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //3 Sharp
      else if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
      //4 Sharp
      else if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //5  Sharp
      else if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //6  Sharp
      else if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //7 Sharp
      else if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("");
        }
        else if (notes[5]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
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
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //2 Flat 
      else if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Diminished");
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[6]) {
          console.log("minor");
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //3 Flat
      else if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //4 Flat
      else if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
      //5  Sharp
      else if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //6  Sharp
      else if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("Major");
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //7 Sharp
      else if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
    }
  }
/*_______________________________________
|__/___\_.__________________________________
|__\___|_.______________________________________
|_____/_______________________________________
|____/_________________________________________*/
  //BassCleff
  if (bass.checked) {
    //0 Sharp
    if (n0.checked) {
      if (notes[0] || notes[7]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      }
      else if (notes[1] || notes[8]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      }
      else if (notes[2]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      }
      else if (notes[3]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      }
      else if (notes[4]) {
        console.log("minor");
        htmlPrintStaff.innerHTML = "minor";
      }
      else if (notes[5]) {
        console.log("Major");
        htmlPrintStaff.innerHTML = "Major";
      }
      else if (notes[6]) {
        console.log("Diminished");
        htmlPrintStaff.innerHTML = "Diminished";
      }
    }
    else if (sharp.checked) {
      //1 Sharp
      if (n1.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //2 Sharp
      if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //3 Sharp
      if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //4 Sharp
      if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //5 Sharp
      if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //6 Sharp
      if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //7 Sharp
      if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
    }
    else if (flat.checked) {
      //1 Flat
      if (n1.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //2 Flat
      if (n2.checked) {
        if (notes[0] || notes[7]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //3 Flat
      if (n3.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
      }
      //4 Flat
      if (n4.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //5 Flat
      if (n5.checked) {
        if (notes[0] || notes[7]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //6 Flat
      if (n6.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
      }
      //7 Flat
      if (n7.checked) {
        if (notes[0] || notes[7]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[1] || notes[8]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[2]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[3]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[4]) {
          console.log("minor");//
          htmlPrintStaff.innerHTML = "minor";
        }
        else if (notes[5]) {
          console.log("Major");//
          htmlPrintStaff.innerHTML = "Major";
        }
        else if (notes[6]) {
          console.log("Diminished");//
          htmlPrintStaff.innerHTML = "Diminished";
        }
      }
    }
  }

/* _______________________________________
  |  | | | |  |  | | | | | |  |  | | | |  | 
  |  | | | |  |  | | | | | |  |  | | | |  |
  |  | | | |  |  | | | | | |  |  | | | |  |
  |  |_| |_|  |  |_| |_| |_|  |  |_| |_|  |
  |   |   |   |   |   |   |   |   |   |   |
  |   |   |   |   |   |   |   |   |   |   |
  |___|___|___|___|___|___|___|___|___|___|*/

  //piano
  console.log("Piano chord: ");
  //C
  if (pianoTileColor[0]) {
    //3
    if (pianoTileColor[4]) {
      //sharp5
      if (pianoTileColor[8]) {
        console.log("Caug");
      }
      //5
      else if (pianoTileColor[7]) {
        //7
        if (pianoTileColor[11]) {
          console.log("Cmaj7");
        }
        //flat7
        else if (pianoTileColor[10]) {
          console.log("C7");
        }
        //major7
        else {
          console.log("C");
        }
      }
    }
    //flat3
    if (pianoTileColor[3]) {
      //5
      if (pianoTileColor[7]) {
        console.log("Cmin");
      }
      //flat5
      else if (pianoTileColor[6]) {
        console.log("Cdim");
      }
    }
  }
  //C#
  else if (pianoTileColor[1]) {
    //3
    if (pianoTileColor[5]) {
      //sharp5
      if (pianoTileColor[9]) {
        console.log("C#aug");
      }
      //5
      else if (pianoTileColor[8]) {
        //7
        if (pianoTileColor[12]) {
          console.log("C#maj7");
        }
        //flat7
        else if (pianoTileColor[11]) {
          console.log("C#7");
        }
        //major
        else {
          console.log("C#");
        }
      }
    }
    //flat3
    if (pianoTileColor[4]) {
      //5
      if (pianoTileColor[8]) {
        console.log("C#min");
      }
      //flat5
      else if (pianoTileColor[7]) {
        console.log("C#dim");
      }
    }
  }
  //D
  else if (pianoTileColor[2]) {
    //3
    if (pianoTileColor[6]) {
      //sharp5
      if (pianoTileColor[10]) {
        console.log("Daug");
      }
      //5
      else if (pianoTileColor[9]) {
        //7
        if (pianoTileColor[13]) {
          console.log("Dmaj7");
        }
        //flat7
        else if (pianoTileColor[12]) {
          console.log("D7");
        }
        //major
        else {
          console.log("D");
        }
      }
    }
    //flat3
    if (pianoTileColor[5]) {
      //5
      if (pianoTileColor[9]) {
        console.log("Dmin");
      }
      //flat5
      else if (pianoTileColor[8]) {
        console.log("Ddim");
      }
    }
  }
  //D#
  else if (pianoTileColor[3]) {
    //3
    if (pianoTileColor[7]) {
      //sharp5
      if (pianoTileColor[11]) {
        console.log("D#aug");
      }
      //5
      else if (pianoTileColor[10]) {
        //7
        if (pianoTileColor[14]) {
          console.log("D#maj7");
        }
        //flat7
        else if (pianoTileColor[13]) {
          console.log("D#7");
        }
        //major
        else {
          console.log("D#");
        }
      }
    }
    //flat3
    if (pianoTileColor[6]) {
      //5
      if (pianoTileColor[10]) {
        console.log("D#min");
      }
      //flat5
      else if (pianoTileColor[9]) {
        console.log("D#dim");
      }
    }
  }
  //E
  else if (pianoTileColor[4]) {
    //3
    if (pianoTileColor[8]) {
      //sharp5
      if (pianoTileColor[12]) {
        console.log("Eaug");
      }
      //5
      else if (pianoTileColor[11]) {
        //7
        if (pianoTileColor[15]) {
          console.log("Emaj7");
        }
        //flat7
        else if (pianoTileColor[14]) {
          console.log("E7");
        }
        //major
        else {
          console.log("E");
        }
      }
    }
    //flat3
    if (pianoTileColor[7]) {
      //5
      if (pianoTileColor[11]) {
        console.log("Emin");
      }
      //flat5
      else if (pianoTileColor[10]) {
        console.log("Edim");
      }
    }
  }
  //F
  else if (pianoTileColor[5]) {
    //3
    if (pianoTileColor[9]) {
      //sharp5
      if (pianoTileColor[13]) {
        console.log("Faug");
      }
      //5
      else if (pianoTileColor[12]) {
        //7
        if (pianoTileColor[16]) {
          console.log("Fmaj7");
        }
        //flat7
        else if (pianoTileColor[15]) {
          console.log("F7");
        }
        //major
        else {
          console.log("F");
        }
      }
    }
    //flat3
    if (pianoTileColor[8]) {
      //5
      if (pianoTileColor[12]) {
        console.log("Fmin");
      }
      //flat5
      else if (pianoTileColor[11]) {
        console.log("Fdim");
      }
    }
  }
  //F#
  else if (pianoTileColor[6]) {
    //3
    if (pianoTileColor[10]) {
      //sharp5
      if (pianoTileColor[14]) {
        console.log("F#aug");
      }
      //5
      else if (pianoTileColor[13]) {
        //7
        if (pianoTileColor[17]) {
          console.log("F#maj7");
        }
        //flat7
        else if (pianoTileColor[16]) {
          console.log("F#7");
        }
        //major
        else {
          console.log("F#");
        }
      }
    }
    //flat3
    if (pianoTileColor[9]) {
      //5
      if (pianoTileColor[13]) {
        console.log("F#min");
      }
      //flat5
      else if (pianoTileColor[12]) {
        console.log("F#dim");
      }
    }
  }
  //G
  else if (pianoTileColor[7]) {
    //3
    if (pianoTileColor[11]) {
      //sharp5
      if (pianoTileColor[15]) {
        console.log("Gaug");
      }
      //5
      else if (pianoTileColor[14]) {
        //7
        if (pianoTileColor[18]) {
          console.log("Gmaj7");
        }
        //flat7
        else if (pianoTileColor[17]) {
          console.log("G7");
        }
        //major
        else {
          console.log("G");
        }
      }
    }
    //flat3
    if (pianoTileColor[10]) {
      //5
      if (pianoTileColor[14]) {
        console.log("Gmin");
      }
      //flat5
      else if (pianoTileColor[13]) {
        console.log("Gdim");
      }
    }
  }
  //G#
  else if (pianoTileColor[8]) {
    //3
    if (pianoTileColor[12]) {
      //sharp5
      if (pianoTileColor[16]) {
        console.log("G#aug");
      }
      //5
      else if (pianoTileColor[15]) {
        //7
        if (pianoTileColor[19]) {
          console.log("G#maj7");
        }
        //flat7
        else if (pianoTileColor[18]) {
          console.log("G#7");
        }
        //major
        else {
          console.log("G#");
        }
      }
    }
    //flat3
    if (pianoTileColor[11]) {
      //5
      if (pianoTileColor[15]) {
        console.log("G#min");
      }
      //flat5
      else if (pianoTileColor[14]) {
        console.log("G#dim");
      }
    }
  }
  //A
  else if (pianoTileColor[9]) {
    //3
    if (pianoTileColor[13]) {
      //sharp5
      if (pianoTileColor[17]) {
        console.log("Aaug");
      }
      //5
      else if (pianoTileColor[16]) {
        //7
        if (pianoTileColor[20]) {
          console.log("Amaj7");
        }
        //flat7
        else if (pianoTileColor[19]) {
          console.log("A7");
        }
        //major
        else {
          console.log("A");
        }
      }
    }
    //flat3
    if (pianoTileColor[12]) {
      //5
      if (pianoTileColor[16]) {
        console.log("Amin");
      }
      //flat5
      else if (pianoTileColor[15]) {
        console.log("Adim");
      }
    }
  }
  //A#
  else if (pianoTileColor[10]) {
    //3
    if (pianoTileColor[14]) {
      //sharp5
      if (pianoTileColor[18]) {
        console.log("A#aug");
      }
      //5
      else if (pianoTileColor[17]) {
        //7
        if (pianoTileColor[21]) {
          console.log("A#maj7");
        }
        //flat7
        else if (pianoTileColor[20]) {
          console.log("A#7");
        }
        //major
        else {
          console.log("A#");
        }
      }
    }
    //flat3
    if (pianoTileColor[13]) {
      //5
      if (pianoTileColor[17]) {
        console.log("A#min");
      }
      //flat5
      else if (pianoTileColor[16]) {
        console.log("A#dim");
      }
    }
  }
  //B
  else if (pianoTileColor[11]) {
    //3
    if (pianoTileColor[15]) {
      //sharp5
      if (pianoTileColor[19]) {
        console.log("Baug");
      }
      //5
      else if (pianoTileColor[18]) {
        //7
        if (pianoTileColor[22]) {
          console.log("Bmaj7");
        }
        //flat7
        else if (pianoTileColor[21]) {
          console.log("B7");
        }
        //major
        else {
          console.log("B");
        }
      }
    }
    //flat3
    if (pianoTileColor[14]) {
      //5
      if (pianoTileColor[18]) {
        console.log("Bmin");
      }
      //flat5
      else if (pianoTileColor[17]) {
        console.log("Bdim");
      }
    }
  }
};