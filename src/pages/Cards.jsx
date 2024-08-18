import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import cardBackImage from '../assets/CardBack.jpg';
import { LuSwords, LuShield, LuCalendar } from "react-icons/lu";
import { GiCardRandom } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
// import { useInfiniteQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import API from '../api/axios.config'
const Cards = () => {

    
    // const {id} = useParams(); 
    const [searchParams, setSearchParams] = useSearchParams();
    // const name = searchParams.get('name');
    // const num = searchParams.get('num'); 
    // const offset = searchParams.get('offset');
    const [name, setName] = useState(searchParams.get('name'))
    const [pageState, setPageState] = useState({
        // total: 0,
        offset: searchParams.get('offset'),//offset = start of data on first row
        num: searchParams.get('num'), //number of rows
        // limit: 10
    })
    useEffect(() => {
        // console.log("show: "+pageState.num)
        console.log("show: "+pageState.offset)
        refetch()
    }, [pageState, name]);
    // const {data, isLoading, error, refetch, hasNextPage, fetchNextPage, isFetchingNextPage,  } = useInfiniteQuery({
    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['cards',{name, pageState}],
        // queryFn: async () =>  await API.get(`/cardinfo.php?fname=${name}&num=${pageState.num}&offset=${pageState.offset}`)
        //     .then((res) => 
        //         {
        //             const result = res.data.data
        //             return result
        //         }
        //     ),
        // queryFn:  ({ pageParam = 0 }) => queryFn(pageParam),
        // queryFn:  ({ pageOffset = pageState.offset}) => queryFn(pageOffset),
        queryFn: async () =>  await API.get(`/cardinfo.php?misc=yes&fname=${name}&num=${pageState.num}&offset=${pageState.offset}`)
            .then((res) => 
                {
                    const result = res.data
                    return result
                }
            )
    })
    // const queryFn = async (offset) => {
    //     // const offset = page * pageState.num
    //     console.log("offset:"+offset)
    //     const res = await API.get(`/cardinfo.php?fname=${name}&num=${pageState.num}&offset=${offset}`)
    //     .then((res) => 
    //                 {
    //                     const result = res.data
    //                     // window.history.pushState(undefined, undefined, window.location.origin + window.location.pathname + `?name=${encodeURIComponent(name)}&num=${pageState.num}&offset=${offset}`)
    //                     // console.log("res:"+JSON.stringify(result))
    //                     return result
    //                 }
    //     )
    //     return res
    // }
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    // console.log(hasNextPage)

    const handleLimit = (e) => {
        // console.log("limit: " + e.target.value)
        // window.location.href += ``
        // console.log(window.location.origin + window.location.pathname + `?name=${encodeURIComponent(name)}&num=${pageState.num}&offset=${pageState.offset}`)
        // window.history.pushState({}, undefined, window.location);
        // window.history.pushState(undefined, undefined, `your/url/${e.target.value}`)
        setPageState(old => ({ ...old, num: e.target.value }))
        window.history.pushState(undefined, undefined, window.location.origin + window.location.pathname + `?name=${encodeURIComponent(name)}&num=${e.target.value}&offset=${pageState.offset}`)
    };
    
    const nextPage = (e) => {
        e.preventDefault();
        // console.log("pageState offset 1:"+pageState.offset)
        setPageState(old => ({ ...old, offset: data.meta?.next_page_offset}))
        // navigate(window.location.pathname + `?name=${encodeURIComponent(name)}&num=${pageState.num}&offset=${data.meta.next_page_offset}`)
        // console.log("pageState offset 2:"+pageState.offset)
        window.history.pushState(undefined, undefined, window.location.origin + window.location.pathname + `?name=${encodeURIComponent(name)}&num=${pageState.num}&offset=${data.meta?.next_page_offset}`)
    };

    const prevPage = (e) => {
        e.preventDefault();
        // console.log("pageState offset 1:"+pageState.offset)
        setPageState(old => ({ ...old, offset: data.meta?.previous_page_offset}))
        // navigate(window.location.pathname + `?name=${encodeURIComponent(name)}&num=${pageState.num}&offset=${data.meta.next_page_offset}`)
        // console.log("pageState offset 2:"+pageState.offset)
        window.history.pushState(undefined, undefined, window.location.origin + window.location.pathname + `?name=${encodeURIComponent(name)}&num=${pageState.num}&offset=${data.meta?.previous_page_offset}`)
    };
  return (
    <div className="main-cards container mx-auto flex-auto lg:px-[128px] xl:px-[256px] px-0">
        {/* <div className="flex justify-center my-4"><h2 className='prose-lg'>{searchParams}</h2></div> */}
        <div className="flex flex-col sm:flex-row mx-8 sm:mx-0 justify-center gap-4 my-4">
            <button className="btn w-40 mx-auto sm:mx-0" 
                disabled={data.meta?.previous_page_offset===undefined} 
                onClick={prevPage}>Previous
            </button>
            <label className="flex flex-row justify-center gap-2 mx-auto sm:mx-0 form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Rows:</span>
                </div>
                <select className="select select-bordered" value={pageState.num} onChange={handleLimit}>
                    {/* <option disabled selected>1</option> */}
                    <option value="10">10</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </label>
            <button onClick={nextPage}
                disabled={data.meta?.next_page_offset===undefined}
                className="btn w-40 mx-auto sm:mx-0">Next
            </button>
        </div>
        {data.data.map((data) => (
            // <p key={data.id}>{data.name}</p>
            <div key={data.id} className='relative flex flex-col sm:flex-row items-center bg-base-100 mb-3 mx-8 rounded-md px-2 py-8'>
                <div className="px-2 py-4">
                        {/* <div className="mask w-52 h-60 m-5">
                            <img src={cardBackImage} alt="Event Image" />
                        </div> */}

                        {/* ----------- */}
                        {/* <img className="!object-contain !w-[140px] !max-w-[140px] rounded-xl h-fit" src={cardBackImage} alt="Event Image" /> */}
                        <img className="!object-contain !w-[140px] !max-w-[140px] rounded-xl h-fit" src={data?.card_images[0]?.image_url ?? cardBackImage} alt="Card Image" />
                </div>
                <div className="flex flex-col w-full items-center h-48">
                    {/* <div className='text-xl font-medium pb-4'><h1>Sample</h1></div> */}
                    <div className='text-xl font-medium pb-4'><h1>{data?.name}</h1></div>
                    <div className='flex flex-row gap-4 pb-1'>
                        <div className='text-sm flex gap-1'>
                            <GiCardRandom className='text-lg' />
                            {/* Type */}
                            {data?.type}
                        </div>
                        <div className='text-sm flex gap-1'>
                            <MdOutlineCategory className='text-lg' />
                            {/* Race */}
                            {data?.race}
                        </div>
                        <div className='text-sm flex gap-1'>
                            <LuSwords className='text-lg' />
                            {/* Atk */}
                            {data?.atk}
                        </div>
                        <div className='text-sm flex gap-1'>
                            <LuShield className='text-lg' />
                            {/* Def */}
                            {data?.def}
                        </div>
                        <div className='text-sm flex gap-1'>
                            <LuCalendar className='text-lg' />
                            TCG:{data?.misc_info[0]?.tcg_date}
                            {/* {console.log("misc:"+JSON.stringify(data))} */}
                        </div>
                        <div className='text-sm flex gap-1'>
                            <LuCalendar className='text-lg' />
                            OCG:{data?.misc_info[0]?.ocg_date}
                        </div>
                    </div>
                    <div className='text-sm text-center py-2'>{data?.desc}</div>
                </div>
            </div>
        ))}
        
        <div className="flex flex-col sm:flex-row mx-8 sm:mx-0 justify-center gap-4 my-4">
            <button className="btn w-40 mx-auto sm:mx-0" 
                disabled={data.meta?.previous_page_offset===undefined} 
                onClick={prevPage}>Previous
            </button>
            <label className="flex flex-row justify-center gap-2 mx-auto sm:mx-0 form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Rows:</span>
                </div>
                <select className="select select-bordered" value={pageState.num} onChange={handleLimit}>
                    {/* <option disabled selected>1</option> */}
                    <option>10</option>
                    <option>30</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </label>
            <button onClick={nextPage}
                disabled={data.meta?.next_page_offset===undefined}
                className="btn w-40 mx-auto sm:mx-0">Next
            </button>
        </div>
    </div>
  )
}

export default Cards