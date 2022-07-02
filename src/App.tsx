import './App.css';
import { Greet } from './components/Greet';
import Header from './components/Header';
import { Person } from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Patij from './components/Patij';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import {User as SecondUser} from './components/context/User'
import {UserContextProvider} from './components/context/UserContext'
import { MutableRef } from './components/ref/MutableRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { ButtonWrap } from './components/html/ButtonWrap';
import CustomComponent from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

function App() {
  const personName = {
    first: 'BUĞRA',
    last: 'YILDIZ'
  }

  const nameList = [
    {
      first: "ZUM",
      last: "ZUM"
    },
    {
      first: "BUM",
      last: "BUM"
    },
    {
      first: "DUM",
      last: "DUM"
    }
  ]

  return (
    <div className="App">
      <Header>CHILD</Header>
      <Greet name='Batuhan' count={10} isItTrue ={true} />
      <Person name = {personName} />
      <PersonList nameList = {nameList} />
      <Status status='success' />
      <Patij>
        <Header>KIDDO PATIJ</Header>
      </Patij>
      <Greet isItTrue ={true} />
      <Button handleClick={(event, id) => {
        console.log('Button Clicked: ', event, id)
      }}/>
      <Input value='' handleChange={(event) => console.log(event.target.value)} />
      <Container styles={{border: '1px solid red', padding: '1rem'}} />
      <LoggedIn/>
      <User/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <SecondUser/>
      </UserContextProvider>
      <MutableRef/>
      <Private isLoggedIn={true} component={Profile}/>
      <List
        items={[
          {
            id:1,
            name: 'batu',
          },
          {
            id:2,
            name: 'trying'
          }
        ]}
        onClick= {(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position='center' />
      <Toast position='left-top' />
      <ButtonWrap variant='primary'> Primary Button </ButtonWrap>
      <CustomComponent name='Custom Batu' isItTrue={true} />
      <Text as='h1' size='lg' color='primary' >Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary' >Label</Text>
    </div>
  );
}

export default App;
