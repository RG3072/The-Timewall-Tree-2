addLayer("tt", {
    name: "tt",
    symbol: "T3", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points:n(0),
        wp:n(0),
        multiwp:[n(0),n(0)]
    }},
    passiveGeneration(){
        let p=n(0)
        return p},
    color: "#CCFFE3",
    requires: n(3e11), 
    resource: "Triwall", 
    baseResource: "Biwall", 
    baseAmount() {return player.bt.points}, 
    type: "normal", 
    exponent: n(0.2),
    gainExp() {
        let a=n(1)
        if(ac('ac',42)) a=a.add(0.01)
        if(upg('tt',55)) a=a.add(0.01)
        return a
    },
    row: 3, 
    hotkeys: [
        {key: "c", description: "C:triwall", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (ch('bt',21)||player[this.layer].unlocked)},
    gainMult() {
        a=n(1)
        if(upg('tt',35)) a=a.mul(bef('tt',12))
        return a
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    branches: ['bt'],
    milestones: {
        1: {requirementDescription: "1 triwall (1",
            done() {return player[this.layer].total.gte(1)}, 
            effectDescription: "x2 t gain and t/bt passive,autobuy t-pas and cost nothing.",
        },
        2: {requirementDescription: "2 triwall (2",
            done() {return player[this.layer].total.gte(2)}, 
            effectDescription: "t-p base +0.01 and autobuy,x2 bt,total tt boost pts.",
        },
        3: {requirementDescription: "3 triwall (3",
            done() {return player[this.layer].total.gte(3)}, 
            effectDescription: "p-t base +0.01 and autobuy,^1.01 bt.t-p/-t cost nothing.",
        },
        4: {requirementDescription: "5 triwall (4",
            done() {return player[this.layer].total.gte(5)}, 
            effectDescription: "autobuy t/bt upgrades.",
        },
        5: {requirementDescription: "7 triwall (5",
            done() {return player[this.layer].total.gte(7)}, 
            effectDescription: "unlock wp.",
        },
        6: {requirementDescription: "30 triwall (6",
            done() {return player[this.layer].total.gte(30)}, 
            effectDescription: "autobuy 'for c3' in T and cost nothing.",
        },
        7: {requirementDescription: "200 triwall (7",
            done() {return player[this.layer].total.gte(200)}, 
            effectDescription: "keep timewall upgrades.",
        },
        8: {requirementDescription: "1000 triwall (8",
            done() {return player[this.layer].total.gte(1000)}, 
            effectDescription: "autobuy first 2 buyables in BT,2tc2/3 is always fully completed. x10 timewall.",
        },
        9: {requirementDescription: "32768 triwall (9",
            done() {return player[this.layer].total.gte(32768)}, 
            effectDescription: "unlock new upgrades. x100 points.",
        },
        10: {requirementDescription: "1.1e12 triwall (10",
            done() {return player[this.layer].total.gte(1.1e12)}, 
            effectDescription: "unlock a buyable.",
        },
    },
    // doReset(layer){

    // },
    tabFormat: {
        "Milestones":{
        content: [
            "main-display",
            "prestige-button",
            "resource-display",
            "milestones",//["blank", "25px"],    ["microtabs", "stuff"],
        ]},
        "wp":{
        content: [
            "main-display",
            "prestige-button",
            "resource-display",
            ["display-text",function() {let s=''
                if(mil('tt',5)) s=s+'you have '+format(player.tt.wp)+' wp(+'+format(tmp.tt.wpg)+'/s)'
                if(player.tt.total.gte(200)) s=s+'<br>wp gain beyond 200 triwall is nerfed!'
                if(player.tt.total.gte(1e6)) s=s+'<br>wp gain beyond 1e6 triwall is nerfed^2!'
                return s
            }],["display-text",function() {let s=''
                if(upg('tt',55)) s=s+'<br>you have '+format(player.tt.multiwp[0])+' wp2(+'+format(tmp.tt.mwp[0])+'/s),provide +'+format(tmp.tt.mwpef[0])+' extra p-t and t-p(starts at 1e10000 wp)'
                return s
            }],["upgrades",[1,2,3,4]],"buyables",
        ]},
        "Main":{
        content: [
            "main-display",
            "prestige-button",
            "resource-display",
            ["display-text",function() {let s=''
                if(mil('tt',9)) s=s+'the true upgrades'
                return s
            }],["upgrades",[5,6]]
        ]},
    },
    upgrades: {//unlocked() {return (upg(this.layer,11))},
        11: {
            title:'3t11',
            description: "2x points.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(100),
        },
        12: {
            title:'3t12',
            description: "5x points.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(300),
            unlocked() {return (upg(this.layer,11))},
        },
        13: {
            title:'3t13',
            description: "^1.001 points.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e3),
            unlocked() {return (upg(this.layer,12))},
        },
        14: {
            title:'3t14',
            description: "^1.002 points.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e4),
            unlocked() {return (upg(this.layer,13))},
        },
        15: {
            title:'3t15',
            description: "^1.002 points.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e5),
            unlocked() {return (upg(this.layer,14))},
        },
        21: {
            title:'3t21',
            description: "t-p base +0.01.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e3),
        },
        22: {
            title:'3t22',
            description: "p-t base +0.01.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(5e3),
            unlocked() {return (upg(this.layer,21))},
        },
        23: {
            title:'3t23',
            description: "t-pas becomes exponential.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e5),
            unlocked() {return (upg(this.layer,22))},
        },
        24: {
            title:'3t24',
            description: "boost bt passive.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e50),
            unlocked() {return (upg(this.layer,23))},
        },
        31: {
            title:'3t31',
            description: "timewall ^1.002.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e5),
        },
        32: {
            title:'3t32',
            description: "tc3 eff ^1.01.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(2e6),            
            unlocked() {return (upg(this.layer,31))},
        },
        33: {
            title:'3t33',
            description: "2tc2 eff ^1.25.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e7),            
            unlocked() {return (upg(this.layer,32))},
        },
        34: {
            title:'3t34',
            description: "unlock a buyable.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(67108864),            
            unlocked() {return (upg(this.layer,33))},
        },
        35: {
            title:'3t35',
            description: "unlock another buyable.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e25),            
            unlocked() {return (upg(this.layer,34))},
        },
        41: {
            title:'3t41',
            description: "keep 10 times 2tc3 on triwall.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e40),            
        },
        42: {
            title:'3t42',
            description: "keep 10 times tc3/2tc2 on triwall.",
            currencyLocation() {return player.tt}, 
            currencyDisplayName: "wp",
            currencyInternalName: "wp",
            cost:n(1e56),                
            unlocked() {return (upg(this.layer,41))},
        },
        51: {
            title:'3t51',
            description: "No more repetition!<br>keep 25 times tc3 on triwall.",
            cost:n(32768),            
        },
        52: {
            title:'3t52',
            description: "buy max 3-4 T buyables and 3rd in BT.",
            cost:n(262144),            
        },
        53: {
            title:'3t53',
            description: "keep BT upgrades on triwall.",
            cost:n(4194304),            
        },
        54: {
            title:'3t54',
            description: "buy max 1-2 T buyables and BT's cost nothing.",
            cost:n(16777216),            
        },
        55: {
            title:'3t55',
            description: "^1.01 TT and unlock wp2.",
            cost:n(536870912),            
        },
        61: {
            title:'3t61',
            description: 'x10 T and BT.',
            cost:n(32768),            
            unlocked() {return (upg(this.layer,51))},
        },
        62: {
            title:'3t62',
            description: 'total TT boost BT.',
            cost:n(1048576), 
            effect()  { 
                let ef=player.tt.total.add(1).pow(0.1)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+'x' },            
            unlocked() {return (upg(this.layer,51))},
        },
        63: {
            title:'3t63',
            description: 'points boost t-p base.',
            cost:n(67108864),            
            effect()  { 
                let ef=player.points.add(10).logBase(10).pow(0.15).div(200)
                return ef;          
            },
            effectDisplay() { return '+'+format(this.effect()) },
            unlocked() {return (upg(this.layer,51))},
        },
        64: {
            title:'3t64',
            description: 'points boost wp-p base.',
            cost:n(268435456),            
            effect()  { 
                let ef=player.points.add(10).logBase(10).pow(0.12).div(100)
                return ef;          
            },
            effectDisplay() { return '+'+format(this.effect()) },
            unlocked() {return (upg(this.layer,51))},
        },
        65: {
            title:'3t65',
            description: 'wp exp +0.01.',
            cost:n(3.435e10),            
            unlocked() {return (upg(this.layer,55))},
        },
    },
    buyables:{
        11: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(20)) s='sc|'
                if(gba(this.layer,this.id).gte(80)) s='sc2|'
                if(gba(this.layer,this.id).gte(160)) s='sc3|'
                s=s+'wp-p'
                return s
            },
            cost(x) { 
                let c=n(10).pow(x.add(7).pow(1.25).div(1.626))//first is near 1e7
                if(x.gte(20)) c=n(10).pow(x.pow(2.3).div(25))
                if(x.gte(80)) c=n(10).pow(n(10).pow(x.pow(0.65).mul(0.18)))
                if(x.gte(160)) c=n(10).pow(n(10).pow(x.pow(0.85).div(15)))
                return c
            },
            canAfford() {return player.tt.wp.gte(this.cost()) },
            buy() {
                if(!upg('tt',55)) player.tt.wp=player.tt.wp.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(2)
                if(upg('tt',64)) b=b.add(uef('tt',64))
                return b},
            effect(x) { 
                let ef=this.base().pow(x)//.pow(e)
                return ef},
            display() { 
                return "points gain x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " wp \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + "" },
            unlocked() {return upg('tt',34)}
        },
        12: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(40)) s='sc|'
                s=s+'p-tt'
                return s
            },
            cost(x) { 
                let c=n(10).pow(x.pow(1.2).add(75))
                if(x.gte(40)) c=n(10).pow(x.pow(2).div(10))
                return c
            },
            canAfford() {return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.01)
                return b},
            effect(x) { 
                let ef=this.base().pow(x)//.pow(e)
                return ef},
            display() { 
                return "triwall gain x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " points \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + "" },
            unlocked() {return upg('tt',35)}
        },
        13: {
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(40)) s='sc|'
                s=s+'kc3'
                return s
            },
            cost(x) { 
                let c=n(10).pow(x.pow(2).mul(0.3).add(12))
                return c
            },
            canAfford() {return player.tt.points.gte(this.cost()) },
            buy() {
                player.tt.points=player.tt.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1)
                return b},
            effect(x) { 
                let ef=this.base().mul(x)
                return ef},
            display() { 
                return "keep +"+ format(this.base()) +" tc3 completions \n\
                Cost: " + format(this.cost()) + " triwall \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect()) + "" },
            unlocked() {return mil('tt',10)}
        },
    },
    wpg(){
        let ef=n(0)
        let e=n(0.2)
        if(upg('tt',65)) e=e.add(0.01)
        if(mil('tt',5)) ef=n(2).pow(player.tt.total.sub(7).max(0).div(1.8))
        if(player.tt.total.gte(200))  ef=ef.min(n(2).pow(player.tt.total.pow(0.35).mul(20)))
        if(player.tt.total.gte(1e6))  ef=ef.min(n(10).pow(player.tt.total.pow(0.2).mul(100)))
        if(ac('ac',43))  e=e.add(0.01),ef=n(10).pow(player.tt.total.pow(e).mul(100))
        return ef
    },
    mwp(){let ef=[n(0),n(0)]
        if(upg('tt',55)) ef[0]=player.tt.wp.add(10).logBase(10).pow(0.5).sub(100).pow(1.25).max(0)  //1e10000 wp generates wp2.
        return ef
    },
    mwpef(){
        let ef=[n(0),n(0)]
        if(upg('tt',55)) ef[0]=player.tt.multiwp[0].pow(0.35).div(10).max(0) 
        if(player.tt.multiwp[0].gte(1e5)) ef[0]=ef[0].min(n(10).pow(player.tt.multiwp[0].logBase(10).pow(0.67).mul(0.6)).div(10))
        return ef
    },
    update(diff) {
        if(mil('tt',5))  player.tt.wp=player.tt.wp.add(tmp.tt.wpg.mul(diff))
        if(upg('tt',55))  player.tt.multiwp[0]=player.tt.multiwp[0].add(tmp.tt.mwp[0].mul(diff))
    },
})
