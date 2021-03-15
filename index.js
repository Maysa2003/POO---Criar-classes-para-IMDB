/* Lógico_4: */

CREATE TABLE Redes_sociais_ (
    Id INTEGER PRIMARY KEY,
    instagram_ VARCHAR,
    facebook VARCHAR,
    whatsApp VARCHAR
);

CREATE TABLE Influenciadores (
    CPF INTEGER PRIMARY KEY,
    nome BOOLEAN,
    cidade VARCHAR,
    telefone INTEGER,
    divulgacao VARCHAR
);

CREATE TABLE midias (
    Arquivo BOOLEAN PRIMARY KEY,
    fotos VARCHAR,
    videos VARCHAR,
    links VARCHAR
);

CREATE TABLE comercio (
    CNPJ INTEGER PRIMARY KEY,
    estabeleciemento VARCHAR,
    administrador VARCHAR
);

CREATE TABLE vendas (
    Codigo_do_produto VARCHAR PRIMARY KEY,
    marca_do_produto_ VARCHAR,
    agrupamento_do_produto_ VARCHAR,
    preco INTEGER
);

CREATE TABLE comunicacao (
    Id INTEGER PRIMARY KEY,
    chat VARCHAR,
    telefone INTEGER,
    story VARCHAR,
    fk_vendas_Codigo_do_produto VARCHAR
);

CREATE TABLE possui_ (
    fk_Redes_sociais__Id INTEGER,
    fk_Influenciadores_CPF INTEGER
);

CREATE TABLE tem (
    fk_Redes_sociais__Id INTEGER,
    fk_midias_Arquivo BOOLEAN
);

CREATE TABLE colaboram (
    fk_Influenciadores_CPF INTEGER,
    fk_comercio_CNPJ INTEGER
);

CREATE TABLE ajudam (
    fk_comercio_CNPJ INTEGER,
    fk_vendas_Codigo_do_produto VARCHAR
);
