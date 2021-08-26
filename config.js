var api = 'https://network.urbancash.org';
var apiList = ["https://network.urbancash.org"];

var blockTargetInterval = 60;
var coinUnits = 60000000;
var symbol = 'URBC';
var refreshDelay = 3000;
var blocksPerPage = 20;
var whiteTheme = "css/light.css";
var nightTheme = "css/dark.css";
var addressPattern = new RegExp("^URBC[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{98}$");
// pools stats by MainCoins
var poolsStat = 
	[
		["bpool.urbancash.org", "https://centralpool.urbancash.org:8119/stats"],
		["centralpool.urbancash.org", "https://centralpool.urbancash.org:8119/stats"],
		["node04.urbancash.org", "https://node04.urbancash.org:8119/stats"],
		["ipfs.io/ipfs/Qmcizz6WgiXSSE7Jn3P7Y2ibn96zMYg5YRJ65hbsrGTnTQ", "https://node04.urbancash.org:8119/stats"],
];
var nodesStat =
	[
               ["http://node.urbancash.org:18889"],
      	       ["http://node02.urbancash.org:18889"],
               ["http://node03.urbancash.org:18889"],
               ["http://node04.urbancash.org:18889"],
               ["http://node05.urbancash.org:18889"],
               ["http://network.urbancash.org:18889"],
               ["http://android.urbancash.org:18889"],
               ["http://updates.urbancash.org:18889"],
               ["http://publicnode.urbancash.org:18889"],
               ["http://nodeex01.urbancash.org:18889"],
               ["http://nodeex02.urbancash.org:18889"],
               ["http://nodestaking01.urbancash.org:18889"],
               ["http://nodestaking01db2.urbancash.org:19889"],
               ["http://hnode01.urbancash.org:18889"],
               ["http://explorer.urbancash.org:18889"],


];		
		
