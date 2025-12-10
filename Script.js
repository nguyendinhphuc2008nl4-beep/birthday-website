// ======== Mở / đóng panel setting ========
const settingBtn = document.getElementById("openSetting");
const settingPanel = document.getElementById("settingPanel");
settingBtn.onclick = () => {
    settingPanel.style.right = settingPanel.style.right === "0px" ? "-320px" : "0px";
};

// ======== Lưu setting ========
document.getElementById("saveSetting").onclick = () => {
    const title = document.getElementById("titleInput").value;
    const date = document.getElementById("dateInput").value;
    const color = document.getElementById("colorInput").value;
    const audioFile = document.getElementById("audioInput").files[0];

    if (title) document.getElementById("mainTitle").textContent = title;
    if (color) document.body.style.color = color;
    if (date) countdownStart(date);

    if (audioFile) {
        const url = URL.createObjectURL(audioFile);
        document.getElementById("bgMusic").src = url;
        document.getElementById("bgMusic").play();
    }
};

// ======== Countdown ========
function countdownStart(targetDate) {
    setInterval(() => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const diff = target - now;

        if (diff < 0) {
            countdown.innerHTML = "Đến ngày rồi! 🎉";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}

// ======== Hiệu ứng trái tim ========
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 300);

// ======== Hiệu ứng chữ rơi (giống website bạn gửi) ========
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "HAPPYBIRTHDAY💗🎉✨";
const arr = Array(Math.floor(canvas.width / 20)).fill(0);

function rain() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "pink";
    ctx.font = "20px monospace";

    arr.forEach((y, index) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, index * 20, y);
        arr[index] = y > canvas.height ? 0 : y + 20;
    });
}
setInterval(rain, 80);