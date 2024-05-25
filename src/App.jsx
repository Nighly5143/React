import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: 'Clent',
    netWorth: 10000,
    address: 'Pinayagan'
  });

  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [netWorthInput, setNetWorthInput] = useState('');

  function handeNameChange(event) {
    setNameInput(event.target.value);
  }

  function handeAddressChange(event) {
    setAddressInput(event.target.value);
  }

  function handeNetWorthChange(event) {
    setNetWorthInput(event.target.value);
  }

  function handleSubmit() {
    setPerson(prevPerson => {
      return {
       ...prevPerson,
        name: nameInput || prevPerson.name,
        address: addressInput || prevPerson.address,
        netWorth: netWorthInput || prevPerson.netWorth
      };
    });
    setNameInput('');
    setAddressInput('');
    setNetWorthInput('');
  }

  return (
    <div className="container">
      <h1 className="title">Personal Information</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{person.name}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{person.address}</td>
          </tr>
          <tr>
            <th>Net Worth</th>
            <td>{person.netWorth}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={nameInput} onChange={handeNameChange} /><br />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={addressInput} onChange={handeAddressChange} /><br />
          <label htmlFor="netWorth">Net Worth</label>
          <input type="text" id="netWorth" value={netWorthInput} onChange={handeNetWorthChange} />
        </div>
        <button onClick={handleSubmit}>Update</button>
        {/* <button>Delete</button> */}
      </div>
    </div>
  );
}