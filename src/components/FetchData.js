import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";


export default class FetchData extends React.Component {
  state = {
    chooseState: "Georgia",
    stateData: [],
    countryData: '',
    worldData: ''
  };

  componentDidMount() {
    this.getWorldData();
    this.getUSA();
    this.getStates();
  }

  async getWorldData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const response = await fetch(
      "https://corona.lmao.ninja/all",
      requestOptions
    );
    const data = await response.json();
    this.setState({ worldData: data });
    console.log(data);
  }

  async getStates() {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const response = await fetch(
      "https://corona.lmao.ninja/states",
      requestOptions
    );

    const data = await response.json();

    this.state.stateData = [];
    for (let i = 0; i < data.length; i++) {
      if (this.state.chooseState == data[i].state)
        this.setState({ stateData: data[i] });
    }
  }

  handleChange = event => {
    this.setState({ chooseState: event.target.value });
    this.getStates();
  };

numberWithCommas(x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
   
   
  }


  async getUSA() {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const response = await fetch(
      "https://corona.lmao.ninja/countries/USA",
      requestOptions

    );

    const data = await response.json();

    this.setState({ countryData: data });

    console.log(this.state.countryData);
  }



  render() {
    const usaStateData = [
      {
        "name": this.state.stateData.state,
        "Cases": this.state.stateData.cases,
        "Deaths": this.state.stateData.deaths,
        "Deaths Today": this.state.stateData.todayDeaths,
        "Cases Today": this.state.stateData.todayCases
      }
    ];

    const usaData = [
      {
        name: "United States",
        Cases: this.state.countryData.cases,
        Deaths: this.state.countryData.deaths,
        "Deaths Today": this.state.countryData.todayDeaths,
        "Cases Today": this.state.countryData.todayCases
      }
    ];

    const world_data = [
      {
        name: "World Wide",
        Cases: this.state.worldData.cases,
        Deaths: this.state.worldData.deaths,
        Recovered: this.state.worldData.recovered,
        "Affected Countries": this.state.worldData.affectedCountries,
        "Active Cases": this.state.worldData.active
      }
    ];

    var worldDeathRatio = this.state.worldData.deaths / this.state.worldData.cases *100
    var usaDeathRatio = this.state.countryData.deaths / this.state.countryData.cases *100
   var stateDeathRatio = this.state.stateData.deaths / this.state.stateData.cases *100;
   

    


    return (
      <div className="main">
        <h1 className="c1">Coronavirus Cases</h1>
        <div className="c2">

          {/* WORLD DATA */}

          <h2> World Wide </h2>
          <h3 className="blue">Cases: {this.state.worldData.cases}</h3>
          <h3 className="purple">Active cases: {this.state.worldData.active}</h3>
          <h3 className="red">Deaths: {this.state.worldData.deaths} {"(" +  worldDeathRatio.toFixed(2) + "%)"}</h3>
          <h3 className="green">Recovered: {this.state.worldData.recovered}</h3>
          <h3 className="teal">Affected Countries: {this.state.worldData.affectedCountries}</h3>
          
        </div>

        <div className="c1">
          <BarChart width={500} height={250} data={world_data} barSize={35}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Cases" fill="rgb(13, 49, 209)" />
            <Bar dataKey="Active Cases" fill="rgb(122, 120, 241)" />
            <Bar dataKey="Deaths" fill="#FF0000" />
            <Bar dataKey="Recovered" fill="rgb(0, 187, 72)" />
            <Bar dataKey="Affected Countries" fill="rgb(69, 227, 255)" />
            
          </BarChart>
        </div>

         {/* USA DATA */}
        <div className="c2">
          <h2> United States </h2>
          <h3 className="blue">Cases: {this.state.countryData.cases}</h3>

          <h3 className="red">Deaths: {this.state.countryData.deaths} {"(" + usaDeathRatio.toFixed(2) + "%)"} </h3>
          
    
        </div>

        <div className="c1">
          <BarChart width={500} height={250} data={usaData} barSize={35}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Cases" fill="rgb(13, 49, 209)" />
            <Bar dataKey="Deaths" fill="#FF0000" />
            <Bar dataKey="Cases Today" fill="#8884d8" />
            <Bar dataKey="Deaths Today" fill="#82ca9d" />
          </BarChart>
        </div>

       {/* STATE DATA */}
        <div className="c2">
          <h3>Choose State</h3>
          <select value={this.state.chooseState} onChange={this.handleChange}>
            <option value="">Choose a state</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District Of Columbia">District of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnisota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virgina">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
          <h2> {this.state.stateData.state}</h2>

          <h3 className="blue">Cases: {this.state.stateData.cases}</h3>

          <h3 className="red">Deaths: {this.state.stateData.deaths} {"(" + stateDeathRatio.toFixed(2) + "%)"}</h3>
        </div>

        <div className="c1">
          <BarChart width={500} height={250} data={usaStateData} barSize={35}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Cases" fill="rgb(13, 49, 209)" />
            <Bar dataKey="Deaths" fill="#FF0000" />
            <Bar dataKey="Cases Today" fill="#8884d8" />
            <Bar dataKey="Deaths Today" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    );
  }
}
