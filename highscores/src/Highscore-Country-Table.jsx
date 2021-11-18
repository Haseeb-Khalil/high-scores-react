import React from "react";

const CountryTable = (props) => {
  //console.log(props);
  const { scores, name } = props.value;
  //console.log(scores);
  //console.log(name);
  return (
    <div className="table-wrapper">
      <div>
        <h2 className="country-name">High Scorers Of: {name}</h2>
      </div>

      <table className="table table-bordered table-hover table-responsive-sm">
        <thead>
          {/* <tr>
            <th className="country-name">High Scorers Of: {name}</th>
          </tr> */}
          <tr>
            <th>Names</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((person, index) => {
            return (
              <tr key={index}>
                <td>{person.n}</td>
                <td>{person.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
