export default class ObjService {
    static of<T extends object>(e: T) {
        const values: string[] | any = Object.values(e);
        const keys: any[] = Object.keys(e);

        return {
            next: <K extends keyof T>(v: T[K]): string | number => values[(values.indexOf(v) + 1) % values.length],
            current: <K extends keyof T>(v: T[K]): string | number => values[(values.indexOf(v))],
            currentKey: <K extends keyof T>(v: T[K]): string => keys[(values.indexOf(v))],
            toOptions: (
                keyToName?: string,
                keyToValue?: string
            ): { name: string; value: string }[] => {
                let result: { name: string; value: string }[] = [];
                values.forEach((value: any) => {
                    let nameValue: string = keyToName ? values[keys.indexOf(keyToName)] : keys[values.indexOf(value)];
                    result.push({
                        name: nameValue.toLowerCase(),
                        value: (keyToValue && keyToName) ? value[keys.indexOf(keyToValue)] : value
                    })
                });
                return result;
            }
        }
    }
}