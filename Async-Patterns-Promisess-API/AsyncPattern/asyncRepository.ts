// async repository

export class AsyncRepository<T extends { id: number }> {
    private data = new Map<number, T>();

    private delay(ms = 1000): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async add(item: T): Promise<void> {
        await this.delay();
        if (this.data.has(item.id)) {
            throw new Error("Item already exists");
        }
        this.data.set(item.id, item)
    }

    async get(id: number): Promise<T | null> {
        await this.delay();
        return this.data.get(id) ?? null
    }

    async update(id: number, updates: Partial<T>): Promise<T> {
        await this.delay()
        const item = this.data.get(id);
        if (!item) throw new Error("Item not found");

        const updated = { ...item, ...updates }
        this.data.set(id, updated);
        return updated
    }

    async list(): Promise<T[]> {
        await this.delay();
        return Array.from(this.data.values())
    }

}