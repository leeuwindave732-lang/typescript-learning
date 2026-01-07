// User Controller
// --------------------------------------------------
// Responsibility:
// - Accepts UNTRUSTED input (DTOs)
// - Validates input using DTO guards
// - Converts DTOs → domain-safe values
// - Delegates business logic to the Service
// --------------------------------------------------

import { UserService } from "./user.service.js";
import type { CreateUserDTO, ReadUserDTO, UpdateUserDTO, DeleteUserDTO } from "./user.dto.js";
import { isCreateUserDTO, isReadUserDTO, isUpdateUserDTO, isDeleteUserDTO } from "./user.dto.js";

export class UserController {
    constructor(private readonly service: UserService) {}

    /* CREATE
        - Receives raw input
        - ensures it matches CreateUserDto
        - passes a trusted user object to the service
    */
    async createUser(input: CreateUserDTO) {
        if (!isCreateUserDTO(input)) {
            return { ok: false, error: "INVALID_INPUT" };
        }

        return this.service.registerUser(input);
    }

    /* READ
        - Validates identifier
        - Delegates fetching logic to the service
    */
    async readUser( input: ReadUserDTO ) {
        if (!isReadUserDTO(input)) {
            return { ok: false, error: "INVALID_INPUT"};
        }

        return this.service.getUser(input.id)
    }

    /* UPDATE
        - Validates partial updates
        - Separates id from update payload
    */
    async updateUser ( input: UpdateUserDTO ) {
        if (!isUpdateUserDTO(input)) {
            return { ok: false, error: "INVALID_INPUT"}
        }

        const { id, ...updates } = input;
        return this.service.updateUser(id, updates)
        
    }

    /* DELETE
        - Validates identifier
        - Delegates removal logic
    */
    async deleteUser ( input: DeleteUserDTO ) {
        if (!isDeleteUserDTO(input)) {
            return { ok: false, error: "INVALID_INPUT"}
        }

        return this.service.removeUser(input.id)

    }
}