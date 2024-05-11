import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState({
    titulo: "",
    createdAt: "",
    updatedAt: ""
  });

  const [editoras, setEditoras] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resEditoras = await axios.get("http://localhost:8081/editora");
        const resCategorias = await axios.get("http://localhost:8081/categoria");
        const resAutores = await axios.get("http://localhost:8081/autor");

        setEditoras(resEditoras.data);
        setCategorias(resCategorias.data);
        setAutores(resAutores.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    axios.get(`http://localhost:8081/livro/${id}`)
      .then(res => {
        setLivro(res.data);
      })
      .catch(err => console.log(err))
  }, [id]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/livro/${id}`, livro);
      navigate("/livro");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Formulário para Editar o Livro</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input type="text" className="form-control" id="id"
            placeholder="ID"
            name="id" value={livro.id} disabled
            onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Titulo</label>
          <input type="text" className="form-control"
            id="titulo" placeholder="Titulo do livro"
            name="titulo" value={livro.titulo}
            onChange={handleChange} />
        </div>
              <label className="form-label">Editora:</label>
              <select className="form-control" name="fk_editora" onChange={handleChange}>
                <option value="">Selecione uma editora</option>
                {editoras.map((editora) => (
                  <option key={editora.id} value={editora.id}>{editora.descricao}</option>
                ))}
              </select>
              <div className="mb-3 mt-3">
              <label className="form-label">Categoria:</label>
              <select className="form-control" name="fk_categoria" onChange={handleChange}>
                <option value="">Selecione uma categoria</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
                ))}
              </select>
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Autor:</label>
              <select className="form-control" name="fk_autor" onChange={handleChange}>
                <option value="">Selecione um autor</option>
                {autores.map((autor) => (
                  <option key={autor.id} value={autor.id}>{autor.nome}</option>
                ))}
              </select>
              </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Data de Criação:</label>
          <input type="text" className="form-control"
            id="createdAt" placeholder="Data de criação"
            name="createdAt"
            value={livro.createdAt} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Data de Alteração:</label>
          <input type="text" className="form-control"
            id="updatedAt" placeholder="Data de Alteração"
            name="updatedAt" value={livro.updatedAt}
            onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Alterar</button>
      </form>
      <div className='container d-flex justify-content-center'>
        <Link to="/livros">Veja todos os livros</Link>
      </div>
    </div>
  )
}

export default UpdateLivro;
