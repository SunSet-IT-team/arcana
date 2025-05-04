import './styles.scss';

export const LoadingSpinner = ({small = false}) => (
    <div className={`spinner ${small ? 'spinner--small' : ''}`}>
        <div className="spinner__inner"></div>
    </div>
);
