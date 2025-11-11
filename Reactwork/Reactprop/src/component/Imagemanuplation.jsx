import React, { useState } from 'react';
import cat from './mypic.jpg';

function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(250);
    const [catWidth, setCatWidth] = useState(250);
    const [colors, setColors] = useState({
        red: 100,
        green: 150,
        blue: 200
    });

    const [imageAngle, setImageAngle] = useState(0);

    function increaseWidth() {
        setCatWidth(catWidth + 20);
    }
    function decreaseWidth() {
        setCatWidth(catWidth - 20);
    }

    function manipulateColor(colorName, sign) {
        setColors(prevColors => {
            const newColors = { ...prevColors };
            const change = sign === '-' ? -Math.floor(Math.random() * 255) : Math.floor(Math.random() * 255);
            let newValue = newColors[colorName] + change;
            if (newValue < 0) newValue = 0;
            if (newValue > 255) newValue = 255;

            newColors[colorName] = newValue;
            return newColors;
        });
    }

    function rotateImage(sign) {
        if (sign === '-') {
            setImageAngle(imageAngle - 30);
        } else {
            setImageAngle(imageAngle + 30);
        }
    }

    return (
        <>
            <div style={{
                border: '2px solid black',
                height: '480px',
                width: '350px',
                alignContent: 'center',
                justifyContent: 'center',
                paddingLeft: '100px',
            }}>
                <div>
                    <img
                        src={cat}
                        height={catHeight}
                        width={catWidth}
                        style={{
                            backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
                            transform: `rotate(${imageAngle}deg)`
                        }}
                    />
                </div>
            </div>
            <div>
                <h1>Controls</h1>

                <button onClick={() => {
                    setCatHeight(catHeight + 20);
                }}> Increase height </button>
                <button onClick={() => {
                    setCatHeight(catHeight - 20);
                }}> Decrease height </button>

                <button onClick={increaseWidth}> Increase width </button>
                <button onClick={decreaseWidth}> Decrease width </button>

                <h1>Color Controls randoml (RGB)</h1>
                <div style={{
                    display: 'flex', flexDirection: 'row', gap: '10px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
                        <button onClick={() => manipulateColor("red", "+")}>+</button>
                        <div> red {colors.red}</div>
                        <button onClick={() => manipulateColor("red", "-")}>-</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
                        <button onClick={() => manipulateColor("green", "+")}>+</button>
                        <div> green {colors.green}</div>
                        <button onClick={() => manipulateColor("green", "-")}>-</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
                        <button onClick={() => manipulateColor("blue", "+")}>+</button>
                        <div> blue {colors.blue}</div>
                        <button onClick={() => manipulateColor("blue", "-")}>-</button>
                    </div>
                </div>

                <h1>Image Rotate Control</h1>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
                        <button onClick={() => rotateImage("-")}>left</button>
                        <div> rotate {imageAngle}</div>
                        <button onClick={() => rotateImage("+")}>right</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageManipulation;