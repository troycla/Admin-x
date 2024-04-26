   var lastCalledTime;
    var fps;

    function updateFPS() {
        if (!lastCalledTime) {
            lastCalledTime = Date.now();
            fps = 0;
            return;
        }
        var delta = (Date.now() - lastCalledTime) / 1000;
        lastCalledTime = Date.now();
        fps = 1 / delta;

        document.getElementById('fpsCount').textContent = fps.toFixed(1);
        requestAnimationFrame(updateFPS);
    }

    updateFPS();
