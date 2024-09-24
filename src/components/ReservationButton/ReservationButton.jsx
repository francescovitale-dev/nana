import React from 'react'
import { useTranslation } from 'react-i18next';
import './ReservationButton.css';

const ReservationButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='reservation__widget'>
        <a className='book-button' href="https://www.opentable.de/restref/client/?rid=372405&restref=372405&lang=de-DE&color=1&r3uid=cfe&dark=false&partysize=2&datetime=2024-09-24T19%3A00&ot_source=Restaurant%20website&corrid=6e7a0bea-f43b-419b-a0d0-b42b1bbfd097" target='blank'>
          {t('header.bookButton')}
        </a>
      </div>
    </>
  )
}

export default ReservationButton