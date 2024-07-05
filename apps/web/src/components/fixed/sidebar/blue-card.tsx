import { CardIcon } from "../icon/card-icon";

export function BlueCard() {
	return (
		<div className="relative bg-[#3918f8] text-white rounded-2xl mb-5 overflow-hidden">
			<div className="relative z-10 py-5">
				<div className="flex justify-center items-center size-10 bg-background rounded-lg mx-auto mb-4">
					<CardIcon />
				</div>
				<div className="flex justify-center mb-2  font-semibold">
					<span>Conheça a Blue</span>
				</div>
				<div className="flex justify-center items-center">
					<p className="text-center text-xs font-medium mb-4 max-w-52 text-gray-300">
						lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
						tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
					</p>
				</div>
				<div className="flex justify-center">
					<span
						className="z-10 bg-white text-[#2500FF] py-2 px-4 rounded font-bold hover:bg-gray-200 cursor-pointer transition-colors"
						rel="noreferrer"
					>
						Conhecer
					</span>
				</div>
			</div>
		</div>
	);
}
