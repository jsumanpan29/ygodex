import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import cardBackImage from '../assets/CardBack.jpg';

const Card = () => {
    const {id} = useParams();
  return (
    <div class="container mx-auto flex-auto lg:px-[128px] xl:px-[256px] px-0">
        <div className="text-base breadcrumbs p-10">
            <ul>
                <li><a>Cards</a></li> 
                <li>{id}</li>
            </ul>
        </div>
        {/* <div class="flex justify-center"><h2 className='prose-lg'>{id}</h2></div> */}
        <div class="grid grid-cols-1 2xl:grid-cols-3 gap-10">
            <div className='flex justify-center col-span-1'>
                <img className="!object-contain !w-[313px] 2xl:!w-full !min-w-[313px] !max-w-[444px] rounded-xl" src={cardBackImage} alt="Event Image" />
            </div>
            <div className='flex flex-col col-span-1 2xl:col-span-2'>
                <div className='text-4xl font-semibold pb-2'>Sample {id}</div>
                <div className="divider !m-0"></div> 
                <div className="flex flex-row my-2">
                    <div className="stats shadow mx-auto">
                        <div className="stat">
                            <div className="stat-title">Type</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats shadow mx-auto">
                        <div className="stat">
                            <div className="stat-title">Total Page Views</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats shadow mx-auto">
                        <div className="stat">
                            <div className="stat-title">Total Page Views</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row my-2">
                    <div className="stats shadow mx-auto">
                        <div className="stat">
                            <div className="stat-title">Total Page Views</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats shadow mx-auto">
                        <div className="stat">
                            <div className="stat-title">Total Page Views</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats shadow mx-auto">
                        <div className="stat">
                            <div className="stat-title">Total Page Views</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                </div>
                <div className="divider !m-0"></div> 

                
            </div>
        </div>
    </div>
  )
}

export default Card