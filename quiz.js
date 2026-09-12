// Verificação de respostas dos quizzes (sem dependências externas).
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".quiz").forEach(function (q) {
    var btn = q.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var esc = q.querySelector("input[type=radio]:checked");
      var res = q.querySelector(".resultado");
      var exp = q.querySelector(".explicacao");
      if (!esc) { res.textContent = "Escolhe uma opção."; res.className = "resultado"; return; }
      if (esc.value === q.dataset.certa) { res.textContent = "Certo."; res.className = "resultado certo"; }
      else { res.textContent = "Não é essa."; res.className = "resultado errado"; }
      if (exp) exp.style.display = "block";
    });
  });
});
