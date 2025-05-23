addLayer("bt", {
    name: "bt",
    symbol: "T2", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: n(0),
    }},
    passiveGeneration(){
        let p=n(0)
        if(upg('bt',35)) p=uef('bt',35)
        return p},
    color: "#D1FF76",
    requires: n(1e4), 
    resource: "Biwall", 
    baseResource: "Timewall", 
    baseAmount() {return player.t.points}, 
    type: "normal", 
    exponent: n(0.3),
    gainExp() {
        let a=n(1)
        if(upg('bt',36)) a=a.add(0.01)
        return a
    },
    row: 2, 
    hotkeys: [
        {key: "b", description: "B:biwall", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (upg('t',36)||player[this.layer].unlocked)},
    gainMult() {
        a=n(1)
        if(ac('ac',23)) a=a.mul(1.5)
        if(upg('bt',24)&&!inc('bt',21)) a=a.mul(uef('bt',24))
        if(ch('bt',12)) a=a.mul(cef('bt',12))
        return a
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    branches: ['t'],
    // doReset(layer){

    // },
    // tabFormat: [
    //     "main-display",
    //     "prestige-button",
    //     ["microtabs", "stuff"],
    //     ["blank", "25px"],
    // ],
    upgrades: {//unlocked() {return (upg(this.layer,11))},
        11: {
            title:'2t11',
            description: "2x points.",
            cost:n(1),
        },
        12: {
            title:'2t12',
            description: "1.5x timewall.",
            cost:n(1),  
        },
        13: {
            title:'2t13',
            description: "2x timewall passive.",
            cost:n(1),
        },
        14: {
            title:'2t14',
            description: "unlock a buyable.",
            cost:n(2), 
            unlocked() {return (upg(this.layer,11)&&upg(this.layer,12)&&upg(this.layer,13))},
        },
        15: {
            title:'2t15',
            description: "unlock another buyable.",
            cost:n(2), 
            unlocked() {return (upg(this.layer,14))},
        },
        16: {
            title:'2t16',
            description: "No QoL?!<br>unlock a challenge.",
            cost:n(3), 
            unlocked() {return (upg(this.layer,14))},
        },
        21: {
            title:'2t21',
            description: "biwall boost points.",
            cost:n(5),
            effect()  { 
                let ef=player.bt.points.add(1).pow(0.8)
                if(upg('bt',26)) ef=player.bt.total.add(1).pow(0.8)              
                return ef;          
            },
            unlocked() {return (ch(this.layer,11))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        22: {
            title:'2t22',
            description: "biwall boost timewall.",
            cost:n(10),
            effect()  { 
                let ef=player.bt.points.add(1).pow(0.3)                
                if(upg('bt',26)) ef=player.bt.total.add(1).pow(0.3)              
                return ef;          
            },
            unlocked() {return (upg(this.layer,21))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        23: {
            title:'2t23',
            description: "seems faster.<br>unlock a challenge.",
            cost:n(10),
            unlocked() {return (upg(this.layer,22))},
        },
        24: {
            title:'2t24',
            description: "ln(biwall) boost biwall",
            cost:n(200),
            effect()  { 
                let ef=player.bt.points.add(10).log(10).div(10).add(0.9)
                if(upg('bt',32)) ef=player.bt.total.add(10).log(10).div(5).add(0.8).pow(1.1)                  
                if(upg('t',41)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() {return (upg(this.layer,23))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        25: {
            title:'2t25',
            description: "boost tc3 eff",
            cost:n(300),
            unlocked() {return (upg(this.layer,24))},
        },
        26: {
            title:'2t26',
            description: "2t21/22 based on total biwall",
            cost:n(400),
            unlocked() {return (upg(this.layer,25))},
        },
        31: {
            title:'2t31',
            description: "unlock a challenge.",
            cost:n(1000),
            unlocked() {return (upg(this.layer,26))},
        },
        32: {
            title:'2t32',
            description: "2t25 based on total biwall and buff it.",
            cost:n(5000),
            unlocked() {return (ac('ac',26))},
        },
        33: {
            title:'2t33',
            description: "unlock a challenge.",
            cost:n(1e4),
            unlocked() {return (upg(this.layer,32))},
        },
        34: {
            title:'2t34',
            description: "chals are hard.<br>t-pas exp +0.01 and unlock a buyable.",
            cost:n(2.5e5),
            unlocked() {return (upg(this.layer,33))},
        },
        35: {
            title:'2t35',
            description: "gain biwall passively based on points.",
            cost:n(1e7),
            effect()  { 
                let ef=player.points.add(10).log(10).pow(0.66).div(4096)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() {return (upg(this.layer,34))},
        },
        36: {
            title:'2t36',
            description: "^1.01 biwall and unlock a challenge.",
            cost:n(3e10),
            unlocked() {return (upg(this.layer,35))},
        },
    },
    buyables:{
        11: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(30)) s='sc|'
                s=s+'t-pb'
                return s
            },
            cost(x) { 
                let c=n(10).pow(x.div(6)).mul(1000)
                if(x.gte(30)) c=n(10).pow(x.div(7.5).pow(1.55))
                return c
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())//if (!mil('B',0)) 
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)
                return b},
            effect(x) { 
                let e=n(0.98)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "t-p base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " points \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect()) + "" },
            unlocked() { return upg('bt',14) }
        },
        12: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(20)) s='sc|'
                s=s+'p-tb'
                return s
            },
            cost(x) { 
                let c=n(10).pow(x.div(3.5)).mul(1000)
                if(x.gte(20)) c=n(10).pow(x.div(6).pow(1.66))
                return c
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())//if (!mil('B',0)) 
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)
                return b},
            effect(x) { 
                let e=n(0.98)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "p-t base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " points \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect()) + "" },
            unlocked() { return upg('bt',15) }
        },
        13: {
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(20)) s='sc|'
                s=s+'for c2'
                return s
            },
            cost(x) { 
                let c=n(2).pow(x.pow(1.2)).mul(1e4)
                return c
            },
            canAfford() { return player.bt.points.gte(this.cost()) },
            buy() {
                player.bt.points=player.bt.points.sub(this.cost())//if (!mil('B',0)) 
                setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)
                return b},
            effect(x) { 
                let ef=this.base().mul(x)
                return ef},
            display() { 
                return "2tc2 nerf exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " biwall \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect()) + "" },
            unlocked() { return upg('bt',34) }
        },
    },
    challenges: {
        11: {
            name: "2tc1",
            completionLimit: 1,
            challengeDescription() {return "just wall.<br>points and timewall /5."},
            unlocked() { return (upg('bt',16))},
            goalDescription: '4096 timewall',
            canComplete() {return player.t.points.gte(4096)},
            rewardDescription: "x2 timewall and keep upgrades on biwall reset.",
        },
        12: {
            name: "2tc2",
            completionLimit: 20,
            challengeDescription() {return "just wall?<br>points and timewall ^0.2.<br>comps:"+format(ccomp(this.layer,this.id))+'/20'},
            unlocked() { return (upg('bt',31))},
            goalDescription:  function() {return format(this.goal())+' timewall'},
            goal(){
                let ef=n(10).pow(ccomp(this.layer,this.id).pow(1.05).div(3.5)).mul(1000)
                return ef
            },  
            exp(){
                let e=n(0.2)
                if(upg('bt',34)) e=e.add(bef('bt',13))
                return e
            }, 
            canComplete() {return player.t.points.gte(this.goal())},
            rewardDescription: "comps boost biwall.",
            rewardEffect() {
                let b=ccomp(this.layer,this.id).pow(0.98)
                let ef=n(1.1).pow(b)
                return ef
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        13: {
            name: function(){
                let s=''
                if(ccomp(this.layer,this.id).gte(5)) s='sc|'
                s=s+'2tc3'
                return s
            },
            completionLimit: 20,
            challengeDescription() {return "just wall!<br>disable timewall passive.<br>comps:"+format(ccomp(this.layer,this.id))+'/20'},
            unlocked() { return (upg('bt',33))},
            goalDescription:  function() {return format(this.goal())+' timewall'},
            goal(){
                let ef=n(10).pow(ccomp(this.layer,this.id).pow(1.2).div(1.25).add(15))
                if(ccomp(this.layer,this.id).gte(5)) ef=n(10).pow(ccomp(this.layer,this.id).pow(1.35).add(15))
                return ef
            },   
            canComplete() {return player.t.points.gte(this.goal())},
            rewardDescription: "comps boost timewall passive.",
            rewardEffect() {
                let ef=ccomp(this.layer,this.id).pow(1.2).div(4).add(1)
                return ef
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        21: {
            name: "2tc4",
            completionLimit: 1,
            challengeDescription() {return "it's time for next wall.<br>disable 2t21/22/24 and biwall buyables."},
            unlocked() { return (upg('bt',36))},
            goalDescription: '123456789 timewall',
            canComplete() {return player.t.points.gte(123456789)},
            rewardDescription: "unlock the next layer.",
        },
    }
})
