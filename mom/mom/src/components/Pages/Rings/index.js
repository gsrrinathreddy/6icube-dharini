import Navbar from "../../Navbar"

export default function Rings(){
  const pages=["Goldrings", "Silverrings", "1gmgoldrings","Platinumrings"]
    return(
          <>
        <Navbar pages={pages} bgcolor="purple" buttoncolor="white"/>
        </>
    )
}