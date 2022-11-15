import React, { createContext } from "react";

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => {},
    toggleMode: () => {},
});

export default function ColorModeProvider({ children, initialMode }) {
    const [mode, setMode] = React.useState(initialMode);

    function toggleMode () {
        setMode(mode === "dark" ? "light" : "dark");
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {children}
        </ColorModeContext.Provider>
    )
}