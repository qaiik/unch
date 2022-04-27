document.querySelector("#learnosity_assess > div > div.lrn-region-group.lrn-group-top > div.lrn-region.lrn-top-right-region > div > button.lrn_btn.custom_btn.icon-check-answer-button.pos-left").onmouseover = ()=>{cc=1}
document.querySelector("#learnosity_assess > div > div.lrn-region-group.lrn-group-top > div.lrn-region.lrn-top-right-region > div > button.lrn_btn.custom_btn.icon-check-answer-button.pos-left").onmouseout = ()=>{cc=0}

((() => {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].includes('/MRL/rest/student-assignment?assignmentId') && cc == 1) {
            console.log("attempt update check ans count")
            return 
        } else {
            origOpen.apply(this, arguments);
        }
    };
}))();
