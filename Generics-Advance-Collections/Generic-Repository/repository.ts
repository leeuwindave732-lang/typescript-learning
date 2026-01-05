// repository

export class Repository<T extends { id: number }> {
    private data: Map<number, T> = new Map();


    // create or add    
    add(item: T): void {
        if(this.data.has(item.id)) {
            throw new Error(`Item with id ${item.id} already exists`);
        }
        // Otherwise, it adds the item to data using Map.set.
        this.data.set(item.id, item);
    }

    // Read
    get(id: number): T | undefined {
        return this.data.get(id);
    }

    // Update 
    update(id: number, updates: Partial<T>): T {
        const item = this.data.get(id);
        if(!item)
            throw new Error(`Item with id ${id} not found`);
        const updated = { ...item, ...updates };
        this.data.set(id, updated);
        return updated;
    }

    // Delete
    remove(id: number): void {
        this.data.delete(id);
    }

    // List all
    list(): T[] {
        return Array.from(this.data.values());
    }

}

