const stems = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const branches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];

document.getElementById("saju-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthDate = new Date(document.getElementById("birth-date").value);
  const birthHour = parseInt(document.getElementById("birth-hour").value);
  const gender = document.getElementById("gender").value;

  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  const yearStem = stems[(year - 4) % 10];
  const yearBranch = branches[(year - 4) % 12];

  const hourBranchIndex = Math.floor(birthHour / 2) % 12;
  const hourBranch = branches[hourBranchIndex];

  const personality = getPersonality(yearStem);
  const loveFortune = getLoveFortune(branches[hourBranchIndex]);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h2>사주풀이 결과</h2>
    <p><strong>출생 연도 간지:</strong> ${yearStem}${yearBranch}년</p>
    <p><strong>출생 시 간지:</strong> ${hourBranch}시</p>
    <p><strong>성격:</strong> ${personality}</p>
    <p><strong>애정운:</strong> ${loveFortune}</p>
  `;
});

function getPersonality(stem) {
  switch (stem) {
    case "갑": return "의지가 강하고 독립적인 성향입니다.";
    case "을": return "섬세하고 감수성이 풍부한 사람입니다.";
    case "병": return "열정적이고 추진력이 뛰어납니다.";
    case "정": return "신중하고 차분한 성격입니다.";
    case "무": return "든든한 리더형 성격입니다.";
    case "기": return "현실적이며 분석적인 사람입니다.";
    case "경": return "강인하고 개성이 뚜렷합니다.";
    case "신": return "호기심이 많고 다재다능합니다.";
    case "임": return "이성적이며 냉철한 사고를 지녔습니다.";
    case "계": return "조용하고 내면의 깊이가 있는 사람입니다.";
    default: return "알 수 없음";
  }
}

function getLoveFortune(branch) {
  switch (branch) {
    case "자": return "새로운 인연이 들어올 가능성이 높아요!";
    case "인": return "감정 기복에 주의해야 합니다.";
    case "진": return "오래된 관계가 더욱 깊어질 수 있어요.";
    case "오": return "불꽃 같은 사랑이 찾아올 수 있습니다.";
    case "신": return "감정 표현에 솔직해질 필요가 있어요.";
    case "술": return "현재 인연을 소중히 여기면 좋습니다.";
    default: return "조용한 시기입니다. 자기 돌봄이 중요해요.";
  }
}
