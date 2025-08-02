addLayer("t", {
    name: "t",
    symbol: "T", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: n(0),
    }},
    passiveGeneration(){
        let p=n(0)
        if(upg('t',32)) p=n(0.01)
        if(ch('t',12)&&!inc('t',13)) p=p.mul(bef('t',13))
        if(upg('bt',13)) p=p.mul(2)
        if(ch('bt',13)) p=p.mul(cef('bt',13))
        if(mil('tt',1)) p=p.mul(2)
        if(inc('bt',13)) p=n(0)
        return p},
    color: "#4BDC13",
    requires: n(10), 
    resource: "Timewall", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: n(0.2),
    gainExp() {
        let a=n(1)
        if(inc('t',12)) a=a.add(0.02)
        return a
    },
    row: 1, 
    hotkeys: [
        {key: "a", description: "A:timewall", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    gainMult() {
        a=n(1)
        if(ac('ac',12)) a=a.mul(1.5)
        if(upg('t',21)) a=a.mul(2)
        if(upg('t',22)) a=a.mul(2)
        if(ch('t',11)) a=a.mul(2)
        if(ch('bt',11)) a=a.mul(2)
        if(upg('t',36)) a=a.mul(2)
        if(upg('bt',12)) a=a.mul(1.5)
        if(upg('t',32)&&!inc('t',13)) a=a.mul(bef('t',12))
        if(upg('bt',22)&&!inc('bt',21)) a=a.mul(uef('bt',22))
        if(inc('bt',11)) a=a.mul(0.2).add(0.8)
        if(ch('t',13)) a=a.mul(cef('t',13))
        if(mil('tt',1)) a=a.mul(2)        
        if(mil('tt',8)) a=a.mul(10)        
        if(upg('tt',61)) a=a.mul(10)
        if(inc('bt',12)) a=a.pow(tmp.bt.challenges[12].exp)
        return a
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    doReset(layer){
        if (layer=='bt') {        
            let keep=[]
            if(ac('ac',17)) keep.push('challenges')
            if(ch('bt',11)) keep.push('upgrades')
            layerDataReset(this.layer,keep)}
        if (layer=='tt') {        
            let keep=[]            
            if(mil('tt',7)) keep.push('upgrades')            
            layerDataReset(this.layer,keep)
            if(ac('ac',37)) player.t.challenges[11]=1,player.t.challenges[12]=1
            if(upg('tt',42)) player.t.challenges[13]=10
            if(upg('tt',51)) player.t.challenges[13]=25
            if(mil('tt',10)) player.t.challenges[13]=player.t.challenges[13].min(bef('tt',13).add(25))
        }
    },   
    autoUpgrade() {return (mil('tt',4))},//&&!gcs('?',145)
    // microtabs: {
    //     stuff: {       
    //         "Upgrades": {
    //             unlocked() {return true},
    //             content: [ "upgrades"]}, 
    //         "Challenges": {
    //             unlocked() {return (upg("B", 25))},
    //             content: ["challenges"]    },
    //     }
    // },
    // tabFormat: [
    //     "main-display",
    //     "prestige-button",
    //     ["microtabs", "stuff"],
    //     ["blank", "25px"],
    // ],
    upgrades: {
        11: {
            title:'t11',
            description: "start the walls.",
            cost:n(0),
        },
        12: {
            title:'t12',
            description: "1.1x points.",
            cost:n(1),
            unlocked() {return (upg(this.layer,11))},
        },
        13: {
            title:'t13',
            description: "1.2x points.",
            cost:n(2),
            unlocked() {return (upg(this.layer,12))},
        },
        14: {
            title:'t14',
            description: "1.3x points.",
            cost:n(4),
            unlocked() {return (upg(this.layer,13))},
        },
        15: {
            title:'t15',
            description: "1.5x points.",
            cost:n(8),
            unlocked() {return (upg(this.layer,14))},
        },
        16: {
            title:'t16',
            description: "it's boring!<br>unlock a buyable.",
            cost:n(10),
            unlocked() {return (upg(this.layer,15))},
        },
        21: {
            title:'t21',
            description: "2x timewall.",
            cost:n(20),
            unlocked() {return (gba('t',11).gte(6))},
        },
        22: {
            title:'t22',
            description: "2x timewall.",
            cost:n(40),
            unlocked() {return (upg(this.layer,21))},
        },
        23: {
            title:'t23',
            description: "upgrades boost points.",
            cost:n(100),
            effect()  { 
                let ef=n(player.t.upgrades.length).div(20).add(1).pow(2)
                return ef;          
            },
            unlocked() {return (upg(this.layer,22))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        24: {
            title:'t24',
            description: "^1.01 points.",
            cost:n(150),
            unlocked() {return (upg(this.layer,23))},
        },
        25: {
            title:'t25',
            description: "ln(points) boost points.",
            cost:n(200),
            effect()  { 
                let ef=player.points.add(10).log(10).div(5).add(0.8)
                if(upg('t',36)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() {return (upg(this.layer,24))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        26: {
            title:'t26',
            description: "it's still boring.<br>unlock a challenge.",
            cost:n(300),
            unlocked() {return (upg(this.layer,25))},
        },
        31: {
            title:'t31',
            description: "^1.01 points again.",
            cost:n(600),
            unlocked() {return (ch(this.layer,11))},
        },
        32: {
            title:'t32',
            description: "gain 1% timewall per sec.",
            cost:n(800),
            unlocked() {return (upg(this.layer,31))},
        },
        33: {
            title:'t33',
            description: "unlock next buyable.",
            cost:n(1000),
            unlocked() {return (upg(this.layer,32))},
        },
        34: {
            title:'t34',
            description: "ln(t) boost timewall.",
            cost:n(1500),
            effect()  { 
                let ef=player.t.points.add(10).log(10).div(5).add(0.8)
                if(upg('t',35)) ef=player.t.total.add(10).log(10).div(5).add(0.8)               
                if(upg('t',36)) ef=ef.pow(1.25)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() {return (gba('t',12).gte(3))},
        },
        35: {
            title:'t35',
            description: "t34 based on total timewall.",
            cost:n(2000),
            unlocked() {return (ac('ac',16))},
        },
        36: {
            title:'t36',
            description: "t25/t34 ^1.25.and x2 timewall again.",
            cost:n(3000),
            unlocked() {return (upg(this.layer,35))},
        },
        41: {
            title:'t41',
            description: "2t24 ^1.25.",
            cost:n(1e14),
            unlocked() {return (ac('ac',26))},
        },
        42: {
            title:'t42',
            description: "t-p amt boost biwall.",
            cost:n(1e15),
            effect()  { 
                let ef=n(1.01).pow(gba('t',11))
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() {return (upg(this.layer,41))},
        },
        43: {
            title:'t43',
            description: "p-t amt boost biwall.",
            cost:n(5e16),
            effect()  { 
                let ef=n(1.01).pow(gba('t',12))
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() {return (upg(this.layer,42))},
        },
        44: {
            title:'t44',
            description: "timewall boost points.",
            cost:n(2e19),
            effect()  { 
                let ef=player.t.total.pow(0.08)
                if(upg('t',46)) ef=player.t.total.pow(0.1)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() {return (upg(this.layer,43))},
        },
        45: {
            title:'t45',
            description: "unlock a buyable.",
            cost:n(1e23),
            unlocked() {return (upg(this.layer,44))},
        },
        46: {
            title:'t46',
            description: "t44 exp +0.02.",
            cost:n(2e32),
            unlocked() {return (upg(this.layer,45))},
        },
    },
    automate(){
        if (mil('tt',1)) buyBuyable('t',13)
        if (mil('tt',2)) buyBuyable('t',11)
        if (mil('tt',3)) buyBuyable('t',12)        
        if (mil('tt',6)) buyBuyable('t',14)
    },
    buyables:{
        11: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(30)) s='sc|'
                if(gba(this.layer,this.id).gte(100)) s='sc2|'
                s=s+'t-p'
                return s
            },
            cost(x) { 
                let c=n(2).pow(x.div(2))
                if(x.gte(30)) c=n(10).pow(x.div(5).pow(1.3).div(2))
                if(x.gte(100)) c=n(10).pow(x.sub(50).div(2).pow(1.67).div(9))
                return c
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!mil('tt',3)) player[this.layer].points = player[this.layer].points.sub(this.cost()) 
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            bulk() { 
                let t=gba(this.layer,this.id)
                if(upg('tt',54)) t=player.t.points.max(1).log10().mul(9).pow(1/1.67).mul(2).add(49).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player.t.points.gte(c)) sba(this.layer,this.id,t)},
            base(){   let b=n(1.1)
                if(mil('tt',2)) b=b.add(0.01)                
                if(upg('tt',21)) b=b.add(0.01)
                if(upg('bt',14)&&!inc('bt',21)) b=b.add(bef('bt',11))
                if(upg('tt',63)) b=b.add(uef('tt',63))
                if(ac('ac',33)) b=b.mul(1.01)
                return b},
            effect(x) { 
                let e=n(1)
                if(inc('t',12)) e=n(0.5)
                let ef=this.base().pow(x.pow(e))
                if(upg('tt',55)) ef=this.base().pow(x.add(tmp.tt.mwpef[0]).pow(e))
                return ef},
            display() { 
                return "points gain x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " timewall \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + "" },
            unlocked() { return upg('t',16) }
        },
        12: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(15)) s='sc|'                
                if(gba(this.layer,this.id).gte(40)) s='sc2|'
                s=s+'p-t'
                return s
            },
            cost(x) { 
                let c=n(3.2).pow(x).mul(1000)
                if(ac('ac',14)) c=n(2.5).pow(x).mul(1000)
                if(x.gte(15)) c=n(10).pow(x.div(2.5).pow(1.55).div(2))
                if(x.gte(40)) c=n(10).pow(x.pow(1.92).div(30))
                return c
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                if(!mil('tt',3)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            bulk() { 
                let t=gba(this.layer,this.id)
                if(upg('tt',54)) t=player.points.max(1).log10().mul(30).pow(25/48).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player.points.gte(c)) sba(this.layer,this.id,t)},
            base(){   let b=n(1.1)               
                if(mil('tt',3)) b=b.add(0.01)
                if(upg('tt',22)) b=b.add(0.01)
                if(upg('bt',15)&&!inc('bt',21)) b=b.add(bef('bt',12))
                if(ac('ac',33)) b=b.mul(1.01)
                return b},
            effect(x) { 
                let ef=this.base().pow(x)
                if(upg('tt',55)) ef=this.base().pow(x.add(tmp.tt.mwpef[0]))
                return ef},
            display() { 
                return "timewall gain x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " points \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + "" },
            unlocked() { return upg('t',33) }
        },
        13: {
            title: "t-pas", 
            cost(x) { 
                let c=n(10).pow(x.div(5)).mul(100)
                return c
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!mil('tt',1)) player[this.layer].points=player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer,this.id,gba(this.layer,this.id).add(1))},
            bulk() { 
                let t=gba(this.layer,this.id)
                if(upg('tt',52)) t=player.t.points.div(100).max(1).log10().mul(5).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player.t.points.gte(c)) sba(this.layer,this.id,t)},
            effect(x) { 
                let e=n(0.95)
                if(ac('ac',27)) e=n(1.01)
                if(upg('bt',34)) e=e.add(0.01)
                let ef=x.pow(e).add(1)
                if(upg('tt',23)) ef=ef.mul(n(1.01).pow(gba(this.layer,this.id)))
                return ef},
            display() { 
                return "timewall passive mul +1 \n\
                Cost: " + format(this.cost()) + " timewall \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + "" },
            unlocked() { return ch('t',12) }
        },
        14: {
            title: "for c3", 
            cost(x) { 
                let c=n(10).pow(x.pow(1.05).add(18))
                return c
            },
            canAfford() {return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!mil('tt',6)) player[this.layer].points=player[this.layer].points.sub(this.cost()) 
                setBuyableAmount(this.layer,this.id,gba(this.layer, this.id).add(1))},
            bulk() { 
                let t=gba(this.layer,this.id)
                if(upg('tt',52)) t=player.t.points.max(1).log10().sub(18).pow(20/21).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player.t.points.gte(c)) sba(this.layer,this.id,t)},
            base(){   let b=n(1.05)
                if(ac('ac',36)) b=b.add(0.01)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "points in tc3 x" + format(this.base()) + "\n\
                Cost: " + format(this.cost()) + " timewall \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + "" },
            unlocked() { return upg('t',45) }
        },
    },
    challenges: {
        11: {
            name: "tc1",
            completionLimit: 1,
            challengeDescription() {return "the first is simple.<br>points is sqrted."},
            unlocked() { return (upg('t',26))},
            goalDescription: '666 points',
            canComplete() {return player.points.gte(666)},
            rewardDescription: "x2 points and timewall.",
        },
        12: {
            name: "tc2",
            completionLimit: 1,
            challengeDescription() {return "tb1 eff amt is sqrted and disable t12-15."},
            unlocked() { return (ac('ac',15))},
            goalDescription: '2025 points',
            canComplete() {return player.points.gte(2025)},
            rewardDescription: "timewall exp +0.02 and unlock a buyable.",
        },
        13: {
            name: function(){
                let s=''
                if(ccomp(this.layer,this.id).gte(10)) s='sc|'                
                if(ccomp(this.layer,this.id).gte(25)) s='sc2|'
                s=s+'tc3'
                return s
            },
            completionLimit: 100,
            challengeDescription() {return "disable timewall buyables.<br>comps:"+format(ccomp(this.layer,this.id))+'/100'},
            unlocked() { return (upg('bt',23))},
            goalDescription:  function() {return format(this.goal())+' points'},
            goal(){
                let ef=n(10).pow(ccomp(this.layer,this.id).pow(1.05).mul(0.7).add(5))
                if(ccomp(this.layer,this.id).gte(10)) ef=n(10).pow(ccomp(this.layer,this.id).pow(1.44).div(2))               
                if(ccomp(this.layer,this.id).gte(25)) ef=n(10).pow(ccomp(this.layer,this.id).pow(2.5).div(60))
                return ef
            },   
            canComplete() {return player.points.gte(this.goal())},
            rewardDescription: "timewall boost itself.",
            rewardEffect() {
                let b=ccomp(this.layer,this.id).pow(0.95)
                let e=n(0.5)
                if(upg('bt',25)) e=e.add(ccomp(this.layer,this.id).pow(0.6).div(100))
                let ef=n(10).pow(player.t.points.add(10).log(10).pow(e)).pow(b.div(20))
                if(upg('tt',32)) ef=ef.pow(1.01)
                return ef
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
    }
})
