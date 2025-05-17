fetch('https://api.mcsrvstat.us/bedrock/3/mc.thesaper.com').then(
    response => {
        if (!response.ok) {
            throw new Error(`Could not fetch server status. ${response.status}`)
        }
        return response.json();
    }
).then(
    serverStatus => {
        console.log(serverStatus);
        //window.alert("Server Online: "+ serverStatus.online);
        const srvStatusP = document.getElementById("srvStatus");
        const srvPlayers = document.getElementById("srvPlayers");
        if (serverStatus.online) {
            srvStatusP.innerHTML = "Minecraft Server Status: Online";
        } else {
            srvStatusP.innerHTML = "Minecraft Server Status: Offline";
        }
        srvPlayers.innerHTML = "Players: " + serverStatus.players.online;
    }
).catch(
    error => {
        console.error(error);
    }
)

