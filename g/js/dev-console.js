javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
   

      document.addEventListener('DOMContentLoaded', function() {
    // Create and style elements
    const body = document.body;
    body.style.background = 'black';

    const center = document.createElement('center');
    body.appendChild(center);

    const nav = document.createElement('nav');
    nav.style.cssText = `
        background: black;
        border: 3px solid red;
        border-radius: 10px;
        position: absolute;
        display: flex;
        bottom: 1%;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        transition: all 3s;
        height: 50px;
        width: 100px;
        box-shadow: 0 0 10px 2px red;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 20px;
    `;

    const span = document.createElement('span');
    span.textContent = 'Options';
    span.style.color = 'red';
    nav.appendChild(span);

    const navOptions = document.createElement('div');
    navOptions.className = 'nav-options';
    navOptions.style.cssText = `
        display: none;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    `;

    const links = [
        { text: 'Home', href: '../g/Admin-x.html', onclick: '' },
        { text: 'FullScreen', href: '', onclick: 'ghk()' }
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.textContent = link.text;
        a.href = link.href;
        if (link.onclick) a.setAttribute('onclick', link.onclick);
        a.style.cssText = `
            color: red;
            padding: 10px;
            text-decoration: none;
            font-size: 20px;
            position: relative;
            cursor: pointer;
        `;
        navOptions.appendChild(a);
    });

    nav.appendChild(navOptions);
    center.appendChild(nav);

    // Add hover effects
    nav.addEventListener('mouseover', function() {
        nav.style.width = '500px';
        nav.style.height = 'auto';
        nav.style.boxShadow = '0 0 20px 5px red';
        span.style.display = 'none';
        navOptions.style.display = 'flex';
    });

    nav.addEventListener('mouseout', function() {
        nav.style.width = '100px';
        nav.style.height = '50px';
        nav.style.boxShadow = '0 0 10px 2px red';
        span.style.display = 'block';
        navOptions.style.display = 'none';
    });

    // JavaScript function for FullScreen
    window.ghk = function() {
        var embed = document.getElementById('embeddedHTML');
        if (!document.fullscreenElement) {
            embed.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };
});

           
