import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../slices/places/placeSlice';

export const PaginateLink = ({page}) => {

    const dispatch = useDispatch();

return (

    <div>   
        {page.active ? (
            <>
                <li>
                    <a
                    class=" dark:bg-neutral-900"
                    href="#!"
                    >
                        <div dangerouslySetInnerHTML={{__html: page.label}} />
                    </a>
                </li>
            </>
        ) : (
            <>
                <li>
                    <a onClick={ (e)=> { if (page.url!= null) dispatch(setPage (page.url.split("=")[1]))} }
                    class="relative block rounded bg-transparent py-1.5 px-3 text-lg text-neutral-600"
                    href="#!"   
                    >
                        <div dangerouslySetInnerHTML={{__html: page.label}} />
                    </a>
                </li>
            </>
            )}
        </div>
    )
}