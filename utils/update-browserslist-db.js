const { execSync } = require("child_process");

try {
  execSync("pnpm up caniuse-lite", { stdio: "inherit" });
  console.log("caniuse-lite atualizado com sucesso");
} catch (error) {
  console.error("Erro ao atualizar caniuse-lite:", error);
}
