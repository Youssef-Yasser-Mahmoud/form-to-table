import './List.css';
function List({ arr }) {
  return (
    <table className='styled-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {arr.length == 0 ? (
          <p style={{ 'padding': '1rem', 'text-align': 'center', 'font-family': 'sans-serif' }}>no data yet</p>
        ) : (
          arr.map((obj) => (
            <tr key={Math.random()}>
              <td>{obj.name}</td>
              <td>{obj.age}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default List;
