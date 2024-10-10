import { WritableSignal } from "@angular/core";

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

export type ChipsTypes = 'basic' | 'autocomplete' | 'avatar' | 'drag-drop' | 'input' | 'stacked';

export interface IChipList {
    text: string,
    isDisabled: boolean,
    src?: string
}

export enum ActionTypes {
    Remove = 'remove',
    Add = 'add',
    Edit = 'edit',
    Drop = 'drop',
    Selected = 'selected'
}

export interface ISignalEmitter {
    sig: WritableSignal<any[]>;
    action: ActionTypes;
}
