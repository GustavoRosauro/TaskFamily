import React,{useState,useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { request } from 'http';
const App = () => {
  const [lista,setLista] = useState([]);
  const [listaFilter,setListaFilter] = useState([]);
  const [show, setShow] = useState(false);
  const [editShow,setEditShow] = useState(false);
  const [itemEdit, setItemEdit] = useState({
    id:0,
    titulo:'',
    descricao:'',
    finalizado:0    
  })
  const handleClose = async() => {
    setShow(false)
    await carregar();
  }  
  const notification = ()=>{    
    if(Notification.permission === 'granted'){
      navigator.serviceWorker.ready.then('Novo Item Adicionado',{
        body:'Adicionado nova marcação'
      })
    }
  }
  const handleShow = () => setShow(true);

  const handleCloseEdit = async() => {
    setEditShow(false)
    await carregar();
  }
  const handleShowEdit = (item) => {
    setItemEdit(item)
    setEditShow(true)
  };
  useEffect(async()=>{
    if(Notification.permission !== 'granted'){
      await Notification.requestPermission();
    }
    await carregar();
    
  },[])
  const carregar = async()=>{
    let data = await axios.get('/tasks');
    setLista(data.data);
    setListaFilter(data.data);
    console.log(data.data);
  }
  const salvar = async()=>{
    await axios.post('/tasks',item).then(async()=>{
      handleClose();
      await notification();
    });   
  }
  const deletar = async (id)=>{
     await axios.delete(`/tasks/${id}`).then(async()=>{
       await carregar();
     });    
  }
  const deletarTodos = async ()=>{
    await axios.delete(`/tasks`).then(async()=>{
      await carregar();
    });    
 }
 
 const alterar = async(novoItem)=>{
   let sendItem ={    
    finalizado: novoItem.finalizado == "0"?"1":"0"
   }
  await axios.put(`/tasks/${novoItem.id}`,sendItem).then(async()=>{
    await carregar();
  })
 }
 const HandleInputChange = (e) =>{
   const {name,value} = e.target;
   setItemEdit({
     ...itemEdit,[name]: value
   }) 
 }
 const editItem = async()=>{
    let data  = await axios.put(`/tasksItem/${itemEdit.id}`,itemEdit);
    await handleCloseEdit();   
    await notification();
 }
  let item = {
    titulo:'',
    descricao:'',
    finalizado:0
  }
  return (
    <div className='col-md-12'>
      <h1>Marcador Tarefas</h1>
      <button className='btn btn-primary btn-sm' onClick={handleShow}>Cadastrar Item</button>
      <button className='btn btn-danger btn-sm' style={{float:'right'}} onClick={()=>deletarTodos()}>Remover todos os itens</button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descricao</th>
            <th>Finalizado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td colSpan={"3"}><input className="form-control" placeholder='Titulo.....' onChange={(e)=>setLista(listaFilter.filter(x => x.titulo.toUpperCase().includes(e.target.value.toUpperCase())))}/></td>
          </tr>
          {
            lista.map(item =>
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.descricao}</td>
                <td><input type={'checkbox'} checked={item.finalizado === "1"} onChange={()=>alterar(item)}/></td>
                <td><button className='btn btn-danger btn-sm' onClick={()=>deletar(item.id)}>Remover</button> || <button className="btn btn-warning btn-sm" onClick={()=>handleShowEdit(item)}>Editar</button></td>
              </tr>)
          }
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Titulo</label>
          <input className='form-control' onChange={(e)=>item.titulo = e.target.value}/>
          <label>Descricao</label>
          <input className='form-control' onChange={(e)=>item.descricao = e.target.value}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={salvar}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={editShow} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Titulo</label>
          <input className='form-control' name="titulo" value={itemEdit.titulo} onChange={HandleInputChange}/>
          <label>Descricao</label>
          <input className='form-control' name="descricao" value={itemEdit.descricao} onChange={HandleInputChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Fechar
          </Button>
          <Button variant="primary" onClick={editItem}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>      
    </div>
  );
}

export default App;
