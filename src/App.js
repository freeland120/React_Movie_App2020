import React from "react";
import PropTypes from "prop-types";

const players = [
  {
    id: 1,
    name: "Ma_Long",
    image:
      "http://www2.pictures.zimbio.com/gi/Ma+Long+Olympics+Day+12+Table+Tennis+WzwGbSgQnoUl.jpg",
    rating: 10.0
  },
  {
    id: 2,
    name: "Fan_Zhendong",
    image:
      "https://newfanzoneblog.files.wordpress.com/2018/04/fan-zhendong-ittf-world-ranking-table-tennis-e1522773561798.jpg?w=675&h=380&crop=1",
    rating: 9.8
  },
  {
    id: 3,
    name: "Xu_Xin",
    image:
      "http://www3.pictures.zimbio.com/gi/Xu+Xin+Table+Tennis+Olympics+Day+9+3cnk4fxMlTal.jpg",
    rating: 9.7
  }
];

function TableTennis(props) {
  return (
    <div>
      <h1>
        I like {props.name}({props.id})
      </h1>
      <h4>이 선수의 점수는 :{props.rating}/10.0</h4>
      <img src={props.image} alt={props.name}></img>
    </div>
  );
}

function renderPlayer(who) {
  return (
    <TableTennis
      key={who.id}
      name={who.name}
      image={who.image}
      rating={who.rating}
    />
  );
}

TableTennis.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      <h1>Which player is best in table tennis?</h1>
      {players.map(renderPlayer)}
    </div>
  );
}

export default App;
