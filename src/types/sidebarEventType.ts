export type MenuKey = "pendaftaran" | "juknis" | "lomba"

export interface MenuItem {
    key: MenuKey,
    label: string
}

export interface SidebarEventProps {
    onSelect: (key: MenuKey) => void
}