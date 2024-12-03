import Link from "next/link";

export function MyListingCard ({listingId, data}){
    return (
        <div className="flex flex-col lg:flow-row lg:justify-between lg:items-center gap-4 border border-lime-600 rounded-sm">
            <div>
                <p className="text-lime-800 text-lg">  business name</p>
                <p className="text-gray-500 text-xs">  Created at: some dates</p> 
            </div>

            <ul className="flex justify-between items-center">
                <li className="text-gray-700 text-md">category</li>
                <li className="text-gray-700 text-md">LGA, Statee</li>

            </ul>

            <Link href="#" className="h-8 flex justify-center items-center bg-lime-700 text-white px-2 rounded-sm"></Link>

        </div>
    )
}