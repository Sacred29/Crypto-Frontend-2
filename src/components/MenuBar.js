import React, { useEffect, useState } from 'react';
//import '../CSS/MenuBar.css';
import { AppBar, Bar, Button, Toolbar } from 'react95';
import mail from '../images/mail.ico'

export default function MenuBar(props) {
    

    return (
        <>
        <AppBar className='AppBar'>
            {/* <TextField placeholder='Type here...' className="Search"></TextField>adasdadsds
            <button></button>

        <Button className='SearchButton' size='sm'> Search
        </Button> */}
        <Toolbar>
        <Bar size={35}></Bar>
            <Button variant='menu' onClick={props.toggleLogin}>Login</Button>
            <Bar size={35}></Bar>
            <Button variant='menu' disabled>save</Button>
            <Bar size={35}></Bar>
            <Button variant='menu'><img src={mail}></img></Button>
        </Toolbar>
        </AppBar>
        </>
    )
}