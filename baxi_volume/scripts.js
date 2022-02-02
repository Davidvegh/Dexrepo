function minus() {
    var currentLevel = getCurrentLevel();
    if(currentLevel > 0) {
        setVolume(currentLevel - 1);
    }
}

function plus() {
    var currentLevel = getCurrentLevel();
    if(currentLevel != getVolumeIndicators().length) {
        setVolume(currentLevel + 1);
    }
}

function mute() {
    setVolume(0);
}

function getVolumeIndicators() {
    var volumeIndicators = document.getElementsByClassName("volume-indicators")[0];
    return volumeIndicators.getElementsByTagName("div");
}

function setVolume(level) {
    var list = getVolumeIndicators();
    
    for(var i = 0; i < list.length; i++) {
        list[i].classList.remove("active");
        if(i <= level - 1) {
            list[i].classList.add("active");
        }
    }

    disableBtnByLevel(level);
}

function getCurrentLevel() {
    var list = getVolumeIndicators();

    var level = 0;
    for(var i = list.length - 1; i >= 0; i--) {
        if(list[i].classList.contains("active")) {
            level = i + 1;
            break;
        }
    }
    return level;
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