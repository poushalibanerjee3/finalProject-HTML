let toggler=document.getElementById('toggler');
toggler.addEventListener('click',toggling);

function toggling()
{
    // alert("Clicked");
    document.querySelector('navlist').classList.toggle('.showNavlist')
}