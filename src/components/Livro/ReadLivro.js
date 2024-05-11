import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadLivro = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8081/livro/${id}`)
      .then(res => {
        setLivro(res.data);
      })
      .catch(err => console.log(err))
  }, [id]);

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <h1>Detalhes do Livro</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Editora</th>
                <th>Categoria</th>
                <th>Autor</th>
                <th>Data Cadastro</th>
                <th>Data Alteração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                    <td>{livro.id}</td>
                    <td>{livro.titulo}</td>
                    <td>{livro.fk_editora}</td>
                    <td>{livro.fk_categoria}</td>
                    <td>{livro.fk_autor}</td>
                    <td>{livro.createdAt}</td>
                    <td>{livro.updatedAt}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadLivro;
