import CloseIcon from "@/Components/UI/CloseIcon";

const ImageModal2 = ({ updateAvatar, closeModal }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            updateAvatar(file);
            closeModal();
        }
    };

    return (
        <div
            className="relative z-50"
            aria-labelledby="upload-image-dialog"
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full justify-center px-2 py-12 text-center">
                    <div className="relative w-[95%] sm:w-[80%] min-h-[60vh] max-w-[400px] rounded-2xl bg-gray-200 dark:bg-gray-700 text-slate-100 text-left shadow-xl transition-all">
                        <div className="px-5 py-4">
                            <button
                                type="button"
                                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 dark:hover:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-400 focus:outline-none absolute top-2 right-2"
                                onClick={closeModal}
                            >
                                <span className="sr-only">Close menu</span>
                                <CloseIcon />
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border-0 file:text-xs dark:file:bg-indigo-950 file:bg-gray-700 file:text-sky-400 dark:file:text-sky-200 hover:file:bg-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageModal2;
