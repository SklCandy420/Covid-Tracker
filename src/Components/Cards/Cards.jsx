import React from 'react';
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import Button from '@material-ui/core/Button';



const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Please wait..';
    }
    console.log(lastUpdate);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid style={{ backgroundColor: 'rgba(208, 208, 241, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid style={{ backgroundColor: 'rgba(188, 253, 188, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={recovered.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid style={{ backgroundColor: 'rgba(245, 192, 192, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={deaths.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid className={styles.btnGrid} >
                    <Button style={{ backgroundColor: '#4A148C' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://www.mohfw.gov.in/">
                        mohfw
                </Button>
                    <Button style={{ backgroundColor: '#004D40' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://www.mygov.in/covid-19">
                        mygov
                </Button>
                    <Button style={{ backgroundColor: '#900C3F' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://twitter.com/who?lang=en">
                        WHO
                </Button>
                    <Button style={{ backgroundColor: '#581845' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://twitter.com/PIB_India">
                        PIB:IN
                </Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards; 