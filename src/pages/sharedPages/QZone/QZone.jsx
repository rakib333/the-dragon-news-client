import pic1 from '../../../assets/qZone1.png';
import pic2 from '../../../assets/qZone2.png';
import pic3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary p-3 text-center mt-4'>
            <img className='img-fluid' src={pic1} alt="" />
            <img className='img-fluid' src={pic2} alt="" />
            <img className='img-fluid' src={pic3} alt="" />
        </div>
    );
};

export default QZone;