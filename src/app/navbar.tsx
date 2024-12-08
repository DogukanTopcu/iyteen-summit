"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

  return (
    <div className='fixed top-0 w-full'>
        <nav className="relative bg-background flex flex-col items-center justify-center py-2 h-full z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
                <Image src='/IYTEEN.png' alt="İYTE Enerji Zirvesi" width={130} height={64} />
            </div>
            <div className='flex gap-4 items-center'>
                <div className="hidden md:flex space-x-6">
                    <a onClick={() => window.scrollTo(0, 0)} className="cursor-pointer hover:text-green-200 transition-colors">11 Aralık Çarşamba</a>
                    <a onClick={() => {
                        const y = document.getElementById("day2")!.offsetTop - 90;
                        window.scrollTo(0,y);
                    }} className="cursor-pointer hover:text-green-200 transition-colors">12 Aralık Perşembe</a>
                </div>
                <div>
                    <Button className='md:hidden' variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={toggleTheme} className='text-primary'>
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
            </div>
        </div>
        </nav>
        <div className='md:hidden'>
            <SubNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </div>
  );
}


const SubNav = ({ isOpen, setIsOpen } : { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    const [translate, setTranslate] = useState("-translate-y-[100%]");
    useEffect(() => {
        if (isOpen) {
            setTranslate("-translate-y-[0%]");
        }
        else {
            setTranslate("-translate-y-[100%]");
        }
    }, [isOpen])

    return (
        <div className={`bg-background sm:px-8 px-2 py-2 ${translate} relative z-0 transition-all duration-300 ease-linear`}>
            <Button 
            variant="outline"
            onClick={() => {
                window.scrollTo(0,0); 
                setIsOpen(false);
            }} className='mb-2 w-full'>11 Aralık Çarşamba</Button>
            <Button 
            variant="outline"
            onClick={() => {
                const y = document.getElementById("day2")!.offsetTop - 90;
                window.scrollTo(0,y); 
                setIsOpen(false);
            }} className='mb-2 w-full'>12 Aralık Perşembe</Button>
            
        </div>
    )
}
