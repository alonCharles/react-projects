import { useState } from 'react';
import QRCode from 'react-qr-code';


export default function QRGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateCode = () => {
        setQrCode(input)
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="enter value here" value={input}/>
                <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateCode}>Generate</button>
            </div>
            <QRCode
                id='qr-code-value'
                value={qrCode}
                size={400}
                bgColor='#fff'
            />
        </div>
    )
}