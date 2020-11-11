import React from 'react';
import { useState } from 'react';

const style = {
    form: {
      container: {
        padding: '20px',
        border: '2px solid purple',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px'
      },
      inputs: {
        marginBottom: '5px'
      },
      submitBtn: {
        marginTop: '10px',
        padding: '10px 15px',
        border:'none',
        color: 'white',
        backgroundColor: 'purple',
        fontSize: '14px',
        borderRadius: '5px'
      }
    }
  }

  function ChoreForm({ addChoreLog }) {
    const [choreDesc, setChoreDesc] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const handleSubmit= (e) => {
      addChoreLog([choreDesc, name, date])
      e.preventDefault();
    }
  
    return (
      <form onSubmit={e => { handleSubmit(e) }} style={style.form.container}>
        <label>Chore description:</label>
        <br />
        <input 
          style={style.form.inputs}
          name='choreDesc' 
          type='text'
          value={choreDesc}
          onChange={e => setChoreDesc(e.target.value)}
        />
        <br/>
        <label>Name:</label>
        <br />
        <input 
          style={style.form.inputs}
          name='name' 
          type='text' 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label>Date:</label>
        <br />
        <input
          style={style.form.inputs}
          name='date' 
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <br/>
        <input 
          style={style.form.submitBtn} 
          className='submitButton'
          type='submit' 
          value='Add Log' 
        />
      </form>
    )
  }

  export default ChoreForm;


