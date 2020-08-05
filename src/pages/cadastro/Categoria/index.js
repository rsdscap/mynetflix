import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const categoriaVO = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [registros, setRegistros] = useState(categoriaVO);

  function setRegistro(chave, valor) {
    setRegistros({
      ...registros,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    // const {getAttribute, value} = infosDoEvento.target;
    setRegistro(
      // getAttribute('name'),
      // value

      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,

    );
  }

  useEffect(() => {
    console.log('teste teste teste efeito');
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (respostaServidor) => {
      const jsonResposta = await respostaServidor.json();
      setCategorias([
        ...jsonResposta,
      ]);
    });

/*  setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria loka',
          cor: '#cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Uma categoria loka  2',
          cor: '#cbd1ff',
        },
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {registros.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          registros,
        ]);

        setRegistro({ categoriaVO });
      }}
      >

        <FormField
          label="Nome Categoria"
          type="text"
          name="nome"
          value={registros.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={registros.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={registros.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
