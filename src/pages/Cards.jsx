import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import cardBackImage from '../assets/CardBack.jpg';
import { LuSwords, LuShield, LuCalendar } from "react-icons/lu";
import { GiCardRandom } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
const Cards = () => {

    // useEffect(() => {
    //     if
    //     history.push('/auth/login');
    // });
    // const {id} = useParams(); 
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const num = searchParams.get('num');
    const offset = searchParams.get('offset');
    
  return (
    <div class="main-cards container mx-auto flex-auto lg:px-[128px] xl:px-[256px] px-0">
        {/* <div class="flex justify-center my-4"><h2 className='prose-lg'>{searchParams}</h2></div> */}
        <div class="flex flex-col sm:flex-row mx-8 sm:mx-0 justify-center gap-4 my-4">
            <button className="btn w-40 mx-auto sm:mx-0">Previous</button>
            <label className="flex flex-row justify-center gap-2 mx-auto sm:mx-0 form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Rows:</span>
                </div>
                <select className="select select-bordered">
                    {/* <option disabled selected>1</option> */}
                    <option>10</option>
                    <option>30</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </label>
            <button className="btn w-40 mx-auto sm:mx-0">Next</button>
        </div>
        <div className='relative flex flex-col sm:flex-row items-center bg-base-100 mb-3 mx-8 rounded-md px-2 py-8'>
            <div className="px-2 py-4">
                    {/* <div className="mask w-52 h-60 m-5">
                        <img src={cardBackImage} alt="Event Image" />
                    </div> */}
                    <img className="!object-contain !w-[140px] !max-w-[140px] rounded-xl" src={cardBackImage} alt="Event Image" />
            </div>
            <div class="flex flex-col w-full items-center h-48">
                <div className='text-xl font-medium pb-4'><h1>Sample</h1></div>
                <div className='flex flex-row gap-4 pb-1'>
                    <div className='text-sm flex gap-1'>
                        <GiCardRandom className='text-lg' />
                        Type
                    </div>
                    <div className='text-sm flex gap-1'>
                        <MdOutlineCategory className='text-lg' />
                        Race
                    </div>
                    <div className='text-sm flex gap-1'>
                        <LuSwords className='text-lg' />
                        Atk
                    </div>
                    <div className='text-sm flex gap-1'>
                        <LuShield className='text-lg' />
                        Def
                    </div>
                    <div className='text-sm flex gap-1'>
                        <LuCalendar className='text-lg' />
                        TCG
                    </div>
                    <div className='text-sm flex gap-1'>
                        <LuCalendar className='text-lg' />
                        OCG
                    </div>
                </div>
                <div className='text-sm text-center py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row mx-8 sm:mx-0 justify-center gap-4 my-4">
            <button className="btn w-40 mx-auto sm:mx-0">Previous</button>
            <label className="flex flex-row justify-center gap-2 mx-auto sm:mx-0 form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Rows:</span>
                </div>
                <select className="select select-bordered">
                    {/* <option disabled selected>1</option> */}
                    <option>10</option>
                    <option>30</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </label>
            <button className="btn w-40 mx-auto sm:mx-0">Next</button>
        </div>
    </div>
  )
}

export default Cards