import React, { FC, useEffect, useState } from 'react';

type Props = {
    endValue: number;
    duration: number;
}

const CountUpNumber: FC<Props> = ({endValue, duration}) => {
    const [count, setCount] = useState(0); // State to keep track of the count

    useEffect(() => {
        let startTime: number; // Variable to store the start time of the animation
        let animationFrameId: number; // Variable to store the ID of the animation frame
        
        // Function to update the count value
        const updateCount = (timeStamp: number) => {
            if (!startTime) startTime = timeStamp; // Initialize startTime on the first call
            const progress = timeStamp - startTime; // Calculate the progress of the animation
            
            if (progress < duration) {
                // Update count based on the progress
                setCount(Math.min(endValue, (progress / duration) * endValue));
                // Request the next animation frame
                animationFrameId = requestAnimationFrame(updateCount);
            } else {
                // Ensure count ends exactly at endValue
                setCount(endValue);
            }
        }
        
        // Start the animation
        animationFrameId = requestAnimationFrame(updateCount);
        
        // Cleanup function to cancel the animation frame when the component unmounts or props change
        return () => cancelAnimationFrame(animationFrameId);
    }, [endValue, duration]);
    
    return (
        <p className="md:font-bold font-medium text-lg xl:text-5xl">
            {Math.round(count)} 
        </p>
    );
}

export default CountUpNumber;
