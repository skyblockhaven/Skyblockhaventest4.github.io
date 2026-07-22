const serverIP = "PLAY.SKYBLOCKHAVEN.COM";



function copyIP(){

navigator.clipboard.writeText(serverIP);

alert(
"Server IP copied: " + serverIP
);

}