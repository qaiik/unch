((() => {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        console.log(arguments);
        if (arguments[1] == '/MRL/rest/student-assignment?assignmentId=0c850696-2d22-4155-a0b3-7d0b8909c496') {
            return 
        } else {
            origOpen.apply(this, arguments);
        }
    };
}))();
