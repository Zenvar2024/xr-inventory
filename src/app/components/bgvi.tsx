import React from "react";

export default function BackVi() {
    return (
        <div className="absolute z-0" >
            <video className="min-w-auto min-h-auto " 
                autoPlay
                loop
                muted
                
            >
                <source
                    src="gr.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}