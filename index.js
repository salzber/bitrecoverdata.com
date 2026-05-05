

async function submitForm(e) {
    e.preventDefault();

    const msgBox = document.getElementById("formMessage");

    const data = {
        first_name: document.querySelector('[name="first_name"]').value,
        last_name: document.querySelector('[name="last_name"]').value,
        phone: document.querySelector('[name="phone"]').value,
        email: document.querySelector('[name="email"]').value,
        wallet: document.querySelector('[name="wallet"]').value,
        issue_type: document.querySelector('[name="issue_type"]').value,
        message: document.querySelector('[name="message"]').value
    };

    
    try {
        const res = await fetch("https://zbuogldftjvfixhrgiir.supabase.co/rest/v1/bitsrecover", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "sb_publishable_hCnkrz4Eqt944Us3tR6Kjw_02v_I2dq",
                "Authorization": "Bearer sb_publishable_hCnkrz4Eqt944Us3tR6Kjw_02v_I2dq"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(error);
        }

        // ✅ SUCCESS UI
        msgBox.innerText = "✅ Submitted Successfully!";
        msgBox.className = "bg-green-100 text-green-700 py-3 rounded-lg text-center font-semibold";
        msgBox.classList.remove("hidden");

        e.target.reset();

        setTimeout(() => {
            msgBox.classList.add("hidden");
            closeForm();
        }, 2000);

    } catch (err) {
        console.error(err);

        msgBox.innerText = "❌ Failed to submit!";
        msgBox.className = "bg-red-100 text-red-700 py-3 rounded-lg text-center font-semibold";
        msgBox.classList.remove("hidden");

        setTimeout(() => {
            msgBox.classList.add("hidden");
        }, 3000);
    }
}
function openWhatsApp() {
    const number = "+12098890576";
    const message = "Hi, I need crypto recovery help";

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

function openForm() {
    const modal = document.getElementById("leadModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeForm() {
    const modal = document.getElementById("leadModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}


const btn = document.getElementById("menuBtn")
const menu = document.getElementById("mobileMenu")

btn.onclick = () => {
    menu.classList.toggle("hidden")
}

