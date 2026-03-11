import React, { useEffect, useRef } from 'react';
//  i guess this google service is paid one .. so will think about it later
const AddressInput = () => {
    const autocompleteInputRef = useRef(null);
    const autocomplete = useRef(null);

    useEffect(() => {
        // Initialize Google Places Autocomplete
        autocomplete.current = new window.google.maps.places.Autocomplete(
            autocompleteInputRef.current,
            { types: ['geocode'] } // Specify the type of place data to return.
        );

        // Add listener for the place_changed event
        autocomplete.current.addListener('place_changed', handlePlaceSelect);
    }, []);

    const handlePlaceSelect = () => {
        // Get the place details from the autocomplete object.
        const place = autocomplete.current.getPlace();
        console.log(place); // Do something with the selected place details
    };

    return <input ref={autocompleteInputRef} type="text" placeholder="Enter your address" />;
};

export default AddressInput;
