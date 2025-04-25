function startRoutine(name) {
  const result = document.getElementById("result");
  const now = new Date().toLocaleTimeString();
  result.innerText = `✅ ${name} 루틴이 시작되었어요! (${now})`;
}
