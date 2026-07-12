# OIO ONE · Família - PWA

Seu app já está com mensagens em tempo real sem recarregar. Agora é só transformar em app instalável.

## O que tem na pasta

- `manifest.json` - configuração do PWA
- `sw.js` - service worker (funciona offline)
- `icon-*.png` - ícones nas cores originais da sua imagem CARTAS (fundo preto #0a0c10, borda prata/branco)
- `icon-512-maskable.png` - ícone para Android com área segura

## Como instalar no GitHub Pages (tilllimichel-max.github.io)

1. Faz upload de TODOS os arquivos da pasta `pwa` para a raiz do seu repositório (onde está o `index.html`)

2. No seu `index.html`, dentro do `<head>`, adiciona essas 3 linhas:

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#000000">
<link rel="apple-touch-icon" href="icon-192.png">
```

3. Antes do `</body>` final, adiciona:

```html
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
</script>
```

4. Faz commit. Abre https://tilllimichel-max.github.io no celular > menu do Chrome > **Instalar app** ou **Adicionar à tela inicial**

O ícone vai aparecer com o seu logo CARTAS nas cores originais, sem rosa.

## Cores usadas

- Fundo: #060608 (preto da sua imagem)
- Borda e texto: prata/branco #e8e8f0
- Accent do app: #00e5ff (mantido do OIO)

Pronto!
