import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'
import style from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className= {style.formControl}>
      <NativeSelect defaultValue='' onChange={ (e)=>{handleCountryChange(e.target.value)} } >
        <option value=''>Global</option>
        {fetchedCountries.map((country, index) =><option key={index} value={country} >{country} </option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
