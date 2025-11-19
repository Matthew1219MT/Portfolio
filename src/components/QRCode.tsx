import './QRCode.css';

const QRCode = () => {
    return (
        <div className="QR-code-container">
            Scan me to see this portfolio !!!
            <img src={`${process.env.PUBLIC_URL}/resources/QRCode.png`} alt="QR code of portfolio"></img>
        </div>
    );
}

export default QRCode;