import Image from "next/image";

export default function Forms() {
  return (
    <div>
        <h1 className="text-7xl font-semibold text-center uppercase ">Enter Your Details
          
        </h1>
        <div>
        <form className="mt-10 flex gap-5 justify-center items-center flex-col border bg-white h-50">
        {/*mt-10: Applies a margin-top of 2.5rem (40px), giving space above the form.*/}
        {/*flex: Sets the display to flex, allowing for flexible layout.*/}
        {/*gap-5: Adds a gap of 1.25rem (20px) between flex items.*/}
        {/*justify-center: Centers the flex items horizontally within the form.*/}
        {/*items-center: Aligns flex items vertically in the center.*/}
        {/*flex-col: Arranges the flex items in a column instead of the default row.*/}
        {/*border: Adds a default border around the form.*/}
        {/*bg-white: Sets the background color to white.*/}
        {/*h-50: This class might be a custom height class since it’s not a standard Tailwind height utility. You might want to check your Tailwind configuration.*/}
        <input type="email" className="p-2 rounded-lg w-2/5 border border-red-700" placeholder="Enter Your Email"/>
        <input type="password" className="p-2 w-2/5 rounded-lg border border-red-700" placeholder="Enter Your password"/>
        <button className="p-2 rounded-lg bg-blue-500 text-white">Place Your Order</button>
</form>
    </div>
    </div>

    
      
  );
}
