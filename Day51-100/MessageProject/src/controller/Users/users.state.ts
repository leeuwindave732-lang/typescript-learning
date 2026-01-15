// user state


export type SignInUser = {
    state: "SignIn";
    date: Date;
}

export type LogInUser = {
    state: "LogIn";
    date: Date;
}

export type DeleteUser = {
    state: "Delete";
    reason: string;
    date: Date;
}

export type UserState = 
    | SignInUser
    | LogInUser
    | DeleteUser