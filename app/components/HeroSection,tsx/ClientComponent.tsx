'use client'

import { FC } from "react";
import Image from "next/image";
import CountUpNumber from "../CountUpNumber/CountUpNumber"
type Props = {
    headingServer : React.ReactNode
    ImagesSection : React.ReactNode
}

const ClientComponent: FC<Props> = props => {
    const {headingServer, ImagesSection} = props
    return (
        <section className="flex px-4 items-center gap-12 container mx-auto py-10">
            <div className="py-10 h-full">

            {headingServer}       

            <div className="flex justify-between mt-12">
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center"> Basic Room</p>
                    < CountUpNumber duration={5000} endValue={200} />
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center"> Luxury Room</p>
                    < CountUpNumber duration={5000} endValue={150} />
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center"> Suite </p>
                    < CountUpNumber duration={5000} endValue={100} />
                </div>
            </div>

            </div>
            {ImagesSection}
        
    </section>
    );
}

export default ClientComponent;
