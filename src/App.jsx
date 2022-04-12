import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//components
import MyButton from './components/button';
import MyTable from './components/table';




function App() {
  const [counter, setCounter] = useState(0);

  const [buttonName, setButtonName] = useState('button dari state')

  let [data, setData] = useState([
    {
      id : 1,
      name : 'Jono',
      age : 10
    },
    {
      id : 2,
      name : 'Paijo',
      age : 20
    },
    {
      id : 3,
      name : 'Nepnew',
      age : 30
    }
  ])



  const handleCounter = (num) =>{
    setCounter(counter+num);
  }

  const handleDelete = (id) => {
    setData(data.filter(v => v.id !== id));
    
    
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //       {counter} click!
    //     </p>
    //     <button onClick={() => handleCounter(5)}>Click me!</button>
    //     <MyButton 
    //     buttonName = {buttonName}
    //     buttonClick = {() => handleCounter(1)}
    //      />
    //      <button type="button" className="btn btn-primary">Primary</button>
    //   </header>
    // </div>
    <div className="container">
      <div className="row">
        <table className='table'>
        <thead>
          <tr>
            <th scope="col">Nama</th>
            <th scope="col">Umur</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            data.map(item => {
              return(
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><button type="button" className="btn btn-danger" value={item.id} onClick={() => handleDelete(item.id)}>Delete</button></td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default App;
