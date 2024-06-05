"use client"
import ReactModal from 'react-modal';
import { useState } from 'react';
import { cars } from '@/data/CarCard';
import { Cars } from '@/data/Cars'; 
import { CustomButton } from '@/components/CustomButton';
import Btn from '@/components/Btn';

const Home = () => {
 
  //Abrir modal ao clicar na imagem
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formModal, setformModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Cars | null>(null);

  const handleOpenModal = (car: Cars) =>{
    setSelectedCar(car);
    setIsOpen(true);
  }
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedCar(null);
  }
  const openFormModal = () => {
    handleCloseModal();
    setformModal(true);
  }
  const closeFormModal = () => {
    setformModal(false);
  }
  //Style do Modal
  const customStyles={
    content:{
      top:'50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight:'-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '10px'    
    }
  }
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //evita ser recarregada a pag
    alert('Enviado!');
  }
  const [filter, setFilter] = useState<'Todos' | 'Venda' | 'Locação'>('Todos');

  // Filtrar os carros com base no estado de filtro, somente todos
  const filteredCars = filter === 'Todos' 
    ? cars 
    : cars.filter(car => car.vendaLocacao === filter);

  // Filtrando somente em destaque
  const featuredCars = filter === 'Todos'
  ? cars.filter(car => car.destaque === 'sim')
  : cars.filter(car => car.destaque === 'sim' && car.vendaLocacao === filter);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="items-center font-bold text-yellow-800 ">Filtrar Carros mostrados</p>
      <CustomButton onClick={() => setFilter('Venda')} label="Carros a venda" />
      <CustomButton onClick={() => setFilter('Locação')} label="Carros em locação" />
      <CustomButton onClick={() => setFilter('Todos')} label="Mostrar todos" />

      <div className="w-full flex">
        <div className="w-1/2 p-4 ">
          <h1 className="mb-4 text-2xl font-bold text-yellow-500 bg-gray-900 border border-gray-500 p-2">DESTAQUES</h1>
          {featuredCars.map((car) => (
            <div key={car.id} className="p-4 mb-4 font-bold text-black-500 border border-black flex flex-col items-center justify-center">
              <img src={car.img} alt={car.modelo} className="mb-4 w-45 h-32" onClick={() => handleOpenModal(car)} />
              <h2>{car.modelo}</h2>
          </div>
          ))}
        </div>
        <div className="w-1/2 p-4 ">
          <h1 className="mb-4 text-2xl font-bold text-yellow-500 bg-gray-900 border border-gray-500 p-2">TODOS</h1>
          {filteredCars.map((car) => (
            <div key={car.id} className="p-4 mb-4 font-bold text-black-500 border border-black flex flex-col items-center justify-center">
              <img src={car.img} alt={car.modelo} className="mb-4 w-45 h-32" onClick={() => handleOpenModal(car)} />
              <h2>{car.modelo}</h2>
            </div>
          ))}
        </div>
      </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                >
              {selectedCar && (
              <div>
              <h2 className='text-center font-bold mb-2'>{selectedCar.modelo}</h2>
              <p>"{selectedCar.descricao}"</p>
              <p className='text-center'>Ano: {selectedCar.ano}</p>
              <p className='text-center'>Valor: {selectedCar.valor}</p>
              <p className='text-center'>Código: {selectedCar.codigo}</p>
              <p className='text-center'>Venda/Locação: {selectedCar.vendaLocacao}</p>
              <p className='text-center mb-4'>Destaque: {selectedCar.destaque}</p>

              <div className='flex justify-center space-x-3 text-center mb-4 mr-2'>
                <Btn onClick={handleCloseModal} label="Fechar" />
                <Btn onClick={openFormModal} label="Comprar" />
              </div>             
              </div>
              )}
          </ReactModal>
             <ReactModal
                isOpen={formModal}
                onRequestClose={closeFormModal}
                style={customStyles}
                >
                <div>
                  <h2 className='text-center font-bold '>Formulário de Compra</h2>
                  <form onSubmit={handleFormSubmit}>
                    <p>Nome completo: </p>
                    <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3' placeholder="Seu nome completo" required/>
                    <p>Telefone: </p>
                    <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3' placeholder="Seu telefone"required/>
                    <p>E-mail: </p>
                    <input type="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4 mb-3' placeholder="Seu e-mail" required/>
                    <div className='mb-2'>
                    <input type="submit" value="Enviar" className='text-red-500 border border-red-500 p-2 mr-4'/>
                    <Btn onClick={closeFormModal} label="Fechar" />
                    </div>
                  </form>
                </div>
              </ReactModal>
    </main>
  );
};

export default Home;
