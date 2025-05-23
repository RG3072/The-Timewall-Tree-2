let modInfo = {
	name: "The Timewall Tree 2",
	id: "mymod",
	author: "2^32",
	pointsName: "points",
	modFiles: ["layers/timewall.js","layers/biwall.js","layers/triwall.js","layers/ach.js","tree.js",],

	discordName: "",
	discordLink: "",
	initialStartPoints: n(10), // Used for hard resets and new players
	offlineLimit: 8760,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1.2",
	name: "two walls II",
}


let changelog = `
    <h4>v0.1.2 (250523) -two walls II-</h4>
		- still more challenges and upgrades.<br>
    <h4>v0.1.1 (250521) -two walls-</h4>
		- more challenges and qol.<br> 
    <h4>v0.1 (250515) -biwall.-</h4>
		- 2nd layer,biwall. First reset.<br> 
	<h4>v0.0 (250513) -initialize..-</h4>
		- 1st layer,timewall.<br> 
	project started at May 13,2025 `

let winText = `Congratulations! You have reached the end and beaten all these walls.`
// (first release)
// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return n(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return n(0)
        
	let a=n(0)
	if(upg('t',11)) a=n(1)
	if(upg('t',12)) a=a.mul(1.1)
	if(upg('t',13)) a=a.mul(1.2)
	if(upg('t',14)) a=a.mul(1.3)
	if(upg('t',15)) a=a.mul(1.5)
	if(inc('t',12)) a=n(1)//disable t12-15
	if(upg('t',16)&&!inc('t',13)) a=a.mul(bef('t',11))
	if(upg('t',23)) a=a.mul(uef('t',23))
	if(upg('t',25)) a=a.mul(uef('t',25))        
	if(ch('t',11)) a=a.mul(2)
	if(upg('bt',11)) a=a.mul(2)
	if(upg('bt',21)&&!inc('bt',21)) a=a.mul(uef('bt',21))	
	if(upg('t',44)) a=a.mul(uef('t',44))
	if(upg('t',45)&&inc('t',13)) a=a.mul(bef('t',14))
	if(upg('t',24)) a=a.pow(1.01)
	if(upg('t',31)) a=a.pow(1.01)
	if(inc('t',11)) a=a.pow(0.5)
	if(inc('bt',11)) a=a.mul(0.2)
	if(inc('bt',12)) a=a.pow(tmp.bt.challenges[12].exp)
	return a
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function() {
		let s='current endgame:1e12 biwall.<br>new layer at 1e12 and coming soon!<br> Inspired by The timewall tree by DeFe308'
		return s},//<br> points is hardcapped at 1F100.
]
// Determines when the game "ends"
function isEndgame() {
	return player.bt.total.gte(1e12)
}

//<br> bilibili: @bili_50929957100

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(1e10) // Default is 100 hour which is just arbitrarily large
}//1e8

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
