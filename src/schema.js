const { gql } = require('apollo-server');

module.exports = typeDefs = gql`
  type Film {
    id: ID
    title: String
    description: String
    director: String
    producer: String
    release_date: String
    rt_score: String
    # people: Array[1][
    #   https://ghibliapi.herokuapp.com/people/
    # ]
    # species: Array[1][
    #   https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2
    # ]
    # locations: Array[1][
    #   https://ghibliapi.herokuapp.com/locations/
    # ]
    # vehicles: Array[1][
    #   https://ghibliapi.herokuapp.com/vehicles/
    # ]
    url: String
  }

  type People {
    id: String
    name: String
    gender: String
    eye_color: String
    hair_color: String
    # films: [
    #   "https://ghibliapi.herokuapp.com/films/030555b3-4c92-4fce-93fb-e70c3ae3df8b"
    # ]
    species: String
    url: String
  }

  type Location {
    id: String
    name: String
    climate: String
    terrain: String
    surface_water: String
    # residents: [
    #   https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0
    # ],
    films: String
    url: String
  }

  type Species {
    id: String
    name: String
    classification: String
    eye_colors: String
    hair_colors: String
    # people: [
    #   https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec,
    #   https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106,
    #   https://ghibliapi.herokuapp.com/people/89026b3a-abc4-4053-ab1a-c6d2eea68faa,
    #   https://ghibliapi.herokuapp.com/people/6b3facea-ea33-47b1-96ce-3fc737b119b8,
    #   https://ghibliapi.herokuapp.com/people/3042818d-a8bb-4cba-8180-c19249822d57,
    #   https://ghibliapi.herokuapp.com/people/58d1973f-f247-47d7-9358-e56cb0d2b5a6,
    #   https://ghibliapi.herokuapp.com/people/a3d8e70f-46a0-4e5a-b850-db01620d6b92,
    #   https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32,
    #   https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b
    # ],
    # films: [
    #   https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49,
    #   https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e,
    #   https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3,
    #   https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81,
    #   https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6
    # ],
    url: String
  }

  type Vehicles {
    id: String
    name: String
    description: String
    vehicle_class: String
    length: String
    pilot: String
    films: String
    url: String
  }

  type Query {
    "The getFilms endpoint returns information about all of the Studio Ghibli films."
    getFilms: [Film]
    "The People endpoint returns information about all of the Studio Ghibli people. This broadly includes all Ghibli characters, human and non-."
    getPeople: [People]
    "The Locations endpoint returns information about all of the Studio Ghibli locations. This broadly includes lands, countries, and places."
    getLocations: [Location]
    "The Species endpoint returns information about all of the Studio Ghibli species. This includes humans, animals, and spirits."
    getSpecies: [People]
    "The Vehicles endpoint returns information about all of the Studio Ghibli vechiles. This includes cars, ships, and planes."
    getVehicles: [People]
  }
`;
