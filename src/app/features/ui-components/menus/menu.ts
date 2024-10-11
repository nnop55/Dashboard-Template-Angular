import { IMenu } from "../../../shared/utils/unions"

export const menuIconData = {
    view: 'more_vert',
    items: [
        {
            id: 1,
            icon: 'dialpad',
            text: 'Redial'
        },
        {
            id: 2,
            icon: 'voicemail',
            text: 'Check voice mail',
            isDisabled: true
        },
        {
            id: 3,
            icon: 'notifications_off',
            text: 'Disable alerts'
        },
    ]
}

export const menuData = {
    view: 'Menu',
    items: [
        {
            id: 1,
            text: 'Item 1'
        },
        {
            id: 2,
            text: 'Item 2',
            isDisabled: true
        }
    ]
}

export const abovePosData: IMenu = {
    view: 'Above',
    yPos: 'above',
    items: [
        {
            id: 1,
            text: 'Item 1'
        },
        {
            id: 2,
            text: 'Item 2',
        }
    ]
}

export const belowPosData: IMenu = {
    view: 'Below',
    yPos: 'below',
    items: [
        {
            id: 1,
            text: 'Item 1'
        },
        {
            id: 2,
            text: 'Item 2',
        }
    ]
}

export const beforePosData: IMenu = {
    view: 'Before',
    xPos: 'before',
    items: [
        {
            id: 1,
            text: 'Item 1'
        },
        {
            id: 2,
            text: 'Item 2',
        }
    ]
}

export const afterPosData: IMenu = {
    view: 'After',
    xPos: 'after',
    items: [
        {
            id: 1,
            text: 'Item 1'
        },
        {
            id: 2,
            text: 'Item 2',
        }
    ]
}