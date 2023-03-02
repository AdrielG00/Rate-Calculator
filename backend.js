let total = 0;
let arsTotal = 0;
let addTotal = 0;
let dispatch = 0;
let oopCost = 0;
let wasArsApproved = "yes";

//calculates ars rate per state & tpg 
function calculate() {
  const client = document.getElementById("client").value;
  const state = document.getElementById("state").value;
  const vehicleType = document.getElementById("vehicle-type").value;
  const miles = parseInt(document.getElementById("miles").value);
  const quote = parseInt(document.getElementById("quote").value);
  const eta = parseInt(document.getElementById("eta").value);
  let addTotal = 0;
  let oopCost = 0;

  if (client === "ars") {
    switch (vehicleType) {
      case "ld":
        total = miles * 3 + 50;
        arsTotal = "**No LD for ARS**";
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
          arsTotal = miles * 8.25 + 605;
        }
        if (state === "TX") {
          arsTotal = miles * 8.25 + 425; //FINISH DIESEL PUSHERS!!!!
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
        total = miles * 7 + 350;
        break;
      case "semi-combination": //fix this as well
        total = miles * 7.5 + 250;
        break;
      case "truck-or-trailer-only": // finish this as well
        total = miles * 5.5 + 150;
        break;
      default:
        break;
    }
    localStorage.setItem("tpg", total);
    localStorage.setItem("arsTotal", arsTotal);
    dispatch = `Dispatching<br>
          	Make the initial offer & negotiate!<br>
          	"The job pays $${total}, how soon can you get there?"<br>
          	"How close to $${total} can we get on this one?"<br>
          	"Will $${total} get this job done?"`;
            vendorHelp = `Vendor Tips<br>
    If a vendor cannot help, ask who they recommend to help.<br>
    If the delivery is a shop - call the shop for a vendor recommendation<br>
    Utilize resources if unable to locate a vendor from TP list - geo code, google, NTTS<br>
    Check with your team lead for recommendations`;
    document.getElementById("vendor-tips").innerHTML = vendorHelp;
    document.getElementById("negotiate").innerHTML = dispatch;
    document.getElementById("total-cost").innerHTML = total;
    document.getElementById("ars-rate").innerHTML = arsTotal;
    document.getElementById("add-cost").innerHTML = addTotal;
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
    localStorage.setItem("total", total);
    dispatch = `Dispatching<br>
          	Make the initial offer & negotiate!<br>
          	"The job pays $${total}, how soon can we have this done?"<br>
          	"How close to $${total} can we get on this one?"<br>
          	"Will $${total} get this job done?"`;
    vendorHelp = `Vendor Tips<br>
    If a vendor cannot help, ask who they recommend to help.<br>
    If the delivery is a shop - call the shop for a vendor recommendation<br>
    Utilize resources if unable to locate a vendor from TP list - geo code, google, NTTS<br>
    Check with your team lead for recommendations`;
    document.getElementById("new-ars-rate").innerHTML = vendorHelp;
    document.getElementById("negotiate").innerHTML = dispatch;
    document.getElementById("total-cost").innerHTML = total;
    document.getElementById("ars-rate").innerHTML = "0.00";
  }
}

//function to calculate additional funds from ARS if needed - button for ars approval
function getAdditionalFunds() {
  const quote = parseInt(document.getElementById("quote").value);
  const eta = document.getElementById("eta").value;
  let addTotal2 = 0;


  if (arsTotal - quote < 150) {
    document.getElementById("add-cost").style.color = "red";
    addTotal2 = quote - arsTotal + 150;
    addTotal = `$${addTotal2}`;
    localStorage.setItem("arsAdd", addTotal);
    oopCost = "0.00";
    localStorage.removeItem("aaaoop");
    document.getElementById("oop-cost").style.color = "black";
    totalOverTpg = quote - total;
    document.getElementById("over-tpg").innerHTML = totalOverTpg;
  }
  else {
    totalOverTpg = quote - total;
    document.getElementById("over-tpg").innerHTML = totalOverTpg;
    oopCost = "0.00";
    document.getElementById("oop-cost").style.color = "black";
    localStorage.removeItem("aaaoop");
    document.getElementById("add-cost").style.color = "green";
    addTotal = `No Additional Funds needed - Proceed with dispatch.  Make sure to send your dispatch disclaimer along with the email. <br><br> We are dispatching this unit for tow for $${quote} all in with a ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed. On delivery, send your invoice to ersinvoices@transitpros.com for payment. Thank you!`;
    arsApproval = `<label for="vehicle-type">Vehicle Type:</label>
    <select id="vehicle-type">`
  }

  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("oop-cost").innerHTML = oopCost;

}

//function for ars approved funds calculations and notes
function arsAddApproval() {
  newArsRate = arsTotal + addTotal2;
  arsAddNotes = `Contracted Rate: ${arsTotal}<br>
  Weight Class = ${weightClass}<br>
  Overage Requested: ${addTotal}<br>
  Total Client Quote: ${newArsRate}<br>
  Approved By:`;
  document.getElementById("new-ars-rate").innerHTML = arsAddNotes;
}


//function to calculate AAA OOP and reset ARS data - button for aaa approval
function getOOPFunds() {
  const quote = parseInt(document.getElementById("quote").value);
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  let addTotal3 = 0;
  let oopCost = 0;


  if (500 - quote < 125) {
    document.getElementById("oop-cost").style.color = "red";
    addCost = quote - 500 + 150;
    ccFee = addCost * .035;
    addTotal3 = addCost + ccFee;
    oopCost = `$` + `${addTotal3}`;
    localStorage.setItem("aaaoop", oopCost);
    addTotal = "0.00";
    localStorage.removeItem("arsTotal");
    document.getElementById("add-cost").style.color = "black";
    totalOverTpg = quote - total;
    document.getElementById("over-tpg").innerHTML = totalOverTpg;

  }
  else {
    totalOverTpg = quote - total;
    document.getElementById("over-tpg").innerHTML = totalOverTpg;
    addTotal = "0.00";
    localStorage.removeItem("arsAdd");
    document.getElementById("add-cost").style.color = "black";
    localStorage.setItem("aaaoop", "0.00");
    document.getElementById("oop-cost").style.color = "green";
    oopCost = `No OOP Costs - Proceed with dispatch.  Make sure to send your dispatch disclaimer along with the email. <br><br> We are dispatching this unit for tow for $${quote} all in with a ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed. On delivery, send your invoice to ersinvoices@transitpros.com for payment. Thank you!`;
  }

  document.getElementById("over-tpg").innerHTML = totalOverTpg;
  document.getElementById("oop-cost").innerHTML = oopCost;
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("add-cost").style.color = "black";
}

//function for reset button
function reset() {
  localStorage.clear();
  document.getElementById("oop-cost").innerHTML = "0.00";
  document.getElementById("over-tpg").innerHTML = "0.00";
  document.getElementById("add-cost").innerHTML = "0.00";
  document.getElementById("ars-rate").innerHTML = "0.00";
  document.getElementById("total-cost").innerHTML = "0.00";
  document.getElementById("negotiate").innerHTML = "";
  document.getElementById("vendor-tips").innerHTML = "";
  var elements = document.getElementsByTagName("input");
  document.getElementById("oop-cost").style.color = "black";
  document.getElementById("add-cost").style.color = "black";
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = "";

  }
}
