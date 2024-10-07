import { MapPin, SquareSquare, Tag } from 'lucide-react';
import { useState } from 'react';
import chats from '~/data/chats.json';

export default function ChatNav() {
	const [chatId, setChatId] = useState('aabb7c2c-9e56-44f4-8458-f567f26ecd45');
	const activeChat = chats.find((chat) => {
		return chat.id === chatId;
	});
	if (!activeChat) {
		return null;
	}
	return (
		<section className="flex space-x-12 mb-20">
			<div className="max-w-96">
				<div className="text-xl font-bold mt-12 mb-4">Next Conversation</div>
				<div
					className="rounded bg-white/50 p-4 border border-neutral-300 select-none cursor-pointer hover:border-neutral-500"
					onClick={() => {
						setChatId(chats[0].id);
					}}
				>
					<div className="truncate">{chats[0].title}</div>
					<div className="text-neutral-500 text-sm">{chats[0].date}</div>
				</div>

				<div className="text-xl font-bold mt-12 mb-4">Past Conversations</div>
				<div className="space-y-2">
					{chats.slice(1, chats.length).map((chat) => {
						return (
							<div
								key={chat.id}
								className="rounded bg-white/50 p-4 border border-neutral-300 select-none cursor-pointer hover:border-neutral-500"
								onClick={() => {
									setChatId(chat.id);
								}}
							>
								<div className="truncate">{chat.title}</div>
								<div className="text-neutral-500 text-sm">{chat.date}</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-full">
				<div className="text-xl font-bold mt-12 mb-4">{activeChat.title}</div>
				<div className="mt-4 rounded bg-white/60 p-4 border border-neutral-300 flex flex-col">
					<div className="flex-1 overflow-y-scroll p-4 min-h-[500px] max-h-[500px]">
						{!activeChat.messages.length && (
							<div className="text-center max-w-screen-sm flex flex-col m-auto mt-24 text-neutral-500">
								<div className="text-2xl font-bold">
									Our next conversation is coming soon! <br />
									Return on {activeChat.date} to join.
								</div>
								<div className="underline text-lg my-8">
									Click to get a reminder email
								</div>
							</div>
						)}
						{activeChat.messages.map((msg) => (
							<div key={msg.timestamp} className="flex items-start mb-4">
								<div className="mr-3">
									<div className="bg-stone-500 h-8 w-8 flex items-center justify-center rounded-full text-white font-bold uppercase">
										{msg.userName.split(' ')[1].charAt(0)}
									</div>
								</div>
								<div>
									<div className="flex items-center">
										<span className="font-semibold text-gray-900 mr-2">
											{msg.userName}
										</span>
										<span className="text-xs text-gray-500">
											{msg.timestamp}
										</span>
									</div>
									<div className="mt-1 text-gray-800">{msg.message}</div>
								</div>
							</div>
						))}
					</div>
					<div className="p-4">
						<input
							disabled
							type="text"
							placeholder="Type a message..."
							className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
