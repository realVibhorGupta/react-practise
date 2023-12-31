// @flow
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from "react";
import DropDown from "../dropdown/Dropdown";

const Search = ({
	query,
	onQueryChange,
	sortBy,
	onSortByChange,
	orderBy,
	onOrderByChange,
}) => {
	let [toggleSort, setToggleSort] = useState(false);
	return (
		<div className="py-5">
			<div className="mt-1 relative rounded-md shadow-sm">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<BiSearch />
					<label htmlFor="query" className="sr-only" />
				</div>
				<input
					type="text"
					name="query"
					className="w-full py-3 bg-gray-100 rounded pl-10 focus:outline-none text-sm leading-none text-gray-600 placeholder-gray-600"
					id="query"
					value={query}
					onChange={(event) => {
						onQueryChange(event.target.value);
					}}
					placeholder="Search"
				/>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<div>
						<button
							type="button"
							onClick={() => {
								setToggleSort(!toggleSort);
							}}
							className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
							id="options-menu"
							aria-haspopup="true"
							aria-expanded="true"
						>
							Sort By <BiCaretDown className="ml-2" />
						</button>
						<DropDown
							toggle={toggleSort}
							sortBy={sortBy}
							onSortByChange={(mySort) => onSortByChange(mySort)}
							orderBy={orderBy}
							onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
