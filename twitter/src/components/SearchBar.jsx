import { AiOutlineSearch } from "react-icons/ai";

let style = {
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"center",
    gap: "3%",
    backgroundColor: "#eff3f4",
    padding: "1% 1% 1% 4%",
    width: "80%",
    height: "40px",
    borderRadius: "25px",
  },
  button: {
    fontSize: "1.5rem",
  },
  input: {
    border:"none",
    backgroundColor:"transparent",
  },
};
export default function SearchBar() {
  return (
    <div style={style.wrapper}>
      
        <AiOutlineSearch  style={style.button}/>
      
      <input style={style.input} placeholder="Search Twitter" />
    </div>
  );
}
