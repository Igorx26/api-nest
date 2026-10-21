# API de Gestão Acadêmica 🎓

RESTful API desenvolvida como requisito para a disciplina de **Programação III** do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (ADS) do **Instituto Federal de Sergipe (IFS)**.

Este projeto consiste no back-end de um sistema de gestão universitária, fornecendo operações completas de CRUD (Create, Read, Update, Delete) e regras de negócio para instituições, cursos, tipos de curso, disciplinas, tipos de disciplina, títulos, professores, alunos, matrículas (`cursa`) e alocações de ensino (`leciona`).

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando boas práticas de desenvolvimento back-end escalável em Node.js:

* **[NestJS](https://nestjs.com/)**: Framework Node.js para construção de aplicações eficientes, confiáveis e escaláveis utilizando arquitetura modular.
* **[Prisma ORM](https://www.prisma.io/)**: Mapeamento objeto-relacional (ORM) para Node.js e TypeScript.
* **[PostgreSQL](https://www.postgresql.org/)**: Sistema gerenciador de banco de dados relacional.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código.
* **class-validator / class-transformer**: Bibliotecas para validação de dados (DTOs), decorators customizados (ex.: validação de idade mínima) e transformação de payloads.

---

## ⚙️ Arquitetura e Regras de Negócio

A API foi projetada com validação de integridade e regras de negócio centralizadas:

* **Validações nos DTOs (Fail-Fast):** Checagem de tipos, limites de caracteres (`@MaxLength`), valores permitidos (`@IsIn`), intervalos numéricos (`@Min`, `@Max`) e validação customizada de idade (`@Age`).
* **Tratamento de Exceções HTTP Padronizado:**
  * `400 Bad Request` para erros de validação de payload.
  * `404 Not Found` para registros inexistentes.
  * `409 Conflict` para violações de unicidade (siglas, descrições e chaves compostas duplicadas).
* **Consultas Otimizadas (`findAll` vs `findOne`):** Listagens gerais (`findAll`) carregam apenas relacionamentos diretos (`1:N` / `N:1` singulares), enquanto buscas específicas (`findOne`) expandem os relacionamentos em lista.
* **Chaves Primárias Compostas:** Suporte completo a rotas com chaves compostas nas tabelas associativas `cursa` e `leciona`.

---

## 📌 Módulos e Endpoints Principais

| Recurso | Rota Base | Identificador na Rota (`GET` / `PATCH` / `DELETE`) |
| :--- | :--- | :--- |
| **Instituição** | `/instituicao` | `/:id` |
| **Tipo de Curso** | `/tipo-curso` | `/:id` |
| **Curso** | `/curso` | `/:id` |
| **Tipo de Disciplina** | `/tipo-disciplina` | `/:id` |
| **Disciplina** | `/disciplina` | `/:id` |
| **Título** | `/titulo` | `/:id` |
| **Professor** | `/professor` | `/:id` |
| **Aluno** | `/aluno` | `/:id` |
| **Cursa (Matrícula)** | `/cursa` | `/:id_aluno/:id_disciplina/:in_ano/:in_semestre` |
| **Leciona** | `/leciona` | `/:id_professor/:id_disciplina` *(sem `PATCH`)* |

---

## 🛠️ Instalação e Execução

### Pré-requisitos
* **Node.js** (v18 ou superior)
* **PostgreSQL** rodando localmente ou via container (Docker)

### Passos para rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd api_nest
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com a URL de conexão do seu banco de dados PostgreSQL:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
   ```

4. **Gere o cliente do Prisma e sincronize o banco de dados:**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run start:dev
   ```

A API estará disponível em `http://localhost:3000`.

---

## 👨‍💻 Autor

**Igor Martins Silva**  
Estudante de Análise e Desenvolvimento de Sistemas – IFS
