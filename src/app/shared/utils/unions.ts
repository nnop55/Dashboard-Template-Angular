import { WritableSignal } from "@angular/core";
import { MenuPositionX, MenuPositionY } from "@angular/material/menu";

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
export type BadgeTypes = 'text' | 'btn' | 'icon';
export type ChipsTypes = 'basic' | 'autocomplete' | 'avatar' | 'drag-drop' | 'input' | 'stacked';
export type ListTypes = 'basic' | 'sections';
export type MenuTypes = 'basic' | 'icons' | 'positions';

export enum BtnColors {
    Basic = 'basic',
    Primary = 'primary',
    Accent = 'accent',
    Warn = 'warn'
}

export interface IData {
    text: string,
    id?: number,
    isDisabled?: boolean,
    src?: string,
    updated?: Date,
    icon?: string
}

export interface IListSection {
    title: string,
    list: IData[],
    icon: string
}

export interface IMenu {
    view: string,
    items: IData[],
    yPos?: MenuPositionY
    xPos?: MenuPositionX
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
