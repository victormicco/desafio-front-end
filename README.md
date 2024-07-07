# Desafio Blue Front-End
- [Link em Produção](https://desafio-front-end-phi.vercel.app/)
- E-mail para contato: victor.oficial093@gmail.com
- [Linkedin](https://www.linkedin.com/in/victormicco/)
## O que há nele?
- Foi utilizado Turborepo para construir uma arquitetura de Monorepo compartilhando pacotes entre o projeto de front-end e as rotas de back-end.
- Princípio de inversão de dependência nos componentes para manter a boa qualidade e facilidade de testes.
- Responsabilidade Única entre funções.
- Testes Unitários
- Deploy do Front-end na Vercel - Back-end na Render
- Versão de dados com Mock e com API (Caso a API caia na Render)

### Pacotes compartilhados:
- Biome
- Vitest
- Turbo
- @types/node
- typescript
  
### Front-end
- Shadcn UI
- React Hook Form
- Recharts
- Ky para HTTP Requests.
- react-google-charts.
- Zod
- Vitest
- React Testing Library
  
### Back-end
- Fastify
  
##  Login:
-  User: admin
-  Senha: admin

##  **Links:**  
-  [Repositório](https://github.com/victormicco/desafio-front-end)
-  [Link em Produção](https://desafio-front-end-phi.vercel.app/)


##  Instruções para Iniciar

1. **Clone o repositório:**
   ```bash
   gh repo clone victormicco/desafio-front-end
   ```

2. **Instale as dependências:**
   ```bash
   pnpm i
   ```

3. **Execute a aplicação:**
   ```bash
   pnpm dev
   ```

4. **Acesse o front-end:**
   ```
   http://localhost:3000
   ```

5. **Acesse o back-end:**
   ```
   http://[::1]:3333/
   ```

## To do
- [x] Arrumar Responsividade
- [ ]  E2E Backend
- [ ]  E2E Front
- [ ]  S.O.L.I.D Back
- [ ]  Validations and Error treatment Back
