import React from 'react';
import Title from '../../components/Title';

const PriceDetails = () => {

    const ListItemContainer = (props) => {
        const {children} = props;
        return (
            <div className='flex flex-row justify-between text-neutral-600'>
                {children}
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-2 pb-4'>
            <Title title='Price details' fontSize='text-xl' />
            <ListItemContainer>
                <div>$400 x 2 nights</div>
                <div>$800</div>
            </ListItemContainer>
            <ListItemContainer>
                <div>Cleaning fee</div>
                <div>$150</div>
            </ListItemContainer>
            <ListItemContainer>
                <div>Service fee</div>
                <div>$150</div>
            </ListItemContainer>
            <ListItemContainer>
                <div>Taxes and fees</div>
                <div>$67</div>
            </ListItemContainer>
            <hr/>
            <ListItemContainer>
                <div>Total</div>
                <div>$1320</div>
            </ListItemContainer>
        </div>
    )
}

export default PriceDetails;
