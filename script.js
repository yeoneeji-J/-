
function getZodiac(month, day) {
    const zodiacs = [
        { sign: "염소자리", from: [1, 1], to: [1, 19] },
        { sign: "물병자리", from: [1, 20], to: [2, 18] },
        { sign: "물고기자리", from: [2, 19], to: [3, 20] },
        { sign: "양자리", from: [3, 21], to: [4, 19] },
        { sign: "황소자리", from: [4, 20], to: [5, 20] },
        { sign: "쌍둥이자리", from: [5, 21], to: [6, 21] },
        { sign: "게자리", from: [6, 22], to: [7, 22] },
        { sign: "사자자리", from: [7, 23], to: [8, 22] },
        { sign: "처녀자리", from: [8, 23], to: [9, 22] },
        { sign: "천칭자리", from: [9, 23], to: [10, 23] },
        { sign: "전갈자리", from: [10, 24], to: [11, 22] },
        { sign: "사수자리", from: [11, 23], to: [12, 24] },
        { sign: "염소자리", from: [12, 25], to: [12, 31] }
    ];
    return zodiacs.find(z => 
        (month === z.from[0] && day >= z.from[1]) ||
        (month === z.to[0] && day <= z.to[1])
    ).sign;
}

function getRandomHoroscope(sign) {
    const messages = {
        "양자리": "오늘은 당신에게 큰 기회가 찾아올 수 있습니다.",
        "황소자리": "차분히 주변을 돌아보는 하루가 되어야 합니다.",
        "쌍둥이자리": "새로운 인연이 생길지도 몰라요.",
        "게자리": "가족과의 대화가 행복을 줍니다.",
        "사자자리": "당신의 리더십이 빛나는 날입니다.",
        "처녀자리": "작은 계획이 큰 결과로 이어질 수 있어요.",
        "천칭자리": "균형을 잘 잡는 것이 포인트입니다.",
        "전갈자리": "감정을 솔직하게 표현해보세요.",
        "사수자리": "도전이 당신을 더 성장시킵니다.",
        "염소자리": "꾸준함이 오늘의 열쇠입니다.",
        "물병자리": "창의적인 아이디어가 떠오릅니다.",
        "물고기자리": "감성을 믿고 행동하세요."
    };
    return `[${sign}] ` + (messages[sign] || "오늘은 좋은 일이 생길 것입니다!");
}

function saveAndShowHoroscope() {
    const name = document.getElementById("nameInput").value;
    const birth = document.getElementById("birthInput").value;
    if (!name || !birth) return alert("이름과 생년월일을 모두 입력해주세요.");
    localStorage.setItem("userName", name);
    localStorage.setItem("birthDate", birth);
    showHoroscope(name, birth);
}

function showHoroscope(name, birth) {
    const date = new Date(birth);
    const zodiac = getZodiac(date.getMonth() + 1, date.getDate());
    document.getElementById("inputSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    document.getElementById("greeting").textContent = `${name}님의 오늘의 운세는...`;
    document.getElementById("horoscope").textContent = getRandomHoroscope(zodiac);
}

window.onload = () => {
    const name = localStorage.getItem("userName");
    const birth = localStorage.getItem("birthDate");
    if (name && birth) {
        showHoroscope(name, birth);
    }
};
