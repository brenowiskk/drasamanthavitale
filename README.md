# Instituto Samantha Vitale — Site institucional

Site estático (HTML/CSS/JS puro, sem build step). Basta hospedar a pasta em qualquer serviço (Vercel, Netlify, cPanel, etc.) ou abrir `index.html` localmente.

## Fotografias

A maioria das fotos reais já está aplicada no site, em `assets/img/`:

| Arquivo | Onde aparece | Origem |
|---|---|---|
| `hero-dra-samantha.jpg` | Hero — Dra. Samantha de branco | `dra.jpeg` |
| `sobre-dra-samantha-pb.jpg` | Seção "Dra. Samantha" — retrato P&B | WhatsApp Image 12.44.26 |
| `vitaleskin-logo.jpg` | Seção "Protocolo VitaleSkin" | WhatsApp Image 12.44.48 |
| `cta-final-dra-samantha.jpg` | CTA final | `skksdkds.jpeg` |
| `resultado-01-composite.jpg` | Resultados — caso 1 (antes/depois já compostos lado a lado na própria imagem) | `antesdsps.jpeg` |
| `resultado-02-composite.jpg` | Resultados — caso 2 | `dssdpsd.jpeg` (⚠️ arquivo original de baixa resolução — 141×141px; se tiver a versão em maior qualidade, substitua) |
| `logo-instituto.png` | Ícone no header/rodapé | `lgoo dra .png` |

Ainda está com placeholder (nenhuma foto foi enviada até agora):
- **Foto da recepção** — seção "O Instituto". Salve como `assets/img/instituto-recepcao.jpg` quando tiver.
- Um eventual **3º caso de antes/depois** — para adicionar, duplique um bloco `<figure class="ba-card ...">` na seção `#resultados` do `index.html` apontando para uma nova imagem.

Recomendações: fotos verticais (~4:5) funcionam melhor no Hero e no CTA final; a foto da recepção deve ser horizontal e em alta resolução, pois ocupa quase toda a largura da tela.

## Outros pontos de atenção antes de publicar

- **Depoimentos**: a seção "Experiências" está com placeholders claramente marcados no HTML (`[Depoimento de paciente...]`, `[Nome do paciente]`). Substitua pelos textos reais assim que as avaliações forem disponibilizadas — não foram inventados nomes ou avaliações, conforme solicitado.
- **Política de Privacidade** (`privacidade.html`): documento-modelo, revisar com jurídico antes de publicar (referências à LGPD).
- **Google Maps**: o mapa embutido usa o endereço do Instituto sem necessidade de chave de API. Se quiser um pino mais preciso, gere um embed pelo Google Maps (Compartilhar → Incorporar mapa) e substitua o `src` do `iframe` em `#instituto`.
- **Domínio/Open Graph**: o `<link rel="canonical">` e as tags `og:` em `index.html` usam `https://institutosamanthavitale.com.br/` como placeholder — atualize para o domínio real.

## Estrutura

```
index.html
privacidade.html
css/style.css
js/main.js
assets/img/   (adicionar as fotos reais aqui)
```
