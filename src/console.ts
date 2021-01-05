const PreventConsole = function(...toPrint: any) {
    if (process.env.VUE_APP_MODE  != "production") {
        console.log(toPrint);
    }  
};

export { PreventConsole };