let total = 0;
let arsTotal = 0;
let addTotal = 0;
let dispatch = 0;
let oopCost = 0;
let dispatchNote = "";
let addCost = 0;
let newArsRate = 0;
let totalCollected = 0;
let profit = 0;
let winchmdcost = 150;
let winchhdcost = 250;
let tirecallcost = 150;
let jumpcost = 150;



//calculates ars rate per state & tpg 
function calculate() {
  const client = document.getElementById("client").value;
  const state = document.getElementById("state").value;
  const vehicleType = document.getElementById("vehicle-type").value;
  var miles = parseFloat(document.getElementById("miles").value).toFixed(2);
  let addTotal = 0;


  if (client === "ars") {
    switch (vehicleType) {
      case "ld":
        total = miles * 3 + 50;
        arsTotal = 0;
        break;
      case "md":
        if (state === "AK") {
          arsTotal = miles * 5.5 + 275;
        }
        if (state === "AL") {
          arsTotal = miles * 4.5 + 215;
        }
        if (state === "AR") {
          arsTotal = miles * 5 + 200;
        }
        if (state === "AZ") {
          arsTotal = miles * 5.5 + 225;
        }
        if (state === "CA") {
          arsTotal = miles * 5.5 + 245;
        }
        if (state === "CO") {
          arsTotal = miles * 5.5 + 235;
        }
        if (state === "CT") {
          arsTotal = miles * 5.5 + 235;
        }
        if (state === "DE") {
          arsTotal = miles * 5 + 235;
        }
        if (state === "FL") {
          arsTotal = miles * 4.5 + 205;
        }
        if (state === "GA") {
          arsTotal = miles * 4.5 + 215;
        }
        if (state === "HI") {
          arsTotal = miles * 5.5 + 195;
        }
        if (state === "IA") {
          arsTotal = miles * 5.5 + 225;
        }
        if (state === "ID") {
          arsTotal = miles * 5.5 + 245;
        }
        if (state === "IL") {
          arsTotal = miles * 4.5 + 215;
        }
        if (state === "IN") {
          arsTotal = miles * 5 + 215;
        }
        if (state === "KS") {
          arsTotal = miles * 5 + 220;
        }
        if (state === "KY") {
          arsTotal = miles * 5 + 225;
        }
        if (state === "LA") {
          arsTotal = miles * 5 + 220;
        }
        if (state === "MA") {
          arsTotal = miles * 5.5 + 235;
        }
        if (state === "MD") {
          arsTotal = miles * 5 + 235;
        }
        if (state === "ME") {
          arsTotal = miles * 5.5 + 235;
        }
        if (state === "MI") {
          arsTotal = miles * 5.5 + 235;
        }
        if (state === "MN") {
          arsTotal = miles * 5.5 + 225;
        }
        if (state === "MO") {
          arsTotal = miles * 5 + 200;
        }
        if (state === "MS") {
          arsTotal = miles * 4.5 + 215;
        }
        if (state === "MT") {
          arsTotal = miles * 5.5 + 250;
        }
        if (state === "NC") {
          arsTotal = miles * 4.5 + 215;
        }
        if (state === "ND") {
          arsTotal = miles * 5.5 + 250;
        }
        if (state === "NE") {
          arsTotal = miles * 5 + 225;
        }
        if (state === "NH") {
          arsTotal = miles * 5.5 + 235;
        }
        if (state === "NJ") {
          arsTotal = miles * 5.5 + 245;
        }
        if (state === "NM") {
          arsTotal = miles * 5.5 + 245;
        }
        if (state === "NV") {
          arsTotal = miles * 5.5 + 235;
        }
        if (state === "NY") {
          arsTotal = miles * 5.5 + 250;
        }
        if (state === "OH") {
          arsTotal = miles * 5 + 220;
        }
        if (state === "OK") {
          arsTotal = miles * 5 + 225;
        }
        if (state === "OR") {
          arsTotal = miles * 5.5 + 230;
        }
        if (state === "PA") {
          arsTotal = miles * 5.5 + 250;
        }
        if (state === "RI") {
          arsTotal = miles * 5.5 + 230;
        }
        if (state === "SC") {
          arsTotal = miles * 4.5 + 215;
        }
        if (state === "SD") {
          arsTotal = miles * 5.5 + 250;
        }
        if (state === "TN") {
          arsTotal = miles * 4.5 + 195;
        }
        if (state === "TX") {
          arsTotal = miles * 5 + 235;
        }
        if (state === "UT") {
          arsTotal = miles * 5.5 + 225;
        }
        if (state === "VA") {
          arsTotal = miles * 5 + 225;
        }
        if (state === "VT") {
          arsTotal = miles * 5.5 + 230;
        }
        if (state === "WA") {
          arsTotal = miles * 5.5 + 230;
        }
        if (state === "WI") {
          arsTotal = miles * 5.5 + 230;
        }
        if (state === "WV") {
          arsTotal = miles * 5 + 225;
        }
        if (state === "WY") {
          arsTotal = miles * 5.5 + 250;
        }
        total = miles * 4.5 + 125;
        break;
      case "hd":
        if (state === "AK") {
          arsTotal = miles * 7.5 + 415;
        }
        if (state === "AL") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "AR") {
          arsTotal = miles * 8 + 350;
        }
        if (state === "AZ") {
          arsTotal = miles * 8 + 380;
        }
        if (state === "CA") {
          arsTotal = miles * 7.45 + 400;
        }
        if (state === "CO") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "CT") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "DE") {
          arsTotal = miles * 7.50 + 380;
        }
        if (state === "FL") {
          arsTotal = miles * 7.5 + 345;
        }
        if (state === "GA") {
          arsTotal = miles * 6.5 + 355;
        }
        if (state === "HI") {
          arsTotal = miles * 8 + 365;
        }
        if (state === "IA") {
          arsTotal = miles * 7 + 365;
        }
        if (state === "ID") {
          arsTotal = miles * 7.5 + 405;
        }
        if (state === "IL") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "IN") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "KS") {
          arsTotal = miles * 7.5 + 350;
        }
        if (state === "KY") {
          arsTotal = miles * 7.5 + 405;
        }
        if (state === "LA") {
          arsTotal = miles * 7.25 + 340;
        }
        if (state === "MA") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "MD") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "ME") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "MI") {
          arsTotal = miles * 8 + 365;
        }
        if (state === "MN") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "MO") {
          arsTotal = miles * 7.5 + 315;
        }
        if (state === "MS") {
          arsTotal = miles * 7.5 + 365;
        }
        if (state === "MT") {
          arsTotal = miles * 8.25 + 440;
        }
        if (state === "NC") {
          arsTotal = miles * 7 + 360;
        }
        if (state === "ND") {
          arsTotal = miles * 8.25 + 440;
        }
        if (state === "NE") {
          arsTotal = miles * 7.5 + 415;
        }
        if (state === "NH") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "NJ") {
          arsTotal = miles * 8.25 + 425;
        }
        if (state === "NM") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "NV") {
          arsTotal = miles * 8 + 380;
        }
        if (state === "NY") {
          arsTotal = miles * 8.25 + 425;
        }
        if (state === "OH") {
          arsTotal = miles * 7.5 + 390;
        }
        if (state === "OK") {
          arsTotal = miles * 7.5 + 315;
        }
        if (state === "OR") {
          arsTotal = miles * 8.25 + 425;
        }
        if (state === "PA") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "RI") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "SC") {
          arsTotal = miles * 7 + 340;
        }
        if (state === "SD") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "TN") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "TX") {
          arsTotal = miles * 8.25 + 415;
        }
        if (state === "UT") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "VA") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "VT") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "WA") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "WI") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "WV") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "WY") {
          arsTotal = miles * 8.25 + 440;
        }
        total = miles * 5.5 + 150;
        break;
      case "md-rv":
        if (state === "AK") {
          arsTotal = miles * 5.5 + 305;
        }
        if (state === "AL") {
          arsTotal = miles * 4.5 + 245;
        }
        if (state === "AR") {
          arsTotal = miles * 5 + 230;
        }
        if (state === "AZ") {
          arsTotal = miles * 5.5 + 255;
        }
        if (state === "CA") {
          arsTotal = miles * 5.5 + 275;
        }
        if (state === "CO") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "CT") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "DE") {
          arsTotal = miles * 5 + 265;
        }
        if (state === "FL") {
          arsTotal = miles * 4.5 + 235;
        }
        if (state === "GA") {
          arsTotal = miles * 4.5 + 245;
        }
        if (state === "HI") {
          arsTotal = miles * 5.5 + 225;
        }
        if (state === "IA") {
          arsTotal = miles * 5.5 + 255;
        }
        if (state === "ID") {
          arsTotal = miles * 5.5 + 275;
        }
        if (state === "IL") {
          arsTotal = miles * 4.5 + 245;
        }
        if (state === "IN") {
          arsTotal = miles * 5 + 255;
        }
        if (state === "KS") {
          arsTotal = miles * 5 + 250;
        }
        if (state === "KY") {
          arsTotal = miles * 5 + 255;
        }
        if (state === "LA") {
          arsTotal = miles * 5 + 250;
        }
        if (state === "MA") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "MD") {
          arsTotal = miles * 5 + 265;
        }
        if (state === "ME") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "MI") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "MN") {
          arsTotal = miles * 5.5 + 275;
        }
        if (state === "MO") {
          arsTotal = miles * 5 + 230;
        }
        if (state === "MS") {
          arsTotal = miles * 4.5 + 245;
        }
        if (state === "MT") {
          arsTotal = miles * 5.5 + 280;
        }
        if (state === "NC") {
          arsTotal = miles * 4.5 + 245;
        }
        if (state === "ND") {
          arsTotal = miles * 5.5 + 280;
        }
        if (state === "NE") {
          arsTotal = miles * 5 + 255;
        }
        if (state === "NH") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "NJ") {
          arsTotal = miles * 5.5 + 275;
        }
        if (state === "NM") {
          arsTotal = miles * 5.5 + 275;
        }
        if (state === "NV") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "NY") {
          arsTotal = miles * 5.5 + 280;
        }
        if (state === "OH") {
          arsTotal = miles * 5 + 250;
        }
        if (state === "OK") {
          arsTotal = miles * 5 + 255;
        }
        if (state === "OR") {
          arsTotal = miles * 5.5 + 260;
        }
        if (state === "PA") {
          arsTotal = miles * 5.5 + 280;
        }
        if (state === "RI") {
          arsTotal = miles * 5.5 + 260;
        }
        if (state === "SC") {
          arsTotal = miles * 4.5 + 245;
        }
        if (state === "SD") {
          arsTotal = miles * 5.5 + 280;
        }
        if (state === "TN") {
          arsTotal = miles * 4.5 + 225;
        }
        if (state === "TX") {
          arsTotal = miles * 5 + 265;
        }
        if (state === "UT") {
          arsTotal = miles * 5.5 + 255;
        }
        if (state === "VA") {
          arsTotal = miles * 5 + 255;
        }
        if (state === "VT") {
          arsTotal = miles * 5.5 + 260;
        }
        if (state === "WA") {
          arsTotal = miles * 5.5 + 260;
        }
        if (state === "WI") {
          arsTotal = miles * 5.5 + 265;
        }
        if (state === "WV") {
          arsTotal = miles * 5 + 255;
        }
        if (state === "WY") {
          arsTotal = miles * 5.5 + 280;
        }
        total = miles * 5 + 250;
        break;
      case "hd-rv":
        if (state === "AK") {
          arsTotal = miles * 7.5 + 425;
        }
        if (state === "AL") {
          arsTotal = miles * 8.25 + 350;
        }
        if (state === "AR") {
          arsTotal = miles * 8 + 360;
        }
        if (state === "AZ") {
          arsTotal = miles * 8 + 390;
        }
        if (state === "CA") {
          arsTotal = miles * 7.45 + 415;
        }
        if (state === "CO") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "CT") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "DE") {
          arsTotal = miles * 7.50 + 425;
        }
        if (state === "FL") {
          arsTotal = miles * 7.5 + 355;
        }
        if (state === "GA") {
          arsTotal = miles * 6.5 + 365;
        }
        if (state === "HI") {
          arsTotal = miles * 8 + 375;
        }
        if (state === "IA") {
          arsTotal = miles * 7 + 395;
        }
        if (state === "ID") {
          arsTotal = miles * 7.5 + 415;
        }
        if (state === "IL") {
          arsTotal = miles * 8.25 + 350;
        }
        if (state === "IN") {
          arsTotal = miles * 7 + 395;
        }
        if (state === "KS") {
          arsTotal = miles * 7.5 + 360;
        }
        if (state === "KY") {
          arsTotal = miles * 7.5 + 415;
        }
        if (state === "LA") {
          arsTotal = miles * 7.25 + 360;
        }
        if (state === "MA") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "MD") {
          arsTotal = miles * 8 + 425;
        }
        if (state === "ME") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "MI") {
          arsTotal = miles * 8 + 425;
        }
        if (state === "MN") {
          arsTotal = miles * 8 + 425;
        }
        if (state === "MO") {
          arsTotal = miles * 7.5 + 325;
        }
        if (state === "MS") {
          arsTotal = miles * 7.5 + 375;
        }
        if (state === "MT") {
          arsTotal = miles * 8.25 + 450;
        }
        if (state === "NC") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "ND") {
          arsTotal = miles * 8.25 + 450;
        }
        if (state === "NE") {
          arsTotal = miles * 7.5 + 415;
        }
        if (state === "NH") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "NJ") {
          arsTotal = miles * 8.25 + 435;
        }
        if (state === "NM") {
          arsTotal = miles * 8 + 425;
        }
        if (state === "NV") {
          arsTotal = miles * 8 + 280;
        }
        if (state === "NY") {
          arsTotal = miles * 8.25 + 435;
        }
        if (state === "OH") {
          arsTotal = miles * 7.5 + 425;
        }
        if (state === "OK") {
          arsTotal = miles * 7.5 + 325;
        }
        if (state === "OR") {
          arsTotal = miles * 8.25 + 435;
        }
        if (state === "PA") {
          arsTotal = miles * 8 + 425;
        }
        if (state === "RI") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "SC") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "SD") {
          arsTotal = miles * 8.25 + 450;
        }
        if (state === "TN") {
          arsTotal = miles * 8.25 + 350;
        }
        if (state === "TX") {
          arsTotal = miles * 8.25 + 425;
        }
        if (state === "UT") {
          arsTotal = miles * 7 + 395;
        }
        if (state === "VA") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "VT") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "WA") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "WI") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "WV") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "WY") {
          arsTotal = miles * 8.25 + 450;
        }
        total = miles * 7 + 250;
        break;
      case "diesel-pusher-rv":
        if (state === "AK") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "AL") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "AR") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "AZ") {
          arsTotal = miles * 8.50 + 605;
        }
        if (state === "CA") {
          arsTotal = miles * 8 + 585;
        }
        if (state === "CO") {
          arsTotal = miles * 8 + 585;
        }
        if (state === "CT") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "DE") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "FL") {
          arsTotal = miles * 8 + 605;
        }
        if (state === "GA") {
          arsTotal = miles * 8.5 + 585;
        }
        if (state === "HI") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "IA") {
          arsTotal = miles * 8 + 585;
        }
        if (state === "ID") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "IL") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "IN") {
          arsTotal = miles * 8 + 585;
        }
        if (state === "KS") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "KY") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "LA") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "MA") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "MD") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "ME") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "MI") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "MN") {
          arsTotal = miles * 8 + 605;
        }
        if (state === "MO") {
          arsTotal = miles * 8 + 585;
        }
        if (state === "MS") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "MT") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "NC") {
          arsTotal = miles * 8.5 + 585;
        }
        if (state === "ND") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "NE") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "NH") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "NJ") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "NM") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "NV") {
          arsTotal = miles * 8 + 605;
        }
        if (state === "NY") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "OH") {
          arsTotal = miles * 8 + 605;
        }
        if (state === "OK") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "OR") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "PA") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "RI") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "SC") {
          arsTotal = miles * 8.5 + 585;
        }
        if (state === "SD") {
          arsTotal = miles * 8.5 + 605;
        }
        if (state === "TN") {
          arsTotal = miles * 8.50 + 605;
        }
        if (state === "TX") {
          arsTotal = miles * 8.50 + 605; //FINISH DIESEL PUSHERS!!!!
        }
        if (state === "UT") {
          arsTotal = miles * 8 + 585;
        }
        if (state === "VA") {
          arsTotal = miles * 9 + 585;
        }
        if (state === "VT") {
          arsTotal = miles * 8.50 + 605;
        }
        if (state === "WA") {
          arsTotal = miles * 8.50 + 605;
        }
        if (state === "WI") {
          arsTotal = miles * 8 + 605;
        }
        if (state === "WV") {
          arsTotal = miles * 8.50 + 605;
        }
        if (state === "WY") {
          arsTotal = miles * 8.50 + 605;
        }
        total = miles * 7 + 350;
        break;
      case "semi-combination": //fix this as well
        if (state !== "") {
          arsTotal = 0;
        }
        total = miles * 7.5 + 250;
        break;
      case "truck-or-trailer-only": // finish this as well
        if (state === "AK") {
          arsTotal = miles * 7.5 + 415;
        }
        if (state === "AL") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "AR") {
          arsTotal = miles * 8 + 350;
        }
        if (state === "AZ") {
          arsTotal = miles * 8 + 380;
        }
        if (state === "CA") {
          arsTotal = miles * 7.45 + 400;
        }
        if (state === "CO") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "CT") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "DE") {
          arsTotal = miles * 7.50 + 380;
        }
        if (state === "FL") {
          arsTotal = miles * 7.5 + 345;
        }
        if (state === "GA") {
          arsTotal = miles * 6.5 + 355;
        }
        if (state === "HI") {
          arsTotal = miles * 8 + 365;
        }
        if (state === "IA") {
          arsTotal = miles * 7 + 365;
        }
        if (state === "ID") {
          arsTotal = miles * 7.5 + 405;
        }
        if (state === "IL") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "IN") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "KS") {
          arsTotal = miles * 7.5 + 350;
        }
        if (state === "KY") {
          arsTotal = miles * 7.5 + 405;
        }
        if (state === "LA") {
          arsTotal = miles * 7.25 + 340;
        }
        if (state === "MA") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "MD") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "ME") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "MI") {
          arsTotal = miles * 8 + 365;
        }
        if (state === "MN") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "MO") {
          arsTotal = miles * 7.5 + 315;
        }
        if (state === "MS") {
          arsTotal = miles * 7.5 + 365;
        }
        if (state === "MT") {
          arsTotal = miles * 8.25 + 440;
        }
        if (state === "NC") {
          arsTotal = miles * 7 + 360;
        }
        if (state === "ND") {
          arsTotal = miles * 8.25 + 440;
        }
        if (state === "NE") {
          arsTotal = miles * 7.5 + 415;
        }
        if (state === "NH") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "NJ") {
          arsTotal = miles * 8.25 + 425;
        }
        if (state === "NM") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "NV") {
          arsTotal = miles * 8 + 380;
        }
        if (state === "NY") {
          arsTotal = miles * 8.25 + 425;
        }
        if (state === "OH") {
          arsTotal = miles * 7.5 + 390;
        }
        if (state === "OK") {
          arsTotal = miles * 7.5 + 315;
        }
        if (state === "OR") {
          arsTotal = miles * 8.25 + 425;
        }
        if (state === "PA") {
          arsTotal = miles * 8 + 415;
        }
        if (state === "RI") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "SC") {
          arsTotal = miles * 7 + 340;
        }
        if (state === "SD") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "TN") {
          arsTotal = miles * 8.25 + 340;
        }
        if (state === "TX") {
          arsTotal = miles * 8.25 + 415;
        }
        if (state === "UT") {
          arsTotal = miles * 7 + 385;
        }
        if (state === "VA") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "VT") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "WA") {
          arsTotal = miles * 8 + 405;
        }
        if (state === "WI") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "WV") {
          arsTotal = miles * 7 + 375;
        }
        if (state === "WY") {
          arsTotal = miles * 8.25 + 440;
        }
        total = miles * 5.5 + 150;
        break;
      default:
        break;
    }
    total = total.toFixed(2);
    arsTotal = arsTotal.toFixed(2);
    dispatch = `*Dispatching*<br>
    Make the initial offer & negotiate!<br>
    "The job pays $${total}, how soon can you get there?"<br>
    "How close to $${total} can we get on this one?"<br>
    "Will $${total} get this job done?"<br>
    ***Make sure this is all in cost(tax, fuel surcharge, cc fee)***`;
    vendorHelp = `*Vendor Tips*<br>
    -If the move is in a split tow state, expect higher quotes.<br>
    -If the rate is hourly, try to have them agree on an hourly threshold.<br>
    -If a vendor cannot help, ask who they recommend to help.<br>
    -If the delivery is a shop - call the shop for a vendor recommendation.<br>
    -Look for outside vendors(google) if there is limited availability.`;
    document.getElementById("vendor-tips").innerHTML = vendorHelp;
    document.getElementById("negotiate").innerHTML = dispatch;
    document.getElementById("total-cost").innerHTML = total;
    document.getElementById("ars-rate").innerHTML = arsTotal;
  }
  else {
    switch (vehicleType) {
      case "ld":
        total = miles * 3 + 50;
        break;
      case "md":
        total = miles * 4.5 + 125;
        break;
      case "hd":
        total = miles * 5.5 + 150;
        break;
      case "md-rv":
        total = miles * 5 + 250;
        break;
      case "hd-rv":
        total = miles * 7 + 250;
        break;
      case "diesel-pusher-rv":
        total = miles * 7 + 350;
        break;
      case "semi-combination":
        total = miles * 7.5 + 250;
        break;
      case "truck-or-trailer-only":
        total = miles * 5.5 + 150;
        break;
      default:
        break;
    }
    total = total.toFixed(2);
    dispatch = `Dispatching<br>
          	Make the initial offer & negotiate!<br>
          	"The job pays $${total}, how soon can we have this done?"<br>
          	"How close to $${total} can we get on this one?"<br>
          	"Will $${total} get this job done?"<br>
            ***Make sure this is all in cost(tax, fuel surcharge, cc fee)***`;
    vendorHelp = `*Vendor Tips*<br>
    -If the move is in a split tow state, expect higher quotes.<br>
    -If the rate is hourly, try to have them agree on an hourly threshold.<br>
    -If a vendor cannot help, ask who they recommend to help.<br>
    -If the delivery is a shop - call the shop for a vendor recommendation.<br>
    -Look for outside vendors(google) if there is limited availability.`;
    document.getElementById("negotiate").innerHTML = dispatch;
    document.getElementById("total-cost").innerHTML = total;
    document.getElementById("vendor-tips").innerHTML = vendorHelp;
    document.getElementById("ars-rate").innerHTML = "0.00";
  }
}

//function to calculate additional funds from ARS if needed - button for ars approval
function getAdditionalFunds() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const eta = document.getElementById("eta").value;
  let addTotal2 = 0;


  if (arsTotal - quote < 150) {
    document.getElementById("add-cost").style.color = "red";
    addTotal2 = quote - arsTotal + 150;
    newArsRate = addTotal2 + parseFloat(arsTotal);
    addTotal = `$${addTotal2.toFixed(2)}`;
    oopCost = "0.00";
    dispatchDisclaimer = "";
    localStorage.removeItem("aaaoop");
    document.getElementById("oop-cost").style.color = "black";


  }
  else {
    oopCost = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("oop-cost").style.color = "black";
    localStorage.removeItem("aaaoop");
    document.getElementById("add-cost").style.color = "green";
    addTotal = `No Additional Funds needed - Proceed with dispatch.  Make sure to verbally state your disclaimer and send it along with the email.<br>*Confirm all in cost, equipment and all logistics and properly notate the move. <br><br> 
    We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
    Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
    All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;

  }
  document.getElementById("approved-funds").style.display = "";
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("oop-cost").innerHTML = oopCost;
}

//function for ars approved funds calculations and notes
function arsAddApproval() {
  const weightClass = document.getElementById("vehicle-type").value;
  arsAddNotes = `Contracted Rate: $${arsTotal}<br>
  Weight Class = ${weightClass}<br>
  Overage Requested: ${addTotal}<br>
  Total Client Quote: $${newArsRate}<br>
  Approved By:`;
  document.getElementById("new-ars-rate").innerHTML = arsAddNotes;
  document.getElementById("ars-disclaimer").style.display = "";
}


//function to calculate AAA OOP and reset ARS data - button for aaa approval
function getOOPFunds() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  let addTotal3 = 0;


  if (500 - quote < 150) {
    document.getElementById("oop-cost").style.color = "red";
    addCost = quote - 500 + 150;
    ccFee = addCost * .035;
    addTotal3 = addCost + ccFee;
    oopCost = `$` + `${addTotal3.toFixed(2)}`;
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("collect-oop").style.display = "";
    totalCollected = addTotal3 + 500;

  }
  else {
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("oop-cost").style.color = "green";
    oopCost = `No OOP Costs - Proceed with dispatch.  Make sure to verbally state your disclaimer and send it along with the email.<br>*Confirm all in cost, equipment and all logistics and properly notate the move.  <br><br> 
    We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
    Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
    All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
  }
  document.getElementById("oop-cost").innerHTML = oopCost;
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("add-cost").style.color = "black";
}
//function to calculate AAA OOP on 2 POs and reset ARS button
function get2POFunds() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  let addTotal3 = 0;


  if (1000 - quote < 150) {
    document.getElementById("oop-cost").style.color = "red";
    addCost = quote - 1000 + 150;
    ccFee = addCost * .035;
    addTotal3 = addCost + ccFee;
    oopCost = `$` + `${addTotal3.toFixed(2)}`;
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("collect-oop").style.display = "";
    totalCollected = addTotal3 + 1000;

  }
  else {
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("oop-cost").style.color = "green";
    oopCost = `No OOP Costs - Proceed with dispatch.  Make sure to verbally state your disclaimer and send it along with the email.<br>*Confirm all in cost, equipment and all logistics and properly notate the move.  <br><br> 
    We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
    Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
    All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
  }
  document.getElementById("oop-cost").innerHTML = oopCost;
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("add-cost").style.color = "black";
}


//function to calculate AAA OOP for 100 miles and reset ARS data - button for aaa approval
function get100MileOverage() {
    const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
   const miles = parseFloat(document.getElementById("miles").value).toFixed(2);
  const vehicleType = document.getElementById("vehicle-type").value;
  const eta = document.getElementById("eta").value;
  let addTotal3 = 0;
  let overage = miles - 100;


  if (miles > 100) {
    switch (vehicleType) {
      case "ld":
        total = overage * 6;
        break;
      case "md":
        total = overage * 7;
        break;
      case "hd":
        total = overage * 8;
        break;
      case "md-rv":
        total = overage * 7;
        break;
      case "hd-rv":
        total = overage * 8;
        break;
      case "diesel-pusher-rv":
        total = overage * 8;
        break;
      case "semi-combination":
        total = overage * 8;
        break;
      case "truck-or-trailer-only":
        total = overage * 8;
    break;
      default:
        break;
    }

    addCost = total;
    ccFee = addCost * .035;
    addTotal3 = addCost + ccFee;
    oopCost = `$` + `${addTotal3.toFixed(2)}`;
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("collect-oop").style.display = "";
    totalCollected = addTotal3 + 500;
  }
  else {
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("oop-cost").style.color = "green";
    oopCost = `No OOP Costs - Proceed with dispatch.  Make sure to verbally state your disclaimer and send it along with the email.<br>*Confirm all in cost, equipment and all logistics and properly notate the move.  <br><br> 
    We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
    Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
    All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
  }
  document.getElementById("oop-cost").innerHTML = oopCost;
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("add-cost").style.color = "black";
  }
//function to calculate AAA OOP for 200 miles and reset ARS data - button for aaa approval
function get200MileOverage() {
    const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
   const miles = parseFloat(document.getElementById("miles").value).toFixed(2);
  const vehicleType = document.getElementById("vehicle-type").value;
  const eta = document.getElementById("eta").value;
  let addTotal3 = 0;
  let overage = miles - 200;


  if (miles > 200) {
    switch (vehicleType) {
      case "ld":
        total = overage * 6;
        break;
      case "md":
        total = overage * 7;
        break;
      case "hd":
        total = overage * 8;
        break;
      case "md-rv":
        total = overage * 7;
        break;
      case "hd-rv":
        total = overage * 8;
        break;
      case "diesel-pusher-rv":
        total = overage * 8;
        break;
      case "semi-combination":
        total = overage * 8;
        break;
      case "truck-or-trailer-only":
        total = overage * 8;
    break;
      default:
        break;
    }

    addCost = total;
    ccFee = addCost * .035;
    addTotal3 = addCost + ccFee;
    oopCost = `$` + `${addTotal3.toFixed(2)}`;
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("collect-oop").style.display = "";
    totalCollected = addTotal3 + 500;
  }
  else {
    addTotal = "0.00";
    dispatchDisclaimer = "";
    document.getElementById("add-cost").style.color = "black";
    document.getElementById("oop-cost").style.color = "green";
    oopCost = `No OOP Costs - Proceed with dispatch.  Make sure to verbally state your disclaimer and send it along with the email.<br>*Confirm all in cost, equipment and all logistics and properly notate the move.  <br><br> 
    We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
    Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
    All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
  }
  document.getElementById("oop-cost").innerHTML = oopCost;
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("add-cost").style.color = "black";
  }

function collectedOOP() {
  const addCost = document.getElementById("oop-cost");
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
   const miles = document.getElementById("miles").value;
   const weightClass = document.getElementById("vehicle-type").value;
  const client = document.getElementById("client").value;

  if (client === "1000"){
  profit = totalCollected - quote;
  profitMargin = profit.toFixed(2);
  oopCollectedNotes = `
  Vendor Cost = $${quote}<br>
  AAA Coverage = $1000 ($500 Per PO for RVs)<br>
  OOP Cost: ${oopCost}<br> `;
  document.getElementById("oop-notes").innerHTML = oopCollectedNotes;
  document.getElementById("aaa-disclaimer").style.display = "";
}
  if (client === "100-Mile" || "200-Mile")
    {
  profit = totalCollected - quote;
  profitMargin = profit.toFixed(2);
  oopCollectedNotes = `
  Vendor Cost = $${quote}<br>
  AAA Coverage = ${client} Coverage (${miles} Mile Tow)<br>
  Weight Class: ${weightClass}<br>
  OOP Cost: ${oopCost}<br>`;
  document.getElementById("oop-notes").innerHTML = oopCollectedNotes;
  document.getElementById("aaa-disclaimer").style.display = "";
  }
else {
  profit = totalCollected - quote;
  profitMargin = profit.toFixed(2);
  oopCollectedNotes = `
  Vendor Cost = $${quote}<br>
  AAA Coverage = $500 (Per PO for RVs)<br>
  OOP Cost: ${oopCost}`;
  document.getElementById("oop-notes").innerHTML = oopCollectedNotes;
  document.getElementById("aaa-disclaimer").style.display = "";
}
}

function overages() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  switch (client) {
    case "ars":
      getAdditionalFunds();
      break;
    case "500":
      getOOPFunds();
      break;
              case "1000":
      get2POFunds();
      break;
    case "100-Mile":
      get100MileOverage();
      break;
        case "200-Mile":
      get200MileOverage();
      break;
    case "other":
      addTotal = "0.00";
      oopCost = "0.00";
      document.getElementById("oop-cost").innerHTML = oopCost;
      document.getElementById("oop-cost").style.color = "black";
      document.getElementById("add-cost").innerHTML = addTotal;
      document.getElementById("add-cost").style.color = "black";
      dispatchDisclaimer = `If you are over TPG - Make sure you get quote approval from a Team Lead or Management.  If not, Make sure to verbally state your disclaimer and send it along with the email.<br><br>*Confirm all in cost, equipment and all logistics and properly notate the move. <br><br> 
      We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
      Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
      All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
      break;
  }
  totalOverTpg = quote - total;
  document.getElementById("over-tpg").innerHTML = totalOverTpg.toFixed(2);
  document.getElementById("dispatch-disc").innerHTML = dispatchDisclaimer;
  document.getElementById("dispatch-disc").style.color = "green";
}

function disclaimer() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  dispatchApproved = `We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
  Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
  All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.<br>
  Thank you!<br><br>**Make sure the vendor received the paperwork!<br>**Make sure to update the customer/client on ETA!<br>**Make sure to note any important details in the move!`;
  document.getElementById("ars-dispatch-approved").innerHTML = dispatchApproved;
}

function aaaDisclaimer() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  dispatchApproved = `We are dispatching this unit for tow for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>
  Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
  All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
  document.getElementById("aaa-dispatch-approved").innerHTML = dispatchApproved;
}

/*
function sendEmail() {
  const orderid = document.getElementById("orderid").value;
  const pupcity = document.getElementById("pucity").value;
  const pupstate = document.getElementById("pustate").value;
  const pupzip = document.getElementById("puzip").value;
  const delcity = document.getElementById("ducity").value;
  const delstate = document.getElementById("dustate").value;
  const delzip = document.getElementById("duzip").value;
  const payment = document.getElementById("payment").value;
  const availdate = document.getElementById("availdate").value;
  const ldate = document.getElementById("ldate").value;
  const veh = document.getElementById("veh").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "adrielgdev@gmail.com",
    Password: "CF847B36E8185E98BB184D1C63DD738B0DCA",
    To: "adriel.guallar@transitpros.com",
    From: "adrielgdev@gmail.com",
    Subject: "",
    Body: `UID(7uP58y56)*ADD*${orderid},${pupcity},${pupstate},${pupzip},${delcity},${delstate},${delzip},${payment},0.00,check,quickpay,none,open,operable,${availdate},${ldate},ladder rack and tools,||||${veh}*`
  }).then(
    message => alert(message)
  );
  ;
}
*/

function sendEmail() {
  const emailTo = 'cdupd-v4@centraldispatch.com'
const emailCC = 'leads@transitpros.com'
const emailSub = ''
  const orderid = document.getElementById("orderid").value;
  const pupcity = document.getElementById("pucity").value;
  const pupstate = document.getElementById("pustate").value;
  const pupzip = document.getElementById("puzip").value;
  const delcity = document.getElementById("ducity").value;
  const delstate = document.getElementById("dustate").value;
  const delzip = document.getElementById("duzip").value;
  const payment = document.getElementById("payment").value;
  const availdate = document.getElementById("availdate").value;
  const ldate = document.getElementById("ldate").value;
  const veh = document.getElementById("veh").value;
  const emailBody = `UID(7uP58y56)*ADD*${orderid},${pupcity},${pupstate},${pupzip},${delcity},${delstate},${delzip},${payment},0.00,check,quickpay,none,open,operable,${availdate},${ldate},ladder rack and hvac tools,||||${veh}*`;
  window.open(`mailto:${emailTo}?cc=${emailCC}&subject=${emailSub}&body=${emailBody}`, '_self');
;
}

