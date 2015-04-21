var patientArray = [
    {roomID:101,name:"Pekka",ssn:"11111",telephone:"11111-11111", diagnosis:"Back Pain"},
    {roomID:102,name:"Lotta",ssn:"22222",telephone:"22222-22222",diagnosis:"High Fever"},
    {roomID:103,name:"Joni",ssn:"33333",telephone:"33333-33333",diagnosis:"Stomach Flu"},
    {roomID:104,name:"Roope",ssn:"44444",telephone:"44444-44444",diagnosis:"Knee Surgery"},
    {roomID:105,name:"Sari",ssn:"55555",telephone:"55555-55555",diagnosis:"Heart Attack"}
];
var patient = {roomID:0,name:"",ssn:""};
var roomID = 0;
var app = {
    /*
     Application constructor
     */

    initialize: function() {
        this.bindEvents();
        console.log("Starting NDEF Events app");
        app.showPatients();
    },
    /*
     bind any events that are required on startup to listeners:
     */
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    /*
     this runs when the device is ready for user interaction:
     */
    onDeviceReady: function() {

        nfc.addTagDiscoveredListener(
            app.onNonNdef,           // tag successfully scanned
            function (status) {      // listener successfully initialized
                //app.display("Listening for NFC tags.");
            },
            function (error) {       // listener fails to initialize
                app.display("NFC reader failed to initialize "
                + JSON.stringify(error));
            }
        );

        nfc.addNdefFormatableListener(
            app.onNonNdef,           // tag successfully scanned
            function (status) {      // listener successfully initialized
                //app.display("Listening for NDEF Formatable tags.");
            },
            function (error) {       // listener fails to initialize
                app.display("NFC reader failed to initialize "
                + JSON.stringify(error));
            }
        );

        nfc.addNdefListener(
            app.onNfc,               // tag successfully scanned
            function (status) {      // listener successfully initialized
                //app.display("Listening for NDEF messages.");
            },
            function (error) {       // listener fails to initialize
                app.display("NFC reader failed to initialize "
                + JSON.stringify(error));
            }
        );

        nfc.addMimeTypeListener(
            "text/plain",
            app.onNfc,               // tag successfully scanned
            function (status) {      // listener successfully initialized
                //app.display("Listening for plain text MIME Types.");
            },
            function (error) {       // listener fails to initialize
                app.display("NFC reader failed to initialize "
                + JSON.stringify(error));
            }
        );

        app.display("Tap a tag to read data.");
    },

    /*
     appends @message to the message div:
     */
    display: function(message) {
        var label = document.createTextNode(message),
            lineBreak = document.createElement("br");
        messageDiv.appendChild(lineBreak);         // add a line break
        messageDiv.appendChild(label);             // add the text
    },
    /*
     clears the message div:
     */
    clear: function() {
        messageDiv.innerHTML = "";
    },

    /*
     Process NDEF tag data from the nfcEvent
     */
    onNfc: function(nfcEvent) {
        app.clear();              // clear the message div
        // display the event type:
        //app.display(" Event Type: " + nfcEvent.type);
        app.showTag(nfcEvent.tag);   // display the tag details
    },

    /*
     Process non-NDEF tag data from the nfcEvent
     This includes
     * Non NDEF NFC Tags
     * NDEF Formatable Tags
     * Mifare Classic Tags on Nexus 4, Samsung S4
     (because Broadcom doesn't support Mifare Classic)
     */
    onNonNdef: function(nfcEvent) {
        app.clear();              // clear the message div
        // display the event type:
        //app.display("Event Type: " + nfcEvent.type);
        var tag = nfcEvent.tag;
        //app.display("Tag ID: " + nfc.bytesToHexString(tag.id));
        //app.display("Tech Types: ");
        for (var i = 0; i < tag.techTypes.length; i++) {
            //app.display("  * " + tag.techTypes[i]);
        }
    },

    /*
     writes @tag to the message div:
     */

    showTag: function(tag) {

        // if there is an NDEF message on the tag, display it:
        var thisMessage = tag.ndefMessage;
        if (thisMessage !== null) {


            // switch is part of the extended example
            var type =  nfc.bytesToString(thisMessage[0].type);

            //app.display("Message Contents: ");
            app.showMessage(thisMessage);
        }
    },
    /*
     iterates over the records in an NDEF message to display them:
     */
    showMessage: function(message) {
        for (var i=0; i < message.length; i++) {
            // get the next record in the message array:
            var record = message[i];
            app.showRecord(record);          // show it
        }
    },
    /*
     writes @record to the message div:
     */
    showRecord: function(record) {
        // display the TNF, Type, and ID:
        //app.display(" ");

        // if the payload is a Smart Poster, it's an NDEF message.
        // read it and display it (recursion is your friend here):
        if (nfc.bytesToString(record.type) === "Sp") {
            var ndefMessage = ndef.decodeMessage(record.payload);

            // if the payload's not a Smart Poster, display it:
        } else {
            var payload = nfc.bytesToString(record.payload);
            app.search(payload);

        }
    },

    showPatients: function() {
        var clearDiv = document.getElementById("content");
        clearDiv.innerHTML = "";
        var element = document.getElementById("content");
        element.innerHTML = "Patients";
        for(var i = 0; i < patientArray.length; i++){
            var el = document.createElement('div');
            el.innerHTML = "Patient:";
            el.innerHTML += patientArray[i].roomID + "<br>";
            el.innerHTML += patientArray[i].name + "<br>";            
            el.setAttribute("id","patient" + i);
            element.appendChild(el);
        }
        for(var i = 0; i < patientArray.length; i++){
            document.getElementById("patient" + i).onclick = function(){app.displayOnClick(this.getAttribute("id"))};
        }
        return;
    },
    displayOnClick: function(i){
        var clearDiv = document.getElementById("content");
        clearDiv.innerHTML = "";
        i = i.replace(/\D/g,'');
        i = parseInt(i, 10);
        var element = document.getElementById("content");
        var el = document.createElement('div');
        el.innerHTML = "Name: " + patientArray[i].name + "<br>";
        el.innerHTML += "Room#: " + patientArray[i].roomID + "<br>";
        el.innerHTML += "SSN#: " + patientArray[i].ssn + "<br>";
        el.innerHTML += "Telephone: " + patientArray[i].telephone + "<br>";
        el.innerHTML += "Diagnosis: " + patientArray[i].diagnosis;
        element.appendChild(el);
        app.drawButton();
    },

    search: function(payload){
        var clearDiv = document.getElementById("content");
        clearDiv.innerHTML = "";
        payload = payload.replace(/\D/g,'');
        payload = parseInt(payload, 10);

        for (i = 0; i < patientArray.length; i++) {
            if (payload === patientArray[i].roomID)
            {
                var element = document.getElementById("content");
                var el = document.createElement('div');
                el.innerHTML = "Name: " + patientArray[i].name + "<br>";
                el.innerHTML += "Room#: " + patientArray[i].roomID + "<br>";
                el.innerHTML += "SSN#: " + patientArray[i].ssn + "<br>";
                el.innerHTML += "Telephone: " + patientArray[i].telephone + "<br>";
                el.innerHTML += "Diagnosis: " + patientArray[i].diagnosis;
                element.appendChild(el);
                app.drawButton();
                break;
            }
            if (i == patientArray.length -1){
                app.display("No Match Found");
            }
        }
    },
    
    drawButton: function(){
        var element = document.getElementById("content");
        var button = document.createElement('div');
        button.setAttribute("id", "button");
        button.innerHTML = "Back";
        button.onclick = function(){app.showPatients()};
        element.appendChild(button);
    }
};     // end of app
