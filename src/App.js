import logo from './logo.svg';
import './App.css';

function App() {

  const movies = [
    {
      pic:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      name: "RRR",
      matter: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      pic: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      name: "Iron man 2",
      matter: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      pic: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      name: "No Country for Old Man",
      matter: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      pic: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      name: "Jai Bhim",
      matter: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case."
    },
    
  ]

  return (

    <div className="App">
      {movies.map((mvis) => 
        <AllMovies pic = {mvis.pic} name = {mvis.name}  matter = {mvis.matter}/>
      )}
    </div>
  );
}

export default App;

function AllMovies({pic,name,matter}){
  return(
    <div className = "moviedetails">
      <img className = "moviesPoster" src={pic} alt={name}></img>
      <h1 className="mvisname">{name}</h1>
      <p>{matter}</p>
    </div>
  )
} 
