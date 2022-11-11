import { Button, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import mapa from '../assets/img/mapa.png'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink } from '@mui/material/colors';


const Contacto = () => {
    return (
        <div className="divContacto">
            <div>
                <h1>Contacto</h1>
                <p><TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                /></p>
                <p><TextField
                    required
                    id="outlined-required"
                    label="Apellido"
                /></p>
                <p><TextField
                    required
                    id="outlined-required"
                    label="Email"
                /></p>
                <p><TextField
                    required
                    id="outlined-required"
                    label="Teléfono"
                /></p>
                <p><TextField
                    id="outlined-multiline-static"
                    label="Mensaje"
                    multiline
                    rows={8}
                /></p>
                <Button variant="contained" startIcon={<DeleteIcon />}>
                    Borrar
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Enviar
                </Button>
            </div>
            <div>
                <img src={mapa} alt="mapa"/>
                <p><PlaceIcon fontSize="small"/> Dirección tanto tanto, Maguillines</p>
                <p><PhoneIcon fontSize="small"/> 56 9 1234 5678</p>
                <p><InstagramIcon fontSize="small" sx={{ color: pink[500] }}/> instagram/esomismo</p>

                

            </div>
        </div>


    )
}

export default Contacto