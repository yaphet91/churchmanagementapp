const DropdownMessageItem = ({ userImage, userName, messageText, messageTime }) => {
    return (
        <Link className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="/messages">
            <div className="h-12.5 w-12.5 rounded-full">
                <img src={userImage} alt="User" />
            </div>
            <div>
                <h6 className="text-sm font-medium text-black dark:text-white">{userName}</h6>
                <p className="text-sm">{messageText}</p>
                <p className="text-xs">{messageTime}</p>
            </div>
        </Link>
    );
};


// Inside DropdownMessage component, replace the repeated list items with:

// {/* <ul className="flex h-auto flex-col overflow-y-auto">
//     <DropdownMessageItem userImage={UserTwo} userName="Mariya Desoja" messageText="I like your confidence 💪" messageTime="2min ago" />
//     <DropdownMessageItem userImage={UserOne} userName="Robert Jhon" messageText="Can you share your offer?" messageTime="10min ago" />
//     <DropdownMessageItem userImage={UserThree} userName="Henry Dholi" messageText="I came across your profile and..." messageTime="1day ago" />
//     <DropdownMessageItem userImage={UserFour} userName="Cody Fisher" messageText="I’m waiting for your response!" messageTime="5days ago" />
//     {/* Add more DropdownMessageItem as needed */}
// </ul> */}
