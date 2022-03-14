export interface MenuChildren {
    label: string;
    url: string;
}

export interface MenuItemInfoType {
    name: string;
    menuChildren: MenuChildren[];
    url: string;
}
