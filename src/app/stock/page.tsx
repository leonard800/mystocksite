{/* Generate a list of stock from marketstack API */}

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Stock = () => {

    const router = useRouter();

    {/*Create validation for buy and sell, only registered user can buy stock*/}

    const [stock, setStock] = useState([]);
    

    return (            
        <div>
            <h1>Stock</h1>
            {/*List off stocks generated by Marketwatch API*/}
            <table>
                <body>

                </body>
            </table>
        </div>
    )
}