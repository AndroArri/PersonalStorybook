export default class ObjService {
    static of<T extends object>(e: T) {
        const values = Object.values(e);
        const keys = Object.keys(e);
        return {
            next: <K extends keyof T>(v: T[K]): string | number => values[(values.indexOf(v) + 1) % values.length],
            current: <K extends keyof T>(v: T[K]): string | number => values[(values.indexOf(v))],
            toOptions: (): { name: string; value: string }[] => {
                let result: { name: string; value: string }[] = [];
                values.forEach(value => {
                    result.push({
                        name: keys[values.indexOf(value)],
                        value: value
                    })
                });
                return result;
            }
        }
    }
}