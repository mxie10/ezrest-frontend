import PaymentMethod from '../PaymentMethod';
import Title from '../../components/Title';

const SelectPaymentMethodScreen = (props) => {

    const { tripDetails, setTripDetails, step } = props;

    return (
      <div
        className={`
            flex 
            flex-col 
            transition-opacity 
            duration-500 
            ease-in-out 
            gap-3 
            ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}
            mb-6
          `
        }
      >
        <Title title='How would you like to pay?' fontSize='text-2xl' borderBottom />
        <PaymentMethod
          tripDetails={tripDetails}
          setTripDetails={setTripDetails}
        />
      </div>
    )
  }

  export default SelectPaymentMethodScreen;