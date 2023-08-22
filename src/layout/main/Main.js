import { useEffect, useState } from "react";
import playersArray from "../../players";
import "./Main.css";
import imgURL from "../../assets/shirt.png";

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  useEffect(() => {
    setPlayers(playersArray);
  }, []);

  const createPlayer = () => {
    setModalVisibility(true);
  };

  const hideAddForm = () => {
    setModalVisibility(false);
  };

  const deletePlayer = (id) => {
    const newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers);
  };
  return (
    <main className="main">
      <section className="transfer-section">
        <div className="container">
          <div className="row my-1">
            <div className="col">
              <button
                className="btn btn-sm my-3 btn-primary"
                onClick={createPlayer}
                disabled={modalVisibility}
              >
                Add a player
              </button>
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h3>➕ Add football player</h3>
                </div>
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-4">
                      <h5>Player's age</h5>
                      <div className="btn-group">
                        <button className="btn btn-secondary">-</button>
                        <button className="btn btn-light" disabled>
                          0
                        </button>
                        <button className="btn btn-primary">+</button>
                      </div>
                    </div>
                    <div className="col-4">
                      <img
                        src={imgURL}
                        className="shirt-img img-fluid"
                        alt="Football player"
                      />
                    </div>
                    <div className="col-4">
                      <h5>Player's value</h5>
                      <div className="btn-group">
                        <button className="btn btn-secondary">-</button>
                        <button className="btn btn-light" disabled>
                          0
                        </button>
                        <button className="btn btn-primary">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-danger m-1">Cancel</button>
                  <button className="btn btn-success m-1">Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <table className="table table-light table-striped table-hover border table-responsive">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market value</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {players.map((player, index) => (
                    <tr key={player.id}>
                      <td>{index + 1}</td>
                      <td>{player.name}</td>
                      <td>{player.age}</td>
                      <td>{player.club}</td>
                      <td>
                        <span className="badge bg-primary">
                          💰 ${player.value}.00m
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deletePlayer(player.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
