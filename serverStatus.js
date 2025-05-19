fetch('https://api.mcsrvstat.us/bedrock/3/mc.thesaper.com').then(
    response => {
        if (!response.ok) {
            throw new Error(`Could not fetch server status. ${response.status}`)
        }
        return response.json();
    }
).then(
    serverStatus => {
        const srvStatusP = document.getElementById("srvStatus");
        const srvPlayers = document.getElementById("srvPlayers");
        if (serverStatus.online) {
            srvStatusP.innerHTML = "Minecraft Server Status: Online";
            srvPlayers.innerHTML = "Players: " + serverStatus.players.online;
        } else {
            srvStatusP.innerHTML = "Minecraft Server Status: Offline";
            srvPlayers.innerHTML = "Players: 0";
        }
    }
).catch(
    error => {
        console.error(error);
    }
)

