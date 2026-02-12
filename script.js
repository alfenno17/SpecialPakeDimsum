function buatBunga() {
    const bunga = document.createElement('div');
    const simbol = ['🌸', '🌷', '💖', '🌹', '✨'];
    
    bunga.classList.add('flower');
    bunga.innerText = simbol[Math.floor(Math.random() * simbol.length)];
    
    bunga.style.left = Math.random() * 100 + "vw";
    
    bunga.style.fontSize = Math.random() * 20 + 10 + "px";
    
    bunga.style.animationDuration = Math.random() * 3 + 2 + "s";
    
    document.body.appendChild(bunga);

    setTimeout(() => {
        bunga.remove();
    }, 5000);
}

setInterval(buatBunga, 300);

function tampilkanUcapan() {
    const inputNama = document.getElementById('userName').value;
    const inputSection = document.getElementById('inputSection');
    const greetingSection = document.getElementById('greetingSection');
    const nameResult = document.getElementById('nameResult');

    if (inputNama.trim() === "") {
        alert("Ketik namamu dulu ya manis! 😊");
        return;
    }

    inputSection.classList.add('hidden');
    greetingSection.classList.remove('hidden');
    
    nameResult.innerText = inputNama + "!";

    for(let i = 0; i < 15; i++) {
        setTimeout(buatBunga, i * 100);
    }
}

function tutupHalaman() {
    const card = document.querySelector('.card');
    
    card.style.transition = "all 1.5s ease"; 
    card.style.opacity = "0";
    card.style.filter = "blur(10px)"; 
    card.style.transform = "scale(0.9)"; 
    setTimeout(() => {
        card.innerHTML = "<h1>Sampai Jumpa lagi Yaaa... ❤️</h1>";
        card.style.opacity = '1';
        card.style.filter = "blur(0)";
        card.style.transform = "scale(1)";
    }, 1500);

    const namaPengguna = document.getElementById('userName').value;
            setTimeout(() => {
        document.body.style.transition = "background-color 2s ease";
        document.body.style.backgroundColor = "#000";
    }, 500);

    setTimeout(() => {
        document.body.innerHTML = `
            <div id="finalScreen" style="
                opacity: 0;
                transition: opacity 2s ease;
                color: white; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                flex-direction: column;
                font-family: 'Poppins', sans-serif;
                text-align: center;
            ">
                <h1 style="font-size: 1.2rem; font-weight: 300; letter-spacing: 2px;">Sampai jumpa lagi,</h1>
                <h2 style="color: #ff4d6d; font-size: 3rem; margin: 10px 0; text-shadow: 0 0 20px rgba(255, 77, 109, 0.5);">${namaPengguna} ❤️</h2>
            </div>
        `;
    
        setTimeout(() => {
            const finalScreen = document.getElementById('finalScreen');
            if(finalScreen) finalScreen.style.opacity = "1";
        }, 100);

    }, 1500);
    
}