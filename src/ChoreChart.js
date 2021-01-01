import React from 'react'


const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '2px solid purple',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  }
}

function ChoreChart(props) {
  // const { chores } = props
  return (
    <table style={style.table}>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        </thead> 
            {props.chores.map((v, i) => {
        return <tr>
          <th style={style.tableCell}>{v[0]}</th>
          <th style={style.tableCell}>{v[1]}</th>
          <th style={style.tableCell}>{v[2]}</th>
        </tr>
      })}
    </table>
  );
}

export default ChoreChart;