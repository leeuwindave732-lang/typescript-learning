type Environment = 'Admin' | 'User' | 'Developer'
type Role = 'read' | 'code' | 'delete'

const EnvironmentRole = {
    Admin: [ 'read', 'code' ] as const,
    User:  [ 'read' ] as const,
    Developer: [ 'read', 'code', 'delete'] as const
}  satisfies Record<Environment, readonly Role[]>
// as const Makes the arrays readonly and preserves literal types
// satisfies Record<Environment, readonly Role[]> this enforces every Environment key exists

console.log(EnvironmentRole)
