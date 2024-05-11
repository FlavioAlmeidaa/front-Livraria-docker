import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  // Listar Categorias
  useEffect(() => {
    const fetchAllCategorias = async () => {
      try {
        const res = await axios.get("http://localhost:8081/categoria");
        setCategorias(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCategorias();
  }, []);

  console.log(categorias);

  // Deletar Categorias
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/categoria/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2 className='w-100 d-flex justify-content-center p-3'>Listando Categorias</h2>
      <div className='row'>
        <div className='col-md-12'>
          <p>
            <Link to="/addCategoria" className="btn btn-success">Adicionar nova Categoria</Link>
          </p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descrição</th>
                <th>Data Cadastro</th>
                <th>Data Alteração</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria) => {
                return (
                  <tr key={categoria.id}>
                    <td>{categoria.id}</td>
                    <td>{categoria.descricao} </td>
                    <td>{categoria.createdAt} </td>
                    <td>{categoria.updatedAt}</td>
                    <td>
                      <Link
                        to={`/readCategoria/${categoria.id}`}
                        className="btn btn-success mx-2"
                      >
                        Ler
                      </Link>
                      <Link
                        to={`/updateCategoria/${categoria.id}`}
                        className="btn btn-info mx-2"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(categoria.id)}
                        className="btn btn-danger"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCategorias;
