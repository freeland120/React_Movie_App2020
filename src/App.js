import React from "react";

function TableTennis(props) {
  return (
    <div>
      <h1>I like {props.name}</h1>
      <img src={props.image}></img>
    </div>
  );
}

const players = [
  {
    id: 1,
    name: "Ma_Long",
    image:
      "http://www2.pictures.zimbio.com/gi/Ma+Long+Olympics+Day+12+Table+Tennis+WzwGbSgQnoUl.jpg"
  },
  {
    id: 2,
    name: "Fan_Zhendong",
    image:
      "https://newfanzoneblog.files.wordpress.com/2018/04/fan-zhendong-ittf-world-ranking-table-tennis-e1522773561798.jpg?w=675&h=380&crop=1"
  },
  {
    id: 3,
    name: "Xu_Xin",
    image:
      "http://www3.pictures.zimbio.com/gi/Xu+Xin+Table+Tennis+Olympics+Day+9+3cnk4fxMlTal.jpg"
  }
];

function renderPlayer(who) {
  return <TableTennis key={who.id} name={who.name} image={who.image} />;
}

function App() {
  return (
    <div className="App">
      <h1>Which player is best in table tennis?</h1>
      {players.map(renderPlayer)}
    </div>
  );
}

export default App;
