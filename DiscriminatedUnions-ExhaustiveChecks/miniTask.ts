// student data
type Student= {
    name: string;
    year: 1|2|3|4;
    grades?: number[];
};


type LoadingState = {
    type: "Loading";
};

type SuccessState = {
    type: "Success";
    data: Student
};

type ErrorState = {
    type: "Error";
    message: string;
};

// discriminated union
type ApiState = LoadingState | SuccessState | ErrorState

// calculate the average
function computeAverage (grades?: number[]): number {
    if (!grades || grades.length === 0) return 0;
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

// exhaustive switch
function handleState (state: ApiState) {
    switch(state.type) {
        case "Loading":
            console.log("....Loading");
            break;
        case "Success":
            console.log("Data: ", state.data)
            console.log(
                "Average:",
                computeAverage(state.data.grades)
            );
            break;
        case "Error":
            console.log("Error: ", state.message)
            break;

        default:
            const _exhaustive: never = state;
            throw new Error("Unhandle State");
    }
}


// loading
const Loading: ApiState = ({ type: "Loading"});

// success
const Success: ApiState = (
    {
        type: "Success",
        data: {
            name: "Seiju",
            year: 1,
            grades: [99, 98, 100],       
        }
    });

// error
const error: ApiState = (
    { 
        type: "Error",
        message: "student not found"
    });

handleState(Loading) // output: Loading
handleState(Success) // output: Student data
handleState(error)  // output: error