import NoteContext from './NoteContext';
import { useState } from "react";

const NoteState = (props) => {
   
    const notesInitial = [
        {
          "_id": "6239617787a53727f755179f",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:11.040Z",
          "__v": 0
        },
        {
          "_id": "6239617787a53727f75517a1",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:11.603Z",
          "__v": 0
        },
        {
          "_id": "6239617787a53727f75517a3",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:11.789Z",
          "__v": 0
        },
        {
          "_id": "6239617787a53727f75517a5",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:11.954Z",
          "__v": 0
        },
        {
          "_id": "6239617887a53727f75517a7",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:12.095Z",
          "__v": 0
        },
        {
          "_id": "6239617887a53727f75517a9",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:12.263Z",
          "__v": 0
        },
        {
          "_id": "6239617887a53727f75517ab",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:12.424Z",
          "__v": 0
        },
        {
          "_id": "6239617887a53727f75517ad",
          "user": "62344e78bcfc4a5c09a35290",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "personal",
          "date": "2022-03-22T05:41:12.592Z",
          "__v": 0
        }
      ]
      const [notes,serNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,serNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState