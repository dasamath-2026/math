// =========================================================
//  대구학습법 표시 (각 앱 오른쪽 위)
//  앱에서 이렇게 불러옵니다:
//    <script src="../daegu-tags.js" data-codes="고02정보-07,고03비판-07"></script>
//  data-codes 에는 이 활동에서 기르는 고등학교 실천 지표 코드를 쉼표로 적습니다.
//  코드 목록은 홈페이지의 「대구학습법과 고등학교 실천 지표」 앱에서 볼 수 있습니다.
//  출처: 대구광역시교육청 「대구학습법」(대구교육 2026-247) 학습 기능별 실천 지표(고등학교)
// =========================================================
(function () {
  "use strict";
  var me = document.currentScript;
  var codes = ((me && me.dataset.codes) || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
  var home = (me && me.dataset.home) || "../daegu-learning/";

  var SKILLS = {
    "01": ["의사소통", "#ff5a30", { "경청": "경청과 공감", "표현": "논리적 표현과 전략", "협력": "협력적 상호 작용" }],
    "02": ["정보처리", "#2f6fd6", { "정보": "정보 활용", "매체": "매체 활용", "윤리": "윤리적 활용" }],
    "03": ["사고", "#7a4fd1", { "비판": "비판적 사고", "창의": "창의적 사고", "전이": "전이와 융합" }],
    "04": ["자기관리", "#2fa36b", { "조직": "조직화", "정서": "사회 정서", "성찰": "성찰" }],
    "05": ["공동체", "#c98a00", { "관계": "대인 관계", "책임": "사회적 책임", "시민": "글로컬 시민성" }]
  };
  var IND = {
    "고01경청-01": "타인의 다양한 관점과 생각을 비판적으로 수용한다.",
    "고01경청-02": "비언어적 신호(표정, 행동)를 읽어내어 의도를 파악한다.",
    "고01경청-03": "타인의 기쁨, 슬픔, 고통에 대해 깊이 있게 공감한다.",
    "고01경청-04": "문학, 예술 등 다양한 문화적 가치를 감상한다.",
    "고01표현-01": "다양한 말하기 기법을 사용하여 다양한 대상과 소통한다.",
    "고01표현-02": "적절한 형식을 사용하여 생각을 글로 표현한다.",
    "고01표현-03": "청중, 목적, 맥락에 적합한 표현 방식과 어조를 선택한다.",
    "고01표현-04": "생각이나 주제를 의사소통 맥락에 맞게 다양한 매체로 전달한다.",
    "고01표현-05": "명확한 증거와 자료를 바탕으로 말이나 글로 설명한다.",
    "고01표현-06": "교과에서 사용하는 핵심 용어와 기호를 맥락에 맞게 사용한다.",
    "고01표현-07": "서론 본론 결론의 논리적 완결성을 갖추어 글을 쓴다.",
    "고01표현-08": "해당 학문 분야의 전문 용어와 개념을 정확하게 사용한다.",
    "고01협력-01": "타인과 상호 작용하여 공동의 의미를 형성한다.",
    "고01협력-02": "동료의 의견에 대해 유의미한 피드백을 주고 받는다.",
    "고02정보-01": "다양한 정보원(책, 기사, 영상, 웹 자료 등)을 적절히 활용하여 정보를 탐색한다.",
    "고02정보-02": "목적, 질문, 주제에 맞게 정보를 수집하고 분석한다.",
    "고02정보-03": "수집한 정보들 사이의 관계(인과, 상관, 대립 등)를 파악한다.",
    "고02정보-04": "사용하는 정보의 신뢰성을 확인한다.",
    "고02정보-05": "다양한 방법을 활용하여 자료를 분석하고 해석한다.",
    "고02정보-06": "분석한 자료를 논리적 구조로 체계화한다.",
    "고02정보-07": "데이터나 통계 자료를 목적에 맞게 시각화(그래프, 도표 등)하거나 해석한다.",
    "고02정보-08": "데이터나 통계자료에서 결론 및 시사점을 도출한다.",
    "고02정보-09": "계획과 분석 결과, 결론을 활용하여 보고서를 작성한다.",
    "고02매체-01": "전달하고자 하는 메시지와 청중의 특성에 가장 부합하는 매체와 형식을 선택한다.",
    "고02매체-02": "디지털 도구와 기술을 활용하여 자신의 아이디어를 창의적인 콘텐츠로 생산하고 공유한다.",
    "고02매체-03": "매체에 담긴 메시지의 정보 전달 방식과 의도를 비판적으로 해석한다.",
    "고02매체-04": "매체에 담긴 메시지가 대중에게 미치는 영향을 평가한다.",
    "고02매체-05": "AI를 적절하게 활용하여 정보를 탐색한다.",
    "고02윤리-01": "사용하는 자료의 출처를 밝힌다.",
    "고02윤리-02": "저작권과 인용 규칙(AI 인용 등)을 준수한다.",
    "고02윤리-03": "다양한 소스 및 매체에서 정보를 찾고, 윤리적으로 사용한다.",
    "고02윤리-04": "온라인 공간에서 타인의 인격, 사생활, 개인정보를 보호한다.",
    "고02윤리-05": "가짜 뉴스, 혐오 표현, 사이버 폭력의 문제점을 인식하고 비판적으로 판단한다.",
    "고03비판-01": "주의 깊게 관찰하여 문제의 맥락과 원인을 비판적으로 분석한다.",
    "고03비판-02": "다양한 관점에서 아이디어를 비교 및 분석하고 타당성을 판단한다.",
    "고03비판-03": "서로 다른 입장의 근거, 강점과 한계를 논리적으로 평가한다.",
    "고03비판-04": "현상이나 문제의 원인을 다각도로 검토한다.",
    "고03비판-05": "표면적인 현상과 근본 원인을 구분하고 그 관계를 파악한다.",
    "고03비판-06": "현상의 추세와 원인을 종합적으로 분석하여 향후 가능성과 영향을 추론한다.",
    "고03비판-07": "다양한 자료의 타당성과 근거를 비판적으로 검토하여 논리적 결론을 도출한다.",
    "고03비판-08": "증거 및 주장, 이끌어낸 결론 간의 논리성을 고려하여 타당성을 종합적으로 평가한다.",
    "고03창의-01": "기존의 해결 방식에 의문을 제기한다.",
    "고03창의-02": "기존 가설을 확장하거나 변형하여 새로운 가능성을 탐색한다.",
    "고03창의-03": "여러 가지 아이디어를 재구성하여 새로운 개념이나 체계를 만든다.",
    "고03창의-04": "기존 관점의 한계를 발견하고 새로운 관점으로 재해석한다.",
    "고03창의-05": "기존의 여러 아이디어의 장단점을 비교하여 새로운 해결 방향을 만든다.",
    "고03창의-06": "문제 상황을 새롭게 해석하고 해결 아이디어를 구체적인 대안으로 발전시킨다.",
    "고03창의-07": "확산적 사고와 수렴적 사고를 사용하여 해결책을 도출한다.",
    "고03전이-01": "서로 다른 교과의 지식과 방법론을 융합하여 복합적인 문제의 해결책을 도출한다.",
    "고03전이-02": "교실에서 배운 이론적 지식을 실생활의 문제 상황이나 지역 사회의 이슈에 적용하여 실제적인 변화를 만든다.",
    "고03전이-03": "복잡한 프로젝트를 수행할 때 전체 시스템의 흐름을 파악한다.",
    "고03전이-04": "복잡한 프로젝트에서 예측가능한 변수와 위험 요소를 사전에 관리한다.",
    "고03전이-05": "서로 다른 맥락과 경험을 융합하여 새로운 관점과 해석을 만든다.",
    "고04조직-01": "도전적이며 실현가능한 생활과 학업 목표를 수립한다.",
    "고04조직-02": "과제(프로젝트 등)를 계획하고 제출기한과 약속을 준수한다.",
    "고04조직-03": "조직적이고 논리적 방법으로 학습자료를 정리한다.",
    "고04조직-04": "계획과 전략에 따라 과제를 끝까지 수행한다.",
    "고04조직-05": "복잡한 정보를 조직하기 위해 적절한 전략을 사용한다.",
    "고04조직-06": "해야 할 일의 우선 순위에 따라 시간을 배분한다.",
    "고04조직-07": "자신에게 최적화된 학습 습관을 만들고 유지한다.",
    "고04정서-01": "공부와 생활에 인내와 끈기를 가진다.",
    "고04정서-02": "시험 불안, 학업 스트레스 등이 생길 때 알아차린다.",
    "고04정서-03": "스트레스와 불안을 줄이는 전략을 연습한다.",
    "고04정서-04": "충동과 분노를 극복하는 습관을 익힌다.",
    "고04정서-05": "충동적인 욕구(게임, SNS 등)를 인식하고 스스로 조절한다.",
    "고04정서-06": "실수나 실패 후 회복력을 발휘하는 연습을 한다.",
    "고04정서-07": "방해요소를 차단하고 해야 할 일에 초점을 유지하며 집중한다.",
    "고04정서-08": "긍정적 사고를 연습한다.",
    "고04성찰-01": "학습의 과정을 돌아보며 잘한 점과 어려웠던 점을 구분하여 인식한다.",
    "고04성찰-02": "평가 결과나 피드백을 분석하여 강점과 약점을 파악한다.",
    "고04성찰-03": "공부하는 방식을 검토하여 더 나은 방식을 선택한다.",
    "고04성찰-04": "배운 내용이 나의 삶, 가치관, 그리고 미래 진로에 어떤 의미를 갖는지 되돌아본다.",
    "고04성찰-05": "성찰을 기록하기 위한 저널(일지)을 작성한다.",
    "고05관계-01": "타인의 감정과 다양한 의견을 존중한다.",
    "고05관계-02": "갈등 발생 시 원인을 이해관계와 가치관의 차이 관점에서 분석한다.",
    "고05관계-03": "공동의 목표를 위해 서로 소통하며 협력한다.",
    "고05관계-04": "팀에서 맡은 역할을 책임감 있게 수행한다.",
    "고05관계-05": "민주적인 절차와 토론을 통해 양측이 모두 수용할 수 있는 합리적인 타협안을 도출한다.",
    "고05관계-06": "타인의 성장과 성공을 돕는 마음을 가진다.",
    "고05관계-07": "공동의 목표 달성을 위해 구성원 각자의 강점과 특성을 고려하여 역할을 합리적으로 배분한다.",
    "고05책임-01": "약속과 규칙을 지키며 자신의 행동을 책임진다.",
    "고05책임-02": "자신의 행동이 공동체에 미치는 영향을 고려한다.",
    "고05시민-01": "자아 탐색을 통해 국가와 세계 공동체의 구성원으로서 나의 역할을 인식하고, 시민으로서의 정체성을 확립한다.",
    "고05시민-02": "학교와 지역사회 문제에 관심을 가진다.",
    "고05시민-03": "기후 위기, 빈곤, 인권, 문화 다양성 등 글로벌 문제의 구조적 원인을 탐구한다.",
    "고05시민-04": "글로벌 문제 해결을 위해 지역·국가·세계 차원의 실천을 주도적으로 기획하고 참여한다.",
    "고05시민-05": "자신의 소비와 생활 방식이 환경과 미래 세대에 미치는 영향을 비판적으로 성찰한다.",
    "고05시민-06": "공정성과 지속가능성의 관점에서 소비를 실천한다.",
    "고05시민-07": "지역과 세계의 문제를 연결하여 사회 변화를 위한 협력적 행동에 참여한다."
  };

  var items = codes.filter(function (c) { return IND[c]; }).map(function (c) {
    var no = c.slice(1, 3), sub = c.replace(/^고\d\d/, "").replace(/-\d\d$/, "");
    return { code: c, no: no, skill: SKILLS[no][0], color: SKILLS[no][1], sub: SKILLS[no][2][sub], text: IND[c] };
  });
  if (!items.length) return;
  var skillNos = [];
  items.forEach(function (it) { if (skillNos.indexOf(it.no) < 0) skillNos.push(it.no); });
  skillNos.sort();

  var css = "" +
    ".dg-wrap{position:relative;flex:none;font-family:Pretendard,'Apple SD Gothic Neo','Noto Sans KR',sans-serif;z-index:30}" +
    ".dg-btn{display:flex;align-items:center;gap:6px;border:1px solid #c9c4b8;background:#fff;color:#15171a;border-radius:999px;padding:6px 10px 6px 12px;cursor:pointer;font:inherit;font-size:12px;font-weight:800;line-height:1.2;white-space:nowrap;letter-spacing:-.02em}" +
    ".dg-btn:hover{border-color:#15171a}" +
    ".dg-btn .dg-k{color:#6b6f74;font-weight:800}" +
    ".dg-chip{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:800;color:#15171a}" +
    ".dg-chip i{width:8px;height:8px;border-radius:50%;display:inline-block}" +
    ".dg-pop{position:absolute;right:0;top:calc(100% + 8px);width:min(380px,calc(100vw - 24px));background:#fff;color:#15171a;border:1px solid #d8d2c7;border-radius:14px;box-shadow:0 14px 34px rgba(21,23,26,.18);padding:12px 14px;text-align:left;white-space:normal}" +
    ".dg-pop[hidden]{display:none}" +
    ".dg-pop h4{margin:0 0 2px;font-size:13.5px;font-weight:900;letter-spacing:-.03em}" +
    ".dg-pop .dg-sub{font-size:11px;color:#6b6f74;margin-bottom:8px;line-height:1.5}" +
    ".dg-item{display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-top:1px solid #eee9df}" +
    ".dg-item .dg-code{flex:none;font-family:ui-monospace,Consolas,monospace;font-size:10.5px;font-weight:800;color:#fff;border-radius:6px;padding:2px 6px;margin-top:1px}" +
    ".dg-item .dg-t{font-size:12.5px;line-height:1.5;font-weight:500}" +
    ".dg-item .dg-s{display:block;font-size:10.5px;color:#6b6f74;font-weight:800}" +
    ".dg-pop a{display:inline-block;margin-top:8px;font-size:12px;font-weight:800;color:#c2401f;text-decoration:none}" +
    ".dg-pop a:hover{text-decoration:underline}" +
    "@media (max-width:820px){.dg-btn .dg-chip span{display:none}.dg-btn{padding:6px 10px}}" +
    "@media print{.dg-wrap{display:none}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var popId = "dg-pop-" + Math.random().toString(36).slice(2, 8);

  function build() {
    var w = document.createElement("div"); w.className = "dg-wrap";
    var b = document.createElement("button"); b.type = "button"; b.className = "dg-btn";
    b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-controls", popId);
    b.title = "이 활동에서 기르는 대구학습법 기능";
    b.innerHTML = '<span class="dg-k">대구학습법</span>' + skillNos.map(function (no) {
      return '<span class="dg-chip"><i style="background:' + SKILLS[no][1] + '"></i><span>' + SKILLS[no][0] + "</span></span>";
    }).join("");
    var p = document.createElement("div"); p.className = "dg-pop"; p.id = popId; p.hidden = true;
    p.setAttribute("role", "dialog"); p.setAttribute("aria-label", "이 활동에서 기르는 대구학습법 실천 지표");
    p.innerHTML = "<h4>이 활동에서 기르는 대구학습법 기능</h4>" +
      '<div class="dg-sub">고등학교 실천 지표 ' + items.length + "개 · 활동하면서 스스로 실천하고 있는지 점검해 보세요.</div>" +
      items.map(function (it) {
        return '<div class="dg-item"><span class="dg-code" style="background:' + it.color + '">' + esc(it.code) + "</span>" +
          '<span class="dg-t"><span class="dg-s">' + esc(it.skill + " 기능 · " + it.sub) + "</span>" + esc(it.text) + "</span></div>";
      }).join("") +
      '<a href="' + esc(home) + '">대구학습법 실천 지표 전체 보기 →</a>';
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = p.hidden; p.hidden = !open; b.setAttribute("aria-expanded", String(open));
      if (open) { // 화면 안에 들어오도록 왼쪽/오른쪽 정렬을 고름
        p.style.left = ""; p.style.right = "0";
        var r = p.getBoundingClientRect();
        if (r.left < 8) { p.style.right = "auto"; p.style.left = "0"; r = p.getBoundingClientRect();
          if (r.right > window.innerWidth - 8) p.style.left = (8 - w.getBoundingClientRect().left) + "px"; }
      }
    });
    p.addEventListener("click", function (e) { e.stopPropagation(); });
    w.appendChild(b); w.appendChild(p);
    return w;
  }
  function close() {
    document.querySelectorAll(".dg-pop").forEach(function (p) { p.hidden = true; });
    document.querySelectorAll(".dg-btn").forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
  }
  document.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  /* 상단바 오른쪽에 붙이기: 앱마다 상단바 구조가 달라 차례로 찾습니다 */
  /* 상단바가 아래 내용보다 위 층에 있어야 펼친 설명이 가려지지 않음 */
  function lift(el) {
    var bar = el.closest(".topbar, header.top") || el.parentNode;
    var cs = getComputedStyle(bar);
    if (cs.zIndex === "auto") { if (cs.position === "static") bar.style.position = "relative"; bar.style.zIndex = "40"; }
  }
  function mount() {
    var w = document.querySelector(".dg-wrap");
    if (w) { lift(w); return true; }
    var ok = place();
    if (ok) lift(document.querySelector(".dg-wrap"));
    return ok;
  }
  function place() {
    var badge = document.querySelector(".topbar > .badge");
    if (badge) { badge.parentNode.insertBefore(build(), badge); return true; }
    var top = document.querySelector(".topbar");
    if (top && top.querySelector(".brand-area")) { top.appendChild(build()); return true; }
    var inner = document.querySelector(".topbar-inner");
    if (inner) { var r = inner.querySelector(".btn-reset"); r ? inner.insertBefore(build(), r) : inner.appendChild(build()); return true; }
    var hdr = document.querySelector("header.top");
    if (hdr) { var last = hdr.lastElementChild; last ? hdr.insertBefore(build(), last) : hdr.appendChild(build()); return true; }
    return false;
  }
  function start() {
    mount();
    // 상단바를 화면을 바꿀 때마다 새로 그리는 앱이면 다시 붙임
    var app = document.getElementById("app");
    if (app && window.MutationObserver) new MutationObserver(function () { mount(); }).observe(app, { childList: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
