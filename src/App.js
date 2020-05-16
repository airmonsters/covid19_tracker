import React from 'react';

import {Cards, Chart, CountryPicker } from './commponents'
import styles from './App.module.css'
import {fetchData} from './api/index'
import covidImage from './images/image.png'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {},
            county: '',
        }
    }
    async componentDidMount(){
        const fetchdata = await fetchData();
        this.setState({ data: fetchdata });
    }

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData , country: country})
    }

    render(){
        const {data, country} = this.state
        return (
          <div className={styles.container}>
            <img className={styles.image} src={covidImage} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker
              handleCountryChange={this.handleCountryChange.bind(this)}
            />
            <Chart data={data} country={country} />
          </div>
        );
    }
}

export default App