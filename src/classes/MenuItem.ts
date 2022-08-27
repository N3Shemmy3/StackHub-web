
export default {}
//classes

export class MenuItem {
    private id: number;
    private icon: string;
    private title: string;
    private path?: string;

    /*
      constructor() { }
      */

    constructor(id: number, icon: string, title: string) {
        this.id = id;
        this.icon = icon;
        this.title = title;
    }

    //setters
    set Id(id: number) {
        this.Id = id;
    }
    set Icon(icon: string) {
        this.icon = icon;
    }
    set Title(title: string) {
        this.title = title;
    }
    set Path(path: string) {
        this.path = path;
    }

    //getters
    get Id() {
        return this.id;
    }
    get Icon() {
        return this.icon;
    }
    get Title() {
        return this.title;
    }
    get Path() {
        return this.Path;
    }
}

//functions using top class
export function getDrawerMenu(key: string): Array<MenuItem> {
    let list: Array<MenuItem> = new Array<MenuItem>();
    switch (key) {
        case "home":
            list.push(new MenuItem(0, "home", "Home"));
            list.push(new MenuItem(1, "inbox", "Inbox"));
            list.push(new MenuItem(2, "cloud", "Codespaces "));
            list.push(new MenuItem(3, "notifications", "Notifications "));
            list.push(new MenuItem(4, "settings", "Settings "));
            list.push(new MenuItem(5, "menu", "MenuItem "));
            list.push(new MenuItem(6, "menu", "MenuItem "));
            list.push(new MenuItem(7, "menu", "MenuItem "));

            break;

        default:
            break;
    }
    return list;
}
export function getToolbarMenu(key: string): Array<MenuItem> {
    let list: Array<MenuItem> = new Array<MenuItem>();
    switch (key) {
        case "home":
            list.push(new MenuItem(0, "search", "Search"));
            list.push(new MenuItem(1, "https://avatars.githubusercontent.com/u/67279072?v=4", "Avatar "));
            break;

        default:
            break;
    }
    return list;
}