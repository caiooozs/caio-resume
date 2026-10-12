export const THEME_KEY = "theme";

/**
 * Roda antes da primeira pintura: tema salvo ou, sem escolha salva, o do sistema.
 * Tambem marca html[data-motion] para as entradas ao rolar esconderem o que
 * ainda nao apareceu (sem JS, essa marca nao existe e nada some).
 * Fica como string para ir inline no <head> (modulo sem "use client" para o
 * layout do servidor receber o texto, nao uma referencia de cliente).
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}document.documentElement.dataset.motion="ready"})()`;
