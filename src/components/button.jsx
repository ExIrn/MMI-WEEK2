import { useEffect } from "react"


const MyButton = ({
    buttonName, buttonClick
}) => {

    useEffect(()=>{
        //ini menjalankan suatu function saat web belum benar2 muncul
        //get data API
        //[] namanya update willount contoh untuk dimasukkan ke data API biar update
    }, [])
    return(
        <button onClick={buttonClick}>{buttonName}</button>
    )
}

export default MyButton