const eventMinus = "minus", eventPlus = "plus", eventMute = "mute";

function minus() {
    setVolume(eventMinus);
}

function plus() {
    setVolume(eventPlus);
}

function mute() {
    setVolume(eventMute);
}

function getVolumeIndicators() {
    var volumeIndicators = document.getElementsByClassName("volume-indicators")[0];
    return volumeIndicators.getElementsByTagName("div");
}

function setVolume(event) {
    var list = getVolumeIndicators();
    
    var level = 0;
    loop:
    for(var i = 0; i < list.length; i++) {
        var isActive = list[i].classList.contains("active");
        if(isActive && event != eventMute) {
            level = i + 1;
        }
        switch(event) {
            case eventMinus:
            if(i == list.length - 1 || !list[i+1].classList.contains("active")) {
                list[i].classList.remove("active");
                level--;
                break loop;
            }
            break;
            case eventPlus: 
            if(level == i) {
                list[i].classList.add("active");
                level = i + 1;
                break loop;
            }
            break;
            case eventMute: 
            if(isActive) list[i].classList.remove("active");
            break;
        }
    }

    disableBtnByLevel(level);
}

function disableBtnByLevel(level) {
    if(level == getVolumeIndicators().length) {
        document.getElementById("volume-plus").setAttribute("disabled", true);
    } else if(level == 0) {
        document.getElementById("volume-minus").setAttribute("disabled", true);
        document.getElementById("volume-plus").removeAttribute("disabled");
    } else {
        document.getElementById("volume-minus").removeAttribute("disabled");
        document.getElementById("volume-plus").removeAttribute("disabled");
    }
}