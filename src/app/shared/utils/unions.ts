export class ILayoutExpansions {
    ui!: ILayoutExpansionItem;
}

class ILayoutExpansionItem {
    opened: boolean = false;
    data!: LayoutExpansionItemType;
}

type LayoutExpansionItemType = {
    text: string,
    routerLink: string,
    className?: string
}[]

export type BtnTypes = 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' | 'extended-fab';
export enum BtnColors {
    Basic = 'basic',
    Primary = 'primary',
    Accent = 'accent',
    Warn = 'warn'
}

export type BadgeTypes = 'text' | 'btn' | 'icon';
