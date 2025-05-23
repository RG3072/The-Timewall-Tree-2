
// A side layer with achievements, with no prestige
addLayer("ac", {
    startData() { return {
        unlocked: true,
        //points: n(0),
    }},
    color: "yellow",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "1.start the walls",
            done() {return player.t.total.gte(1)}, 
            tooltip: "get 1 Timewall", 
            textStyle: {'color': '#EAFF7C'},
        },
        12: {
            name: "2.long time later",
            done() {return player.points.gte(1000)}, 
            tooltip: "get 1000 points.<br>R:x1.5 timewall.", 
            textStyle: {'color': '#9DCB94'},
        },
        13: {
            name: "3.a little to pts",
            done() {return gba('t',11).gte(10)}, 
            tooltip: "get 10 tb1", 
            textStyle: {'color': '#EAFF7C'},
        },
        14: {
            name: "4.wall for wall",
            done() {return gba('t',12).gte(4)}, 
            tooltip: "get 4 tb2.<br>R:tb2 is cheaper.", 
            textStyle: {'color': '#9DCB94'},
        },
        15: {
            name: "5.lg(inf)",
            done() {return getPointGen().gte(308.25)}, 
            tooltip: "reach 308.25 points/sec.<br>R:unlock next challenge.", 
            textStyle: {'color': '#9DCB94'},
        },
        16: {
            name: "6.slow passive..",
            done() {return n(tmp.t.resetGain).mul(tmp.t.passiveGeneration).gte(5)}, 
            tooltip: "reach 5 timewall/sec.<br>R:unlock more upg.",
            textStyle: {'color': '#9DCB94'},
        },
        17: {
            name: "7.stick?",
            done() {return n(tmp.t.resetGain).mul(tmp.t.passiveGeneration).gte(100)}, 
            tooltip: "reach 100 timewall/sec.<br>R:keep challenges on biwall reset.",
            textStyle: {'color': '#E55846'},
        },
        21: {
            name: "8.tiny reset",
            done() {return player.bt.total.gte(1)}, 
            tooltip: "get 1 Biwall", 
            textStyle: {'color': '#EAFF7C'},
        },
        22: {
            name: "9.buyable^2",
            done() {return upg('bt',14)}, 
            tooltip: "unlock bt buyable", 
            textStyle: {'color': '#EAFF7C'},
        },
        23: {
            name: "10.1 for 2!",
            done() {return n(tmp.bt.resetGain).gte(2)}, 
            tooltip: "get 2 biwall in a reset.<br>R:x1.5 biwall.",
            textStyle: {'color': '#9DCB94'},
        },
        24: {
            name: "11.it's like the AST",
            done() {return gba('t',11).gte(30)}, 
            tooltip: "reach a buyable's scaling", 
            textStyle: {'color': '#EAFF7C'},
        },
        25: {
            name: "12.it's faster!",
            done() {return player.points.gte(1e15)}, 
            tooltip: "reach 1e15 points", 
            textStyle: {'color': '#EAFF7C'},
        },
        26: {
            name: "13.walled world",
            done() {return n(tmp.t.resetGain).mul(tmp.t.passiveGeneration).gte(1e12)}, 
            tooltip: "reach 1e12 timewall/sec.<br>R:unlock more timewall/biwall upg.",
            textStyle: {'color': '#9DCB94'},
        },
        27: {
            name: "14.where's the passive?",
            done() {return ccomp('bt',13).gte(1)}, 
            tooltip: "complete a 2bt3.<br>R:t-pas is stronger.",
            textStyle: {'color': '#E55846'},
        },
        31: {
            name: "15.mega reset",
            done() {return player.bt.points.gte(1e6)}, 
            tooltip: "reach 1e6 biwall", 
            textStyle: {'color': '#EAFF7C'},
        },
        32: {
            name: "16.crushed",
            done() {return ccomp('t',13).gte(10)}, 
            tooltip: "complete tc3 10 times.",
            textStyle: {'color': '#EAFF7C'},
        },
        33: {
            name: "17.downgrade again",
            done() {return ccomp('bt',21).gte(1)}, 
            tooltip: "complete 2bt4.<br>R:t-p/p-t base x1.01.",
            textStyle: {'color': '#9DCB94'},
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.ac.achievements.length + "/10 </h4>"
    }
    ], "blank", "blank", "achievements", ],
},
)
