import VueUser from "../VueUser/VueUser";

const Maindata = () => {
//     const log_color_red = () => {
//     console.log("red")
//   }
//   const log_color_green = () => {
//     console.log("green")
//   }
//   const log_color_blue = () => {
//     console.log("blue")
//   }

//   const list_colors = ["red", "green", "blue"];

const Number_render = (n) => {
    console.log(n);
    
}

// const numbers = [1, 2, 3, 4, 5]

    return (
        <div>
            {/* <p>Geeks</p>
            {numbers.map(num => {
                return (
                    <button onClick={() => Number_render(num)}>{num}</button>
                )
                
            })} */}
            <VueUser/>
        </div>
    )
}

export default Maindata