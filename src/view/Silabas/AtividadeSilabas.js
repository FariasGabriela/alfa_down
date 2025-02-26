import React, { Component } from 'react';
import ViewQuadro from '../../components/Quadro/ViewQuadro';
import { withStyles } from '@material-ui/core/styles';
import Sound from 'react-sound';
import BA from '../../Audios/ba.mp3';
import CA from '../../Audios/ca.mp3';
import DA from '../../Audios/da.mp3';
import FA from '../../Audios/fa.mp3';
import GA from '../../Audios/ga.mp3';
import HA from '../../Audios/ha.mp3';
import JA from '../../Audios/ja.mp3';
import LA from '../../Audios/la.mp3';
import MA from '../../Audios/ma.mp3';
import NA from '../../Audios/na.mp3';
import PA from '../../Audios/pa.mp3';
import QUA from '../../Audios/qua.mp3';
import RA from '../../Audios/ra.mp3';
import SA from '../../Audios/sa.mp3';
import TA from '../../Audios/ta.mp3';
import VA from '../../Audios/va.mp3';
import XA from '../../Audios/xa.mp3';
import ZA from '../../Audios/za.mp3';
import BE from '../../Audios/be.mp3';
import CE from '../../Audios/ce.mp3';
import DE from '../../Audios/de.mp3';
import FE from '../../Audios/fe.mp3';
import GE from '../../Audios/ge.mp3';
import HE from '../../Audios/he.mp3';
import JE from '../../Audios/je.mp3';
import LE from '../../Audios/le.mp3';
import ME from '../../Audios/me.mp3';
import NE from '../../Audios/ne.mp3';
import PE from '../../Audios/pe.mp3';
import QUE from '../../Audios/que.mp3';
import RE from '../../Audios/re.mp3';
import SE from '../../Audios/se.mp3';
import TE from '../../Audios/te.mp3';
import VE from '../../Audios/ve.mp3';
import XE from '../../Audios/xe.mp3';
import ZE from '../../Audios/ze.mp3';
import BI from '../../Audios/bi.mp3';
import CI from '../../Audios/ci.mp3';
import DI from '../../Audios/di.mp3';
import FI from '../../Audios/fi.mp3';
import GI from '../../Audios/gui.mp3';
import HI from '../../Audios/hi.mp3';
import JI from '../../Audios/ji.mp3';
import LI from '../../Audios/li.mp3';
import MI from '../../Audios/mi.mp3';
import NI from '../../Audios/ni.mp3';
import PI from '../../Audios/pi.mp3';
import QUI from '../../Audios/qui.mp3';
import RI from '../../Audios/ri.mp3';
import SI from '../../Audios/si.mp3';
import TI from '../../Audios/ti.mp3';
import VI from '../../Audios/vi.mp3';
import XI from '../../Audios/xi.mp3';
import ZI from '../../Audios/zi.mp3';
import BO from '../../Audios/bo.mp3';
import CO from '../../Audios/co.mp3';
import DO from '../../Audios/do.mp3';
import FO from '../../Audios/fo.mp3';
import GO from '../../Audios/go.mp3';
import HO from '../../Audios/ho.mp3';
import JO from '../../Audios/jo.mp3';
import LO from '../../Audios/lo.mp3';
import MO from '../../Audios/mo.mp3';
import NO from '../../Audios/no.mp3';
import PO from '../../Audios/po.mp3';
import QUO from '../../Audios/quo.mp3';
import RO from '../../Audios/ro.mp3';
import SO from '../../Audios/so.mp3';
import TO from '../../Audios/to.mp3';
import VO from '../../Audios/vo.mp3';
import XO from '../../Audios/xo.mp3';
import ZO from '../../Audios/zo.mp3';
import BU from '../../Audios/bu.mp3';
import CU from '../../Audios/cu.mp3';
import DU from '../../Audios/du.mp3';
import FU from '../../Audios/fu.mp3';
import GU from '../../Audios/gu.mp3';
import HU from '../../Audios/hu.mp3';
import JU from '../../Audios/ju.mp3';
import LU from '../../Audios/lu.mp3';
import MU from '../../Audios/mu.mp3';
import NU from '../../Audios/nu.mp3';
import PU from '../../Audios/pu.mp3';
import RU from '../../Audios/ru.mp3';
import SU from '../../Audios/su.mp3';
import TU from '../../Audios/tu.mp3';
import VU from '../../Audios/vu.mp3';
import XU from '../../Audios/xu.mp3';
import ZU from '../../Audios/zu.mp3';
import TenteNovamente from '../../Audios/TenteNovamente.mp3'
import Modal from '@material-ui/core/Modal';
import FootPrint from './../../icons/footprint.svg';
import SilabaCorrespondente from './../../Audios/silabaCorrespondente.mp3';
import firebase from 'firebase';
import 'firebase/app';
import "firebase/firestore";
//import swal from 'sweetalert';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import * as animationData from './../../icons/winNivel.json';

const styles = ({
    divButton: {
        cursor: 'pointer',
        font: 20,
        height: 70,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(42, 157, 143)',
        borderRadius: 10,
        marginBottom: 15
    },
    divModal: {
        transition: 'opacity 1s linear',
        flexDirection: 'column',
        width: '50%', 
        height: '50%', 
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        transition: 'opacity 1s linear',
        width: '100%', 
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100
    },
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 100,
        height: '78%',
        width: '100%'
    },
    silabas: {
        display: 'flex',
        width: 370,
        height: 244,
        flexWrap: 'wrap'
    },
    name: {
        display: 'flex',
        height: 116,
        fontSize: 70,
        alignItems: 'center',
        justifyContent: 'center',
        width: 119
    }
})

class AtividadeSilabas extends Component {
    constructor(props){
        super(props);
        window.soundManager.setup({ debugMode: false });

        this.state = {
            animation: true,
            playSilabaCorrespondente: Sound.status.PAUSED,
            open: false,
            playTenteNovamente: Sound.status.PAUSED,
            play: Sound.status.PAUSED,
            silabas: [],
            soundSelect: "",
            indexSoundSelect: 0,
            soundList: [],
            soundListA: [
                [FA, BA, DA, HA, CA, GA],
                [LA, NA, PA, JA, QUA, MA],
                [RA, TA, ZA, VA, XA, SA]
            ],
            soundListE: [
                [ HE, CE, BE, DE, FE, GE ],
                [ NE, PE, JE, QUE, ME, LE ],
                [ ZE, RE, XE, TE, SE, VE ]
            ],
            soundListI: [
                [ BI, GI, HI, FI, DI, CI ],
                [ PI, JI, QUI, LI, MI, NI ],
                [ SI, XI, RI, VI, TI, ZI ]
            ],
            soundListO: [
                [ GO, DO, HO, FO, CO, BO ],
                [ MO, JO, LO, PO, NO, QUO ],
                [ XO, ZO, SO, RO, TO, VO ]
            ],
            soundListU: [
                [ DU, BU, FU, GU, HU, CU ],
                [ MU, PU, NU, LU, JU ],
                [ SU, ZU, VU, TU, RU, XU ]
            ],
            silabasOneA: [
                {
                    key: 0,
                    name: 'BA',
                    audio: BA,
                    select: false
                },
                {   
                    key: 1,
                    name: 'CA',
                    audio: CA,
                    select: false
                },
                {
                    key: 2,
                    name: 'DA',
                    audio: DA,
                    select: false
                },
                {
                    key: 3,
                    name: 'FA',
                    audio: FA,
                    select: false
                },
                {
                    key: 4,
                    name: 'GA',
                    audio: GA,
                    select: false
                },
                {   
                    key: 5,
                    name: 'HA',
                    audio: HA,
                    select: false
                },
            ],
            silabasTwoA: [
                {
                    key: 0,
                    name: 'JA',
                    select: false,
                    audio: JA,
                },
                {   
                    key: 1,
                    name: 'LA',
                    select: false,
                    audio: LA,
                },
                {
                    key: 2,
                    name: 'MA',
                    select: false,
                    audio: MA,
                },
                {
                    key: 3,
                    name: 'NA',
                    select: false,
                    audio: NA,
                },
                {
                    key: 4,
                    name: 'PA',
                    select: false,
                    audio: PA,
                },
                {   
                    key: 5,
                    name: 'QUA',
                    select: false,
                    audio: QUA,
                },
            ],
            silabasThreeA: [
                {
                    key: 0,
                    name: 'RA',
                    select: false,
                    audio: RA,
                },
                {   
                    key: 1,
                    name: 'SA',
                    select: false,
                    audio: SA,
                },
                {
                    key: 2,
                    name: 'TA',
                    select: false,
                    audio: TA,
                },
                {
                    key: 3,
                    name: 'VA',
                    select: false,
                    audio: VA,
                },
                {
                    key: 4,
                    name: 'XA',
                    select: false,
                    audio: XA,
                },
                {   
                    key: 5,
                    name: 'ZA',
                    select: false,
                    audio: ZA,
                },
            ],
            silabasOneE: [
                {
                    key: 0,
                    name: 'BE',
                    audio: BE,
                    select: false
                },
                {   
                    key: 1,
                    name: 'CE',
                    audio: CE,
                    select: false
                },
                {
                    key: 2,
                    name: 'DE',
                    audio: DE,
                    select: false
                },
                {
                    key: 3,
                    name: 'FE',
                    audio: FE,
                    select: false
                },
                {
                    key: 4,
                    name: 'GUE',
                    audio: GE,
                    select: false
                },
                {   
                    key: 5,
                    name: 'HE',
                    audio: HE,
                    select: false
                },
            ],
            silabasOneI: [
                {
                    key: 0,
                    name: 'BI',
                    audio: BI,
                    select: false
                },
                {   
                    key: 1,
                    name: 'CI',
                    audio: CI,
                    select: false
                },
                {
                    key: 2,
                    name: 'DI',
                    audio: DI,
                    select: false
                },
                {
                    key: 3,
                    name: 'FI',
                    audio: FI,
                    select: false
                },
                {
                    key: 4,
                    name: 'GUI',
                    audio: GI,
                    select: false
                },
                {   
                    key: 5,
                    name: 'HI',
                    audio: HI,
                    select: false
                },
            ],
            silabasOneO: [
                {
                    key: 0,
                    name: 'BO',
                    audio: BO,
                    select: false
                },
                {   
                    key: 1,
                    name: 'CO',
                    audio: CO,
                    select: false
                },
                {
                    key: 2,
                    name: 'DO',
                    audio: DO,
                    select: false
                },
                {
                    key: 3,
                    name: 'FO',
                    audio: FO,
                    select: false
                },
                {
                    key: 4,
                    name: 'GUO',
                    audio: GO,
                    select: false
                },
                {   
                    key: 5,
                    name: 'HO',
                    audio: HO,
                    select: false
                },
            ],
            silabasOneU: [
                {
                    key: 0,
                    name: 'BU',
                    audio: BU,
                    select: false
                },
                {   
                    key: 1,
                    name: 'CU',
                    audio: CU,
                    select: false
                },
                {
                    key: 2,
                    name: 'DU',
                    audio: DU,
                    select: false
                },
                {
                    key: 3,
                    name: 'FU',
                    audio: FU,
                    select: false
                },
                {
                    key: 4,
                    name: 'GU',
                    audio: GU,
                    select: false
                },
                {   
                    key: 5,
                    name: 'HU',
                    audio: HU,
                    select: false
                },
            ],
            silabasTwoE: [
                {
                    key: 0,
                    name: 'JE',
                    select: false,
                    audio: JE,
                },
                {   
                    key: 1,
                    name: 'LE',
                    select: false,
                    audio: LE,
                },
                {
                    key: 2,
                    name: 'ME',
                    select: false,
                    audio: ME,
                },
                {
                    key: 3,
                    name: 'NE',
                    select: false,
                    audio: NE,
                },
                {
                    key: 4,
                    name: 'PE',
                    select: false,
                    audio: PE,
                },
                {   
                    key: 5,
                    name: 'QUE',
                    select: false,
                    audio: QUE,
                },
            ],
            silabasTwoI: [
                {
                    key: 0,
                    name: 'JI',
                    select: false,
                    audio: JI,
                },
                {   
                    key: 1,
                    name: 'LI',
                    select: false,
                    audio: LI,
                },
                {
                    key: 2,
                    name: 'MI',
                    select: false,
                    audio: MI,
                },
                {
                    key: 3,
                    name: 'NI',
                    select: false,
                    audio: NI,
                },
                {
                    key: 4,
                    name: 'PI',
                    select: false,
                    audio: PI,
                },
                {   
                    key: 5,
                    name: 'QUI',
                    select: false,
                    audio: QUI,
                },
            ],
            silabasTwoO: [
                {
                    key: 0,
                    name: 'JO',
                    select: false,
                    audio: JO,
                },
                {   
                    key: 1,
                    name: 'LO',
                    select: false,
                    audio: LO,
                },
                {
                    key: 2,
                    name: 'MO',
                    select: false,
                    audio: MO,
                },
                {
                    key: 3,
                    name: 'NO',
                    select: false,
                    audio: NO,
                },
                {
                    key: 4,
                    name: 'PO',
                    select: false,
                    audio: PO,
                },
                {   
                    key: 5,
                    name: 'QUO',
                    select: false,
                    audio: QUO,
                },
            ],
            silabasTwoU: [
                {
                    key: 0,
                    name: 'JU',
                    select: false,
                    audio: JU,
                },
                {   
                    key: 1,
                    name: 'LU',
                    select: false,
                    audio: LU,
                },
                {
                    key: 2,
                    name: 'MU',
                    select: false,
                    audio: MU,
                },
                {
                    key: 3,
                    name: 'NU',
                    select: false,
                    audio: NU,
                },
                {
                    key: 4,
                    name: 'PU',
                    select: false,
                    audio: PU,
                },
            ],
            silabasThreeE: [
                {
                    key: 0,
                    name: 'RE',
                    select: false,
                    audio: RE,
                },
                {   
                    key: 1,
                    name: 'SE',
                    select: false,
                    audio: SE,
                },
                {
                    key: 2,
                    name: 'TE',
                    select: false,
                    audio: TE,
                },
                {
                    key: 3,
                    name: 'VE',
                    select: false,
                    audio: VE,
                },
                {
                    key: 4,
                    name: 'XE',
                    select: false,
                    audio: XE,
                },
                {   
                    key: 5,
                    name: 'ZE',
                    select: false,
                    audio: ZE,
                },
            ],
            silabasThreeI: [
                {
                    key: 0,
                    name: 'RI',
                    select: false,
                    audio: RI,
                },
                {   
                    key: 1,
                    name: 'SI',
                    select: false,
                    audio: SI,
                },
                {
                    key: 2,
                    name: 'TI',
                    select: false,
                    audio: TI,
                },
                {
                    key: 3,
                    name: 'VI',
                    select: false,
                    audio: VI,
                },
                {
                    key: 4,
                    name: 'XI',
                    select: false,
                    audio: XI,
                },
                {   
                    key: 5,
                    name: 'ZI',
                    select: false,
                    audio: ZI,
                },
            ],
            silabasThreeO: [
                {
                    key: 0,
                    name: 'RO',
                    select: false,
                    audio: RO,
                },
                {   
                    key: 1,
                    name: 'SO',
                    select: false,
                    audio: SO,
                },
                {
                    key: 2,
                    name: 'TO',
                    select: false,
                    audio: TO,
                },
                {
                    key: 3,
                    name: 'VO',
                    select: false,
                    audio: VO,
                },
                {
                    key: 4,
                    name: 'XO',
                    select: false,
                    audio: XO,
                },
                {   
                    key: 5,
                    name: 'ZO',
                    select: false,
                    audio: ZO,
                },
            ],
            silabasThreeU: [
                {
                    key: 0,
                    name: 'RU',
                    select: false,
                    audio: RU,
                },
                {   
                    key: 1,
                    name: 'SU',
                    select: false,
                    audio: SU,
                },
                {
                    key: 2,
                    name: 'TU',
                    select: false,
                    audio: TU,
                },
                {
                    key: 3,
                    name: 'VU',
                    select: false,
                    audio: VU,
                },
                {
                    key: 4,
                    name: 'XU',
                    select: false,
                    audio: XU,
                },
                {   
                    key: 5,
                    name: 'ZU',
                    select: false,
                    audio: ZU,
                },
            ],
        }

        this.clickProximo = this.clickProximo.bind(this);
        this.clickItem = this.clickItem.bind(this);
        this.clickOuvir = this.clickOuvir.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.clickInfo = this.clickInfo.bind(this);
        this.clickBack = this.clickBack.bind(this);
    }

    componentDidMount(){
        var vogal = parseFloat(this.props.match.params.vogal);
        var soundList = [];
        var silabasOne = [];
        var silabasTwo = [];
        var silabasThree = [];

        if (vogal === 0) {
            soundList = this.state.soundListA;
            silabasOne = this.state.silabasOneA;
            silabasTwo = this.state.silabasTwoA;
            silabasThree = this.state.silabasThreeA;
        } else if (vogal === 1) {
            soundList = this.state.soundListO;
            silabasOne = this.state.silabasOneO;
            silabasTwo = this.state.silabasTwoO;
            silabasThree = this.state.silabasThreeO;
        } else if (vogal === 2) {
            soundList = this.state.soundListU;
            silabasOne = this.state.silabasOneU;
            silabasTwo = this.state.silabasTwoU;
            silabasThree = this.state.silabasThreeU;
        } else if (vogal === 3) {
            soundList = this.state.soundListI;
            silabasOne = this.state.silabasOneI;
            silabasTwo = this.state.silabasTwoI;
            silabasThree = this.state.silabasThreI;
        } else if (vogal === 4) {
            soundList = this.state.soundListE;
            silabasOne = this.state.silabasOneE;
            silabasTwo = this.state.silabasTwoE;
            silabasThree = this.state.silabasThreeE;  
        } 

        const value = parseFloat(this.props.match.params.index)
        if ( value === 0 ) {
            this.setState({
                playSilabaCorrespondente: Sound.status.PLAYING,
                soundList: soundList,
                silabas: silabasOne,
                soundSelect: soundList[0][this.state.indexSoundSelect]
            })
        } else if ( value === 1 ) {
            this.setState({
                soundList: soundList,
                silabas: silabasTwo,
                soundSelect: soundList[1][this.state.indexSoundSelect]
            })
        } else if ( value === 2 ) {
            this.setState({
                soundList: soundList,
                silabas: silabasThree,
                soundSelect: soundList[2][this.state.indexSoundSelect]
            })
        }

        this.setState({
            playSilabaCorrespondente: Sound.status.PLAYING,
        }, () => {
            setTimeout(() => { 
                this.setState({
                    play: Sound.status.PLAYING
                })
              }, 3000);
        })
    }

    clickProximo(){
        var value = parseFloat(this.props.match.params.index)
        if ( value === 2 ) {
            this.props.history.push(
                '/palavra/' + this.props.match.params.vogal + "/" + 0
            )
        } else {
            this.props.history.push(
                '/silaba/' + this.props.match.params.vogal + "/" + (value + 1)
            )
        }
    }

    clickItem(item){
        var list = this.state.silabas;
        var soundSelect = {}
        list.forEach(doc => {
            if(item.key === doc.key) {
                soundSelect = doc;
                doc.select = true;
                setTimeout(() => { 
                    doc.select = false;
                    soundSelect.select = false;
                }, 100);
            } else {
                doc.select = false;
            }
        }) 

        if (soundSelect.audio === this.state.soundSelect) {

            if ( this.state.indexSoundSelect >= (this.state.silabas.length - 1) ) {
                /*var user = firebase.auth().currentUser;

                firebase.firestore().collection("Progresso").doc(user.uid).set({
                    atividade: 'silaba',
                    vogal: parseFloat(this.props.match.params.vogal),
                    index: parseFloat(this.props.match.params.index)
                })*/
                firebase.auth().onAuthStateChanged(doc => {
                    if (doc) {
                        firebase.firestore().collection("Progresso").doc(doc.uid).set({
                            atividade: 'silaba',
                            vogal: parseFloat(this.props.match.params.vogal),
                            index: parseFloat(this.props.match.params.index)
                        })
                    }
                })

                /*swal("Bom trabalho!", "", "success").then(() => {
                    this.clickProximo();
                })*/
                this.setState({
                    open: true,
                    animation: false
                }, () => {
                    setTimeout(() => { 
                        this.setState({
                            animation: true
                        })
                    }, 1200)
                })
            } else {
                setTimeout(() => { 
                    this.clickOuvir();
                }, 1000);
                setTimeout(() => { 
                    soundSelect.select = false;
                }, 100);
                this.setState({
                    soundSelect: this.state.soundList[parseFloat(this.props.match.params.index)][this.state.indexSoundSelect + 1],
                    indexSoundSelect: this.state.indexSoundSelect + 1,
                    silabas: list
                })
            }
            
        } else {
            this.setState({
                silabas: list,
                playTenteNovamente: Sound.status.PLAYING
            })
        }
    }

    clickOuvir(){
        this.setState({
            play: Sound.status.PLAYING
        })
    }

    clickClose(){
        this.props.history.push('/')
    }

    clickInfo(){
        Swal.fire(
            'Atividade com sílabas',
            'Selecione a sílaba correspondente a pronunciada',
            'question'
        )
    }

    clickBack(){
        this.props.history.push('/iniciar/' + this.props.match.params.vogal)
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        const {classes} = this.props;

        return (
            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}} >
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={classes.modal}
                    open={this.state.open}
                >
                <div style={{ opacity: this.state.open ? 1 : 0 }} className={classes.divModal}>
                    <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                            isStopped={false}
                            isPaused={this.state.animation}/>
                    <div className={classes.divButton}
                        onClick={this.clickProximo}> 
                            Continuar
                    </div>
                </div>
                    
                </Modal>
                <ViewQuadro 
                    clickBack={this.clickBack}
                    clickInfo={this.clickInfo}
                    clickClose={this.clickClose}
                    onClickOuvir={this.clickOuvir}
                    onClickProximo={this.clickProximo}>
                    <div className={classes.view}>
                        <div className={classes.silabas}>
                            {this.state.silabas.map((doc) => {
                                return (<div key={doc.key}
                                    onClick={() => this.clickItem(doc)}
                                    className={classes.name}
                                    style={{
                                        fontSize: doc.name.length > 2 ? 55 : 70,
                                        transition: doc.select ? 'opacity 1s linear' : 'none',
                                        backgroundColor: doc.select ? 'rgb(231, 111, 81)' : '',
                                        borderRadius: doc.select ? 20 : '',
                                        color: doc.select ? '#FFFFFF' : '',
                                        boxShadow: doc.select ?'0px 6px 9px rgb(0, 0, 0, 0.2)' : '',
                                    }}>
                                        {doc.name}
                                    </div>
                                )
                            })}
                            <Sound
                                url={this.state.soundSelect}
                                playStatus={this.state.play}
                                onLoading={() => {}}
                                onPlaying={() => {}}
                                onFinishedPlaying={() => {
                                        this.setState({
                                            play: Sound.status.PAUSED
                                        })
                                }}
                            />
                            <Sound
                                url={TenteNovamente}
                                playStatus={this.state.playTenteNovamente}
                                onLoading={() => {}}
                                onPlaying={() => {}}
                                onFinishedPlaying={() => {
                                        this.setState({
                                            playTenteNovamente: Sound.status.PAUSED
                                        })
                                }}
                            />
                            <Sound
                                url={SilabaCorrespondente}
                                playStatus={this.state.playSilabaCorrespondente}
                                onLoading={() => {}}
                                onPlaying={() => {}}
                                onFinishedPlaying={() => {
                                        this.setState({
                                            playSilabaCorrespondente: Sound.status.PAUSED
                                        })
                                }}
                            />
                        </div>
                    </div>
                    
                </ViewQuadro>

                <div style={{display: 'flex'}}> 
                    <img  src={FootPrint} 
                        style={{
                            width: 60,
                            height: 50,
                            marginLeft: -60,
                            marginTop: 150,
                            transition: 'opacity 1s linear',
                            opacity: this.state.indexSoundSelect > 0 ? 1 : 0
                        }}
                        alt="Trofeu"/> {/*Referenciar criador*/}
                    <img  src={FootPrint} 
                        style={{
                            width: 60,
                            height: 50,
                            marginLeft: -6,
                            marginTop: 200,
                            transition: 'opacity 1s linear',
                            opacity: this.state.indexSoundSelect > 1 ? 1 : 0
                        }}
                        alt="Trofeu"/> {/*Referenciar criador*/}
                    <img  src={FootPrint} 
                        style={{
                            width: 60,
                            height: 50,
                            marginLeft: -110,
                            marginTop: 250,
                            transition: 'opacity 1s linear',
                            opacity: this.state.indexSoundSelect > 2 ? 1 : 0
                        }}
                        alt="Trofeu"/> {/*Referenciar criador*/}
                     <img  src={FootPrint} 
                        style={{
                            width: 60,
                            height: 50,
                            marginLeft: -6,
                            marginTop: 300,
                            transition: 'opacity 1s linear',
                            opacity: this.state.indexSoundSelect > 3 ? 1 : 0
                        }}
                        alt="Trofeu"/> {/*Referenciar criador*/}
                    <img  src={FootPrint} 
                        style={{
                            width: 60,
                            height: 50,
                            marginLeft: -110,
                            marginTop: 350,
                            transition: 'opacity 1s linear',
                            opacity: this.state.indexSoundSelect > 4 ? 1 : 0
                        }}
                        alt="Trofeu"/> {/*Referenciar criador*/}
                    <img  src={FootPrint} 
                        style={{
                            width: 60,
                            height: 50,
                            marginLeft: -6,
                            marginTop: 400,
                            transition: 'opacity 1s linear',
                            opacity: this.state.indexSoundSelect > 5 ? 1 : 0
                        }}
                        alt="Trofeu"/> {/*Referenciar criador*/}
                </div>
            </div>        
        );
    }
}

export default withStyles(styles)(AtividadeSilabas);
