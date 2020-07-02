import React from 'react';
import styles from './App.module.css'
import { Cards, Charts, CountryPicker } from './Components'
import { fetchData } from './API';//we dont have to specify index file name if your file name is index  
import coronaImage from './Images/Cov19.png';
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const data = await fetchData();
        //console.log(fetchedData);  
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({ data: data, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container} >
                <img className={styles.image} src={coronaImage} alt="Covid-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App; 