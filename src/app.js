window.onload=()=>{
    document.getElementById('full-info-screen').style.display='none';
    document.getElementById('unavailable').style.display='none';

}

document.getElementById('down-btn').addEventListener('click',(evento)=>{
    evento.preventDefault();
    document.getElementById('main').style.display='none';
    document.getElementById('full-info-screen').style.display='block';
    document.getElementById('unavailable').style.display='none';
});

document.getElementById('logo2').addEventListener('click',(evento)=>{
    evento.preventDefault();
    document.getElementById('full-info-screen').style.display='none';
    document.getElementById('main').style.display='block';
    document.getElementById('unavailable').style.display='none';
});

document.getElementById('we').addEventListener('click',(evento)=>{
    evento.preventDefault();
    document.getElementById('main').style.display='none';
    document.getElementById('unavailable').style.display='block';
})