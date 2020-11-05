import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { Pokemon } from "../types/pokemon";

type PokemonListProps = {
  onItemClick: (item: any) => void;
  scrollable: boolean;
};

type PokemonListState = {
  pokemonData: Pokemon[];
  nextUrl: string;
  loading: boolean;
  searchTerm: string;
};

class PokemonList extends React.Component<PokemonListProps, PokemonListState> {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: [],
      nextUrl: "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0",
      loading: false,
      searchTerm: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  getPokemonDataList() {
    if (this.state.searchTerm !== "") {
      return this.state.pokemonData.filter((pokemon) => {
        return (
          pokemon.name
            .toLowerCase()
            .indexOf(this.state.searchTerm.toLowerCase()) !== -1
        );
      });
    }

    return this.state.pokemonData;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
    this.fetchPokemonListData();
  }

  fetchPokemonListData() {
    this.setState((state, props) => {
      return {
        loading: true,
      };
    });

    setTimeout(() => {
      fetch(this.state.nextUrl)
        .then((response) => response.json())
        .then((data) => {
          this.setState((state, props) => {
            return {
              nextUrl: data.next,
            };
          });

          document.addEventListener("scroll", this.trackScrolling);

          data.results.forEach((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((data) => {
                this.setState((state, props) => {
                  const pokemonData = [...this.state.pokemonData, data];
                  return {
                    pokemonData,
                    loading: false,
                  };
                });
              });
          });
        });
    }, 1000);
  }

  handleSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="my-4 p-0 col-12">
            <input
              onChange={this.handleSearch}
              value={this.state.searchTerm}
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          {this.getPokemonDataList().map((item, index) => {
            return (
              <ListItem
                onClick={(e) => this.handleItemClick(item, e)}
                className="col-sm-3 text-center text-capitalize card mb-4"
                key={item.name}
              >
                <h2>{item.name}</h2>
                <div>
                  <img src={item.sprites.front_default} alt={item.name} />
                </div>
              </ListItem>
            );
          })}

          {this.state.loading && (
            <div className="d-flex justify-content-center mb-4 w-100">
              <Loader
                type="Puff"
                color="#CCC"
                height={100}
                width={100}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  handleItemClick(item, event) {
    this.props.onItemClick(item);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom - 10 <= window.innerHeight;
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementsByClassName("container")[0];
    if (this.isBottom(wrappedElement) && this.props.scrollable === true) {
      document.removeEventListener("scroll", this.trackScrolling);
      this.fetchPokemonListData();
    }
  };
}

const ListItem = styled.div`
  cursor: pointer;
`;

export default PokemonList;
