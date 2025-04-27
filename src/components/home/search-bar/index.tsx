'use client'

import { useState, useEffect, useRef } from "react";
import TypeIt from "typeit";
import TuneIcon from '@mui/icons-material/Tune';
declare global {
    interface HTMLInputElement {
        typeitInstance?: TypeIt;
    }
}

const PriceRangeDropdown = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-full max-w-md border border-gray-300" suppressHydrationWarning={true}>
            <h3 className="text-sm mb-4">Price Range (AED)</h3>
            <div className="flex flex-col md:flex-row justify-around mb-4">
                <div className="flex flex-col mb-4 md:mb-0">
                    <label className="block text-sm text-[#124d99] mb-1">Minimum:</label>
                    <input type="text" className="border rounded-md p-1 w-full md:w-38 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-300" placeholder="0" suppressHydrationWarning={true} />
                    <div className="flex flex-col space-y-3 overflow-y-auto max-h-48">
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 1000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 10000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 20000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 30000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 40000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 50000</label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="block text-sm font-medium text-[#124d99] mb-1">Maximum:</label>
                    <div className="flex items-center gap-4">
                        <span>-</span>
                        <input type="text" className="border rounded-md p-1 w-full md:w-38 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-300" placeholder="To" suppressHydrationWarning={true} />
                    </div>
                    <div className="flex flex-col space-y-3 overflow-y-auto max-h-48">
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 1000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 10000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 20000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 30000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 40000</label>
                        <label className="block text-sm font-medium text-gray-700 pt-2 pb-2"><input type="radio" name="min" suppressHydrationWarning={true} /> 50000</label>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-3 border-t pt-2">
                <button className="text-gray-500 text-[14px]" onClick={onClose} suppressHydrationWarning={true}>Reset</button>
                <button className="bg-[#124D99] text-white px-4 py-1 rounded-md" onClick={onClose} suppressHydrationWarning={true}>Done</button>
            </div>
        </div>
    );
};

const SearchBar = ({ placeholder = "My budget is around 70k and more" }: { placeholder?: string }) => {
    const [modelQuery, setModelQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !inputRef.current) return;

        let instance: TypeIt;
        try {
            instance = new TypeIt(inputRef.current, {
                strings: ["My budget is around 70k and more", "abdurahman"],
                speed: 400,
                waitUntilVisible: true,
                cursor: true,
                cursorChar: "|",
                afterComplete: (instance: TypeIt) => {
                    instance.destroy();
                }
            }).go();
            inputRef.current.typeitInstance = instance;
        } catch (error) {
            console.error('TypeIt:', error);
        }

        return () => {
            if (inputRef.current?.typeitInstance) {
                inputRef.current.typeitInstance.destroy();
            }
        };
    }, [isMounted]);

    const handleFocus = () => {
        if (inputRef.current?.typeitInstance) {
            inputRef.current.typeitInstance.freeze();
        }
    };

    const handleBlur = () => {
        if (inputRef.current?.typeitInstance) {
            inputRef.current.typeitInstance.unfreeze();
        }
    };

    return (
        <div className="absolute w-[90%] left-1/2 bottom-[-2rem] transform -translate-x-1/2   bg-white pt-4 px-4  lg:p-5 rounded-lg shadow-lg z-20">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full flex flex-1 items-center gap-2 relative">
                    <div className="flex flex-1 relative">
                        <input 
                            type="text" 
                            ref={inputRef} 
                            placeholder={placeholder} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="w-full pl-4 pr-10 md:py-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-500"
                        />
                        <button title="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="md:hidden w-auto h-auto bg-gray-300 rounded-md py-2 px-2">
                        <TuneIcon />
                    </div>
                </div>

                <button className="bg-[#124D99] text-white py-2 px-8 rounded-sm flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="18" height="18">
    <path d="M5.5 2L6.5 5L9.5 6L6.5 7L5.5 10L4.5 7L1.5 6L4.5 5L5.5 2ZM18 8L20 14L26 16L20 18L18 24L16 18L10 16L16 14L18 8ZM7 13L8 16L11 17L8 18L7 21L6 18L3 17L6 16L7 13Z"/>
  </svg>
                    search
                </button>
            </div>

            <div className="hidden md:flex flex-col md:flex-row items-center gap-4">
                <div className="text-gray-600 font-medium">Or</div>
                <div className="flex-1 relative">
                    <input 
                        type="text" 
                        placeholder="Search by a specific brand or model"
                        value={modelQuery}
                        onChange={(e) => setModelQuery(e.target.value)}
                        className="w-full pl-4 pr-10 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button title="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full md:w-[400px] relative">
                    <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="w-full flex items-center justify-between px-3 lg:px-4 py-2 border border-gray-400 rounded-md text-gray-700">
                        <span className="text-gray-500">Price Range</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <PriceRangeDropdown isOpen={isDropdownOpen} onClose={() => setDropdownOpen(false)} />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;