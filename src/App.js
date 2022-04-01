
import './App.css';
import ReactSearchBox from 'react-search-box'
const styleComponent = {
  marginTop:'10px',
  bagroundColor:'red'
  // width:'500px'
  }

function App() {
  
  const jsonData = [
    { key :"manjeet",
      value:"Manjeet singh"
    },
    { key :"abhishek",
      value:"Abhishek Chandra"
    },
    { key :"manish",
      value:"Manish singh"
    },
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  
  return (
    <div style={{backgroundColor:'blue',width:'100%',height:'1000px'}}>
        <div  style ={styleComponent} >
          <ReactSearchBox
          placeholder="Search-Box"
          value=""
          data={jsonData}
          callback={(record) => console.log(record)}
          />
        </div>
    </div>
  );
}

export default App;
