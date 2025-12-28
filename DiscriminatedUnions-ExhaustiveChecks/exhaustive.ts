// exhaustive switch
type LoadingState = {
    type: "Loading";
};

type SuccesState = {
    type: "Success";
    data: number[];
};

type ErrorState = {
    type: "Error";
    message: string;
};

type ApiState = LoadingState | SuccesState | ErrorState

function handleState (state: ApiState) {
    switch(state.type) {
        case "Loading":
            console.log("....Loading");
            break;
        case "Success":
            console.log("Data: ", state.data)
            break;
        case "Error":
            console.log("Error: ", state.message)
            break;

        default:
            const _exhaustive: never = state;
            throw new Error("Unhandle State");
    }
}

// If you forget a case → TypeScript error
// This prevents runtime bugs