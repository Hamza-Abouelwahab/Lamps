import Images from "../../../constant"
import Header from "../../../layout/header"
import Product from "../../../constant/json/prodcut.json"
import { useAppContext } from "../../../context"


export const HeroSection = () => {
    
    const {darkMode , operator } = useAppContext()
    
    return (
        <>
        <div className={`flex justify-center  transition-all duration-500  ${darkMode ? "bg-white" : "bg-black "}`}>

            <div className=" w-[50vw]  ">
                <Header  />
                <div className="p-4  w-[50wv]  grid grid-cols-6 gap-2">
                    {
                        Product.map((prod , index) => 
                            
                            <>

                            {console.log(prod.darkOff)} 
                            <div key={index} className={`col-span-3 space-y-2.5 transition-all duration-500  ${darkMode ? "text-black" : "text-white"}`}>   
                                <img className="h-[80vh]" src={(darkMode && !operator ? prod.lightOff : (darkMode && operator ) ? prod.lightOn : (!darkMode && !operator) ? prod.darkOff : prod.darkOn ) } />
                                <div className="">
                                <p className="font-bold text-lg">{prod.title}</p>
                                <span>{prod.price}</span>
                                </div>
                            </div>
                            
                            </>
                        )
                    }
                    
                </div>
            </div>
        </div>
        </>
    )

}   
