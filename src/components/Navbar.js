import { NavLink } from "react-router-dom"
import { Box } from "@mui/material"
import {AppBar} from "@mui/material"
import {Toolbar} from "@mui/material"
import {Typography} from "@mui/material"
import {Button} from "@mui/material"

const Navbar = () => {
    return (
        <nav>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>  
                                       
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Jauría Cafetería - Restobar
                        </Typography>
                        <Button color="inherit"><NavLink to='/'> Inicio </NavLink></Button>
                        <Button color="inherit"><NavLink to='/carta'> Carta </NavLink></Button>
                        <Button color="inherit"><NavLink to='/reservas'> Reservas </NavLink></Button>
                        <Button color="inherit"><NavLink to='/blog'> Blog </NavLink></Button>
                        <Button color="inherit"><NavLink to='/acerca'> Acerca De </NavLink></Button>
                        <Button color="inherit"><NavLink to='/contacto'> Contacto </NavLink></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    )
}

export default Navbar