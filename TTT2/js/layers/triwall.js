addLayer("tt", {
    name: "tt",
    symbol: "T3", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: n(0),
    }},
    passiveGeneration(){
        let p=n(0)
        return p},
    color: "#CCFFE3",
    requires: n(Infinity), 
    resource: "Triwall", 
    baseResource: "Biwall", 
    baseAmount() {return player.bt.points}, 
    type: "normal", 
    exponent: n(0.2),
    gainExp() {
        let a=n(1)
        if(upg('bt',36)) a=a.add(0.01)
        return a
    },
    row: 3, 
    hotkeys: [
        {key: "c", description: "C:triwall", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (ch('bt',21)||player[this.layer].unlocked)},
    gainMult() {
        a=n(1)
        return a
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    branches: ['bt'],
    // doReset(layer){

    // },
    // tabFormat: [
    //     "main-display",
    //     "prestige-button",
    //     ["microtabs", "stuff"],
    //     ["blank", "25px"],
    // ],
    upgrades: {//unlocked() {return (upg(this.layer,11))},
 
    },
})
