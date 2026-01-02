// Satisfies
type Environment = "Development" | "Staging" | "Production";

type AppConfig = {
    env: Environment,
    retry: number,
    logging: boolean,
} 

const devConfig = {
    env: "Development",
    retry: 3,
    logging: true
} satisfies AppConfig; // satisfies validate structures, keep literals, prevents silent mistakes




