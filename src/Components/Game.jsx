import {useState} from "react";
import Icons from "./Icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Flip} from 'react-toastify';

//array to store the x and o -> initially empty
let dataArray = new Array(9).fill("");

const Game = () => {

    //isCross var to check who's turn it is
    let [isCross,setIsCross] = useState(true);
    let [winMessage,setWinMessage] = useState("");

    //function to display x/o on click in a box
    function displayXO(index){
        //checking if someone is already won the game
        if(winMessage){
            // console.log(winMessage);
            return (toast(winMessage, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Flip,
                })
            ) 
            
        }
        
            

        //if index clicked is not empty
        if(dataArray[index] != ""){
            return (toast.error("Place Already Filled", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            })
        ) 
        } else if(dataArray[index] == ""){
            dataArray[index] = isCross ? "Cross" : "Circle";
            setIsCross(!isCross);
            findWinner();
        }
    }
    
    //Reset the function to reset the game
    const reset = ()=>{
        setIsCross(true);
        dataArray.fill("");
        setWinMessage("");
    }

    const findWinner = () => {
        //row1
        if(dataArray[0] == dataArray[1] && dataArray[0] == dataArray[2] && dataArray[0] != ""){
            //set winner message
            setWinMessage(dataArray[0] + " has won");
        } else if(dataArray[3] == dataArray[4] && dataArray[3] == dataArray[5] && dataArray[3] != ""){
            //set winner message
            setWinMessage(dataArray[3] + " has won");
        } else if(dataArray[6] == dataArray[7] && dataArray[6] == dataArray[8] && dataArray[6] != ""){
            //set winner message
            setWinMessage(dataArray[6] + " has won");
        } else if(dataArray[0] == dataArray[3] && dataArray[0] == dataArray[6] && dataArray[0] != ""){
            //set winner message
            setWinMessage(dataArray[0] + " has won");
        } else if(dataArray[1] == dataArray[4] && dataArray[1] == dataArray[7] && dataArray[1] != ""){
            //set winner message
            setWinMessage(dataArray[1] + " has won");
        } else if(dataArray[2] == dataArray[5] && dataArray[2] == dataArray[8] && dataArray[2] != ""){
            //set winner message
            setWinMessage(dataArray[2] + " has won");
        } else if(dataArray[0] == dataArray[4] && dataArray[0] == dataArray[8] && dataArray[0] != ""){
            //set winner message
            setWinMessage(dataArray[0] + " has won");
        } else if(dataArray[0] == dataArray[4] && dataArray[2] == dataArray[6] && dataArray[2] != ""){
            //set winner message
        } else if(dataArray.indexOf("") == -1){
            //set winner message
            setWinMessage("Draw");
        }
    }
    return (
        
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                transition={Flip}
                limit={1}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                closeButton={false}
            />
            <table>
                <tbody>
                    <tr className="grid">
                        {
                            dataArray.map((value,index)=>{
                                return (<td key={index} onClick={()=>{displayXO(index)}}>
                                    <Icons icon={value} />
                                </td>)
                            })
                        }
                    </tr>
                </tbody>
            </table>
            <div className="reset-container">
                <button type="reset" onClick={reset} className="reset-btn">
                    <Icons icon="reload" />
                    <p>Reset</p>
                </button>
            </div>
            <div className="footer">
                {
                    winMessage ? <p>{winMessage}</p> : <p>Chance is of {isCross ? "Cross" : "Circle"}</p>
                }
            </div>
        </div>
    )
}

export default Game;