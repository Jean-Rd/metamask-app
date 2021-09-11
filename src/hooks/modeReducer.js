
export const modeReducer = (action, state=[]) => {
    const style = document.documentElement.style;
    
    switch (action.type) {
        case "white":

            style.setProperty('--bg-white', "#fff");
            style.setProperty('--text-gray', "rgb(41, 41, 41)");
            style.setProperty('--text-muted', "#6c757d");
            style.setProperty('--input-text', "#707070");
            style.setProperty('--color-meta', "#f6851b");
            style.setProperty('--shadow-meta', "#f6851b8a");
            
            return state;

        case "dark":
            
            style.setProperty('--bg-white', "rgb(91, 91, 91)");
            style.setProperty('--text-gray', "#fff");
            style.setProperty('--text-muted', "#d9d9d9");
            style.setProperty('--input-text', "#f6f6f6");
            style.setProperty('--color-meta', "#ffcd75");
            style.setProperty('--shadow-meta', "#ffdc9e");

            return state;
    
        default:
            return state;
    }

}
