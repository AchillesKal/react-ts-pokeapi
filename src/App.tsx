import React, { Component } from "react";
import { render } from "react-dom";

import PokemonList from "./components/PokemonList";
import Modal from "./components/Modal";
import PokemonCard from "./components/PokemonCard";

import "./index.css";

interface AppProps {}
interface AppState {
  modalVisible: boolean;
  modalContent: any;
  randomPokemon: object;
  scrollable: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      modalContent: "",
      randomPokemon: {},
      scrollable: true,
    };

    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  apiBasePath = process.env.REACT_APP_API_ENDPOINT;

  async fetchRandomPokemon() {
    const apiCall = await fetch(
      this.apiBasePath + "pokemon/" + this.generateRandomInteger(1, 800)
    );
    const data = await apiCall.json();

    this.setState((state, props) => {
      return {
        modalContent: <PokemonCard pokemon={data} />,
        modalVisible: true,
        scrollable: false,
      };
    });
  }

  generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentDidMount() {
    this.fetchRandomPokemon();
  }

  handleItemClick(item: any) {
    this.setState((state, props) => {
      return {
        modalContent: <PokemonCard pokemon={item} />,
        modalVisible: true,
        scrollable: false,
      };
    });
  }

  handleModalClose() {
    this.setState((state, props) => {
      return {
        modalContent: "",
        modalVisible: false,
        scrollable: true,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.modalVisible && (
          <Modal
            content={this.state.modalContent}
            onModalClose={this.handleModalClose}
          />
        )}
        <PokemonList
          onItemClick={this.handleItemClick}
          scrollable={this.state.scrollable}
        />
      </div>
    );
  }
}

export default App;
