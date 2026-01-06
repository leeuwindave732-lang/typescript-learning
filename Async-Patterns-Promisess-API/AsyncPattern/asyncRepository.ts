// async repository

export class AsyncRepository<T extends { id: number }> {

    // Internal storage using Map for fast lookup by ID
    private data = new Map<number, T>();

    // Forces consumers to use async/await correctly
    private delay(ms = 1000): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Adds a new item to the repository
    // Throws an error if the ID already exists
    async add(item: T): Promise<void> {
        await this.delay(); // simulate async database insert
        if (this.data.has(item.id)) {
            throw new Error("Item already exists");
        }
        this.data.set(item.id, item)
    }

    // Retrieves an item by ID
    // Returns null if the item does not exist
    async get(id: number): Promise<T | null> {
        await this.delay(); // simulate async database fetch
        return this.data.get(id) ?? null
    }

    // Partially updates on an existing item
    async update(id: number, updates: Partial<T>): Promise<T> {
        await this.delay() // simulates async database update
        const item = this.data.get(id);
        if (!item) throw new Error("Item not found");
        
        // Merge old item with updated fields
        const updated = { ...item, ...updates }
        this.data.set(id, updated);
        return updated
    }
    
    // delete user 
    async remove(id: number): Promise<T> {
        await this.delay();  // simulate async database delete
        const item = this.data.get(id);
        if (!item) throw new Error("Item not found");
        this.data.delete(id);
        return item;
    }

    // Returns all stored items as an array
    async list(): Promise<T[]> {
        await this.delay(); // simulates async database query
        return Array.from(this.data.values())
    }

}