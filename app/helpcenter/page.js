import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Title from '@/components/Title.js';
import Button from '@mui/material/Button';

const helpDescription = [
    {
        title: 'Find your reservation status as a guest',
        content: 'Your reservation status keeps you updated on all kinds of things, such as whether you\'re confirmed or need to do something like verify your ID or leave a review. You can find your reservation status by following these steps.'
    },
    {
        title: 'If your reservation isn’t confirmed',
        content: 'For Instant Book listings, your reservation is automatically confirmed. If you sent the Host a reservation request, they have 24 hours to respond. If they decline or don’t respond, no worries: You won’t be charged and are free to book a different stay. Either way, be sure your account is up to date with valid payment information and your verified ID. (Some Hosts require it.).'
    },
    {
        title: 'How cancellations work',
        content: 'If you’ve booked a place where there’s a more strict cancellation policy, you could also consider changing your dates instead. Just put in a change request to the Host and any difference in price will be shown before you confirm the request. You could also message the Host as well, to let them know more about your circumstance and why you’re changing the reservation.'
    },
    {
        title: 'What if something comes up during your stay',
        content: 'If something is missing, broken, or not what you expected when you arrive or during your stay, let your Host know as soon as possible. If your Host can’t help resolve the issue, we’re here to support you. Keep in mind that to be eligible for assistance through AirCover, you must report any issue to Airbnb within 72 hours of discovering it.'
    },
    {
        title: 'What if your Host cancels',
        content: 'In rare cases a Host might need to cancel your reservation. If this does happen, don’t worry—we’ll get your refund on its way and can help you find a similar or better home to rebook.'
    },
    {
        title: 'How to receive your refund',
        content: 'While we don’t want to keep you waiting, the amount and timing of your refund depends on your reservation’s cancellation policy and when you cancel (unless you had an extenuating circumstance). Be sure to check your reservation for this info. The good news is if you’re eligible for a refund, you’ll get it automatically within 10 days to the payment method used when you booked the reservation.'
    },
    {
        title: 'When you’ll get your refund',
        content: 'If you’re eligible for a refund, we\'ll send your refund as soon as you cancel, to the payment method you used when you booked the reservation. Your bank or credit card issuer may take longer to get it to you. It all depends on how you paid, when you paid, and where you live.'
    },
    {
        title: 'How you’ll get your refund',
        content: 'In many cases, you’ll notice both a payment charge and a separate refund amount on your payment method. If you cancel within the first 24 hours after booking, we may not have charged your payment quite yet and only placed a hold on your payment method. In this case, we’ll simply remove the payment hold, which is often an invisible backend process.'
    },
    {
        title: 'Setting up your account',
        content: 'Whether a Host, guest, or Airbnb is trying to reach you, it’s important to keep your account updated. Once you’re logged in, go to your Account to edit things like your email address or phone number. Note that some of this account info will be public (like your picture or first name), but we won’t share things like your government ID, payment info, or email address.'
    },
]

const HelpCenterScreen = () => {
    return (
        <div className='min-h-screen flex flex-col items-center'>
            <Title title='Help Center' />
            <div className='w-3/5'>
                {
                    helpDescription.map((item, index) => {
                        return (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    {item.title}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {item.content}
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HelpCenterScreen;
