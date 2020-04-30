import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Head";
import Content from "./components/Content";
import DropForm from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
      <Header title={data.title} url={data.url}/>
      <DropForm />
      <Content date={data.date} explanation={data.explanation}/>
    </div>
  );
}

export default App;
