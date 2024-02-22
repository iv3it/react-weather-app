import '../styles/loading.scss'

const Loading = () => {
  return ( 
    <>
    <div className='loading'>
      <div className='loading__box'>
        <div className='loading__box__dot'></div>
        <div className='loading__box__dot'></div>
        <div className='loading__box__dot'></div>
      </div>
    </div>
    </>
  );
}

export default Loading;