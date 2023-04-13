import { Dispatch, SetStateAction } from 'react';
import './BackButton.css';
interface BackButtonProps {
    backIcon: string
    setCardPage: Dispatch<SetStateAction<{}>>
}

const BackButton = ({backIcon, setCardPage} : BackButtonProps) => {
    return (
        <div className="BackButton" onClick={() => setCardPage({test:"ee"})}>
            <img src={backIcon} alt="Back Icon" />
            <span>Back</span>
        </div>
    )
}

export default BackButton