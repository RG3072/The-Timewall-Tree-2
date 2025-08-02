
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
            name: "15.mega R-G",
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
        34: {
            name: "18.small reset",
            done() {return player.tt.total.gte(1)}, 
            tooltip: "reach 1 triwall", 
            textStyle: {'color': '#EAFF7C'},
        },
        35: {
            name: "19.slow qol",
            done() {return player.tt.total.gte(5)}, 
            tooltip: "reach 5 triwall", 
            textStyle: {'color': '#EAFF7C'},
        },
        36: {
            name: "20.PresBoost",
            done() {return ccomp('bt',13).gte(10)}, 
            tooltip: "complete 2bt3 10 times.<br>R:'for c3' in T base +0.01.",
            textStyle: {'color': '#9DCB94'},
        },
        37: {
            name: "21.it's immense",
            done() {return player.points.gte(1e80)}, 
            tooltip: "reach 1e80 points.<br>R:keep tc1-2 and 2tc1/4 on triwall.",
            textStyle: {'color': '#E55846'},
        },
        41: {
            name: "22.2-scaling",
            done() {return ccomp('t',13).gte(25)}, 
            tooltip: "complete tc3 25 times.",
            textStyle: {'color': '#EAFF7C'},
        },
        42: {
            name: "23.skipped layer",
            done() {return player.points.gte(1e50)&&!player.bt.total.gte(1)}, 
            tooltip: "reach 1e50 points with no BT.<br>R:^1.01 TT.",
            textStyle: {'color': '#9DCB94'},
        },
        43: {
            name: "24.root^^",
            done() {return n(tmp.t.resetGain).gte(1e50)&&inc('bt',12)}, 
            tooltip: "reach 1e50 timewall gain in 2tc2.<br>R:wp exp +0.01.",
            textStyle: {'color': '#9DCB94'},
        },
        44: {
            name: "25.dim_2",
            done() {return player.ttmultiwp[0].gte(1e5)}, 
            tooltip: "reach 1e5 wp2.",
            textStyle: {'color': '#EAFF7C'},
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.ac.achievements.length + "/25 </h4>"
    }
    ], "blank", "blank", "achievements", ],
},
)
