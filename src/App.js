import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEditoras from './components/Editora/ListEditora';
import AddEditora from './components/Editora/AddEditora';
import ReadEditora from './components/Editora/ReadEditora';
import UpdateEditora from './components/Editora/UpdateEditora';

import ListAutor from './components/Autor/ListAutor';
import AddAutor from './components/Autor/AddAutor';
import ReadAutor from './components/Autor/ReadAutor';
import UpdateAutor from './components/Autor/UpdateAutor';

import ListCategoria from './components/Categoria/ListCategoria';
import AddCategoria from './components/Categoria/AddCategoria';
import UpdateCategoria from './components/Categoria/UpdateCategoria';
import ReadCategoria from './components/Categoria/ReadCategoria';

import ListLivro from './components/Livro/ListLivro';
import AddLivro from './components/Livro/AddLivro';
import UpdateLivro from './components/Livro/UpdateLivro';
import ReadLivro from './components/Livro/ReadLivro';


function App() {
return (
<div className="App">
<header className="App-header">
<BrowserRouter>
<Routes>

<Route path="/editora" element={<ListEditoras/>} />
<Route path="/addEditora" element={<AddEditora/>} />
<Route path="/readEditora/:id" element={<ReadEditora/>} />
<Route path="/updateEditora/:id" element={<UpdateEditora/>} />

<Route path="/autor" element={<ListAutor/>} />
<Route path="/addAutor" element={<AddAutor/>} />
<Route path="/readAutor/:id" element={<ReadAutor/>} />
<Route path="/updateAutor/:id" element={<UpdateAutor/>} />

<Route path="/categoria" element={<ListCategoria/>} />
<Route path="/addCategoria" element={<AddCategoria/>} />
<Route path="/readCategoria/:id" element={<ReadCategoria/>} />
<Route path="/updateCategoria/:id" element={<UpdateCategoria/>} />

<Route path="/livro" element={<ListLivro/>} />
<Route path="/addLivro" element={<AddLivro/>} />
<Route path="/readLivro/:id" element={<ReadLivro/>} />
<Route path="/updateLivro/:id" element={<UpdateLivro/>} />

</Routes>
</BrowserRouter>
</header>
</div>
);
}
export default App;
