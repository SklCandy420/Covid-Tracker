import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../API';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
// eslint-disable-next-line no-unused-vars
import { Container } from '@material-ui/core';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    //this is a set representation with setter method of a state  
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },
                {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }]
            }}
                options={{
                    scales: { xAxes: [{ gridLines: { display: true } }], yAxes: [{ gridLines: { display: true } }] }
                }}
            />) : null
    );

    const BarChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `current state in ${country}` }
                }}
            />
        ) : null
    )
    return (
        <div className={styles.container}>
            {country ? BarChart : lineChart}
        </div>
    )
}
export default Chart; 
