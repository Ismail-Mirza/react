const halfText = (text)=>{
    let raw_text = "";
    let count = 40;
    text.split(" ").forEach((str,i)=>{
        if (i<count) raw_text += ` ${str}`;
    })
    return raw_text.trim();
}
export default halfText;