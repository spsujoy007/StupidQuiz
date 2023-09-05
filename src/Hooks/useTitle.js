import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - ষ্টুপিড কুইজ`;
    }, [title])
};

export default useTitle;