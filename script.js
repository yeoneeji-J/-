const horoscopeColors = {
  "염소자리": "#f2a365",
  "물병자리": "#5e60ce",
  "물고기자리": "#3a86ff",
  "양자리": "#ef476f",
  "황소자리": "#ffd166",
  "쌍둥이자리": "#06d6a0",
  "게자리": "#118ab2",
  "사자자리": "#f4a261",
  "처녀자리": "#8ecae6",
  "천칭자리": "#bc6c25",
  "전갈자리": "#d62828",
  "사수자리": "#ffb703"
};

const horoscopes = {
  "염소자리": [
    "끈기 있게 밀어붙이면 좋은 결과가 있습니다.",
    "주변 사람들과의 신뢰가 더욱 깊어질 수 있는 날이에요.",
    "조금은 휴식이 필요할지도 몰라요."
  ],
  "물병자리": [
    "새로운 아이디어가 반짝일 수 있어요!",
    "사람들과의 소통이 중요한 하루예요.",
    "재밌는 인연이 기다리고 있을지도 몰라요."
  ],
  "물고기자리": [
    "감정이 풍부해지는 날이에요. 예술적 감성을 살려보세요.",
    "마음이 통하는 사람과 깊은 대화를 나눠보세요.",
    "조용한 시간 속에서 큰 깨달음을 얻을 수 있어요."
  ],
  "양자리": [
    "열정이 넘치는 하루, 하지만 충돌은 피하세요.",
    "도전적인 일이 당신을 기다리고 있어요.",
    "새로운 기회가 눈앞에 있어요!"
  ],
  "황소자리": [
    "안정적인 하루를 보내게 될 거예요.",
    "작지만 소중한 기쁨을 발견할 수 있어요.",
    "금전적인 운이 따를 수 있어요."
  ],
  "쌍둥이자리": [
    "다양한 정보 속에서 길을 찾아보세요.",
    "유쾌한 하루가 될 거예요!",
    "말 한마디가 큰 영향을 줄 수 있어요."
  ],
  "게자리": [
    "가족이나 친구와 따뜻한 시간을 보내보세요.",
    "감정 표현을 솔직하게 해보는 것도 좋아요.",
    "기억에 남을 일이 생길지도 몰라요."
  ],
  "사자자리": [
    "주목받는 일이 생길 거예요!",
    "당신의 리더십이 빛나는 하루입니다.",
    "자신감을 가지면 모든 일이 잘 풀릴 거예요."
  ],
  "처녀자리": [
    "섬세한 시선이 빛나는 날이에요.",
    "계획적으로 움직이면 실수가 없을 거예요.",
    "작은 정리가 큰 기쁨을 줄 수 있어요."
  ],
  "천칭자리": [
    "균형 잡힌 선택이 중요해요.",
    "사람들과의 조화가 좋은 하루예요.",
    "예쁜 물건이나 장소를 찾아보세요."
  ],
  "전갈자리": [
    "직감이 강해지는 날이에요.",
    "비밀이 드러날 수 있어요. 솔직함이 필요해요.",
    "강렬한 감정이 당신을 움직이게 할지도 몰라요."
  ],
  "사수자리": [
    "자유롭게 생각하고 움직여 보세요.",
    "여행이나 탐험에 어울리는 날이에요.",
    "열린 마음이 행운을 불러옵니다."
  ]
};

function getZodiacSign(month, day) {
  const signs = [
    { name: "염소자리", from: [12, 22], to: [1, 19] },
    { name: "물병자리", from: [1, 20], to: [2, 18] },
    { name: "물고기자리", from: [2, 19], to: [3, 20] },
    { name: "양자리", from: [3, 21], to: [4, 19] },
    { name: "황소자리", from: [4, 20], to: [5, 20] },
    { name: "쌍둥이자리", from: [5, 21], to: [6, 21] },
    { name: "게자리", from: [6, 22], to: [7, 22] },
    { name: "사자자리", from: [7, 23], to: [8, 22] },
    { name: "처녀자리", from: [8, 23], to: [9, 22] },
    { name: "천칭자리", from: [9, 23], to: [10, 22] },
    { name: "전갈자리", from: [10, 23], to: [11, 22] },
    { name: "사수자리", from: [11, 23], to: [12, 21] }
  ];

  for (const sign of signs) {
    const [fromMonth, fromDay] = sign.from;
    const [toMonth, toDay] = sign.to;

    if (
      (month === fromMonth && day >= fromDay) ||
      (month === toMonth && day <= toDay)
    ) {
      return sign.name;
    }
  }
  return "염소자리"; // 기본값
}

function generateHoroscope() {
  const name = document.getElementById("name").value;
  const birth = document.getElementById("birth").value;

  if (!name || !birth) {
    alert("이름과 생년월일을 모두 입력해주세요.");
    return;
  }

  const date = new Date(birth);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const sign = getZodiacSign(month, day);

  const today = new Date().getDate(); // 날짜 기준으로 운세 랜덤
  const messages = horoscopes[sign];
  const index = today % messages.length;
  const message = messages[index];

  const titleEl = document.getElementById("sign-name");
  const box = document.getElementById("result-box");
  const text = document.getElementById("horoscope-text");

  titleEl.textContent = `${name}님의 ${sign} 운세`;
  titleEl.style.color = horoscopeColors[sign] || "#eee";
  text.textContent = message;
  box.style.display = "block";
}
