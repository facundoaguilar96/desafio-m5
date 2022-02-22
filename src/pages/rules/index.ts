
import { state } from "../../state"



export function initRules(params) {

    const style = document.createElement("style")
    style.innerHTML = `
        *{
            box-sizing: border-box;
        }
        body{
            margin:0;
        }

        .container{
            
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: baseline;
            height: 100vh;
            padding:20px;
            gap:20px;
        }
        @media (min-width: 769px) {
            .container{margin-top:10%;}
        }
        .separacion{
            margin-top:100px;
            color:red;
        }
        .mostrar{
            display:none;
        }
        .buttom-container{
            width:100%;
            max-width:404px;
            
        }
        .text-container{
            padding:40px;
            max-width:317px;
        }
        @media (min-width: 769px) {
            .text-container{
                padding:0;
                max-width:317px;
            }
        }

        .move-container{
            display:flex;
            width:100%;
            position: fixed;
            bottom: 10px;
            height: 150px;
            justify-content: center;
        }
        @media (min-width: 769px) {
            .move-container{
                height: 21.277481vh;
                width:500px;
                padding:0;
                gap:67px;

            }
        }
        .hand{
            
        }
        @media (min-width: 769px) {
            .hand{
                width:100%;
            }
        }
        .desktop{}
        @media (min-width: 769px) {
            .desktop{
                display:flex;
                width:100%;
                
                justify-content: center;
            }
        }
    `

    const div = document.createElement("div")

    div.innerHTML = `
        <div class="container">
            <div class="text-container">
                 <text-comp variant="body">Presioná jugar
                 y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
                </text-comp>
            </div>
            <div class="buttom-container">
                <button-comp class="next">¡Jugar!</button-comp>
            </div>    
        </div>     
        <div class="desktop"> <div class="move-container">
                <div class="hand"><papel-mov></papel-mov></div>
                <div class="hand"><piedra-mov></piedra-mov></div>
                <div class="hand"><tijeras-mov></tijeras-mov></div>
        </div></div>
    `



    const next = div.querySelector(".next")
    next.addEventListener("click", () => {
        // state.addCurrentPlay("","")
        params.goTo("/play")
    })
    div.appendChild(style)
    return div;
}
