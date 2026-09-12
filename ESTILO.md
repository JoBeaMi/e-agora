# Estilo do livro (fixado 12-09-2026, versão 3, escolhido pela Joana a partir de nove direções)

Aspeto: títulos em Archivo 900, corpo em Newsreader, números em JetBrains Mono; uma cor só, o amarelo ácido (#e8ff47), com rosa (#ffb0d6) apenas como segundo marcador; preto de tinta. Nada de caixas pastel, ícones, emojis, gradientes, nem o ponto no meio da linha (" · "): separa-se com vírgula ou travessão. Tudo está em style.css; não se inventa CSS por capítulo.

Arquitetura de cada capítulo (sNN-tema.qmd), pela ordem da aula:
1. Título curto, com a parte que interessa marcada: `# O que quer dizer [p < ,01]{.hl}?`. Primeiro parágrafo em prosa: o estudo em duas frases (desenho, n, população, intervenção, comparador) e "a leitura que se segue é a que fizemos na aula".
2. O fio (`::: {.fio}`), com três vozes, sempre nesta ordem:
   - `::: {.msg}` + `<div class="quem">O artigo</div>` + `::: {.clip}` com a frase REAL do artigo (resumo ou resultados), com as partes que interessam marcadas `[...]{.mk}` (amarelo) e `[...]{.mk .p}` (rosa), e `<span class="src">Autor (ano), Revista vol(n), secção</span>`.
   - `::: {.msg .turma}` + `<div class="quem">A turma, no quadro</div>` + as leituras em `<span class="b">...</span>`, sem nomes; as que apareceram de facto entram depois do registo pós-aula.
   - `::: {.msg}` + `<div class="quem">O caminho</div>` + `::: {.jm}` (a nota da docente, uma ou duas por capítulo, nunca mais) + `::: {.nums}` com `<div class="num">40<small>legenda</small></div>` para os números do artigo de que o texto fala + a prosa do caminho.
3. `::: {.def}` com a definição (o rótulo "O que é de facto" é automático). Uma por conceito.
4. `::: {.quiz data-certa="n"}` com `<p class="enunciado">Q<cap>.<n> ...</p>`, três `<label><input type="radio" name="qXY" value="k"> ...</label>`, `<button type="button">Verificar</button> <span class="resultado"></span>` e `<p class="explicacao">...</p>`. Pelo menos um por secção.
5. Fim fixo: "## O que fica" (três frases), "## Exercícios" (frases de resultados reais, com fonte), "## Para ler mais" (@irwin2026 com páginas; artigos por @chave, todos verificados no OpenAlex antes de entrar no .bib).

Exemplos: sempre artigos reais, com DOI verificado e os números tal como estão no resumo ou no texto (citar a secção). Nunca frases inventadas a fingir de artigo; se for preciso um caso construído (dados para o Jamovi), diz-se que é construído.

Voz: primeira pessoa do plural para caminhar; segunda do singular nas tarefas; a nota JM em primeira do singular. PT-PT. Verbos simples; o termo técnico repete-se; humor raro e só à custa de um número. Passagem final obrigatória com references/sinais-ia.md da skill escrita-academica; zero [...] de trabalho; cada número com origem.

O que nunca entra: notas de docente, tempos, plano B, [CONFIRMAR], nomes de estudantes, figuras ou passagens do Irwin & Donai (só citação com página), dados de pessoas reais, valores normativos, listas onde devia haver prosa.
