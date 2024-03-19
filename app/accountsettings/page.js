'use client'
import React, { useState } from 'react'
import Title from '../../components/Title';
import EditLegalNameForm from './EditLegalNameForm';
import EditEmailAddress from './EditEmailAddress';
import EditPhoneNumber from './EditPhoneNumber';
import EditAddress from './EditAddress';
import EditEmergencyContact from './EditEmergencyContact';
import AddPaymentMethodForm from './AddPaymentMethodForm';
import Button from '@/components/Button';

const AccountSettingScreen = () => {

  const [section, setSection] = useState(0);

  const Menu = () => {
    return (
      <div className='flex flex-col gap-4 text-lg text-neutral-700'>
        <div 
          className='cursor-pointer hover:bg-neutral-200 p-2 rounded-lg border-b-2'
          onClick={() => setSection(0)}
        >
          Personal Info
        </div>
        <div 
          className='cursor-pointer hover:bg-neutral-200 p-2 rounded-lg'
          onClick={() => setSection(1)}
        >
          Payment Method
        </div>
      </div>
    )
  }

  const PersonalInfoListItem = (props) => {

    const [showEditSection, setShowEditSection] = useState(false);
    const { title, content, form:EditForm } = props;

    const openEditSection = () => {
      setShowEditSection(true);
    }

    const closeEditSection = () => {
      setShowEditSection(false);
    }

    const Content = (
      <div className={`text-neutral-500 text-md`}>
        {content}
      </div>
    )

    return (
      <div className='pb-2 border-b-2'>
        {/* personal info */}
        <div className={`flex flex-row justify-between`}>
          <div className='flex flex-col gap-1 w-full'>
            <div className=' text-neutral-600'>
              {title}
            </div>
            <div className='w-full'>
              {showEditSection ? <EditForm />: Content}
            </div>
          </div>
          <div 
            className={`${showEditSection ? 'hidden' : 'block'} underline cursor-pointer`} 
            onClick={() => openEditSection()}
          >
            Edit
          </div>
          <div 
            className={`${showEditSection ? 'block' : 'hidden'} underline cursor-pointer`} 
            onClick={() => closeEditSection()}
          >
            Cancel
          </div>
        </div>
      </div>
    )
  }

  const PersonalInfo = () => {
    return (
      <div className='flex flex-col gap-4'>
        <PersonalInfoListItem title='Legal name' content='Kevin Xie' form={EditLegalNameForm}/>
        <PersonalInfoListItem title='Email address' content='xie0928@gamil.om' form={EditEmailAddress}/>
        <PersonalInfoListItem title='Phone number' content='4387772019' form={EditPhoneNumber}/>
        <PersonalInfoListItem title='Address' content='16514 blenham way, Chesterfield, MO, 63005' form={EditAddress}/>
        <PersonalInfoListItem title='Emergency Contact' content='4391118827' form={EditEmergencyContact}/>
      </div>
    )
  }

  const PaymentMethod = () => {

    const [showAddPaymentForm,setShowAddPaymentForm] = useState(false);

    const addPaymentMethod = () => {
      setShowAddPaymentForm(true);
    }

    const cancelAddPaymentMethod = () => {
      setShowAddPaymentForm(false);
    }

    return (
      <div className='flex flex-col gap-2'>
        <div className=' text-neutral-600'>
          Add and manage your payment methods using our secure payment system.
        </div>
        <div className={`${!showAddPaymentForm ? 'block' : 'hidden'}`}>
          <Button 
            title='Add payment method' 
            width='w-1/3' 
            hover='hover:bg-slate-800'
            onClick={addPaymentMethod}
          />
        </div>
        <div className={`${showAddPaymentForm ? 'block' : 'hidden'}`}>
          <AddPaymentMethodForm cancelAddPaymentMethod={cancelAddPaymentMethod}/>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen p-4 flex justify-center'>
      <div className='w-3/5'>
        <Title title='Account Settings' fontSize='text-2xl' borderBottom />
        <div className='flex flex-row gap-10 w-full mt-4'>
          <div className='w-1/4'>
            <Menu />
          </div>
          <div className='w-3/4'>
            {section === 0 ? <PersonalInfo /> : <PaymentMethod/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSettingScreen;
