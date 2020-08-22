import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa"
export const UserMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                data-testid="user-menu-action"
                aria-label="User Menu on/off"
                onClick={() => setOpen(!open)}
                onKeyDown={() => setOpen(!open)}
            >
                <FaUserAlt />
            </button>
            {open && (
                <ul className="settings__user-menu-list">
                    <li>
                        <button type="submit">Log Out</button>
                    </li>
                </ul>
            )}
        </>
    )
}
