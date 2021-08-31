import React, { useEffect, useState } from 'react';
import Table from './Table'
import Loader from './Loader'
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    let formatData = await response.json();
    setIsLoading(false);
    setData(formatData);
  }

  useEffect(() => getData(), []);

  return (

    <div className="container">        {
      isLoading
        ? <Loader />
        : <Table
          data={data} />
    }
    </div>

  )
  
}
// class App extends Component {
//   state = {
//     isLoading: true,
//     data: []
//   }
//   async componentDidMount() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     this.setState({
//       isLoading: false,
//       data
//     })
//   }

//   render() {
//     return (
//       <div className="container">
//         {
//           this.state.isLoading
//             ? <Loader/>
//             : <Table
//               data={this.state.data} />
//         }
//       </div>
//     );
//   }
// }
export default App;
