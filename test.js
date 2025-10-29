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



//calculates ars rate per state & tpg 
function calculate() {
  const client = document.getElementById("client").value;
  const state = document.getElementById("state").value;
  const vehicleType = document.getElementById("vehicle-type").value;
  const serviceType = document.getElementById("service-type").value;


  if (serviceType === "winch") {
    switch (vehicleType) {
 case "ld":
        total = 150;
        break;
      case "md":
        total = 150;
        break;
      case "hd":
        total = 250;
        break;
      case "md-rv":
        total = 150;
        break;
      case "hd-rv":
       total = 250;
        break;
      case "diesel-pusher-rv":
     total = 250;
        break;
      case "semi-combination":
    total = 250;
        break;
      case "truck-or-trailer-only":
    total = 250;
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
  else {
    switch (vehicleType) {
      case "ld":
        total = 150;
        break;
      case "md":
        total = 150;
        break;
      case "hd":
        total = 150;
        break;
      case "md-rv":
        total = 150;
        break;
      case "hd-rv":
       total = 150;
        break;
      case "diesel-pusher-rv":
     total = 150;
        break;
      case "semi-combination":
    total = 150;
        break;
      case "truck-or-trailer-only":
    total = 150;
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
  const serv = document.getElementById("service-type").value;
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
    We are dispatching this unit for a ${serv} service for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
    Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> 
    All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;

  }
  document.getElementById("approved-funds").style.display = "";
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("oop-cost").innerHTML = oopCost;
}

//function for ars approved funds calculations and notes
function arsAddApproval() {
  const weightClass = document.getElementById("vehicle-type").value;
  const serv = document.getElementById("service-type").value;
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
  const serv = document.getElementById("service-type").value;
  const eta = document.getElementById("eta").value;
  let addTotal3 = 0;


  if (500 - quote < 125) {
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
    We are dispatching this unit for a ${serv} service for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>*Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
    Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> 
    All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
  }
  document.getElementById("oop-cost").innerHTML = oopCost;
  document.getElementById("add-cost").innerHTML = addTotal;
  document.getElementById("add-cost").style.color = "black";
}

function collectedOOP() {
  const addCost = document.getElementById("oop-cost");
  const serv = document.getElementById("service-type").value;
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  profit = totalCollected - quote;
  profitMargin = profit.toFixed(2);
  oopCollectedNotes = `
  Vendor Cost = $${quote}<br>
  AAA Coverage = $500 (only for RV legacy customers)<br>
  OOP Collected: ${oopCost}<br> 
  Total Billing: $${totalCollected.toFixed(2)}<br>
  Profit: $${profitMargin} ($150 + CC Fee of $${ccFee.toFixed(2)})`;
  document.getElementById("oop-notes").innerHTML = oopCollectedNotes;
  document.getElementById("aaa-disclaimer").style.display = "";
}

function overages() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const serv = document.getElementById("service-type").value;
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  switch (client) {
    case "ars":
      getAdditionalFunds();
      break;
    case "aaa":
      getOOPFunds();
      break;
    case "other":
      addTotal = "0.00";
      oopCost = "0.00";
      document.getElementById("oop-cost").innerHTML = oopCost;
      document.getElementById("oop-cost").style.color = "black";
      document.getElementById("add-cost").innerHTML = addTotal;
      document.getElementById("add-cost").style.color = "black";
      dispatchDisclaimer = `If you are over TPG - Make sure you get quote approval from a Team Lead or Management.  If not, Make sure to verbally state your disclaimer and send it along with the email.<br><br>*Confirm all in cost, equipment and all logistics and properly notate the move. <br><br> 
      We are dispatching this unit for a ${serv} service for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>*Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
      Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> 
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
  const serv = document.getElementById("service-type").value;
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  dispatchApproved = `We are dispatching this unit for a ${serv} service for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval. <br>*Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
  Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> 
  All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.<br>
  Thank you!<br><br>**Make sure the vendor received the paperwork!<br>**Make sure to update the customer/client on ETA!<br>**Make sure to note any important details in the move!`;
  document.getElementById("ars-dispatch-approved").innerHTML = dispatchApproved;
}

function aaaDisclaimer() {
  const quote = parseFloat(document.getElementById("quote").value).toFixed(2);
  const serv = document.getElementById("service-type").value;
  const client = document.getElementById("client").value;
  const eta = document.getElementById("eta").value;
  dispatchApproved = `We are dispatching this unit for a ${serv} service for $${quote} including all taxes and fees with an ETA of ${eta} minutes as discussed. If anything is other than described, additional services requested or any changes that would affect cost, please make sure to call 877-390-7673 for prior approval.<br> *Pre-approval is required for all requests - do NOT proceed with any additional services without Transit Pros authorization.  <br> 
  Please keep us updated should your ETA change for whatever reason so that we may keep our customer informed.  On delivery - please e-sign our invoice or submit an invoice to ersinvoice@transitpros.com for prompt payment processing.<br> 
  All GOA requests require notification while the driver is on scene along with photos submitted to ers@transitpros.com.`;
  document.getElementById("aaa-dispatch-approved").innerHTML = dispatchApproved;
}
