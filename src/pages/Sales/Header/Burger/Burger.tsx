import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../../../components/Button/Button';
import SocialLink from '../../../../components/SocialLink/SocialLink';
import TextField from '@mui/material/TextField';
import { isValidEmail } from '../../../../components/helpers/ValidEmail';

import {
  Container,
  Content,
  FromContainer,
  SocialContainer,
  Heading,
  Title,
  EmailTtitle,
  BtnContainer,
  Unsubscribe,
} from './styled';
import { SxStyles } from '../../../../components/helpers/TextFieldStyle';

const Burger = () => {
  const [value, setValue] = useState('');
  const [token, setToken] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const obj = {
    grant_type: 'client_credentials',
    client_id: 'bc9deb39828c446d1d8b7c7f325ec350',
    client_secret: 'c2e385d03989c7ba2915672ae52b3a6e',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (!isValidEmail(email)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

    setValue(email);
  };

  useEffect(() => {
    axios
      .post('https://api.sendpulse.com/oauth/access_token', obj)
      .then((res) => setToken(res.data.access_token));
  }, []);

  const handleEmail = () => {
    axios
      .post(
        // eslint-disable-next-line quotes
        // `https://api.sendpulse.com/addressbooks/485552/emails`,
        `https://api.sendpulse.com/addressbooks/492794/emails`,
        {
          emails: [value],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((res) => {
        setValue(''), setIsDisabled(true);
      });
  };

  return (
    <Container id="footer">
      <Content>
        <FromContainer>
          <Heading>
            Subscribe <br /> for the news
          </Heading>
          <TextField
            label="Email"
            value={value}
            variant="standard"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            InputLabelProps={{
              style: {
                color: '#fff',
              },
            }}
            sx={SxStyles('#fff')}
          />
          <BtnContainer>
            <Button
              text={'Subscribe'}
              widthBtn={'140px'}
              BgColor={'#fff'}
              color={'#000'}
              clickHandler={() => handleEmail()}
              isDisabled={isDisabled}
            />
            <Unsubscribe>
              <p>Unsubscribe at any time.</p>
            </Unsubscribe>
          </BtnContainer>
        </FromContainer>
        <SocialContainer>
          <p style={{ fontSize: '18px' }}>Write us:</p>
          <EmailTtitle>
            <a href="mailto:mail@qenergyglobal.com">mail@qenergyglobal.com</a>
          </EmailTtitle>
          <SocialLink
            isColorIcon={true}
            title="Or find us online"
            hoverColor={'#000'}
          />
        </SocialContainer>
      </Content>
    </Container>
  );
};

export default Burger;
