import { faker } from '@faker-js/faker';
import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import CardDis from '../components/CardDis';
import { useFormik } from 'formik';
import CustomDialog from '../components/CustomDialog';



const Home = () => {
  const [mails, setMails] = useState([]);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: ''

    },
    onSubmit: (val) => {
      setMails((prev) => [...prev, faker.internet.email()]);

    }
  });
  const toggle = () => {
    setShow((prev) => !prev);

  }
  const removeMail = () => {
    mails.splice(index, 1);
    setMails((prev) => [...prev]);
  }


  return (
    <div className='p-4'>
      <form onSubmit={formik.handleSubmit}>
        <Input
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          size="lg"
          placeholder="name@mail.com"
          label='Email'
        />
        <Button type='submit'>submit</Button>

      </form>
      {mails.map((mail, i) => {
        return <div key={i} className='flex gap-2 mb-2'>
          <h1>{mail}</h1>
          <Button onClick={() => {
            setIndex(() => i);
            toggle();

          }} size='sm' color='pink'>Delete</Button>
        </div>
      })}

      <CustomDialog show={show} setShow={toggle} removeMail={removeMail} />

    </div>
  )
}

export default Home