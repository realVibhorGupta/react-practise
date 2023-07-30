import React from "react";
import { BiAddToQueue, BiAlarmAdd, BiTrash } from "react-icons/bi";

const AppointmentInfo = ({ appointment,onDeleteAppointment }) => {
	return (
		<div>
			<ul className="divide-y divide-gray-400">
				<li className="px-3 py-3 flex flex-row items-start">
					<button
						onClick={() => onDeleteAppointment(appointment)}
						type="button"
						className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						<BiTrash />
					</button>
					<div className="flex-grow">
						<div className="flex items-center">
							<span className="flex-none font-medium text-2xl text-blue-500">
								{appointment.petName}
							</span>
							<span className="flex-grow text-right">
								{appointment.aptDate}
							</span>
						</div>
						<div>
							<b className="font-bold text-blue-500">Owner:</b>{" "}
							{appointment.ownerName}
						</div>
						<div className="leading-tight">{appointment.aptNotes}</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default AppointmentInfo;
