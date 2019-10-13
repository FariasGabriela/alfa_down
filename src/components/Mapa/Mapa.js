import React, { Component } from 'react';
import Farmer from './../../icons/farmer.svg';
import Play from './../../icons/play.svg';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom'

const styles = ({
    card: {
        width: '100%',
        height: '100%'
    },
    head: {
        height: 100, 
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF' 
    },
    barra: {
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        marginLeft: 30
    },
    frase : { 
        fontSize: 25, 
        color: 'rgb(112, 112, 122)', 
        marginLeft: 25 
    },
    button: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 100,
        width: 100,
        flexDirection: 'column'
    },
    iniciar: {
        margin: 0,
        marginTop: 5,
        fontSize: 20, 
        color: 'rgb(112, 112, 122)', 
        cursor: 'pointer'
    },
    icon: {
        height: 40, 
        width: 40 ,
        cursor: 'pointer'
    }
})

class Mapa extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'João'
        }
    }
  
    render(){
        const {classes} = this.props;

        return (
            <div className={classes.card} >
            <div className={classes.head} > 
                    <div className={classes.barra} >
                        <img src={Farmer} 
                        style={{ height: 60, width: 42 }}
                        alt="Personagem" /> {/*Referenciar criador*/}

                        <p className={classes.frase}> 
                            Olá {this.state.name}, veja como está sua evolução
                        </p>
                    </div>

                    <div className={classes.button} onClick={() => { this.props.history.push('/silaba/a/0')}} >
                        <img src={Play} 
                            className={classes.icon}
                            alt="Play" /> {/*Referenciar criador*/}
                         <p className={classes.iniciar}> 
                            Iniciar
                        </p>
                    </div>
            </div>
            {this.props.children}

            </div>
        )
    }
  
}

export default withRouter(withStyles(styles)(Mapa));
