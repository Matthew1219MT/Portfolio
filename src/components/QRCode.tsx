import './QRCode.css';

const QRCode = () => {
    return (
        <div className="QR-code-container">
            <img src={`${process.env.PUBLIC_URL}/resources/QRCode.png`} alt="QR code of portfolio"></img>
        </div>
    );
}

export default QRCode;