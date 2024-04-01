import React, {useEffect, useRef, useState} from 'react';

function MainPage() {

    const blockElementRef = useRef(null);

    const [count, setCount] = useState(0)

    const name = useRef("Anna")

    useEffect(() => {
        console.log(name)

    }, [count])

    const changeBg = () => {
        console.log(blockElementRef)
        // const blockElement = document.getElementById('blockElement')  так делать не надо
        blockElementRef.current.style.backgroundColor = 'red'
    }

    return (
        <div>
            <div className="block" ref={blockElementRef}>
                <h2>{count}</h2>
            </div>
            <button onClick={() => setCount(count + 1)}>+</button>

            <button onClick={changeBg}>change block color</button>

        </div>
    );
}

export default MainPage;