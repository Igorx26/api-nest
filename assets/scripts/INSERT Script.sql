INSERT INTO titulo (tx_descricao) VALUES
('Graduação'),
('Especialização Lato Sensu'),
('Mestrado Acadêmico'),
('Mestrado Profissional'),
('Doutorado'),
('Pós-Doutorado'),
('Livre-Docência'),
('Técnico'),
('Tecnólogo'),
('MBA');

INSERT INTO instituicao (tx_sigla, tx_descricao) VALUES
('USP', 'Universidade de São Paulo'),
('UNICAMP', 'Universidade Estadual de Campinas'),
('UFRJ', 'Universidade Federal do Rio de Janeiro'),
('UFMG', 'Universidade Federal de Minas Gerais'),
('UFRGS', 'Universidade Federal do Rio Grande do Sul'),
('UNESP', 'Universidade Estadual Paulista'),
('UFSC', 'Universidade Federal de Santa Catarina'),
('UFPR', 'Universidade Federal do Paraná'),
('UnB', 'Universidade de Brasília'),
('UFPE', 'Universidade Federal de Pernambuco');

INSERT INTO tipo_curso (tx_descricao) VALUES
('Bacharelado'),
('Licenciatura'),
('Formação Tecnológica'),
('Especialização'),
('Mestrado'),
('Doutorado'),
('Pós-Doutorado'),
('Curso de Extensão'),
('Ensino Técnico Integrado'),
('Ensino Técnico Subsequente');

INSERT INTO tipo_disciplina (tx_descricao) VALUES
('Obrigatória'),
('Optativa'),
('Eletiva'),
('Atividade Complementar'),
('Trabalho de Conclusão de Curso (TCC)'),
('Estágio Obrigatório'),
('Estágio Não Obrigatório'),
('Módulo Prático Laboratorial'),
('Módulo Teórico'),
('Projeto de Pesquisa e Extensão');

INSERT INTO aluno (tx_nome, tx_sexo, dt_nascimento) VALUES
('Ana Clara Silva', 'f', '2000-05-14'),
('Bruno Costa', 'm', '1999-08-21'),
('Carlos Eduardo Pereira', 'm', '2001-02-10'),
('Daniela Alves', 'f', '2002-11-30'),
('Eduardo Lima', 'm', '1998-07-05'),
('Fernanda Souza', 'f', '2000-09-12'),
('Gabriel Santos', 'm', '2001-04-25'),
('Helena Ribeiro', 'f', '1999-12-15'),
('Igor Martins', 'm', '2002-01-08'),
('Juliana Carvalho', 'f', '2000-03-22');

INSERT INTO curso (id_instituicao, id_tipo_curso, tx_descricao) VALUES
(1, 1, 'Engenharia de Computação'),
(2, 1, 'Ciência da Computação'),
(3, 2, 'Matemática Licenciatura'),
(4, 1, 'Sistemas de Informação'),
(5, 3, 'Análise e Desenvolvimento de Sistemas'),
(6, 1, 'Engenharia Elétrica'),
(7, 1, 'Administração de Empresas'),
(8, 2, 'Física Licenciatura'),
(9, 1, 'Direito'),
(10, 1, 'Medicina');

INSERT INTO professor (id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone) VALUES
(5, 'Roberto Gomes', 'm', 'c', '1975-04-12', '11999998888'),
(3, 'Camila Rocha', 'f', 's', '1982-10-25', '21988887777'),
(6, 'Antonio Moraes', 'm', 'd', '1968-02-08', '31977776666'),
(5, 'Luciana Mendes', 'f', 'c', '1979-06-30', '41966665555'),
(2, 'Marcos Vinicius', 'm', 's', '1985-11-14', '51955554444'),
(4, 'Patrícia Castro', 'f', 'c', '1973-08-22', '61944443333'),
(3, 'Ricardo Oliveira', 'm', 'd', '1980-01-19', '71933332222'),
(5, 'Silvia Ferreira', 'f', 's', '1977-09-05', '81922221111'),
(6, 'Tiago Nogueira', 'm', 'c', '1965-12-10', '91911110000'),
(3, 'Vanessa Lopes', 'f', 'c', '1988-03-27', '85900009999');

INSERT INTO disciplina (id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria) VALUES
(1, 1, 'ALG01', 'Algoritmos e Estruturas de Dados I', 1, 60),
(1, 1, 'CALC1', 'Cálculo Diferencial e Integral I', 1, 90),
(2, 1, 'BD01', 'Introdução a Banco de Dados', 3, 60),
(2, 2, 'IA01', 'Fundamentos de Inteligência Artificial', 5, 60),
(3, 1, 'ALGL1', 'Álgebra Linear', 2, 60),
(4, 1, 'RED01', 'Redes de Computadores I', 4, 60),
(5, 1, 'ENG01', 'Engenharia de Software Moderna', 3, 60),
(6, 1, 'ELE01', 'Circuitos Elétricos e Lógicos', 2, 90),
(7, 2, 'EMP01', 'Empreendedorismo e Inovação', 4, 45),
(10, 1, 'ANA01', 'Anatomia Humana Geral', 1, 120);

INSERT INTO leciona (id_professor, id_disciplina) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 9),
(9, 10);

INSERT INTO cursa (id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado) VALUES
(1, 1, 2023, 1, 2, 8.50, 9.00, 8.00, true),
(2, 1, 2023, 1, 10, 4.00, 5.50, 5.00, false),
(3, 2, 2023, 1, 0, 9.50, 10.00, 9.00, true),
(4, 3, 2024, 1, 4, 7.00, 7.50, 8.00, true),
(5, 4, 2024, 2, 15, 3.00, 2.50, 4.00, false),
(6, 5, 2023, 2, 0, 10.00, 9.50, 10.00, true),
(7, 6, 2025, 1, 6, 6.00, 6.50, 7.00, true),
(8, 7, 2025, 2, 2, 8.00, 8.00, 8.50, true),
(9, 8, 2024, 1, 8, 5.50, 6.00, 6.50, false),
(10, 10, 2025, 1, 0, 9.00, 8.50, 9.50, true);