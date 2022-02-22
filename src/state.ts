type Played = "piedra" | "papel" | "tijeras" | "";
type Play = {
    myPlay: Played,
    cpuPlay: Played
}

const state = {
    data: {
        currentGame: {
            myPlay: "",
            cpuPly: ""
        },
        histoy: []
    },
    listeners: [],
    init() {
        let localData = localStorage.getItem("saved-state");
        if (localData !== null) {
            this.setState(JSON.parse(localData));
        }
        else {
            this.setState({
                currentGame: {
                    myPlay: "",
                    cpuPly: ""
                },
                histoy: []
            })
        }


    },
    getState() {
        return this.data
    },

    setState(newState) {
        this.data = newState
        for (const cb of this.listeners) {
            cb()
        }
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },

    subscribe(callback) {
        this.listeners.push(callback)
    },

    addCurrentPlay(myPlay: Played, cpuPlay: Played) {
        const data = this.getState();
        const newData = { ...data, currentGame: { myPlay: myPlay, cpuPlay: cpuPlay } }
        this.setState(newData);
        this.whoWins({ myPlay, cpuPlay })

    },

    whoWins(played: Play) {
        const data = this.getState()

        const winWhitPaper = played.myPlay == "papel" && played.cpuPlay == "piedra"
        const winWhitRock = played.myPlay == "piedra" && played.cpuPlay == "tijeras"
        const winWhitScissors = played.myPlay == "tijeras" && played.cpuPlay == "papel"
        const win = [winWhitPaper, winWhitRock, winWhitScissors].includes(true)

        const missWhitPaper = played.cpuPlay == "papel" && played.myPlay == "piedra"
        const missWhitRock = played.cpuPlay == "piedra" && played.myPlay == "tijeras"
        const missWhitScissors = played.cpuPlay == "tijeras" && played.myPlay == "papel"
        const miss = [missWhitPaper, missWhitRock, missWhitScissors].includes(true)

        if (win == true) {
            data.histoy.push(1)
            this.setState(data)
        }
        else if (miss == true) {
            data.histoy.push(0)
            this.setState(data)
        }

    }


}

export { state }