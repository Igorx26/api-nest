CREATE TABLE titulo (
    id_titulo SERIAL PRIMARY KEY,
    tx_descricao VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE instituicao (
    id_instituicao SERIAL PRIMARY KEY,
    tx_sigla VARCHAR(15) UNIQUE NOT NULL,
    tx_descricao VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE tipo_curso (
    id_tipo_curso SERIAL PRIMARY KEY,
    tx_descricao VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE tipo_disciplina (
    id_tipo_disciplina SERIAL PRIMARY KEY,
    tx_descricao VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE aluno (
    id_aluno SERIAL PRIMARY KEY,
    tx_nome VARCHAR(100) NOT NULL,
    tx_sexo CHAR(1) NOT NULL CHECK (tx_sexo IN ('m', 'f')),
    dt_nascimento DATE NOT NULL
);

CREATE TABLE curso (
    id_curso SERIAL PRIMARY KEY,
    id_instituicao INTEGER NOT NULL,
    id_tipo_curso INTEGER NOT NULL,
    tx_descricao VARCHAR(150) NOT NULL,
    UNIQUE (id_instituicao, id_tipo_curso, tx_descricao),
    FOREIGN KEY (id_instituicao) REFERENCES instituicao (id_instituicao),
    FOREIGN KEY (id_tipo_curso) REFERENCES tipo_curso (id_tipo_curso)
);

CREATE TABLE professor (
    id_professor SERIAL PRIMARY KEY,
    id_titulo INTEGER NOT NULL,
    tx_nome VARCHAR(50) NOT NULL,
    tx_sexo CHAR(1) DEFAULT 'm' NOT NULL CHECK (tx_sexo IN ('m', 'f')),
    tx_estado_civil CHAR(1) DEFAULT 's' NOT NULL CHECK (tx_estado_civil IN ('s', 'c', 'd')),
    dt_nascimento DATE NOT NULL,
    tx_telefone VARCHAR(13) NOT NULL,
    FOREIGN KEY (id_titulo) REFERENCES titulo (id_titulo)
);

CREATE TABLE disciplina (
    id_disciplina SERIAL PRIMARY KEY,
    id_curso INTEGER,
    id_tipo_disciplina INTEGER NOT NULL,
    tx_sigla VARCHAR(10) UNIQUE NOT NULL,
    tx_descricao VARCHAR(150) UNIQUE NOT NULL,
    in_periodo INTEGER NOT NULL CHECK (in_periodo >= 1),
    in_carga_horaria INTEGER NOT NULL CHECK (in_carga_horaria >= 40),
    FOREIGN KEY (id_curso) REFERENCES curso (id_curso),
    FOREIGN KEY (id_tipo_disciplina) REFERENCES tipo_disciplina (id_tipo_disciplina)
);

CREATE TABLE leciona (
    id_professor INTEGER NOT NULL,
    id_disciplina INTEGER NOT NULL,
    PRIMARY KEY (id_professor, id_disciplina),
    FOREIGN KEY (id_professor) REFERENCES professor (id_professor) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_disciplina) REFERENCES disciplina (id_disciplina) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cursa (
    id_aluno INTEGER NOT NULL,
    id_disciplina INTEGER NOT NULL,
    in_ano INTEGER NOT NULL,
    in_semestre INTEGER NOT NULL,
    in_faltas INTEGER DEFAULT 0 NOT NULL CHECK (in_faltas >= 0),
    nm_nota1 NUMERIC(4,2) CHECK (nm_nota1 >= 0),
    nm_nota2 NUMERIC(4,2) CHECK (nm_nota2 >= 0),
    nm_nota3 NUMERIC(4,2) CHECK (nm_nota3 >= 0),
    bl_aprovado BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY (id_aluno, id_disciplina, in_ano, in_semestre),
    FOREIGN KEY (id_aluno) REFERENCES aluno (id_aluno) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_disciplina) REFERENCES disciplina (id_disciplina) ON UPDATE CASCADE ON DELETE CASCADE
);