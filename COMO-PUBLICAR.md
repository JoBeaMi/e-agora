# Como publicar o livro (uma vez)

1. Em github.com/JoBeaMi, criar um repositório novo chamado `mptf-ii` (público, vazio, sem README).
2. No Terminal do Mac (ou no terminal do RStudio), dentro da pasta `livro/`:

    git init -b main
    git add .
    git commit -m "Livro da UC: estrutura"
    git remote add origin https://github.com/JoBeaMi/mptf-ii.git
    git push -u origin main

3. Ainda no Terminal, criar o ramo onde o site fica:

    git checkout --orphan gh-pages
    git rm -rf .
    git commit --allow-empty -m "gh-pages"
    git push origin gh-pages
    git checkout main

4. No GitHub: Settings → Pages → Source: "Deploy from a branch" → Branch: gh-pages / (root) → Save.

A partir daqui, cada `git push` para `main` renderiza e publica sozinho (separador Actions mostra o progresso, 2–3 minutos). O livro fica em https://jobeami.github.io/mptf-ii/

# Cada capítulo novo

O capítulo chega à pasta `livro/` já pronto (ficheiro `sNN-....qmd`) e com a linha correspondente descomentada em `_quarto.yml`. Para o ver antes de publicar: abrir a pasta no RStudio e carregar em Render (ou `quarto preview` no terminal). Para publicar:

    git add .
    git commit -m "S01"
    git push
