import reactLogo from './assets/react.svg'

export default function Header(){

    return(
        <>
            <header className='header'>
                <div className='logogroup'>
                    <img src={reactLogo} className="logo-react" alt="React logo" />
                    <p className='heading'>ReactFacts</p>
                </div>
                <p className='header-right'>React Course - Project 1</p>
            </header>
        </>
    )
}