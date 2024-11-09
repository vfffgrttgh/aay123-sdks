export function addItem({name, content}: any): void {
    localStorage.setItem(name, content);
};

export function getItem(name: any): void {
    const item: any = localStorage.getItem(name);

    return item;
};

export function deleteItem(name: any): void {
    localStorage.removeItem(name);
};
