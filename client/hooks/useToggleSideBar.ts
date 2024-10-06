import { useAppDispatch, useAppSelector } from "@/providers/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Archive, Layout, Clipboard, User, SlidersHorizontal, CircleDollarSign } from "lucide-react";

export const useToggleSidebar = () => {
    const dispatch = useAppDispatch();
    const isSideBarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);

    const sideBarMenuConfig = [
        {
            icon: Layout,
            label: "Dashboard",
            href: "/dashboard",
            isCollapsed: isSideBarCollapsed
        },
        {
            icon: Archive,
            label: "Inventory",
            href: "/inventory",
            isCollapsed: isSideBarCollapsed
        },
        {
            icon: Clipboard,
            label: "Products",
            href: "/products",
            isCollapsed: isSideBarCollapsed
        },
        {
            icon: User,
            label: "Users",
            href: "/users",
            isCollapsed: isSideBarCollapsed
        },
        {
            icon: CircleDollarSign,
            label: "Expenses",
            href: "/expenses",
            isCollapsed: isSideBarCollapsed
        }
    ]

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
    }

    return {
        isSideBarCollapsed,
        toggleSidebar,
        sideBarMenuConfig
    }
}