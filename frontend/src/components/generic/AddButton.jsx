import React from "react";

const AddButton = ({onClick, name}) =>
{
    return (
        <button className="bg-sidebar-button-bg p-2 dark:bg-sidebar-button-bg-dark text-sidebar-button-text dark:text-sidebar-button-text-dark rounded-xl w-full" onClick={onClick}>{name}</button>
    );
}

export default AddButton;