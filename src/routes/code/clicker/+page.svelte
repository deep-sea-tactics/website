<script>
    //a very basic clicker used for our svelte kit demo.
	//Made to be followable and easy to recreate.
	//from: https://github.com/CoasterFan5/dst-clicker





    //the logic that defines clicks per click and handles the actual click
    let cpcpc = 0;
    let clicksPerClick = 1;
    let clicks = 0;
    function buttonClick() {
        clicksPerClick += cpcpc;
        clicks += clicksPerClick;
    }

    let globalUpgradeMulti = 1.1;
    //define some upgrades
    let clickManaiaLevel = 0;
    let ogClickManiaCost = 10;
    let clickManiaCost = 10;
    let upgradeClickMania = () => {
        if(clicks >= clickManiaCost) {

            clickManaiaLevel++;
            clicks -= clickManiaCost;
            clicksPerClick++;
            clickManiaCost = Math.round(ogClickManiaCost * Math.pow(globalUpgradeMulti, clickManaiaLevel));
        }
    }

    let clickParadiseLevel = 0;
    let ogClickParadiseCost = 200;
    let clickParadiseCost = 200;
    let upgradeClickParadise = () => {
        if(clicks > clickParadiseCost) {
            clickParadiseLevel++;
            clicks -= clickParadiseCost;
            clicksPerClick += 10;
            clickParadiseCost = Math.round(ogClickParadiseCost * Math.pow(globalUpgradeMulti, clickParadiseLevel));
        }
    }

    let clickCrazyLevel = 0;
    let ogClickCrazyCost = 1000;
    let clickCrazyCost = 1000;
    let upgradeClickCrazy = () => {
        if(clicks > clickCrazyCost) {
            clickCrazyLevel++;
            clicks -= clickCrazyCost;
            cpcpc += 10;
            clickCrazyCost = Math.round(ogClickCrazyCost * Math.pow(globalUpgradeMulti, clickCrazyLevel));
        }
    }
</script>

<h1>Click:</h1>

<button on:click={buttonClick}>Click Me</button>
<p>Balance: {clicks}</p>

<h1>Upgrades:</h1>
<button on:click={upgradeClickMania}>Click Mania | +1 Click Per Click | ${clickManiaCost}</button>
<button on:click={upgradeClickParadise}>Click Paradise | +10 Clicks Per Click | ${clickParadiseCost}</button>
<button on:click={upgradeClickCrazy}>Click Crazy | +10 Clicks Per Click Per Click | ${clickCrazyCost}</button>