document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const resultContainer = document.getElementById('result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value;

    if (!name || !birthdate) {
      alert('이름과 생년월일을 모두 입력해주세요.');
      return;
    }

    const zodiacSign = getZodiacSign(birthdate);
    const horoscope = getDailyHoroscope(zodiacSign);

    resultContainer.innerHTML = `
      <h2>${name}님의 오늘의 별자리 운세 (${zodiacSign})</h2>
      <p><strong>조언:</strong> ${horoscope.advice}</p>
      <p><strong>재미:</strong> ${horoscope.fun}</p>
      <p><strong>운:</strong> ${horoscope.luck}</p>
      <p><strong>감성:</strong> ${horoscope.emotion}</p>
    `;
  });

  function getZodiacSign(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // 1~12월
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "양자리";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "황소자리";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "쌍둥이자리";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "게자리";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "사자자리";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "처녀자리";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "천칭자리";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "전갈자리";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "사수자리";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "염소자리";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "물병자리";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "물고기자리";
    return "알 수 없음";
  }

  function getDailyHoroscope(sign) {
    const horoscopes = {
      "양자리": {
        advice: "오늘은 새로운 도전에 용기를 내보세요.",
        fun: "예상치 못한 즐거운 일이 생길 거예요.",
        luck: "금전운이 상승하는 하루입니다.",
        emotion: "감정이 풍부해지는 날입니다."
      },
      "황소자리": {
        advice: "차분하게 계획을 세우는 것이 좋아요.",
        fun: "친구들과 즐거운 시간을 보내세요.",
        luck: "작은 행운이 당신을 기다립니다.",
        emotion: "마음이 안정될 거예요."
      },
      "쌍둥이자리": {
        advice: "소통이 중요한 날입니다.",
        fun: "새로운 사람을 만나보세요.",
        luck: "뜻밖의 기회가 찾아올 수 있어요.",
        emotion: "호기심이 가득한 하루예요."
      },
      "게자리": {
        advice: "가족과 시간을 보내세요.",
        fun: "집에서 편안한 시간을 즐기세요.",
        luck: "안정적인 운이 따릅니다.",
        emotion: "따뜻한 마음이 가득해요."
      },
      "사자자리": {
        advice: "자신감을 가지고 행동하세요.",
        fun: "파티나 모임에 참석해보세요.",
        luck: "행운이 당신을 따릅니다.",
        emotion: "기분이 고조되는 하루예요."
      },
      "처녀자리": {
        advice: "세부 사항에 집중하세요.",
        fun: "책을 읽으며 휴식을 취하세요.",
        luck: "작은 성공이 찾아올 거예요.",
        emotion: "차분한 마음이 중요합니다."
      },
      "천칭자리": {
        advice: "균형을 유지하는 게 관건입니다.",
        fun: "예술 활동에 참여해보세요.",
        luck: "좋은 인연을 만날 수 있어요.",
        emotion: "평화로운 감정이 흐릅니다."
      },
      "전갈자리": {
        advice: "집중력을 발휘하세요.",
        fun: "흥미로운 취미를 시작해보세요.",
        luck: "운이 점차 좋아집니다.",
        emotion: "강한 감정이 느껴질 수 있어요."
      },
      "사수자리": {
        advice: "모험심을 발휘해보세요.",
        fun: "야외 활동을 즐기세요.",
        luck: "큰 행운이 찾아옵니다.",
        emotion: "열정이 넘치는 하루입니다."
      },
      "염소자리": {
        advice: "꾸준함이 성공의 열쇠입니다.",
        fun: "목표를 다시 점검해보세요.",
        luck: "안정적인 운이 흐릅니다.",
        emotion: "성실한 마음가짐이 필요해요."
      },
      "물병자리": {
        advice: "창의력을 발휘하세요.",
        fun: "새로운 아이디어를 탐색해보세요.",
        luck: "뜻밖의 기회가 찾아옵니다.",
        emotion: "호기심과 열정이 공존해요."
      },
      "물고기자리": {
        advice: "감성을 중요시하세요.",
        fun: "예술 작품을 감상해보세요.",
        luck: "행운이 서서히 다가옵니다.",
        emotion: "감정이 풍부한 하루입니다."
      }
    };

    return horoscopes[sign] || {
      advice: "오늘도 좋은 하루 보내세요!",
      fun: "즐거운 일이 가득하길 바랍니다.",
      luck: "행운이 함께하길 바랍니다.",
      emotion: "평화로운 마음을 가지세요."
    };
  }
});
