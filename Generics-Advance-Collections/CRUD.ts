/*  REPOSITORY WITH CRUD
    What is a Repository?
    -A repository is an abstraction that manages data storage and retrieval. 
    Think of it as a middle layer between your application code and where the data
    is stored (like a database, file, or even in memory).

    -It hides the details of how data is stored and provides a clean interface for
    adding, reading, updating, and deleting data — usually via CRUD operations.

    Create:     
        -Purpose: Adds a new item to the repository.
        -Checks if an item with the same id already exists. If yes, it throws an error to prevent duplicates.
        -Otherwise, it adds the item to data using Map.set.
    Read:
        -Purpose: Retrieve a single item by its id.
        -Returns T if found, otherwise undefined.
    Update:
        -Purpose: Update an existing item.
        -Partial<T> → TypeScript utility type that makes all properties of T optional. This allows you to update only some fields of the item.

        Steps:
        -Get the item by id.
        -If it doesn’t exist, throw an error.
        -Merge the original item with the updates using the spread operator: { ...item, ...updates }.
        -Save the updated item back to data.
        -Return the updated item.
    Delete:
        -Purpose: Delete an item by id.
        -Map.delete(id) removes the key-value pair.

    List all:
        -Purpose: Returns all items in the repository as an array.
        -Map.values() returns an iterable of all values.
        -Array.from() converts it into a regular array.

    Why use CRUD repositories:
        - Provides a consistent way to manage data.
        - Easy to extend, test, and maintain.
        - Maps naturally to APIs, databases, and in-memory data structures.
        - Useful for prototypes, applications, or services that need structured data management.

*/