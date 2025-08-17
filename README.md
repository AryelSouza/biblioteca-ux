# 📚 Biblioteca UX — Versão Estática

Este projeto é um **protótipo navegável** de um sistema de biblioteca.  
Foi criado para **portfólio em UX**, com foco em mostrar **processo de design centrado no usuário** e **decisões de interface**.

---

## 🎯 Objetivo UX
O sistema busca **resolver problemas reais de usuários** de bibliotecas acadêmicas:
- Dificuldade em encontrar livros disponíveis.
- Pouca clareza em datas de devolução e status de reservas.
- Interfaces tradicionais confusas e burocráticas.

Por isso, o design priorizou:
- **Clareza**: textos simples e diretos.
- **Eficiência**: fluxos curtos para reservar, renovar ou cancelar.
- **Acessibilidade**: cores contrastantes, botões grandes, feedback visual.

---

## 👤 Personas
### Marta Batista — Professora (Primária)
- **Idade**: 34  
- **Objetivos**: encontrar livros e compartilhar referências com alunos.  
- **Frustrações**: gastar tempo em interfaces lentas/confusas.  
- **Necessidade**: buscas rápidas e reservas em poucos cliques.

### Paulo Corrêa — Técnico de TI (Secundária)
- **Idade**: 43  
- **Objetivos**: manter sistema funcionando e apoiar usuários.  
- **Frustrações**: falta de mensagens claras e atalhos.  
- **Necessidade**: status do sistema e relatórios acessíveis.

---

## 🧩 Cenários de uso
1. **Professora quer reservar um livro rapidamente**  
   → Busca → Vê disponibilidade → Reserva em 1 clique.  

2. **Usuário precisa renovar empréstimo**  
   → Acessa “Meus Empréstimos” → Botão direto de **Renovar**.  

3. **Alguém desistiu da leitura**  
   → Acessa “Reservas” → **Cancelar** sem burocracia.  

---

## 🔄 Fluxos principais (User Flows)
- **Buscar → Reservar → Confirmar**  
- **Emprestimo → Renovar → Confirmar**  
- **Reserva → Cancelar**  

Projetados para **mínimo número de passos** (aplicação de princípios KLM/GOMS).

---

## 🎨 Decisões de Design
- **Cores**:  
  - Azul/índigo = confiança (ações principais).  
  - Amarelo quente = avisos (cancelar reserva, datas).  
- **Tipografia**: fonte sem serifa, clara em telas pequenas.  
- **Componentes**: cartões de livros com hierarquia visual (título > autor > descrição).  
- **Navegação**: menu fixo no topo para consistência.  

---

## 📂 Estrutura
biblioteca-ux-static/

index.html → Página inicial (busca de livros)

emprestimos.html → Página de empréstimos

reservas.html → Página de reservas

historico.html → Página de histórico

css/style.css → Estilos globais

js/app.js → Mock de dados


---

## 🚀 Como usar
1. Baixe/clique duas vezes em `index.html` para abrir no navegador.  
2. A navegação entre páginas é feita pelo menu superior.  
3. Não é necessário instalar nada (HTML estático).  

---
