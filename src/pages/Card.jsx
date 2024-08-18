import React from 'react'
import { useParams } from 'react-router-dom'
import cardBackImage from '../assets/CardBack.jpg';
import { useQuery } from '@tanstack/react-query';
import API from '../api/axios.config'
const Card = () => {
    const {id} = useParams();
    const searchKeysWithWord = (obj, word) => {
        const keys = Object.keys(obj);
        const filteredKeys = keys.filter(key => key.includes(word));
        return filteredKeys.map(key => ({ key, value: obj[key] }));
    };
    const {data, isLoading, error} = useQuery({
        queryKey: ['card'],
        queryFn: async () =>  await API.get(`/cardinfo.php?misc=yes&id=${id}`)
            .then((res) => 
                {
                    const result = res.data.data
                    return result
                }
            ),
        })
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto flex-auto lg:px-[128px] xl:px-[256px] px-0">
        
        {/* {console.log(data)} */}
        {/* {data.map((e) => (
            <>
            </>
        ))} */}
        <div className="text-base breadcrumbs pt-10">
            <ul>
                <li><a>Cards</a></li> 
                <li>{data[0]?.id}</li>
            </ul>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-3 my-2 gap-10">
            <div className='flex flex-col col-span-1'>
                <img className=" !w-[313px] 2xl:!w-full !min-w-[313px] !max-w-[444px] rounded-xl h-[458px] mx-auto" src={data[0]?.card_images[0]?.image_url ?? cardBackImage} alt="Card Image" />
                <div className="flex flex-wrap justify-center 2xl:mt-2 mb-auto p-2 2xl:p-0">
                    {data[0]?.misc_info[0]?.formats?.map((e, index) => 
                        (
                            (e.toLowerCase() === "goat" && data[0]?.banlist_info) || (e.toLowerCase() === "tcg" && data[0]?.banlist_info) || (e.toLowerCase() === "ocg" && data[0]?.banlist_info) ? 
                                 searchKeysWithWord(data[0]?.banlist_info, e.toLowerCase())[0]?.value.toLowerCase() === "banned" ?
                                    <div key={index} className="badge badge-error m-0.5">{e}</div>
                                 :
                                    searchKeysWithWord(data[0]?.banlist_info, e.toLowerCase())[0]?.value.toLowerCase() === "limited" ?
                                        <div key={index} className="badge badge-warning m-0.5">{e}</div>
                                        :
                                            null
                            :
                                <div key={index} className="badge badge-success m-0.5">{e}</div>
                        )
                    )}
                </div>
            </div>
            <div className='flex flex-col col-span-1 2xl:col-span-2'>
                <div className='text-5xl font-semibold pb-2'>{data[0]?.name}</div>
                <div className="divider !m-0"></div> 
                <div className="grid grid-cols-3 gap-4 my-2 pb-4">

                    {data[0]?.type && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">Type</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.type}</div>
                            </div>
                        </div>
                    )
                    }
                    {data[0]?.attribute && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">Attribute</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.attribute}</div>
                            </div>
                        </div>
                        )
                    }
                    {data[0]?.race && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">Typing</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.race}</div>
                            </div>
                        </div>
                        )
                    }
                    {data[0]?.race && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">Level/Rank</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.race}</div>
                            </div>
                        </div>
                        )
                    }
                    {data[0]?.atk && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">ATK</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.atk}</div>
                            </div>
                        </div>
                        )
                    }
                    {data[0]?.def && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">DEF</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.def}</div>
                            </div>
                        </div>
                        )
                    }
                    {data[0]?.archetype && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">Archetype</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.archetype}</div>
                            </div>
                        </div>
                        )
                    }   
                    {data[0]?.misc_info[0]?.tcg_date && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">TCG Date</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.misc_info[0]?.tcg_date}</div>
                            </div>
                        </div>
                        )
                    }
                    {data[0]?.misc_info[0]?.ocg_date && (
                        <div className="stats shadow mx-auto w-52">
                            <div className="stat">
                                <div className="stat-title text-xs">OCG Date</div>
                                <div className="stat-value font-normal text-xl">{data[0]?.misc_info[0]?.ocg_date}</div>
                            </div>
                        </div>
                        )
                    }
                </div>
                <div className='text-3xl font-normal'>Description</div>
                <div className='text-base font-normal p-2'>{data[0]?.desc}</div>
                <div className="divider !m-0"></div> 
            </div>
        </div>
    </div>
  )
}

export default Card