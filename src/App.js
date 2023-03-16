import { useState } from 'react';
// import './App.css';
// import Modal from './components/Modal';
// import mouse from './images/mouse.jpg';
// import onBtn from './images/onBtn.png';
// import ImageToggler from './components/ImageToggler';
import ForrestImage from './components/ForrestImage';

// function App() {

//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <div className="App">
//             <h1>Hey, click on the button to open the modal.</h1>
//             <img src={mouse} alt="mouse"
//             className="openModalBtn" 
//             onClick={() =>{
//               setOpenModal(true);
//             }}/>

//             {openModal && <Modal closeModal={setOpenModal}/>}
//           </div>
//   );
// }


function App() {

  return(
    <div className="App">
      <ForrestImage />
    </div>
  );
}

export default App;
