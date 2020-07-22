import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField, Grid, Paper } from '@material-ui/core';

class SearchBar extends Component {


    render() {
        return (
            <div
                style={{
                    paddingTop: '10vh',
                    width:'75vw',
                    margin:'auto'
                }}
            >

                <Grid container spacing={2} style={{
                    textAlign: 'center',
                }}>

                    <Grid item xs={12}
                    
                    >

                        <Paper
                            elevation={7}
                            style={{
                                height:'5vh'
                            }}
                            
                        >



                            <h2>

                                Speak to Wanda </h2>

                        </Paper>

                    </Grid>




                    <Grid item xs={12}
                    >
                        <Paper
                            elevation={9}
                           
                        >
                            <form>
                                <TextField id='standard-basic' label="type to speak with Wanda" />

                                <br></br>

                                <Button
                                    style={{
                                        marginTop: '2%',
                                        marginBottom:'2%'
                                       
                                    }}
                                    variant="contained" color="secondary">
                                    Submit
                        </Button>
                            </form>
                        </Paper>
                    </Grid>



                </Grid>



            </div >
        )

    }
}


export default SearchBar;