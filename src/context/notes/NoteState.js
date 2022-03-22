import NoteContext from './NoteContext';
// import { useState } from "react";

const NoteState = (props) => {
   
    return (
        <NoteContext.Provider value={{state:"state", update:"update"}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState