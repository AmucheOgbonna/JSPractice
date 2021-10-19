let Timer = {
    startTime: null,
    endTIme: null,
    running: false,
    duration: 0,
    start: function () {
        if (this.running) {
            console.error("Timer has already started");
        } else {
            this.running = true;
            this.startTime = new Date();
        }
    },
    stop: function () {
        if (!this.running) {
            console.error('StopWarch is not started');
        } else {
            this.running = false;
            this.endTIme = new Date();
            const seconds = (this.endTIme.getTime() - this.startTime.getTime()) / 1000;
            this.duration += seconds;
        }
    },
    reset: function () {
        this.startTime = null;
        this.endTIme = null;
        this.running = false;
        Object.defineProperty(
            /* add getter */
        );
    }
};