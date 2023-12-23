import { Container } from './style';

import { FiPlus, FiX } from 'react-icons/fi'


export function NoteItem({isNew, value, onClick, ...rest}) {
    return (
        <Container $isnew={isNew}>
            <input
                className={ isNew ? 'input-add' : 'input-delete'} 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />
            <button
                type='button'
                onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}