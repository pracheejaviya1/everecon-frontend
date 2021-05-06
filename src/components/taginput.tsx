import * as React from 'react'

export default function TagInput({tags,setTags}){
    const [text,setText] = React.useState("")
    return (
        <>
        <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyUp = {(e) => {
              if (e.key === ",") {
                let newtag = text.trim().slice(0,-1);
                if (newtag && !tags.includes(newtag)) {
                  let newtags = [...tags,newtag];
                  setTags(newtags)
                setText("");
                }
                setText("");
              }
            }
            }
        />
        {
            tags.map((e,i) => <li key={i}>{e}</li>) 
        }
        </>
    )

}