import '../style.css'

document.querySelector('#app').innerHTML = `
    <img src="Background.jpg" alt="Nightscene">
    <div class="a">
        <h1 id="WebName">Orion Space</h1>
            <nav>
                <a class="nav" href ="Orion_Space_Home.html">Orion Space</a>
                <a class="nav" href="Orion_Space_Launch_Dates.html">Launch Dates</a>
                <a class="nav" href="Orion_Space_Training.html">Training</a></li>
                <a class="nav" href="Orion_Space_About_Us.html">Us and our motto</a>
            </nav>
    </div>
`

$(window).scroll(function() {
    $('nav').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("nav");
        }
    });
});

console.log('yes')