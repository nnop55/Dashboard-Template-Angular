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
    className: string
}[]