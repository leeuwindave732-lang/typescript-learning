// discriminated unions

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

// type is the discriminator
