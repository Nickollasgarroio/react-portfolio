import { useEffect } from "react";

export default function RedirectToHash() {
  useEffect(() => {
    const repoName = "/NOME-REPO"; // substitua pelo seu repositório
    if (location.pathname !== "/" && location.pathname !== repoName + "/") {
      // redireciona mantendo hash
      location.href = `${repoName}/#${location.pathname}`;
    }
  }, []);

  return null; // esse componente não renderiza nada
}
