import React, { useState, useEffect} from 'react'

import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import UserWrapper from './UserWrapper';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight:5,
    },
    container: {
        margin: theme.spacing(0),
        display: "flex",
        flexWrap: "wrap",
    },
    top:{
        fontSize: "2em",
        fontWeight: "bold",
        
    },
    leftSide: {
        flex: 1,
        height: "100%",
        margin: theme.spacing(1),
        padding: theme.spacing(0),
    },
    rightSide: {
        flex: 1,
        height: "100%",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    paper: {
        height: "100%",
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    },
    grid: {
        margin: theme.spacing(1),
       

    },
   
    textField: {
        height: 'auto',
        
      },
    
    h2: {
        color: 'black',
        fontSize: "0.7em",
        margin: theme.spacing(1, 2),
    },
}));
const Grievance = props => {


    
    const classes = useStyles();
    
    let currentUser = JSON.parse(localStorage.getItem("user"));
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': currentUser.token ? `Bearer${currentUser.token}` : ''
    }

   

    const [disabled, setDisabled] = useState(true);
    const [grievance, updateGrievance] = useState([]);

   
    return (
        <Formik
            initialValues={
                {
                    
                   title:"",
                  
                   detail:"",
                     image:"", 
                }
            }
            onSubmit={(data ,{setSubmitting})=> {
                
                setSubmitting(true);
                console.log("submit:",data);
                setSubmitting(false);
              }}
          
        >
            {props => {
                const {
                    values,
                    handleChange,
                    handleBlur,
                    touched,
                    errors,
                    isSubmitting,
                    handleSubmit
                } = props;
                return (
                    <UserWrapper>
                        <div className={classes.root}>
                        
                      
                                            
                            <div className={classes.container} alignitems="center" justify="center">
                            
                                <div className={classes.leftSide} alignitems="center" justify="center">
                                <div className={classes.top}>
                                <Grid container spacing={2} alignitems="center" justify="center">
                                Grievance Portal
                            </Grid>
                            </div>


                               <grid  item xs={6}>
                                    <form onSubmit={handleSubmit}>
                                    <Paper className={classes.paper}>
                                        <Paper className={classes.paper}>
                                            
                                        <Grid item xs={12} >
                                        <TextField 
                                        name="title" 
                                        value={values.title}
                                        placeholder="Title:"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                       


                                        variant="outlined"  fullWidth />
                                        </Grid>
                                        </Paper>
                                        
                                        <div className={classes.text}>
                                        <Paper className={classes.paper}>

                                        <Grid item xs={12} >
                                        <TextField
                                        name="detail" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.detail}
                                        multiline
                                        rows={5}
                                    
                                        variant="outlined"
                                        
                                        placeholder="Enter you Grievance in detail...." variant="outlined"  fullWidth />
                                        </Grid>
                                        </Paper>
                                        </div>
                                          
                                        <input
                                        accept="image/*"
                                        className={classes.input}
                                        style={{ color:"red"}}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                      />
                                      <label htmlFor="raised-button-file" 
                                      name="image" 
                                      value={values.image}
                                     
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      >
                                        <Button variant="contained" color="default" component="span">
                                        <CameraAltIcon color="action" /> Upload
                                        </Button>
                                      </label>
                                             <Grid container spacing={4} aligntems="center" justify="flex-end">
                                                <Grid item ><Button variant="contained" color="primary" onClick={handleSubmit}><SearchIcon color="action" />Submit</Button></Grid>
                                            </Grid>
                                 </Paper>
                                            
                                    </form>
                                    </grid>
                                </div>
                                
                            </div>
                        </div>
                    </UserWrapper>
                )
            }}
        </Formik>
    )
 
}

export default withRouter(Grievance);
