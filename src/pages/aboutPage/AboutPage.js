import React, {useEffect, useRef} from 'react';

function AboutPage(props) {
    const elements = useRef([]);

    useEffect(() => {
        elements.current[0].style.color = 'red'
    }, [])

    return (
        <div>
            {
                [1,2,3].map((el, index) => (
                    <div ref={elem => elements.current[index] = elem}>
                        {el}
                    </div>
                ))
            }
        </div>
    );
}

export default AboutPage;