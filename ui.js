/**
 * Created by EVA Unit 02 on 11/26/2016.
 */
webix.ui({
    rows: [
        { view:"template",
            type:"header", template:"GO-BACK-n ARQ Simulation by Jesus Ramos.  " },
        { cols:[
            {view:"form", elements:[
                { view:"slider", id:"windowSize", value:"5", min:1, max: 7, name:"windowSize", title:webix.template("Window Size: #value#")},
                { view:"slider", id:"timeout", step:1, value:"10", min:1, max: 30, name:"timeout", title:webix.template("Timeout: #value# seconds")},
                { view:"slider", id:"speed", step:0.5, value:"1.5", min:0.5, max: 2, name:"speed", title:webix.template("Speed: #value# px/sec")},
                { view:"button", id:"sendNewButton", click:"SendNewOnClick()", value:"Send New", width:100},
                { view:"button", id:"resetButton", value:"Reset Simulation", type:"form", click:"ResetCanvasOnClick()", width:500},
                {
                    view:"chart",
                    legend:{width:90, values:[{text:"Packet",color:"#ff0000"},
                        {text:"Acknowledged",color:"#FFFF00"},
                        {text:"Received", color:"#0000FF"}], align:"left"
                    }
                },
                { view:"label", label:" If it's being glitchy just hit reset simulation. If you are  "},
                { view:"label", label:"still having problems, or would like to point out some "},
                { view:"label", label:"obvious bug/flaw, email me at jaramos2409@gmail.com."}
            ], width:420, height: 525},
            { content:"simulation_window", id:"sim_canvas"}
        ]}
    ]
});

