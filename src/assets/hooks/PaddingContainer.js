import {useState, useEffect} from 'react';

function PaddingContainer() {
    const [padding, setPadding] = useState(0);

    useEffect(() => {
        const updatePadding = () => {
            const screenWidth = document.documentElement.clientWidth;
            let newPadding;

            if (screenWidth >= 1920) {
                newPadding = 95;
            } else if (screenWidth >= 1024) {
                newPadding = 82;
            } else if (screenWidth <= 375) {
                newPadding = 15;
            } else {
                newPadding =
                    ((screenWidth - 375) * (95 - 15)) / (1920 - 375) + 15;
            }

            setPadding(newPadding);
        };

        updatePadding();

        window.addEventListener('resize', updatePadding);

        return () => {
            window.removeEventListener('resize', updatePadding);
        };
    }, []);

    return padding;
}

export default PaddingContainer;
