import Button from './Components/Button'

import './App.css'

function App() {
    const rowStyle = {
        display: 'flex',
        marginBottom: '5%',
        gap: '50px',
    }

    return (
        <div className='buttonsPanel'>
            <h1>Buttons</h1>

            <div style={rowStyle}>
                <Button>Default</Button>
                <Button>Default</Button>
            </div>

            <div style={rowStyle}>
                <Button variant='outline'>Default</Button>
                <Button variant='outline'>Default</Button>
            </div>

            <div style={rowStyle}>
                <Button variant='text'>Default</Button>
                <Button variant='text'>Default</Button>
            </div>

            <div style={rowStyle}>
                <Button disableShadow>Default</Button>
            </div>

            <div style={rowStyle}>
                <Button disabled>Default</Button>
                <Button variant='text' disabled>
                    Default
                </Button>
            </div>

            <div style={rowStyle}>
                <Button startIcon='face' color='primary'>
                    Default
                </Button>
                <Button endIcon='face'>Default</Button>
                <Button startIcon='face' endIcon='face'>
                    Default
                </Button>
            </div>

            <div style={rowStyle}>
                <Button color='primary' size='sm'>
                    Default
                </Button>
                <Button color='primary' size='md'>
                    Default
                </Button>
                <Button color='primary' size='lg'>
                    Default
                </Button>
            </div>

            <div style={rowStyle}>
                <Button>Default</Button>
                <Button color='primary'>Default</Button>
                <Button color='secondary'>Default</Button>
                <Button color='danger'>Default</Button>
            </div>
        </div>
    )
}

export default App
