import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js'

function App() {
  return (
    <>
      <Particles
      params={{
        particles:{
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#4b0082"
            }
          }
        }
      }}
      />
      <Navbar />
      <Header />

    </>
  );
}

export default App;
