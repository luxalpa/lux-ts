export function create<T>(type: { new(...args : any[]): T ;}, obj: T): T {
    return Object.assign(new type(), obj);
}